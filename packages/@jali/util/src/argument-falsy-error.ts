import { default as ArgumentError } from './argument-error';

/**
 * Represents that an argument erroneously has a _falsy_ value.
 *
 * Throw this {@link Error} if a parameter must be _truthy_.
 *
 * @example <caption>The argument for the parameter item is falsy.</caption>
 * throw new ArgumentFalseError('item');
 *
 * @see {@link verifyTruthy}
 * @since 0.0.1
 */
export default class ArgumentFalsyError extends ArgumentError {
  public constructor(name?: string, message?: string) {
    super(name, Class.makeFalsyTypedMessage(message));
  }

  protected static makeFalsyTypedMessage(message?: string, type?: string) {
    return message ||
      `Argument must have a truthy value. Yours ${type ? `is '${type}'` : 'does not'}`;
  }
}
const Class = ArgumentFalsyError; // tslint:disable-line:variable-name
