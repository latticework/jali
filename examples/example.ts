import 'reflect-metadata';

import ExampleMetadata from './example-metadata';

const exampleMetadataKey = Symbol('jalidev-example');

export default function Example(
    pkg: string,  module?: string, type?: string, member?: string) {
  const metadata: ExampleMetadata = {
    pkg: pkg,
    module: module,
    type: type,
    member: member,
  }

  return Reflect.metadata(exampleMetadataKey, metadata);
}