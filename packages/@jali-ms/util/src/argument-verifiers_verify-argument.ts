import * as Internal from './internal';

import ArgumentError from './argument-error';

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
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code>, examples ④ & ⑤</a>
 * @see {@link ArgumentError}
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export default function verifyArgument<T>(
    name: string,
    value: T,
    test: (value: T) => boolean,
    message?: string | ((value: T) => string)): void | never {
  if (!test(value)) {
    throw new ArgumentError(name, Internal.errorMessage(value, message));
  }
}
