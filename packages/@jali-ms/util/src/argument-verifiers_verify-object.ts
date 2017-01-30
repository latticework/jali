import * as Internal from './internal';

import ArgumentTypeError from './argument-type-error';
import verifyDefined from './argument-verifiers_verify-defined';

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
 * verifyNonempty('height', height);
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
export default function verifyObject(
    name: string, value: Object, message?: string | ((value: Object) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'object') {
    throw new ArgumentTypeError('object', name, Internal.errorMessage(value, message));
  }
}
