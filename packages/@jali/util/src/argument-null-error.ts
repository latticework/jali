import { default as ArgumentFalsyError } from './argument-falsy-error';

export default class ArgumentNullError extends ArgumentFalsyError {
  constructor(name?: string, message?: string) {
    super(name, message || `Argument must have a non-null value. Yours is 'null'`);
  }
}
