import { MessagePriority, MessageSeverity, NotificationMessage } from '@jali-ms/core';

import MessageCode from './message-code';

export default class TypedMessage<Args> implements NotificationMessage {
  public get messageCode(): string {
    return this.innerMessageCode.messageCode;
  }

  get priority(): MessagePriority {
    return this.innerMessageCode.priority;
  }
  readonly severity: MessageSeverity;
  readonly message: string;
  readonly args?: Args;
  objectKey?: string;
  propertyNames?: string[];

  protected constructor(messageCode: string) {
    this.innerMessageCode = new MessageCode(messageCode);
  }

  private innerMessageCode: MessageCode;
}
