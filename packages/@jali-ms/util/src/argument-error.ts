
/**
 * Represents that an argument has violated a requirement.
 *
 * Throw this {@link Error} if a parameter has violated a requirement that can't be represented by
 * a more specific argument error.
 *
 * > **Note:** {@link ArgumentError} is the base class for all the Jali argument errors.
 *
 * > **Note:** The default message in all Jali argument error classes begin with
 * > **Error in argument** if `name` is not specified; otherwise **Error in argument '**
 * > *argument-name* **'** is used. If `message` is specified,  a colon is prefixed. All Jali
 * > subclasses specify a message.
 *
 * @example <caption>The argument for the parameter pairs has an odd number of elements.</caption>
 * throw new ArgumentError('pairs', `Argument must have an even number of elements. Yours has ` +
 *   `'${pairs.length}'`);
 *
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-errors">
 *    module <code>@jali-ms/util/errors</code></a>
 * @see {@link ArgumentFalsyError}
 * @see {@link verifyArgument}
 * @see {@link verifyTruthy}
 * @public
 * @since 0.0.1
 */
export default class ArgumentError extends Error {
  /**
   * Initializes a new instance of the {@link ArgumentError} class.
   *
   * @param {string} [name] -
   *    The parameter name. Default is no name.
   * @param {string} [message] -
   *    An optional message. Default is no message. See class documentation for more details.*.
   * @public
   * @since 0.0.1
   */
  public constructor(name?: string, message?: string) {
    super(Class.makeMessage(name, message));
  }

  /** @private */
  private static makeMessage(name?: string, message?: string) {
    return `Error in argument${name ? ` '${name}'` : ''}${(message) ? `: ${message}` : ''}`;
  }
}
const Class = ArgumentError; // tslint:disable-line:variable-name no-use-before-declare
