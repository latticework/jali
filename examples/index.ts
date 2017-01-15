// import * as path from 'path';

import ExampleRunner from './example-runner';


const runner = new ExampleRunner({
  console: global.console,
  include: './dist/examples/**.example.js',
  rootDir: './dist/examples/examples',
  mdDir: './dist/docs/examples',
  tsDir: './examples',
  width: 100,
})

runner.run();
