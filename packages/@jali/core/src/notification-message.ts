import MessagePriority from './message-priority';
import MessageSeverity from './message-severity';

interface NotificationMessage {
  readonly messageCode: string;
  readonly priority: MessagePriority;
  readonly severity: MessageSeverity;
  readonly message: string;
  readonly args?: Object;
  readonly objectKey?: string;
  readonly propertyNames?: string[];
}

export default NotificationMessage;
