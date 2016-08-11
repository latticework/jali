import { default as ArgumentError } from './argument-error';

/**
 * Represents that an argument has an invalid type or an object with the incorrect structure.
 *
 * Throw this {@link Error} if a parameter has an invalid type and can't be represented by a more
 * specific argument error.
 *
 * @example <caption>The argument for the parameter motor is missing a property.</caption>
 * throw new ArgumentTypeError(
 *    'motor', `The argument is not a valid 'Motor'. It lacks the 'start' method`);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentTypeError extends ArgumentError {
  /**
   * Initializes a new instance of the {@link ArgumentTypeError} class.
   *
   * @param {!string} type -
   *    The expected parameter type.
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have type
   *    '${type}'. Yours is not*.
   * @public
   * @since 0.0.1
   */
  constructor(type: string, name?: string, message?: string) {
    super(name, Class.makeTypeMessage(type, message));
  }

  /**
   * Builds a default error message for subclasses.
   * @param {!string}: type -
   *    The expected parameter type.
   * @param {string}: [message] -
   *    Specified message. Otherwise, a generic message will be created like *Argument must have
   *    type '${type}'. Yours is not*.
   * @protected
   * @since 0.0.1
   */
  protected static makeTypeMessage(type: string, message?: string) {
    return message || `Argument must have type '${type}'. Yours is not`;
  }
}
const Class = ArgumentTypeError; // tslint:disable-line:variable-name
