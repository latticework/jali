import { default as ArgumentError } from './argument-error';

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
