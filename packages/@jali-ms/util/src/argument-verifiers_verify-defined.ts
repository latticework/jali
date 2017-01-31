import * as Internal from './internal';

import ArgumentUndefinedError from './argument-undefined-error';



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
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export default function verifyDefined<T>(
  name: string, value: T, message?: string | ((value: T) => string)): void | never {
  if (value === undefined) {
    throw new ArgumentUndefinedError(
      name, Internal.errorMessage<T | undefined>(value, message));
  }
}
