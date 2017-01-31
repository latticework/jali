import * as Internal from './internal';

import ArgumentWhitespaceStringError from './argument-whitespace-string-error';
import verifyNonempty from './argument-verifiers_verify-nonempty';

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
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code>, example ②</a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentEmptyStringError}
 * @see {@link ArgumentWhitespaceStringError}
 * @see {@link verifyDefined}
 * @see {@link verifyString}
 * @see {@link verifyNonempty}
 * @since 0.0.1
 */
export default function verifyNotWhitespace(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyNonempty(name, value, message);

  if (value.trim() === '') {
    throw new ArgumentWhitespaceStringError(name, Internal.errorMessage(value, message));
  }
}
