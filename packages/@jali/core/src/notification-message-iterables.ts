import { Errors, Iterables } from '@jali/util';

import MessageSeverity from './message-severity';
import NotificationMessage from './notification-message';

export function error(messages: Iterable<NotificationMessage>):
    NotificationMessage | undefined {
  Errors.verifyIterable('messages', messages);

  return Iterables.find(get_Errors(messages));
}

export function get_Errors(messages: Iterable<NotificationMessage>):
    Iterable<NotificationMessage> {
  Errors.verifyIterable('messages', messages);

  return Iterables.filter(messages, message => message.severity <= MessageSeverity.Error);
}
