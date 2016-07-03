import MessageEncodingVersion from './MessageEncodingVersion';
import MessageEncodingData from './MessageEncodingData';
import MessageEncodingSegmentData from './MessageEncodingSegmentData';
import MessagePriority from './MessagePriority';
import MessageSeverity from './MessageSeverity';

export default class StandardMessageEncodingVersion implements MessageEncodingVersion {
    public constructor(public readonly data: MessageEncodingData) {
    }

    public get version() { return this.data.schemaVersion }

    public isValidCode(messageCode: string): boolean {
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

    public getMessagePriority(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.priorityData);
    }

    public getMessageSeverity(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.severityData);
    }

    public getBaseMessageCode(messageCode: string): number {
        return this.getSegmentValue(messageCode, this.data.baseMessageCodeData);
    }

    private getSegmentValue(messageCode: string, data: MessageEncodingSegmentData) : number {
        throw new Error();
        // const totalLength = data.position + length;
        // if (messageCode.length < totalLength) {
        //     throw 
        // }
    }
}
