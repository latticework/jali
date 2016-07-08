import * as Iterables from "@jail/util/iterables";

import { MessagePriority, MessageSeverity } from "@jali/core";

import MessageEncoding from "./message-encoding";
import MessageEncodingVersion from "./message-encoding-version";
//import MessageEncodingData from "./message-encoding-data";

export default class StandardMessageEncoding implements MessageEncoding {
    private readonly _versionMap: Map<number, MessageEncodingVersion>

    public constructor(public readonly versions: Iterable<MessageEncodingVersion>) {
        this._versionMap = createEncodingVersionMap(versions);
    }

//    public static standardEncodings: MessageEncoding[] = [
//        new StandardMessageEncoding(createEncodingVersionMap())
//    ];

    public isValidCode(_messageCode: string): boolean {
        throw new Error("Not Implemented.");
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

    getMessagePriority(messageCode: string): MessagePriority {
        const version = this.getValidVersion(messageCode);
        return version.getMessagePriority(messageCode);
    }

    getMessageSeverity(messageCode: string): MessageSeverity {
        const version = this.getValidVersion(messageCode);
        return version.getMessageSeverity(messageCode);
    }

    getBaseMessageCode(messageCode: string): number {
        const version = this.getValidVersion(messageCode);
        return version.getBaseMessageCode(messageCode);
    }

    private getValidVersion(_messageCode: string): MessageEncodingVersion {
        throw new Error("Not Implemented.");
    }
}

function createEncodingVersionMap(encodingVersions: Iterable<MessageEncodingVersion>): 
        Map<number, MessageEncodingVersion> {
    return Iterables.toMap(encodingVersions, v => v.version);
}

