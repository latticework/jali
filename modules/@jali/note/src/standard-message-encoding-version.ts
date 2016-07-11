import { MessagePriority, MessageSeverity } from "@jali/core";

import MessageEncodingVersion from "./message-encoding-version";
import MessageEncodingData from "./message-encoding-data";
import MessageEncodingSegmentData from "./message-encoding-segment-data";

export default class StandardMessageEncodingVersion implements MessageEncodingVersion {
    public constructor(public readonly data: MessageEncodingData) {
    }

    public get version() { return this.data.schemaVersion; }

    public isValidCode(_messageCode: string): boolean {
        throw new Error();
    }

    public getAuthorityCode(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.authorityData);
    }

    public getDomainCode(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.domainData);
    }

    public getLibraryCode(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.libraryData);
    }

    public getMessagePriority(messageCode: string): MessagePriority {
        return this.getSegmentValue(messageCode, this.data.priorityData);
    }

    public getMessageSeverity(messageCode: string): MessageSeverity {
        return this.getSegmentValue(messageCode, this.data.severityData);
    }

    public getBaseMessageCode(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.baseMessageCodeData);
    }

    private getSegmentValue(_messageCode: string, _data: MessageEncodingSegmentData): number {
        throw new Error();
        // const totalLength = data.position + length;
        // if (messageCode.length < totalLength) {
        //     throw 
        // }
    }
}
