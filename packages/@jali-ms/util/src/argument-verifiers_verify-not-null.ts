import * as Internal from './internal';

import ArgumentNullError from './argument-null-error';
import verifyDefined from './argument-verifiers_verify-defined';

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
 * verifyNonempty('height', height);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code>, example ①</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNumber}
 * @since 0.0.1
 */
export default function verifyNotNull<T>(
    name: string, value: T, message?: string | ((value: T) => string)): void | never {
  verifyDefined(name, value, message);

  if (value === null) {
    throw new ArgumentNullError(name, Internal.errorMessage(value, message));
  }
}
