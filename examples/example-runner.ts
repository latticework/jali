import 'reflect-metadata';

import * as path from 'path';
import * as fs from 'fs';
import { EOL } from 'os';

import * as appRoot from 'app-root-path';
import * as glob_fs from 'glob-fs';
import * as ts from 'typescript';
//import * as tmp from 'tmp';

import Example from './example';
import ExampleRunnerOptions from './example-runner-options';
import ExampleContext from './example-context';
import FilePath from './file-path';

export default class ExampleRunner {
  public readonly options: ExampleRunnerOptions;

  public constructor(options: ExampleRunnerOptions) {
    this.options = {
      console: options.console || global.console,
      include: options.include || path.resolve(this.options.rootDir, './**/*.example.js'),
      indent: options.indent || 2,
      mdDir: options.mdDir,
      rootDir: options.rootDir,
      tsDir: options.tsDir || options.rootDir,
    }
  }

  public run(): boolean {
    const glob = glob_fs({gitignore: true/*, realpath: true*/});

    console.log(`include: '${this.options.include}'`);
    console.log(`mdDir: '${this.options.mdDir}'`);
    console.log(`rootDir: '${this.options.rootDir}'`);
    console.log(`tsDir: '${this.options.tsDir}'`);

    const errors: string[] = [];

    const mdDir = appRoot.resolve(this.options.mdDir) as string;
    const rootDir = Class.validatePathAndGetAbsolute(this.options.rootDir, 'rootDir', errors);
    const tsDir = Class.validatePathAndGetAbsolute(this.options.tsDir as string, 'tsDir', errors);

    console.log(`Full mdDir: '${mdDir}'`);
    console.log(`Full rootDir: '${rootDir}'`);
    console.log(`Full tsDir: '${tsDir}'`);


    // const tempDirName = sanitize(rootDir);

    // const tempDir = tmp.dirSync({
    //   prefix: `example-runner_${tempDirName}_`,
    // });

    const files = glob.readdirSync(this.options.include) as string[];

    const filePaths: (FilePath | undefined)[] = files.map(f => Class.mapFilePath(
      f, rootDir, tsDir, mdDir, errors));

    if (errors.length > 0) {
      console.log(errors.join(EOL));
      return false;
    }

    let hasErrors = false;
    for (const filePath of filePaths) {
      if (!filePath) {
        continue;
      }
      const localHasErrors = this.processFile(filePath);

      hasErrors = hasErrors || localHasErrors;
    }

    return hasErrors;
  }

  private static mapFilePath(
      file: string, rootDir: string, tsDir: string, mdDir: string, errors: string[]): FilePath | undefined {
    const jsPath = Class.validatePathAndGetAbsolute(file, 'include', errors, rootDir);
    const fileFragment = jsPath.substr(rootDir.length + 1);
    const fragments = path.parse(fileFragment);

    console.log('Fragments: ' + JSON.stringify(fragments, undefined, 2));

    const tsPath = path.join(tsDir, fragments.dir, fragments.name + ".ts");
    Class.validatePath(tsPath, 'TypeScript file', errors);

    if (errors.length > 0) {
      return undefined;
    }

    const mdFilePrefix = path.resolve(mdDir, fragments.dir);

    const filePath: FilePath = {
      jsPath: jsPath,
      tsPath: tsPath,
      mdRootDir: mdFilePrefix,
    };

    console.log('FilePath: ' + JSON.stringify(filePath, undefined, 2));

    return filePath;
  }

  private static validatePath(path: string, name: string, errors: string[]): void {
    try {
      fs.accessSync(path, fs.R_OK);
    }
    catch (err) {
      errors.push(`Cannot access '${name}' path '${path}'`);
    }
  }

  private static validatePathAndGetAbsolute(
      path: string, name: string, errors: string[], root?: string): string {
    const full = appRoot.resolve(path) as string;

    this.validatePath(full, name, errors);

    if (root &&
        (full.length < root.length ||
         full.toUpperCase().substr(0, root.length) != root.toUpperCase())) {
      errors.push(`Path for '${name}' of ${full} does not have specified path root '${root}'`);
    }

    return full;
  }

  private static logContext(depth: number, ctx: ExampleContext): void {
    const metadata = ctx.metadata;

    const name = ctx.fn ? ctx.fn.name : ctx.obj.constructor.name;
    const description = metadata.member
      ? `Examples for type ${metadata.type ? `'${metadata.type}' `: ''}member '${metadata.member}'`
      : metadata.type
      ? `Examples for type '${metadata.type}'`
      : metadata.module
      ? `Examples for package ${metadata.pkg ? `'${metadata.pkg}' ` : ''}submodule ` +
        `'${metadata.module}'`
      : metadata.pkg
      ? `Examples for package '${metadata.pkg}'`
      : undefined;

    const message = description ? `${name}: ${description}` : `Examples in ${name}`;

    ctx.logIndented(depth, message)
  }

  private static getSource(tsPath: string): ts.SourceFile {
    const source = fs.readFileSync(tsPath, {
      encoding: 'utf8',
    });

    const { base } = path.parse(tsPath);

    return ts.createSourceFile(base, source, ts.ScriptTarget.Latest, true);
  }

