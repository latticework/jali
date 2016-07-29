## Packages

|Package|Description|Modules|
|:-|:-|:-|
|[@jali/core](http://#package-jalicore)|framework-level utilities|`@jali/core`<br>`@jali/core/iterables`<br>`@jali/core/type-guards`|
|[@jali/util](http://#package-jaliutil)|language-level utilities|`@jali/util`<br>`@jali/util/errors`<br>`@jali/util/iterables`<br>`@jali/util/type-guards`|

## Package @jail/core
Provides framework-level utilities such as notification messages and structured errors.

## Package @jail/util
Provides language-level utilities such as parameter verification and common `Iterable` functions.

|Export|Description|
|:-|:-|
|Errors|Re-export of [`@jail/util/errors`](http://#module-jailutilerrors)|
|Iterables|Re-export of [`@jail/util/iterables`](http://#module-jailutiliterables)|
|TypeGuards|Re-export of [`@jail/util/type-guards`](http://#module-jailutiltypeguards)|

### Module @jail/util/errors
|Export|Description|
|:-|:-|
|[ArgumentEmptyStringError]|Represents that an argument erroneously has an empty string value.|
|[ArgumentError]||
|[ArgumentFalseError]||
|[ArgumentFalsyError]||
|[ArgumentNanError]||
|[ArgumentNullError]||
|[ArgumentTypeError]||
|[ArgumentUndefinedError]||
|[ArgumentWhitespaceStringError]||
|[ArgumentZeroError]||
|[verifyArgument]||
|[verifyBoolean]||
|[verifyDefined]||
|[verifyFunction]||
|[verifyNonEmpty]||
|[verifyNonZero]||
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


### Module @jail/util/iterables
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

### Module @jail/util/type-guards
|Export|Description|
|:-|:-|
|[isError]||
|[isIterable]||

[isError]: ../function/index.html#static-function-isError
[isIterable]: ../function/index.html#static-function-

