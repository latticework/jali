import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously has a value of zero.
 *
 * Throw this {@link Error} if a parameter must have a non-zero value.
 *
 * @example <caption>The argument for the parameter height is zero.</caption>
 * throw new ArgumentZeroError('height');
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link verifyNonZero}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentZeroError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentZeroError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have a
   *    truthy value. Yours is 'zero'*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, ArgumentFalsyError.makeFalsyTypedMessage(message, 'zero'));
  }
}
