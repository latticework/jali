import { MessagePriority } from './MessagePriority'
import { MessageSeverity } from './MessageSeverity'
import { MessageEncoding } from './MessageEncoding'
import { MessageEncodingData } from './MessageEncodingData'

export class StandardMessageEncoding implements MessageEncoding {
    public constructor(public readonly versions: Map<number, StandardMessageEncodingVersion>) {
    }

    public isValidCode(messageCode: string) {
    }
}