  private static getClassDeclaration(
    tsPath: string, sourceFile: ts.SourceFile, clsName: string, errors: string[])
      : ts.ClassDeclaration | undefined {
    const fileChildren = sourceFile.getChildren();

    if (fileChildren.length === 0) {
      errors.push(`Example file '${tsPath}' has no children.`);
      return undefined;
    }


    const syntaxList = fileChildren[0];
    if (syntaxList.kind !== ts.SyntaxKind.SyntaxList) {
      errors.push(`Example file '${tsPath}' child is not a 'SyntaxList'.`);
      return undefined;
    }


    const clsDeclaration = syntaxList.getChildren().find(n =>
      n.kind === ts.SyntaxKind.ClassDeclaration &&
      Class.getClassName((n as ts.ClassDeclaration)) === clsName) as ts.ClassDeclaration;

    return clsDeclaration;
  }

  private static getClassName(cls: ts.ClassDeclaration): string | undefined {
    const classIdentifier = cls.name as ts.Identifier;

    if (classIdentifier === undefined) {
      return undefined;
    }

    if (classIdentifier.kind !== ts.SyntaxKind.Identifier) {
      return undefined;
      //const kind = ts.SyntaxKind[classIdentifier.kind];
      //throw new Error(`Class name as pos '${classIdentifier.pos}' must be 'Identifier'. Yours is '${kind}'`);
    }

    return classIdentifier.text;
  }

  private static getMethodDeclaration(cls: ts.ClassDeclaration, name: string, errors: string[])
      : ts.MethodDeclaration | undefined {
    const memberLists = cls.getChildren().filter(n =>
      n.kind  === ts.SyntaxKind.SyntaxList &&
      n.getChildren().some(n => n.kind === ts.SyntaxKind.MethodDeclaration));

    if (memberLists.length === 0) {
      errors.push(`Example class '${Class.getClassName(cls)}' does not have any methods`);
      return undefined;
    }

    if (memberLists.length > 1) {
      errors.push(`INTERNAL ERROR: Example class '${Class.getClassName(cls)}' cannot be parsed: 'Description: Multiple SyntaxLists'`);
      return undefined;
    }

    const methods = memberLists[0].getChildren().filter(
      n => n.kind === ts.SyntaxKind.MethodDeclaration) as ts.MethodDeclaration[];

    const method = methods.find(m => Class.getMethodName(m) === name);

    if (!method) {
      errors.push(`Example class '${Class.getClassName(cls)}' does not have a method '${name}'`);
      return undefined;
    }

    return method;
  }

  private static getMethodName(method: ts.MethodDeclaration): string | undefined {
    return (method.name.kind === ts.SyntaxKind.Identifier)
      ? (method.name as ts.Identifier).text
      : undefined;
  }

  private processFile(filePath: FilePath): boolean {
    console.log();
    console.log(`jsPath: '${filePath.jsPath}'`);
    console.log(`tsPath: '${filePath.tsPath}'`);
    console.log(`mdRootDir: '${filePath.mdRootDir}'`);

    // From https://github.com/esnext/es6-module-transpiler/issues/85
    const cls = (require(filePath.jsPath)).default;

    const classMetadata = Example.getMetadata(cls);

    if (classMetadata) {
      const obj = new cls();

      const clsCtx = new ExampleContext(
        filePath, obj, undefined, this.options.indent, this.options.console);

      Class.logContext(0, clsCtx);

      const sourceText = fs.readFileSync(filePath.tsPath, {
        encoding: 'utf8',
      });

      const source = Class.getSource(filePath.tsPath);

      const errors: string[] = [];

      const clsSource = Class.getClassDeclaration(filePath.tsPath, source, obj.constructor.name, errors)

      if (!clsSource) {
        clsCtx.log(errors.join(EOL));
        return false;
      }

      let hasErrors = false;

      // From http://stackoverflow.com/a/35033472/2240669
      // and http://stackoverflow.com/a/31055009/2240669
      const methodNames = Object.getOwnPropertyNames(cls.prototype)
        .filter((name) => name !== 'constructor' && typeof obj[name] === 'function');

      for (const methodName of methodNames) {
        const methodMetadata = Example.getMetadata(obj, methodName);

        if (methodMetadata) {
          const fn = obj[methodName];

          const fnCtx = new ExampleContext(
            filePath, obj, fn, this.options.indent, this.options.console);

          let errors: string[] = [];
          const methodSource = Class.getMethodDeclaration(clsSource, methodName, errors);

          if (!methodSource) {
            fnCtx.log(errors.join(EOL));
            hasErrors = true;
            continue;
          }

          if (!methodSource.body) {
            continue;
          }

          Class.logContext(1, fnCtx);
          fnCtx.log('```typescript');

          fnCtx.log(sourceText.substring(methodSource.body.pos, methodSource.body.end)
            .replace(/\r?\n/g, EOL));

          fnCtx.log('```');


          methodSource.body.pos

          fnCtx.log('```typescript');
          fn(fnCtx);
          fnCtx.log('```');
        }
      }

      return hasErrors;
    }

    return true;
  }
}
const Class = ExampleRunner;