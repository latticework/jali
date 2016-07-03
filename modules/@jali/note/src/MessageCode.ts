import MessageEncoding from './MessageEncoding';
import MessagePriority from './MessagePriority';

export default class MessageCode
{
    public constructor(
        public readonly messageCode: string, protected readonly messageEncoding?: MessageEncoding)
    {
        if (messageEncoding !== undefined) {

        }
        if (!messageEncoding.isValidCode(messageCode)) {
        }
    }

    public get priority(): MessagePriority {
        return this.messageEncoding.getMessagePriority(this.messageCode);
    }
}