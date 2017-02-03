import * as Internal from './internal';

import ArgumentTypeError from './argument-type-error';
import verifyDefined from './argument-verifiers_verify-defined';


/**
 * Throws an error if the specified argument is not strictly a function expression.
 *
 * > **Note:** If you want to test for _truthy_ values, use {@link verifyTruthy}.
 *
 * @param {!string} name -
 *    The formal parameter name.
 * @param {Function} value -
 *    The function argument.
 * @param {(string | function(value: string): string)} [message] -
 *    Optional custom message or message factory.
 *
 * @throws {ArgumentUndefinedError}
 *    The argument is `undefined`.
 * @throws {ArgumentTypeError}
 *    The argument is not a `function`.
 *
 * @example <caption>verify that parameter factory is a function</caption>
 * verifyFunction('factory', factory);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see <a href="manual/example.html#jali_ms_util_errors">
 *    Example method <code>jali_ms_util_errors</code></a>
 * @see {@link ArgumentTypeError}
 * @see {@link ArgumentUndefinedError}
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export default function verifyFunction(
    name: string, value: Function, message?: string | ((value: Function) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'function') {
    throw new ArgumentTypeError('function', name, Internal.errorMessage(value, message));
  }
}
