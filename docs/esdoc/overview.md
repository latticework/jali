<!-- markdownlint-disable first-line-h1 first-header-h1 -->

## Packages

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
<!-- cSpell:ignore polsedit, polseditx, secpol, vistauac -->

<!-- markdownlint-disable no-inline-html -->

|Package|Description|Modules|
|:-|:-|:-|
|[@jali-ms/core](overview.html#package-jali-core)|framework-level utilities|`@jali-ms/core`<br>`@jali-ms/core/iterables`<br>`@jali-ms/core/type-guards`|
|[@jali-ms/util](overview.html#package-jali-ms-util)|language-level utilities|`@jali-ms/util`<br>`@jali-ms/util/errors`<br>`@jali-ms/util/iterables`<br>`@jali-ms/util/type-guards`|

<!-- markdownlint-enable no-inline-html -->

## Package @jali-ms/core

_Back to [Packages](overview.html#packages)_

Provides framework-level utilities such as notification messages and
structured errors.

## Package @jali-ms/util

_Back to [Packages](overview.html#packages)_

Provides language-level utilities such as parameter verification and
common `Iterable` functions.

<!-- markdownlint-disable no-inline-html -->

|Export|Description|
|:-|:-|
|Errors|Re-export of [`@jali-ms/util/errors`](overview.html#module-jali-ms-util-errors)|
|Iterables|Re-export of [`@jali-ms/util/iterables`](overview.html#module-jali-ms-util-iterables)|
|TypeGuards|Re-export of [`@jali-ms/util/type-guards`](overview.html#module-jali-ms-util-type-guards)|

<!-- markdownlint-enable no-inline-html -->

### Module @jali-ms/util/errors

_Back to [Package @jali-ms/util](overview.html#package-jali-ms-util)_

<!-- markdownlint-disable no-inline-html -->

|Export|Description|
|:-|:-|
|[ArgumentEmptyStringError]|Represents that an argument erroneously has an empty string value.|
|[ArgumentError]|Represents that an argument has violated a requirement.|
|[ArgumentFalseError]|Represents that an argument erroneously has a value of `false`.|
|[ArgumentFalsyError]|Represents that an argument erroneously has a _falsy_ value.|
|[ArgumentNanError]|Represents that an argument erroneously has a value of `NaN`.|
|[ArgumentNullError]|Represents that an argument erroneously has a value of `null`.|
|[ArgumentTypeError]|Represents that an argument has an invalid type or an object with the incorrect structure.|
|[ArgumentUndefinedError]|Represents that an argument erroneously is 'undefined'.|
|[ArgumentWhitespaceStringError]|Represents that a string argument erroneously has only whitespace characters.|
|[ArgumentZeroError]|Represents that an argument erroneously has a value of zero.|
|[verifyArgument]|Throws an error if the specified argument value does not pass the specified test.|
|[verifyBoolean]|Throws an error if the specified argument is not strictly a boolean value.|
|[verifyDefined]|Throws an error if the specified argument is `undefined`.|
|[verifyFunction]|Throws an error if the specified argument is not strictly a function expression.|
|[verifyIterable]|Throws an error if the specified argument does not support iteration.|
|[verifyNonEmpty]|Throws an error if the specified argument value is not a non-empty string.|
|[verifyNonZero]|Throws an error if the specified argument value is not a non-zero number.|
|[verifyNotNull]|Throws an error if the specified argument value is `undefined` or `null`.|
|[verifyNotWhitespace]|Throws an error if the specified argument is not a string with non whitespace characters.|
|[verifyNumber]|Throws an error if the specified argument value is not a `number` or has a value of `NaN`.|
|[verifyObject]|Throws an error if the specified argument value is not an `Object`.|
|[verifyString]|Throws an error if the specified argument value is not a `string`.|
|[verifyTrue]|Throws an error if the specified argument value is not a boolean with the value 'true'.|
|[verifyTruthy]|Throws an error if the specified argument value is not _truthy_.|

<!-- markdownlint-enable no-inline-html -->

[ArgumentEmptyStringError]: ../class/all/@jali-ms/util/src/argument-empty-string-error.js~ArgumentEmptyStringError.html
[ArgumentError]: ../class/all/@jali-ms/util/src/argument-error.js~ArgumentError.html
[ArgumentFalseError]: ../class/all/@jali-ms/util/src/argument-false-error.js~ArgumentFalseError.html
[ArgumentFalsyError]: ../class/all/@jali-ms/util/src/argument-falsy-error.js~ArgumentFalsyError.html
[ArgumentNanError]: ../class/all/@jali-ms/util/src/argument-nan-error.js~ArgumentNanError.html
[ArgumentNullError]: ../class/all/@jali-ms/util/src/argument-null-error.js~ArgumentNullError.html
[ArgumentTypeError]: ../class/all/@jali-ms/util/src/argument-type-error.js~ArgumentTypeError.html
[ArgumentUndefinedError]: ../class/all/@jali-ms/util/src/argument-undefined-error.js~ArgumentUndefinedError.html
[ArgumentWhitespaceStringError]: ../class/all/@jali-ms/util/src/argument-whitespace-string-error.js~ArgumentWhitespaceStringError.html
[ArgumentZeroError]: ../class/all/@jali-ms/util/src/argument-zero-error.js~ArgumentZeroError.html
[verifyArgument]: ../function/index.html#static-function-verifyArgument
[verifyBoolean]: ../function/index.html#static-function-verifyBoolean
[verifyDefined]: ../function/index.html#static-function-verifyDefined
[verifyFunction]: ../function/index.html#static-function-verifyFunction
[verifyIterable]: ../function/index.html#static-function-verifyIterable
[verifyNonEmpty]: ../function/index.html#static-function-verifyNonEmpty
[verifyNonZero]: ../function/index.html#static-function-verifyNonZero
[verifyNotNull]: ../function/index.html#static-function-verifyNotNull
[verifyNotWhitespace]: ../function/index.html#static-function-verifyNotWhitespace
[verifyNumber]: ../function/index.html#static-function-verifyNumber
[verifyObject]: ../function/index.html#static-function-verifyObject
[verifyString]: ../function/index.html#static-function-verifyString
[verifyTrue]: ../function/index.html#static-function-verifyTrue
[verifyTruthy]: ../function/index.html#static-function-verifyTruthy

### Module @jali-ms/util/iterables

_Back to [Package @jali-ms/util](overview.html#package-jali-ms-util)_

<!-- markdownlint-disable no-inline-html -->

|Export|Description|
|:-|:-|
|[asArray]|Converts an argument that could either be a value of a type or a sequence of that type to<br>an array of that type.|
|[asIterable]|Converts an argument that could either be a value of a type or a sequence of that type to a<br>sequence of that type.|
|[concat]|Concatenates a sequence of a type with zero or more other sequences of that type.|
|[every]|Returns a value indicating whether every element fulfills the specified test.|
|[filter]|Returns a subset of the sequence of those elements that pass the specified test.|
|[find]|Returns the first value matching the specified test or `undefined` if no match was found.|
|[includes]|Returns a value indicating whether a match for the specified test was found.|
|[map]|Returns a sequence of elements that are the result of calling the specified converter<br>function on each element.|
|[reduce]|Aggregates a sequence to a single computed element value.|
|[slice]|Returns a segment of the original sequence.|
|[some]|Returns a value indicating whether any of the elements of a sequence pass the specified test.|
|[toMap]|Converts a sequence to a `Map` using the specified key selector function.|

<!-- markdownlint-enable no-inline-html -->

[asArray]: ../function/index.html#static-function-asArray
[asIterable]: ../function/index.html#static-function-asIterable
[concat]: ../function/index.html#static-function-concat
[every]: ../function/index.html#static-function-every
[filter]: ../function/index.html#static-function-filter
[find]: ../function/index.html#static-function-find
[includes]: ../function/index.html#static-function-includes
[map]: ../function/index.html#static-function-map
[reduce]: ../function/index.html#static-function-reduce
[slice]: ../function/index.html#static-function-slice
[some]: ../function/index.html#static-function-some
[toMap]: ../function/index.html#static-function-toMap

### Module @jali-ms/util/type-guards

_Back to [Package @jali-ms/util](overview.html#package-jali-ms-util)_

<!-- markdownlint-disable no-inline-html -->

|Export|Description|
|:-|:-|
|[isError]||
|[isIterable]||
|[makeIsIterable]||

<!-- markdownlint-enable no-inline-html -->

[isError]: ../function/index.html#static-function-isError
[isIterable]: ../function/index.html#static-function-isIterable
[makeIsIterable]: ../function/index.html#static-function-makeIsIterable
