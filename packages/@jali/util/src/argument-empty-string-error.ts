import { default as ArgumentError } from './argument-error';

/**
 * Represents that an argument has an empty string value in error
 */
export default class ArgumentEmptyStringError extends ArgumentError {
  /**
   * Initializes a new instance of the {@link ArgumentEmptyStringError} class.
   *
   * @param name the parameter name. Default is no name
   * @param message specific message. Otherwise, a generic message will be used.
   */
  constructor(name?: string, message?: string) {
    super(name, message || 'Argument must not be an empty string. Yours is empty');
  }
}
