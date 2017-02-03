import * as Internal from './internal';

import ArgumentTypeError from './argument-type-error';
import verifyDefined from './argument-verifiers_verify-defined';


/**
 * Throws an error if the specified argument is not an `Array`.
 *
 * > **Note:** Calls {@link Array.isArray}.
 *
 * @param T -
 *    The `element` type. **Note:** This is a TypeScript type parameter, not a parameter of the
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
 * @throws {ArgumentTypeError}
 *    The argument is not an `Array`.
 *
 * @example <caption>verify that parameter collection is an Array</caption>
 * verifyArray('collection', collection);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentTypeError}
 * @see {@link isIterable}
 * @see {@link verifyIterable}
 * @since 0.0.1
 */
export default function verifyArray<T>(
    name: string, value: T[], message?: string | ((value: Iterable<T>) => string)):
    void | never {
  verifyDefined(name, value, message);

  if (!Array.isArray(value)) {
    throw new ArgumentTypeError('Array', name, Internal.errorMessage(value, message));
  }
}
