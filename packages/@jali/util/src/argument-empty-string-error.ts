import { default as ArgumentError } from "./argument-error";

export default class ArgumentEmptyStringError extends ArgumentError {
  constructor(name?: string, message?: string) {
    super(name, message || "Argument must not be an empty string. Yours is empty");
  }
}
