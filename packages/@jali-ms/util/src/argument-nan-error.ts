import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously has a value of `NaN`.
 *
 * Throw this {@link Error} if a parameter must be a `number`.
 *
 * @example <caption>The argument for the parameter price is `NaN`.</caption>
 * throw new ArgumentNanError('price');
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link verifyNumber}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentNanError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentNanError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have a
   *    truthy value. Yours is 'NaN'*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, ArgumentFalsyError.makeFalsyTypedMessage(message, 'NaN'));
  }
}
