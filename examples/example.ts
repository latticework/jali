import 'reflect-metadata';


import ExampleMetadata from './example-metadata';

// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
function Example(
    pkg: string,  module?: string, type?: string, member?: string) {

  const metadata: ExampleMetadata = {
    pkg: pkg,
    module: module,
    type: type,
    member: member,
  }

  return Reflect.metadata(Example.METADATA_KEY, metadata);
}

module Example {
  export const METADATA_KEY = Symbol('jalidev-example');
  export const getMetadata =
    function(target: Object, methodName?: string): ExampleMetadata {
      return Reflect.getMetadata(METADATA_KEY, target, methodName as string) as ExampleMetadata;
    }
}


export default Example;
