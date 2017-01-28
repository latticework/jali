// cSpell:ignore readdir ᴇxᴀᴍᴩʟᴇ ᴏᴜᴛᴩᴜᴛ

import 'reflect-metadata';

import * as path from 'path';
import * as fs from 'fs';
import { EOL } from 'os';

import * as appRoot from 'app-root-path';
import * as glob_fs from 'glob-fs';
import * as ts from 'typescript';

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
      width: options.width || 80,
    }
  }

  public run(): boolean {
    const glob = glob_fs({gitignore: true/*, realPath: true*/});

    const errors: string[] = [];

    const mdDir = appRoot.resolve(this.options.mdDir) as string;
    const rootDir = Class.validatePathAndGetAbsolute(this.options.rootDir, 'rootDir', errors);
    const tsDir = Class.validatePathAndGetAbsolute(this.options.tsDir as string, 'tsDir', errors);

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


  private static getFileSource(tsPath: string): ts.SourceFile {
    const source = fs.readFileSync(tsPath, {
      encoding: 'utf8',
    });

    const { base } = path.parse(tsPath);

    return ts.createSourceFile(base, source, ts.ScriptTarget.Latest, true);
  }

  private static *getFnContexts(clsCtx: ExampleContext): Iterable<ExampleContext> {
    // // From http://stackoverflow.com/a/35033472/2240669
    // // and http://stackoverflow.com/a/31055009/2240669
    // const methodNames = Object.getOwnPropertyNames(cls.prototype)
    const methodNames = Object.getOwnPropertyNames(clsCtx.obj.constructor.prototype)
      .filter((name) => name !== 'constructor' && typeof (clsCtx.obj as any)[name] === 'function');

    for (const methodName of methodNames) {
      const methodMetadata = Example.getMetadata(clsCtx.obj, methodName);

      if (methodMetadata) {
        const fn = (clsCtx.obj as any)[methodName];

        let errors: string[] = [];

        const methodSource = Class.getMethodSource(
          (clsCtx.clsSource as ts.ClassDeclaration), methodName, errors);

        if (!methodSource) {
          clsCtx.log(errors.join(EOL));
          return false;
        }

        if (!methodSource.body) {
          continue;
        }

        const fnCtx = new ExampleContext(
          clsCtx.filePath,
          clsCtx.obj,
          fn,
          clsCtx.fileSourceText,
          clsCtx.fileSource,
          clsCtx.clsSource,
          methodSource,
          clsCtx.indent,
          clsCtx.width,
          clsCtx.console);

        yield fnCtx;
      }
    }
  }

  private static mapFilePath(
      file: string, rootDir: string, tsDir: string, mdDir: string, errors: string[]): FilePath | undefined {
    const jsPath = Class.validatePathAndGetAbsolute(file, 'include', errors, rootDir);
    const fileFragment = jsPath.substr(rootDir.length + 1);
    const fragments = path.parse(fileFragment);

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

    return filePath;
  }

  private static validatePath(path: string, name: string, errors: string[]): void {
    try {
      fs.accessSync(path, fs.constants.R_OK);
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

  private static getClassSource(
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

  private static getMethodName(method: ts.MethodDeclaration): string | undefined {
    return (method.name.kind === ts.SyntaxKind.Identifier)
      ? (method.name as ts.Identifier).text
      : undefined;
  }

  private static getMethodSource(cls: ts.ClassDeclaration, name: string, errors: string[])
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

  private processFile(filePath: FilePath): boolean {
    // From https://github.com/esnext/es6-module-transpiler/issues/85
    const cls = (require(filePath.jsPath)).default;

    const classMetadata = Example.getMetadata(cls);

    if (classMetadata) {
      const obj = new cls();

      const fileSourceText = fs.readFileSync(filePath.tsPath, {
        encoding: 'utf8',
      });

      const fileSource = Class.getFileSource(filePath.tsPath);

      const errors: string[] = [];
      const clsSource = Class.getClassSource(filePath.tsPath, fileSource, obj.constructor.name, errors)

      const clsCtx = new ExampleContext(
        filePath,
        obj,
        undefined,
        fileSourceText,
        fileSource,
        clsSource,
        undefined,
        this.options.indent,
        this.options.width,
        this.options.console);

      clsCtx.logHeader();

      if (!clsSource) {
        clsCtx.log(errors.join(EOL));
        return false;
      }

      let firstFunction = true;
      let noErrors = true;

      for (const fnCtx of Class.getFnContexts(clsCtx)) {
        if (firstFunction) {
          firstFunction = false;
        }
        else {
          fnCtx.log();
        }
        noErrors = noErrors && this.processFunction(fnCtx);
      }

      return noErrors;
    }

    return true;
  }

  private processFunction(fnCtx: ExampleContext): boolean {
    fnCtx.logHeader();

    // Do not use header (i.e., '###') or it will show up in the esdoc navigation bar.
    fnCtx.log('**ᴇxᴀᴍᴩʟᴇ**');
    fnCtx.log();
    fnCtx.log('```typescript');

    const body = (fnCtx.fnSource as ts.MethodDeclaration).body;

    fnCtx.log(fnCtx.fileSourceText.substring(body!.pos, body!.end)
      .replace(/\r?\n/g, EOL));

    fnCtx.log('```');
    fnCtx.log();
    // Do not use header (i.e., '###') or it will show up in the esdoc navigation bar.
    fnCtx.log('<br>**ᴏᴜᴛᴩᴜᴛ**');
    fnCtx.log();
    fnCtx.log('```text');
    (fnCtx.fn as Function)(fnCtx);
    fnCtx.log('```');

    return true;
  }
}
const Class = ExampleRunner; // tslint:disable-line:variable-name
