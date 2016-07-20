import { default as ArgumentError } from './argument-error';

export default class ArgumentWhitespaceStringError extends ArgumentError {
  constructor(name?: string, message?: string) {
    super(
      name,
      message || 'Argument must contain non-whitespace characters. Yours has only whitespace');
  }
}
