import * as Internal from './internal';

import ArgumentZeroError from './argument-zero-error';
import verifyNumber from './argument-verifiers_verify-number';

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
 * verifyNonzero('height', height);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNumber}
 * @since 0.0.1
 */
export default function verifyNonzero(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyNumber(name, value, message);

  if (value === 0) {
    throw new ArgumentZeroError(name, Internal.errorMessage(value, message));
  }
}
