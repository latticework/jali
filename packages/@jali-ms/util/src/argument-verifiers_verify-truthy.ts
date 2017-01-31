import * as Internal from './internal';

import ArgumentFalsyError from './argument-falsy-error';
import verifyNotNull from './argument-verifiers_verify-not-null';
import verifyTrue from './argument-verifiers_verify-true';
import verifyNonempty from './argument-verifiers_verify-nonempty';
import verifyNonzero from './argument-verifiers_verify-nonzero';

/**
 * Throws an error if the specified argument value is not _truthy_.
 *
 * The `loose` parameter changes what exception is thrown. If `loose`, then only
 * {@link ArgumentFalsyError} is thrown. Otherwise, the exception for the appropriate _falsy_ value
 * is thrown.
 *
 * > **Note:** You can test for any of the _falsy_ values individually using the appropriate
 * > `verify...` function.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {string} name -
 *    the formal parameter name
 * @param {T} value -
 *    the function argument
 * @param {?(string | function(value: string): string)} message -
 *    optional custom message or message factory
 *
 * @throws {ArgumentFalsyError}
 *    the argument is _falsy_ and `loose` is specified.
 * @throws {ArgumentEmptyStringError}
 *    the argument is an empty `string` and `loose` is not specified.
 * @throws {ArgumentFalseError}
 *    the argument has the value `false` and `loose` is not specified.
 * @throws {ArgumentNanError}
 *    the argument has the value `NaN` and `loose` is not specified.
 * @throws {ArgumentNullError}
 *    the argument has the value `null` and `loose` is not specified.
 * @throws {ArgumentUndefinedError}
 *    the argument is `undefined` and `loose` is not specified.
 * @throws {ArgumentUndefinedError}
 *    the argument is zero and `loose` is not specified.
 *
 * @example <caption>verify that parameter item is truthy</caption>
 * verifyTruthy('item', item);
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">
 *    Definition of falsy</a> (MDN)
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code>, example ③</a>
 * @see {@link ArgumentEmptyStringError}
 * @see {@link ArgumentFalseError}
 * @see {@link ArgumentNanError}
 * @see {@link ArgumentNullError}
 * @see {@link ArgumentUndefinedError}
 * @see {@link ArgumentZeroError}
 * @see {@link verifyDefined}
 * @see {@link verifyNonempty}
 * @see {@link verifyNonzero}
 * @see {@link verifyNotNull}
 * @see {@link verifyNumber}
 * @see {@link verifyTrue}
 * @since 0.0.1
 */
export default  function verifyTruthy<T>(
    name: string, value: T, loose = false, message?: string | ((value: T) => string)):
    void | never {
  if (!value) {
    if (loose) {
      throw new ArgumentFalsyError(name, Internal.errorMessage(value, message));
    }

    verifyNotNull(name, value, message); // Also checks for defined.

    if (typeof value === 'boolean' ) {
      verifyTrue(name, value as any as boolean, Internal.errorMessage(value, message));
    } else if (typeof value === 'string' ) {
      verifyNonempty(name, value as any as string, Internal.errorMessage(value, message));
    } else if (typeof value === 'number' ) {
      // Also checks for not NaN
      verifyNonzero(name, value as any as number, Internal.errorMessage(value, message));
    }
  }
}
