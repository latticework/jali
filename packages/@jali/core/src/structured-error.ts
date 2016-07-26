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
  constructor(
    messageOrMessagesOrError:
      NotificationMessage | Iterable<NotificationMessage> | Error | undefined = undefined,
    innerError: Error | undefined = undefined) {
    super(resolveMessage(messageOrMessagesOrError));

    this.innerError = innerError;

    if (UtilTypeGuards.isError(messageOrMessagesOrError)) {
      this.innerError = messageOrMessagesOrError;
    }
  }
}

function resolveMessage(
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
