import { MessagePriority } from './MessagePriority'
import { MessageSeverity } from './MessageSeverity'

export interface NotificationMessage {
    readonly messageCode: string;
    readonly priority: MessagePriority;
    readonly severity: MessageSeverity;
    readonly message: string;
    readonly args?: Object;
    readonly objectKey?: string;
    readonly propertyNames?: string[];

}