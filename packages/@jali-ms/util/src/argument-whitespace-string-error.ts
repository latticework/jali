import { default as ArgumentError } from './argument-error';

/**
 * Represents that a string argument erroneously has only whitespace characters.
 *
 * Throw this {@link Error} if a parameter must have non-whitespace content.
 *
 * @example <caption>The string argument for the parameter firstName has only whitespace.</caption>
 * throw new ArgumentWhitespaceStringError('firstName');
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link ArgumentEmptyStringError}
 * @see {@link verifyNonempty}
 * @see {@link verifyNotWhitespace}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentWhitespaceStringError extends ArgumentError {
  /**
   * Initializes a new instance of the {@link ArgumentEmptyStringError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must contain
   *    non-whitespace characters. Yours has only whitespace*.
   * @public
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(
      name,
      message || 'Argument must contain non-whitespace characters. Yours has only whitespace');
  }
}
