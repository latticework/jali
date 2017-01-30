import * as Internal from './internal';

import * as TypeGuards from './type-guards';

import ArgumentTypeError from './argument-type-error';

import verifyDefined from './argument-verifiers_verify-defined';

/**
 * Throws an error if the specified argument does not support iteration.
 *
 * > **Note:** Calls {@link isIterable} to determine iterability.
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
 *    The argument does not support iteration.
 *
 * @example <caption>verify that parameter collection is iterable</caption>
 * verifyIterable('collection', collection);
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
 * @see {@link verifyArray}
 * @since 0.0.1
 */
export default function verifyIterable<T>(
    name: string, value: Iterable<T>, message?: string | ((value: Iterable<T>) => string)):
    void | never {
  verifyDefined(name, value, message);

  if (!TypeGuards.isIterable(value)) {
    throw new ArgumentTypeError('iterable', name, Internal.errorMessage(value, message));
  }
}
