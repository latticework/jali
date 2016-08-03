import 'reflect-metadata';

import * as glob_fs from 'glob-fs';
import * as path from 'path';
import * as appRoot from 'app-root-path';

import Example from './example';
import ExampleRunnerOptions from './example-runner-options';
import ExampleContext from './example-context';

export default class ExampleRunner {
  public readonly options: ExampleRunnerOptions;

  public constructor(options: ExampleRunnerOptions) {
    this.options = {
      console: options.console || global.console,
      include: options.include || path.resolve(this.options.rootDir, './**/*.example.js'),
      indent: options.indent || 2,
      outDir: options.outDir,
      rootDir: options.rootDir,
      typeScriptDir: options.typeScriptDir || options.rootDir,
    }
  }

  public run(): void {
    const glob = glob_fs({gitignore: true/*, realpath: true*/});

    console.log(`include: '${this.options.include}'`);
    console.log(`outDir: '${this.options.outDir}'`);
    console.log(`rootDir: '${this.options.rootDir}'`);
    console.log(`typeScriptDir: '${this.options.typeScriptDir}'`);

    const files = glob.readdirSync(this.options.include);

    for (const filePath of files) {
      console.log();
      console.log(`filePath: '${filePath}'`);

      const sourceFileName = appRoot.resolve(filePath);
      console.log(`sourceFileName: '${sourceFileName}'`);

      // From https://github.com/esnext/es6-module-transpiler/issues/85
      const cls = (require(sourceFileName)).default;

      const classMetadata = Example.getMetadata(cls);

      if (classMetadata) {
        const obj = new cls();

        const ctx = new ExampleContext(
          obj, undefined, sourceFileName, this.options.indent, this.options.console);

        Class.logContext(0, ctx);

        // From http://stackoverflow.com/a/35033472/2240669
        // and http://stackoverflow.com/a/31055009/2240669
        const methodNames = Object.getOwnPropertyNames(cls.prototype)
          .filter((name) => name !== 'constructor' && typeof obj[name] === 'function');

        for (const methodName of methodNames) {

          const methodMetadata = Example.getMetadata(obj, methodName);

          if (methodMetadata) {
            const fn = obj[methodName];

            const ctx = new ExampleContext(
              obj, fn, sourceFileName, this.options.indent, this.options.console);

            Class.logContext(1, ctx);
            fn(ctx);
          }
        }
      }
    }
  }

  private static logContext(depth: number, ctx: ExampleContext): void {
    const metadata = ctx.metadata;

    const name = ctx.fn ? ctx.fn.name : ctx.obj.constructor.name;
    const description = metadata.member
      ? `Examples for type ${metadata.type ? `'${metadata.type}' `: ''} member '${metadata.member}'`
      : metadata.type
      ? `Examples for type '${metadata.type}'`
      : metadata.module
      ? `Examples for package ${metadata.pkg ? `'${metadata.pkg}' ` : ''} submodule ` +
        `'${metadata.module}'`
      : metadata.pkg
      ? `Examples for package '${metadata.pkg}'`
      : undefined;

    const message = description ? `${name}: ${description}` : `Examples in ${name}`;

    ctx.logIndented(depth, message)
  }
}
const Class = ExampleRunner;