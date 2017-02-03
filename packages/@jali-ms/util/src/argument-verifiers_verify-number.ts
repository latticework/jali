import * as Internal from './internal';

import ArgumentNanError from './argument-nan-error';
import ArgumentTypeError from './argument-type-error';
import verifyDefined from './argument-verifiers_verify-defined';


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
 * @see {@link verifyNonzero}
 * @since 0.0.1
 */
export default function verifyNumber(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'number') {
    throw new ArgumentTypeError('number', name, Internal.errorMessage(value, message));
  }

  if (Number.isNaN(value)) {
    throw new ArgumentNanError(name, Internal.errorMessage(value, message));
  }
}
