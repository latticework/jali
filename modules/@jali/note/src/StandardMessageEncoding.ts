//import { toMap } from '@jail/util'
//import { toMap } from '../../../../dist/packages-dist/util'
import MessagePriority from './MessagePriority';
import MessageSeverity from './MessageSeverity';
import MessageEncoding from './MessageEncoding';
import MessageEncodingData from './MessageEncodingData';
import MessageEncodingVersion from './MessageEncodingVersion';

export default class StandardMessageEncoding implements MessageEncoding {
    private readonly _versionMap: Map<number, MessageEncodingVersion>

    public constructor(public readonly versions: Iterable<MessageEncodingVersion>) {
        this._versionMap = createEncodingVersionMap(versions);
    }

//    public static standardEncodings: MessageEncoding[] = [
//        new StandardMessageEncoding(createEncodingVersionMap())
//    ];

    public isValidCode(messageCode: string): boolean {
        throw new Error('Not Implemented.');
    }

    getAuthorityCode(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getAuthorityCode(messageCode);
    }

    getDomainCode(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getDomainCode(messageCode);
    }

    getLibraryCode(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getLibraryCode(messageCode);
    }

    getMessagePriority(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getMessagePriority(messageCode);
    }

    getMessageSeverity(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getMessageSeverity(messageCode);
    }

    getBaseMessageCode(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getBaseMessageCode(messageCode);
    }

    private getValidVersion(messageCode: string): MessageEncodingVersion {
        throw new Error('Not Implemented.');
    }
}

function createEncodingVersionMap(encodingVersions: Iterable<MessageEncodingVersion>): 
        Map<number, MessageEncodingVersion> {
    return toMap(encodingVersions, v => v.version);
}

