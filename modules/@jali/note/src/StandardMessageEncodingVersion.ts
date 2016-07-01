import {MessageEncodingVersion } from './MessageEncodingVersion'
import { MessagePriority } from './MessagePriority'
import { MessageSeverity } from './MessageSeverity'

export class StandardMessageEncodingVersion implements MessageEncodingVersion {
    isValidCode(messageCode: string);
    getAuthorityCode(messageCode: string);
    getDomainCode(messageCode: string);
    getLibraryCode(messageCode: string);
    getMessagePriority(messageCode: string);
    getMessageSeverity(messageCode: string);
    getBaseMessageCode(messageCode: string);
}
