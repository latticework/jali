import { default as ArgumentError } from './argument-error';

export default class ArgumentTypeError extends ArgumentError {
  constructor(type: string, name?: string, message?: string) {
    super(name, Class.makeTypeMessage(type, message));
  }

  protected static makeTypeMessage(type: string, message?: string) {
    return message || `Argument must have type '${type}'. Yours is not`;
  }
}
const Class = ArgumentTypeError; // tslint:disable-line:variable-name
