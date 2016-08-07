import * as UtilTypeGuards from '@jali/util/type-guards';

import * as TypeGuards from '../type-guards';
import * as Iterables from '../iterables';

import NotificationMessage from './notification-message';

export default class StructuredError extends Error {
  public readonly innerError: Error | undefined;

  constructor()
  constructor(message: NotificationMessage)
  constructor(messages: Iterable<NotificationMessage>)
  constructor(innerError: Error)
  constructor(message: NotificationMessage, innerError: Error)
  constructor(messages: Iterable<NotificationMessage>, innerError: Error)
  /**
   * @todo ensure meaningful {@link NotificationMessage}.
   */
  constructor(
    messageOrMessagesOrError:
      NotificationMessage | Iterable<NotificationMessage> | Error | undefined = undefined,
    innerError: Error | undefined = undefined) {
    super(Class.resolveMessage(messageOrMessagesOrError)); // Also validates.


    this.innerError = innerError;

    if (UtilTypeGuards.isError(messageOrMessagesOrError)) {
      this.innerError = messageOrMessagesOrError;
    }

  }

  /**
   * Verifies the first constructor parameter and Resolves an error message from it for the
   * {@link Error} constructor.
   */
  private static resolveMessage(
      messageOrMessagesOrError:
        NotificationMessage | Iterable<NotificationMessage> | Error | undefined = undefined):
      string | undefined {
    if (TypeGuards.isNotificationMessage(messageOrMessagesOrError)) {
      return messageOrMessagesOrError.message;
    } else if (UtilTypeGuards.makeIsIterable(TypeGuards.isNotificationMessage)(
        messageOrMessagesOrError)) {
      let error = Iterables.error(messageOrMessagesOrError);

      if (error !== undefined) {
        return error.message;
      }
    }

    return undefined;
  }
}
// tslint:disable-next-line:variable-name
const Class = StructuredError;
