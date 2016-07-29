import * as fs from 'fs';
import * as path from 'path';

// import LogOptions from './log-options';

import UtilExamples from './packages/util'

import * as ts from 'typescript';

const sourceRootDir = '/vagrant/examples'
const sourcePath = path.resolve(sourceRootDir, './packages/util.ts');

const source = fs.readFileSync(sourcePath, {
  encoding: 'utf8',
});

const sourceFile = ts.createSourceFile('util.ts', source, ts.ScriptTarget.Latest, true);

// const fileChildren = sourceFile.getChildren();

// if (fileChildren.length === 0) {
//   throw Error(`Example file '${sourcePath}' has no children.`);
// }

// const syntaxList = fileChildren[0];
// if (syntaxList.kind !== ts.SyntaxKind.SyntaxList) {
//   throw Error(`Example file '${sourcePath}' child is not a 'SyntaxList'.`);
// }

// const functions = syntaxList.getChildren().filter(n => n.kind === ts.SyntaxKind.FunctionDeclaration);

// for (const fn of functions as ts.FunctionDeclaration[]) {
//   const identifier = fn.name as ts.Identifier;

//   if (identifier.kind !== ts.SyntaxKind.FunctionKeyword) {
//     const kind = ts.SyntaxKind[identifier.kind];
//     throw Error(`Function name as pos '${identifier.pos}' must be 'FunctionKeyword'. Yours is '${kind}'`);
//   }

//   const name = identifier.text;

//   console.log(name, fn.pos, fn.end);
// }

function printAllChildren(node: ts.Node, depth = 0) {
    console.log(new Array(depth + 1).join('----'), ts.SyntaxKind[node.kind], node.pos, node.end);
    depth++;
    node.getChildren().forEach(c=> printAllChildren(c, depth));
}

printAllChildren(sourceFile);

const utilExamples = new UtilExamples();

console.log(utilExamples);

// const outDir = path.normalize(path.resolve(__dirname, '../../dist/docs'));

// const options: LogOptions = {
//   rootDir: outDir,
// }

// utilExamples(options);
