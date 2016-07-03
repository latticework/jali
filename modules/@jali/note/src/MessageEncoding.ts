import MessageEncodingVersion from './MessageEncodingVersion';

interface MessageEncoding {
    versions: Iterable<MessageEncodingVersion>;
    
    isValidCode(messageCode: string): boolean;
    getAuthorityCode(messageCode: string): number;
    getDomainCode(messageCode: string): number;
    getLibraryCode(messageCode: string): number;
    getMessagePriority(messageCode: string): number;
    getMessageSeverity(messageCode: string): number;
    getBaseMessageCode(messageCode: string): number;
}

export default MessageEncoding;