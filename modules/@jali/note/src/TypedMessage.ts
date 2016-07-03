import NotificationMessage from './NotificationMessage'
import MessageCode from './MessageCode'
import MessagePriority from './MessagePriority'
import MessageSeverity from './MessageSeverity'

export default class TypedMessage<Args> implements NotificationMessage {
    private _messageCode: MessageCode;

    public get messageCode(): string {
        return this._messageCode.messageCode;
    }

    get priority(): MessagePriority {
        return this._messageCode.priority;
    }
    readonly severity: MessageSeverity;
    readonly message: string;
    readonly args?: Args;
    objectKey?: string;
    propertyNames?: string[];

    protected constructor(messageCode: string) {
        this._messageCode = new MessageCode(messageCode);
    }
}
