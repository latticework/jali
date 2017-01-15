# Jali Util Package

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
<!-- cSpell:ignore  -->

This package provides JavaScript language level utilities for the Jali
microservice platform. [jali-ms.io][jali-site]

Utilities include:

- function argument [`Error`][mdn-error] types
- argument validator functions
- [`iteration`][mdn-iteration] functions that covers most `Array`
  iteration functions and more.
- *TypeScript* [user-defined type guard][ts-typeguard] functions for
  fundamental JavaScript types.

## Getting Started

Install the package:

```bash
npm install --save @jali-ms/util
```

## Usage

As a utility package many kinds of functions are provided by a few
modules. Major function types are mentioned below. For detailed
information see the Jali [docs][jali-docs-util].

### Module @jali-ms/util/errors

Provides [`Error`][mdn-error] types and function argument verifiers.

#### Errors

A family of argument errors are available, with the class
`ArgumentError` as the base type in addition to the `InvalidStateError`,
which it thrown when object functions are called when in a state not
supported by the operation.

#### Argument Verifiers

A group of validation errors that throw the appropriate `Error` when an
argument is invalid. Many verifiers provide runtime verification for
static type checks provided by `TypeScript`.

### Module @jali-ms/util/iterables

Provides element iteration for any object that implements the
[iterable][mdn-iteration] pattern.

#### Example

```javascript
import Iterables from '@jali-ms/util/iterables';
const sequence = (function*() { yield 1; yield 2; yield 3; })();
const filtered = Iterables.filter(sequence, e => e % 2 === 0);
console.log(Iterables.find(sequence)); // Displays: 2
```

### Module @jali-ms/util/type-guards

Provides type verification functions especially useful for type coercion
in `TypeScript`.

<!-- markdownlint-disable no-duplicate-header -->

#### Example

<!-- markdownlint-enable no-duplicate-header -->

```javascript
import TypeGuards from '@jali-ms/util/type-guards';
function processException(err: any): void {
  if (TypeGuards.isError(err)) {
    console.log(`An error has occurred: ${err.message}`);
  }
  else {
    console.log(`An error has occurred: ${err.toString()}`);
  }
}
```

## Contribute

This package is part of the [monorepo][desc-monorepo]
[jali-srcs][jali-repo]. Please refer to that GitHub repository on how to
contribute to the Jali project.

[jali-docs-util]: http://jali-ms.io/docs/api/util
[jali-repo]: https://github.com/latticework/jali
[jali-site]: http://jali-ms.io/
[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[mdn-iteration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[desc-monorepo]: http://www.macwright.org/2016/07/08/lerna-npm-organizations-new-wave-modularity.html
[ts-typeguard]: https://www.typescriptlang.org/docs/handbook/advanced-types.html
