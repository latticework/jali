import { Errors } from '@jali/util';

import { MessagePriority } from '@jali/core';

import MessageEncoding from './message-encoding';
import * as StandardEncodings from './standard-encodings';

export default class MessageCode {
  public constructor(
    public readonly messageCode: string, messageEncoding?: MessageEncoding) {
  Errors.verifyString('messageCode', messageCode);
  if (messageEncoding) { Errors.verifyObject('messageEncoding', messageEncoding); }

  this.messageEncoding = messageEncoding || StandardEncodings.standard;

   // if (!messageEncoding.isValidCode(messageCode)) {
   // }
  }

  public get priority(): MessagePriority {
    return this.messageEncoding.getMessagePriority(this.messageCode);
  }

  protected readonly messageEncoding: MessageEncoding;
}
