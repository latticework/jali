import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously has a value of `false`.
 *
 * Throw this {@link Error} if a parameter must be `true`.
 *
 * @example <caption>The argument for the parameter isValid is `false`.</caption>
 * throw new ArgumentFalseError('lastName');
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link verifyTrue}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentFalseError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentFalseError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have a
   *    truthy value. Yours is 'false'*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, ArgumentFalsyError.makeFalsyTypedMessage(message, 'false'));
  }
}
