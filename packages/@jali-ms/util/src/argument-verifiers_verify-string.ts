import * as Internal from './internal';

import ArgumentTypeError from './argument-type-error';
import verifyDefined from './argument-verifiers_verify-defined';


/**
 * Throws an error if the specified argument value is not a `string`.
 *
 * > **Note:** To verify a meaningful value consider using {@link verifyNonempty} or
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
 * verifyNonempty('alphabet', alphabet);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonempty}
 * @see {@link verifyNotWhitespace}
 * @since 0.0.1
 */
export default function verifyString(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'string') {
    throw new ArgumentTypeError('string', name, Internal.errorMessage(value, message));
  }
}

