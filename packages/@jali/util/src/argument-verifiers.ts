import * as TypeGuards from './type-guards';

import ArgumentEmptyStringError from './argument-empty-string-error';
import ArgumentError from './argument-error';
import ArgumentFalseError from './argument-false-error';
import ArgumentFalsyError from './argument-falsy-error';
import ArgumentNanError from './argument-nan-error';
import ArgumentNullError from './argument-null-error';
import ArgumentTypeError from './argument-type-error';
import ArgumentUndefinedError from './argument-undefined-error';
import ArgumentWhitespaceStringError from './argument-whitespace-string-error';
import ArgumentZeroError from './argument-zero-error';

/**
 * Throws an error if the specified argument value does not pass the specified test.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!string} name -
 *    The formal parameter name.
 * @param {T} value -
 *    The function argument.
 * @param {!function(value: T) => boolean} test -
 *    Evaluates whether the value meets expectations.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentError}
 *    The test failed.
 *
 * @example <caption>verify that parameter deposit is non-negative</caption>
 * verifyArgument('deposit', deposit, arg => arg > 0.0);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code>, examples ④ & ⑤</a>
 * @see {@link ArgumentError}
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export function verifyArgument<T>(
    name: string,
    value: T,
    test: (value: T) => boolean,
    message?: string | ((value: T) => string)): void | never {
  if (!test(value)) {
    throw new ArgumentError(name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument is not an `Array`.
 *
 * > **Note:** Calls {@link Array.isArray}.
 *
 * @param T -
 *    The `element` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!string} name -
 *    The formal parameter name.
 * @param {T} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    The argument is not an `Array`.
 *
 * @example <caption>verify that parameter collection is an Array</caption>
 * verifyArray('collection', collection);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link isIterable}
 * @see {@link verifyIterable}
 * @since 0.0.1
 */
