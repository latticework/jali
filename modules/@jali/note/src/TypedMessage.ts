import {NotificationMessage} from './NotificationMessage'
import { MessagePriority } from './MessagePriority'
import { MessageSeverity } from './MessageSeverity'

export class TypedMessage<Args> implements NotificationMessage {
    get priority(): MessagePriority {
        
    }
    readonly severity: MessageSeverity;
    readonly message: string;
    readonly args?: Args;
    objectKey?: string;
    propertyNames?: string[];

    protected constructor(readonly messageCode: string) {
        this.messageCode = messageCode;
    }
}

export class RegisteredMessage implements TypedMessage<Object> {
    private constructor() { }
}