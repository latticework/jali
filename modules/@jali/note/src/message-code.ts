import { MessagePriority } from "@jali/core";

import MessageEncoding from "./message-encoding";
import * as StandardEncodings from "./standard-encodings";

export default class MessageCode {
  protected readonly messageEncoding: MessageEncoding;

  public constructor(
   public readonly messageCode: string, messageEncoding?: MessageEncoding) {
   this.messageEncoding = messageEncoding || StandardEncodings.standard;

   // if (!messageEncoding.isValidCode(messageCode)) {
   // }
  }

  public get priority(): MessagePriority {
    return this.messageEncoding.getMessagePriority(this.messageCode);
  }
}
