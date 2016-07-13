
const Class = ArgumentError; // tslint:disable-line:variable-name
export default class ArgumentError extends Error {
  public constructor(name?: string, message?: string) {
    super(Class.makeMessage(name, message));
  }

  private static makeMessage(name?: string, message?: string) {
    return `Error in argument${name ? ` '${name}'` : ""}${(message) ? `: ${message}` : ""}`;
  }
}
