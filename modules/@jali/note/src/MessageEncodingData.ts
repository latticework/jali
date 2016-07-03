import MessageEncodingSegmentData from './MessageEncodingSegmentData'

interface MessageEncodingData {
    readonly schema: number,
    readonly schemaVersion: number,
    readonly authorityData: MessageEncodingSegmentData,
    readonly domainData: MessageEncodingSegmentData,
    readonly libraryData: MessageEncodingSegmentData,
    readonly priorityData: MessageEncodingSegmentData,
    readonly severityData: MessageEncodingSegmentData,
    readonly baseMessageCodeData: MessageEncodingSegmentData,
}

export default MessageEncodingData;