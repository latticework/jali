import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously has a value of `null`.
 *
 * Throw this {@link Error} if a parameter must be an object.
 *
 * @example <caption>The argument for the parameter entity is `null`.</caption>
 * throw new ArgumentNullError('entity');
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link verifyNonNull}
 * @see {@link verifyObject}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentNullError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentNullError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have a
   *     non-null value. Yours is 'null'*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, message || `Argument must have a non-null value. Yours is 'null'`);
  }
}
