export default class InvalidStateError extends Error {
  constructor(message?: string) {
    super(Class.makeMessage(message));
  }

  private static makeMessage(specified?: string) {
    return specified || `Function called against data in an invalid state.`;
  }
}
const Class = InvalidStateError; // tslint:disable-line:variable-name
