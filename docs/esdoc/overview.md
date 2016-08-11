## Packages

|Package|Description|Modules|
|:-|:-|:-|
|[@jali/core](overview.html#package-jali-core)|framework-level utilities|`@jali/core`<br>`@jali/core/iterables`<br>`@jali/core/type-guards`|
|[@jali/util](overview.html#package-jali-util)|language-level utilities|`@jali/util`<br>`@jali/util/errors`<br>`@jali/util/iterables`<br>`@jali/util/type-guards`|

## Package @jali/core
_Back to [Packages](overview.html#packages)_

Provides framework-level utilities such as notification messages and structured errors.

## Package @jali/util
_Back to [Packages](overview.html#packages)_

Provides language-level utilities such as parameter verification and common `Iterable` functions.

|Export|Description|
|:-|:-|
|Errors|Re-export of [`@jali/util/errors`](overview.html#module-jali-util-errors)|
|Iterables|Re-export of [`@jali/util/iterables`](overview.html#module-jali-util-iterables)|
|TypeGuards|Re-export of [`@jali/util/type-guards`](overview.html#module-jali-util-type-guards)|

### Module @jali/util/errors
_Back to [Package @jali/util](overview.html#package-jali-util)_

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
|[verifyNotNull]||
|[verifyNotWhitespace]||
|[verifyNumber]||
|[verifyObject]||
|[verifyString]|Represents ...|
|[verifyTrue]|Represents ...|
|[verifyTruthy]|Represents ...|


[ArgumentEmptyStringError]: ../class/all/@jali/util/src/argument-empty-string-error.js~ArgumentEmptyStringError.html
[ArgumentError]: ../class/all/@jali/util/src/argument-error.js~ArgumentError.html
[ArgumentFalseError]: ../class/all/@jali/util/src/argument-false-error.js~ArgumentFalseError.html
[ArgumentFalsyError]: ../class/all/@jali/util/src/argument-falsy-error.js~ArgumentFalsyError.html
[ArgumentNanError]: ../class/all/@jali/util/src/argument-nan-error.js~ArgumentNanError.html
[ArgumentNullError]: ../class/all/@jali/util/src/argument-null-error.js~ArgumentNullError.html
[ArgumentTypeError]: ../class/all/@jali/util/src/argument-type-error.js~ArgumentTypeError.html
[ArgumentUndefinedError]: ../class/all/@jali/util/src/argument-undefined-error.js~ArgumentUndefinedError.html
[ArgumentWhitespaceStringError]: ../class/all/@jali/util/src/argument-whitespace-string-error.js~ArgumentWhitespaceStringError.html
[ArgumentZeroError]: ../class/all/@jali/util/src/argument-zero-error.js~ArgumentZeroError.html
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


### Module @jali/util/iterables
_Back to [Package @jali/util](overview.html#package-jali-util)_

|Export|Description|
|:-|:-|
|[filter]||
|[firstOrDefault]||
|[has]||
|[toMap]||
|[makeIsIterable]||

[filter]: ../function/index.html#static-function-filter
[firstOrDefault]: ../function/index.html#static-function-firstOrDefault
[has]: ../function/index.html#static-function-has
[toMap]: ../function/index.html#static-function-toMap
[makeIsIterable]: ../function/index.html#static-function-makeIsIterable

### Module @jali/util/type-guards
_Back to [Package @jali/util](overview.html#package-jali-util)_

|Export|Description|
|:-|:-|
|[isError]||
|[isIterable]||

[isError]: ../function/index.html#static-function-isError
[isIterable]: ../function/index.html#static-function-

