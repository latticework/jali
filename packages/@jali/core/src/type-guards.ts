import NotificationMessage from './notification-message';

export function isNotificationMessage(arg: any): arg is NotificationMessage {
  const message = arg as NotificationMessage;

  return  message.messageCode !== undefined
    && message.priority !== undefined
    && message.severity !== undefined
    && message.message !== undefined;
}
