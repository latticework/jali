import * as Iterables from '@jali/util/iterables';

import MessageSeverity from './message-severity';
import NotificationMessage from './notification-message';

export function get_Error(messages: Iterable<NotificationMessage>):
    NotificationMessage | undefined {
  return Iterables.firstOrDefault(get_Errors(messages));
}

export function get_Errors(messages: Iterable<NotificationMessage>):
    Iterable<NotificationMessage> {
  return Iterables.where(messages, message => message.severity <= MessageSeverity.Error);
}