export function verifyArray<T>(
    name: string, value: T[], message?: string | ((value: Iterable<T>) => string)):
    void | never {
  verifyDefined(name, value, message);

  if (!Array.isArray(value)) {
    throw new ArgumentTypeError('Array', name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument is not strictly a boolean value.
 *
 * > **Note:** If you want to test for _truthy_ values, use {@link verifyTruthy}.
 *
 * @param {!string} name -
 *    The formal parameter name.
 * @param {boolean} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    The argument is not `boolean`.
 *
 * @example <caption>verify that parameter isValid is boolean</caption>
 * verifyBoolean('isValid', isValid);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentUndefinedError}
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export function verifyBoolean(
    name: string, value: boolean, message?: string | ((value: boolean) => string)):
    void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'boolean') {
    throw new ArgumentTypeError('boolean', name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument is `undefined`.
 *
 * > **Note:** If you want to test for _truthy_ values, use {@link verifyTruthy}.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!string} name -
 *    The formal parameter name.
 * @param {T} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 *
 * @example <caption>verify that parameter element is defined</caption>
 * verifyDefined('element', element);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export function verifyDefined<T>(
  name: string, value: T, message?: string | ((value: T) => string)): void | never {
  if (value === undefined) {
    throw new ArgumentUndefinedError(
      name, errorMessage<T | undefined>(value, message));
  }
}


/**
 * Throws an error if the specified argument is not strictly a function expression.
 *
 * > **Note:** If you want to test for _truthy_ values, use {@link verifyTruthy}.
 *
 * @param {!string} name -
 *    The formal parameter name.
 * @param {Function} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    The argument is not a `function`.
 *
 * @example <caption>verify that parameter factory is a function</caption>
 * verifyFunction('factory', factory);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentUndefinedError}
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export function verifyFunction(
    name: string, value: Function, message?: string | ((value: Function) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'function') {
    throw new ArgumentTypeError('function', name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument does not support iteration.
 *
 * > **Note:** Calls {@link isIterable} to determine iterability.
 *
 * @param T -
 *    The `element` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!string} name -
 *    The formal parameter name.
 * @param {T} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    The argument does not support iteration.
 *
 * @example <caption>verify that parameter collection is iterable</caption>
 * verifyIterable('collection', collection);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link isIterable}
 * @see {@link verifyArray}
 * @since 0.0.1
 */
export function verifyIterable<T>(
    name: string, value: Iterable<T>, message?: string | ((value: Iterable<T>) => string)):
    void | never {
  verifyDefined(name, value, message);

  if (!TypeGuards.isIterable(value)) {
    throw new ArgumentTypeError('iterable', name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument value is not a non-empty string.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {string} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `string`.
 * @throws {ArgumentEmptyStringError}
 *    the argument is an empty `string`.
 *
 * @example <caption>verify that parameter firstName is a non-empty string</caption>
 * verifyNonEmpty('firstName', firstName);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code>, example ②</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentEmptyStringError}
 * @see {@link verifyDefined}
 * @see {@link verifyString}
 * @see {@link verifyNotWhitespace}
 * @since 0.0.1
 */
export function verifyNonEmpty(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyString(name, value, message);

  if (value === '') {
    throw new ArgumentEmptyStringError(name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument value is not a non-zero number.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {number} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `number`.
 * @throws {ArgumentNanError}
 *    the argument is `NaN`.
 * @throws {ArgumentZeroError}
 *    the argument is a number the value zero.
 *
 * @example <caption>verify that parameter height has a nonzero value</caption>
 * verifyNonEmpty('height', height);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNumber}
 * @since 0.0.1
 */
export function verifyNonZero(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyNumber(name, value, message);

  if (value === 0) {
    throw new ArgumentZeroError(name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument value is `undefined` or `null`.
 *
 * > **Note:** Consider using {@link verifyTruthy} or {@link verifyObject}.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {number} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `number`.
 * @throws {ArgumentNanError}
 *    the argument is `NaN`.
 * @throws {ArgumentZeroError}
 *    the argument is a number the value zero.
 *
 * @example <caption>verify that parameter height has a nonzero value</caption>
 * verifyNonEmpty('height', height);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code>, example ①</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNumber}
 * @since 0.0.1
 */
export function verifyNotNull<T>(
    name: string, value: T, message?: string | ((value: T) => string)): void | never {
  verifyDefined(name, value, message);

  if (value === null) {
    throw new ArgumentNullError(name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument is not a string with non whitespace characters.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {string} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `string`.
 * @throws {ArgumentEmptyStringError}
 *    the argument is an empty `string`.
 * @throws {ArgumentWhitespaceStringError}
 *    the argument has only whitespace characters.
 *
 * @example <caption>verify that parameter firstName has non-whitespace characters</caption>
 * verifyNotWhitespace('firstName', firstName);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code>, example ②</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentEmptyStringError}
 * @see {@link ArgumentWhitespaceStringError}
 * @see {@link verifyDefined}
 * @see {@link verifyString}
 * @see {@link verifyNonEmpty}
 * @since 0.0.1
 */
export function verifyNotWhitespace(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyNonEmpty(name, value, message);

  if (value.trim() === '') {
    throw new ArgumentWhitespaceStringError(name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument value is not a `number` or has a value of `NaN`.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {number} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `number`.
 * @throws {ArgumentNanError}
 *    the argument is `NaN`.
 * @throws {ArgumentZeroError}
 *    the argument is a number the value zero.
 *
 * @example <caption>verify that parameter price is a number</caption>
 * verifyNumber('price', price);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonZero}
 * @since 0.0.1
 */
export function verifyNumber(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'number') {
    throw new ArgumentTypeError('number', name, errorMessage(value, message));
  }

  if (Number.isNaN(value)) {
    throw new ArgumentNanError(name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument value is not an `Object`.
 *
 * > **Note:** To exclude `null` values also call {@link verifyNotNull}
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {Object} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not an `Object`.
 *
 * @example <caption>verify that parameter height has a nonzero value</caption>
 * verifyNonEmpty('height', height);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonZero}
 * @since 0.0.1
 */
export function verifyObject(
    name: string, value: Object, message?: string | ((value: Object) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'object') {
    throw new ArgumentTypeError('object', name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument value is not a `string`.
 *
 * > **Note:** To verify a meaningful value consider using {@link verifyNonEmpty} or
 * > {@link verifyNotWhitespace}.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {string} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `string`.
 *
 * @example <caption>verify that parameter alphabet is a string</caption>
 * verifyNonEmpty('alphabet', alphabet);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonEmpty}
 * @see {@link verifyNotWhitespace}
 * @since 0.0.1
 */
export function verifyString(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'string') {
    throw new ArgumentTypeError('string', name, errorMessage(value, message));
  }
}


/**
 * Throws an error if the specified argument value is not a boolean with the value 'true'.
 *
 * > **Note:** To verify a _truthy_ value, use {@link verifyTruthy}.
 *
 * @param {string} name -
 *    the formal parameter name
 * @param {boolean} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    the argument is not a `boolean`.
 * @throws {ArgumentFalseError}
 *    the argument is a number the value zero.
 *
 * @example <caption>verify that parameter isValid is true</caption>
 * verifyNonEmpty('isValid', isValid);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentFalseError}
 * @see {@link verifyDefined}
 * @see {@link verifyBoolean}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export function verifyTrue(
    name: string, value: boolean, message?: string | ((value: boolean) => string)): void | never {
  verifyBoolean(name, value, message);

  if (value === false) {
    throw new ArgumentFalseError(name, errorMessage(value, message));
  }
}

/**
 * Throws an error if the specified argument value is not _truthy_.
 *
 * The `loose` parameter changes what exception is thrown. If `loose`, then only
 * {@link ArgumentFalsyError} is thrown. Otherwise, the exception for the appropriate _falsy_ value
 * is thrown.
 *
 * > **Note:** You can test for any of the _falsy_ values individually using the appropriate
 * > `verify...` function.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {string} name -
 *    the formal parameter name
 * @param {T} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentFalsyError}
 *    the argument is _falsy_ and `loose` is specified.
 * @throws {ArgumentEmptyStringError}
 *    the argument is an empty `string` and `loose` is not specified.
 * @throws {ArgumentFalseError}
 *    the argument has the value `false` and `loose` is not specified.
 * @throws {ArgumentNanError}
 *    the argument has the value `NaN` and `loose` is not specified.
 * @throws {ArgumentNullError}
 *    the argument has the value `null` and `loose` is not specified.
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined` and `loose` is not specified.
 * @throws {ArgumentUndefinedError}
 *    the argument is zero and `loose` is not specified.
 *
 * @example <caption>verify that parameter item is truthy</caption>
 * verifyTruthy('item', item);
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">
 *    Definition of falsy</a> (MDN)
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="manual/example.html#jali_util_errors">
 *    Example method <code>jali_util_errors</code>, example ③</a>
 * @see {@link ArgumentEmptyStringError}
 * @see {@link ArgumentFalseError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentNullError}
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonEmpty}
 * @see {@link verifyNonZero}
 * @see {@link verifyNotNull}
 * @see {@link verifyNumber}
 * @see {@link verifyTrue}
 * @since 0.0.1
 */
export function verifyTruthy<T>(
    name: string, value: T, loose = false, message?: string | ((value: T) => string)):
    void | never {
  if (!value) {
    if (loose) {
      throw new ArgumentFalsyError(name, errorMessage(value, message));
    }

    verifyNotNull(name, value, message); // Also checks for defined.

    if (typeof value === 'boolean' ) {
      verifyTrue(name, value as any as boolean, errorMessage(value, message));
    } else if (typeof value === 'string' ) {
      verifyNonEmpty(name, value as any as string, errorMessage(value, message));
    } else if (typeof value === 'number' ) {
      // Also checks for not NaN
      verifyNonZero(name, value as any as number, errorMessage(value, message));
    }
  }
}

function errorMessage<T>(value: T, message?: string | ((value: T) => string)) {
  return (typeof message === 'function') ? message(value) : message;
}
