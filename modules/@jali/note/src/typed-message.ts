import { MessagePriority, MessageSeverity, NotificationMessage } from "@jali/core";

import MessageCode from './message-code'

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
