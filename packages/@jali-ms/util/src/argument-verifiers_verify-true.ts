import * as Internal from './internal';

import ArgumentFalseError from './argument-false-error';
import verifyBoolean from './argument-verifiers_verify-boolean';

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
 * verifyNonempty('isValid', isValid);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentFalseError}
 * @see {@link verifyDefined}
 * @see {@link verifyBoolean}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export default function verifyTrue(
    name: string, value: boolean, message?: string | ((value: boolean) => string)): void | never {
  verifyBoolean(name, value, message);

  if (value === false) {
    throw new ArgumentFalseError(name, Internal.errorMessage(value, message));
  }
}
