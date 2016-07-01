import { MessageEncoding } from './MessageEncoding';

export class MessageCode
{
    public constructor(
        public readonly messageCode: string, protected readonly messageEncoding: MessageEncoding)
    {
        if (!messageEncoding.isValidCode(messageCode)) {
        }
    }
}