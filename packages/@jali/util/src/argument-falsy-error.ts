import { default as ArgumentError } from './argument-error';

/**
 * Represents that an argument erroneously has a _falsy_ value.
 *
 * Throw this {@link Error} if a parameter must be _truthy_ and can't be represented by a more
 * specific argument error.
 *
 * @example <caption>The argument for the parameter item is falsy.</caption>
 * throw new ArgumentFalsyError('item');
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-errors">
 *    module <code>@jali/util/errors</code></a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">
 *    Definition of falsy</a> (MDN)
 * @see {@link verifyDefined}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentFalsyError extends ArgumentError {
  /**
   * Initializes a new instance of the {@link ArgumentFalsyError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    Specified message. Otherwise, a generic message will be used like *Argument must have a
   *    truthy value. Yours does not*.
   * @public
   * @since 0.0.1
   */
  public constructor(name?: string, message?: string) {
    super(name, Class.makeFalsyTypedMessage(message));
  }

  /**
   * Builds a default error message for subclasses.
   * @param {string}: [message] -
   *    Specified message. Otherwise, a generic message will be created like *Argument must have a
   *    truthy value. Yours ${type ? `is '${type}'` : 'does not'*.
   * @param {string}: [type] -
   *    value to display in the message. Default is to display no value.
   * @protected
   * @since 0.0.1
   */
  protected static makeFalsyTypedMessage(message?: string, type?: string) {
    return message ||
      `Argument must have a truthy value. Yours ${type ? `is '${type}'` : 'does not'}`;
  }
}
const Class = ArgumentFalsyError; // tslint:disable-line:variable-name  no-use-before-declare
