/* eslint-disable no-unused-vars */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const scopeName = 'jali';
const npmScope = '@jali-ms';
const packageName = 'util';
const packageDirName = 'packages';
const entryPointName = 'index.js';
const distDirName = 'dist';
const packagesDistDirName = 'packages-dist';
const bundlesDistDirName = 'bundles';

const packagesDir = `./${packageDirName}`;
const scopeDir = `${packagesDir}/${npmScope}`;
const packageDir = `${scopeDir}/${packageName}`;

const projectDir = `.`;
const distDir = `./${distDirName}`;
const distPackagesDir = `${distDir}/${packagesDistDirName}`;
const distScopeDir = `${distPackagesDir}/${npmScope}`;
const distPackageDir = `${distScopeDir}/${packageName}`;
const distPackageEntryPoint = `${distPackageDir}/${entryPointName}`;
const distBundleDir = `${distPackageDir}/${bundlesDistDirName}`;

// Export webpack configuration function, passing in command line options.
module.exports = function(options) {
  const config = {
    devtool: 'source-map',
    entry: {
      util: [distPackageEntryPoint],
    },
    // externals: ['babel-polyfill'],
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            plugins: [
              'syntax-trailing-function-commas',
              "transform-async-generator-functions",
              'transform-async-to-generator',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-es2015-function-name',
              'transform-exponentiation-operator',
              'transform-function-sent',
              [
                "transform-modern-regexp",
                {
                  "features": [
                    "namedCapturingGroups",
                    "dotAll"
                  ]
                }
              ],
              "transform-numeric-separator",
              [
                "transform-runtime",
                {
                  "polyfill": false,
                  "regenerator": false
                }
              ],
              "transform-unicode-property-regex"
            ],
            presets: []
          },
          test: /\.js$/,
        }
      ]
    },
    output: {
      filename: '[name].umd.js',
      // http://stackoverflow.com/a/38290798/2240669
      libraryTarget: 'umd',
      path: distBundleDir,
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: packageDir,
          from: '.npmignore',
          to: '..',
        },
        {
          context: packageDir,
          from: 'package.json',
          to: '..',
        },
        {
          context: packageDir,
          from: 'README.md',
          to: '..',
        },
        {
          context: projectDir,
          from: 'LICENSE',
          to: '..'
        },
      ]),
    ],
    resolve: {
      modules: [
        './node_modules'
      ]
    },
    stats: {
      colors: true,
      errorDetails: true,
      modules: true,
      reasons: true,
    },
  };

  return config;
};
