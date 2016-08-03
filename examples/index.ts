// import * as path from 'path';

import ExampleRunner from './example-runner';


const runner = new ExampleRunner({
  console: global.console,
  include: './dist/examples/**.example.js',
  rootDir: './dist/examples',
  outDir: './dist/docs/examples',
  typeScriptDir: './examples'
})

runner.run();


// import * as fs from 'fs';
// import * as path from 'path';

// import LogOptions from './log-options';

// import UtilExamples from './packages/util.example'

// import * as ts from 'typescript';

// // TODO: START HERE.
// function getClassDecorators(cls: ts.ClassDeclaration): ts.Decorator[] {
//   const classSyntaxLists = cls.getChildren().filter(n =>
//     n.kind === ts.SyntaxKind.SyntaxList && n.getChildren().filter(n => n.kind === ts.SyntaxKind.Decorator).length > 0);

//   const decorators = classSyntaxLists
//     .map(l => l.getChildren())
//     .reduce((flattened, nextInnerArray) => flattened.concat(nextInnerArray), [])
//     .filter(n => n.kind === ts.SyntaxKind.Decorator) as ts.Decorator[];

//   return decorators;
// }

// function getExampleDecoratorData(decorators: ts.Decorator[]) {
//   decorators.filter(d => {
//     if (d.expression.kind != ts.SyntaxKind.CallExpression) {
//       return false;
//     }
//     const fnCall =  d.expression as ts.CallExpression;

//     fnCall

//   })
// }

// function getClassName(cls: ts.ClassDeclaration): string | undefined {
//   const classIdentifier = cls.name as ts.Identifier;

//   if (classIdentifier === undefined) {
//     return undefined;
//   }

//   if (classIdentifier.kind !== ts.SyntaxKind.Identifier) {
//     const kind = ts.SyntaxKind[classIdentifier.kind];
//     throw new Error(`Class name as pos '${classIdentifier.pos}' must be 'Identifier'. Yours is '${kind}'`);
//   }

//   return classIdentifier.text;
// }

// function processClass(cls: ts.ClassDeclaration): void {
//   const name = getClassName(cls);

//   console.log(`Class: '${name}', position: '${cls.pos}', end: '${cls.end}'`);

//   const decorators =

//   const syntaxList = fileChildren[0];
//   if (syntaxList.kind !== ts.SyntaxKind.SyntaxList) {
//     throw new Error(`Example file '${sourcePath}' child is not a 'SyntaxList'.`);
//   }
// }

// function processSourceFile(sourceRootDir: string, fileName: string): void {

//   const sourcePath = path.resolve(sourceRootDir, fileName);

//   const source = fs.readFileSync(sourcePath, {
//     encoding: 'utf8',
//   });

//   const sourceFile = ts.createSourceFile('util.ts', source, ts.ScriptTarget.Latest, true);

//   const fileChildren = sourceFile.getChildren();

//   if (fileChildren.length === 0) {
//     throw new Error(`Example file '${sourcePath}' has no children.`);
//   }

//   const syntaxList = fileChildren[0];
//   if (syntaxList.kind !== ts.SyntaxKind.SyntaxList) {
//     throw new Error(`Example file '${sourcePath}' child is not a 'SyntaxList'.`);
//   }

//   const classes = syntaxList.getChildren().filter(n => n.kind === ts.SyntaxKind.ClassDeclaration);

//   for (const cls of classes as ts.ClassDeclaration[]) {
//     processClass(cls);
//   }

//   const functions = syntaxList.getChildren().filter(n => n.kind === ts.SyntaxKind.FunctionDeclaration);

//   for (const fn of functions as ts.FunctionDeclaration[]) {
//     const identifier = fn.name as ts.Identifier;

//     if (identifier.kind !== ts.SyntaxKind.Identifier) {
//       const kind = ts.SyntaxKind[identifier.kind];
//       throw new Error(`Function name as pos '${identifier.pos}' must be 'Identifier'. Yours is '${kind}'`);
//     }

//     const name = identifier.text;

//     console.log(name, fn.pos, fn.end);
//   }
// }

// //const sourceRootDir = '/vagrant/examples';
// const sourceRootDir = '/vagrant/examples/packages';
// const fileName = 'util.ts';


// function printAllChildren(node: ts.Node, depth = 0) {
//     console.log(new Array(depth + 1).join('----'), ts.SyntaxKind[node.kind], node.pos, node.end);
//     depth++;
//     node.getChildren().forEach(c=> printAllChildren(c, depth));
// }

// printAllChildren(sourceFile);

// const utilExamples = new UtilExamples();

// const classMetadata = Reflect.getMetadata(exampleMetadataKey,utilExamples) as ExampleMetadata;

// const exampleExampleMethodDescriptions = (Object.entries(Object.getPrototypeOf(utilExamples))
//   .filter(pair => (typeof pair[1] === 'function')) as [string, Function][])
//   .map(pair => ({
//     name: pair[0],
//     fn: pair[1],
//   });



// console.log(utilExamples);

// const outDir = path.normalize(path.resolve(__dirname, '../../dist/docs'));

// const options: LogOptions = {
//   rootDir: outDir,
// }

// utilExamples(options);

