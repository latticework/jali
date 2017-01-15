import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously is 'undefined'.
 *
 * Throw this {@link Error} if a parameter must have a value.
 *
 * @example <caption>The argument for the parameter element is undefined.</caption>
 * throw new ArgumentUndefinedError('element');
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentUndefinedError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentUndefinedError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must be
   *    defined. Yours is 'undefined*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, message || `Argument must be defined. Yours is 'undefined'`);
  }
}
