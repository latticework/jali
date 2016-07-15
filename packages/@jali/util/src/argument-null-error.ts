import { default as ArgumentFalsyError } from './argument-falsy-error';

export default class ArgumentNullError extends ArgumentFalsyError {
  constructor(name?: string, message?: string) {
    super(name, ArgumentFalsyError.makeFalsyTypedMessage(message, 'null'));
  }
}
