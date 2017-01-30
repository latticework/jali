import * as Internal from './internal';

import ArgumentEmptyStringError from './argument-empty-string-error';
import verifyString from './argument-verifiers_verify-string';

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
 * verifyNonempty('firstName', firstName);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code>, example ②</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentEmptyStringError}
 * @see {@link verifyDefined}
 * @see {@link verifyString}
 * @see {@link verifyNotWhitespace}
 * @since 0.0.1
 */
export default function verifyNonempty(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyString(name, value, message);

  if (value === '') {
    throw new ArgumentEmptyStringError(name, Internal.errorMessage(value, message));
  }
}
