/**
 * Provides configuration for the [`webpack`](https://webpack.github.io/) module bundler.
 * Copied from [`Angular 2 Starter`](https://angularclass.github.io/angular2-webpack-starter/) 
 * commit [`2b29948`](https://github.com/AngularClass/angular2-webpack-starter/blob/918a2c912533b98da9bdc17c906ff2a96189aaab/webpack.config.js).
 * Incorporates wepack 2 features as specified in [What's new in webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)
 * @author Latticework <latticework@outlook.com>
 */

exports (options) => {
  return new Promise((resolve, reject) => {

    switch options.environment {
      case "production":
      
    }
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}


  }
}
