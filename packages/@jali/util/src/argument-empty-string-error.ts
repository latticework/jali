import { default as ArgumentFalsyError } from './argument-falsy-error';

/**
 * Represents that an argument erroneously has an empty string value.
 *
 * Throw this {@link Error} if a parameter must be a non-empty string.
 * @see {@link ArgumentWhitespaceStringError}
 * @see {@link verifyNonEmpty}
 * @example <caption>The argument for the parameter lastName is an empty string.</caption>
 * throw new ArgumentEmptyStringError('lastName');
 * @since 0.0.1
 */
export default class ArgumentEmptyStringError extends ArgumentFalsyError {
  /**
   * Initializes a new instance of the {@link ArgumentEmptyStringError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *'Argument must not be an empty string. Yours is empty'*.
   * @since 0.0.1
   */
  constructor(name?: string, message?: string) {
    super(name, message || 'Argument must not be an empty string. Yours is empty');
  }
}
