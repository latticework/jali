var Package = require('dgeni').Package;

var basePackage =require('dgeni-packages/base')
var jsdocPackage = require('dgeni-packages/jsdoc');
var typescriptPackage = require ('dgeni-packages/typescript');
var nunjucksPackage = require('dgeni-packages/nunjucks');

var path = require('canonical-path');


// See https://github.com/rangle/angular2-dgeni-starter/blob/master/dgeni-templates/dgeni-package.js
// See https://github.com/ericjim/dgeni-typescript-example

var SETTINGS = {
  ts: {
    include: './packages/**/*.ts',
    exclude: './packages/**/*.test.ts',
    base: './packages',
  },
  js: {
    include: [
      './dist/all/**/*.js'
    ],
    exclude: [
      './dist/all/**/*.test.js',
      './dist/all/**/testing/**.js'
    ],
    base: './dist/all',
  },
  output: './dist/docs',
}

module.exports = new Package('jalijs', [
  basePackage,
  jsdocPackage,
  nunjucksPackage,
  typescriptPackage,
])

// this is required because the parsing-tags pseudo marker processor is defined in jsdoc package which is not referenced here.
.processor({ name: 'parsing-tags', $runAfter: ['files-read'], $runBefore: ['processing-docs'] })


.config(function(computeIdsProcessor, computePathsProcessor, EXPORT_DOC_TYPES) {

  // computePathsProcessor.pathTemplates = [];
  computePathsProcessor.pathTemplates.push({
    docTypes: EXPORT_DOC_TYPES,
    pathTemplate: '${moduleDoc.path}',
    outputPathTemplate: '${name}-${docType}.html',
  });
})

.config(function(
  log,
  readFilesProcessor,
  readTypeScriptModules,
  templateFinder,
  writeFilesProcessor) {

  // Default log level (can be overridden by --log option).
  log.level = 'info';

  // Set base path to project root.
  readFilesProcessor.basePath = path.resolve(__dirname, '../..');

  // Specify collections of source files that should contain the documentation to extract
  readFilesProcessor.sourceFiles = [
    {
      include: SETTINGS.js.include,
      exclude: SETTINGS.js.exclude,
      basePath: SETTINGS.js.base
    }
  ];

  readTypeScriptModules.sourceFiles = [
    {
      include: SETTINGS.ts.include,
      exclude: SETTINGS.ts.exclude,
      basePath: SETTINGS.ts.base
    }
  ];

  readTypeScriptModules.hidePrivateMembers = false;


  // Add a folder to search for our own templates to use when rendering docs.
  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

  // Specify how to match docs to templates.
  // In this case we just use the same static template for all docs
  templateFinder.templatePatterns.unshift('class.template.html');

  // Output folder
  writeFilesProcessor.outputFolder = SETTINGS.output;
});