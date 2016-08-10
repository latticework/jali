import { Errors, Iterables } from '@jali/util';

import { MessagePriority, MessageSeverity } from '@jali/core';

import MessageEncoding from './message-encoding';
import MessageEncodingVersion from './message-encoding-version';
// import MessageEncodingData from './message-encoding-data';

export default class StandardMessageEncoding implements MessageEncoding {
  private readonly versionMap: Map<number, MessageEncodingVersion>;

  public constructor(public readonly versions: Iterable<MessageEncodingVersion>) {
    Errors.verifyIterable('versions', versions);

    this.versionMap = createEncodingVersionMap(versions);
  }

//    public static standardEncodings: MessageEncoding[] = [
//        new StandardMessageEncoding(createEncodingVersionMap())
//    ];

  /**
   * @todo implement
   */
  public isValidCode(messageCode: string): boolean {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    throw new Error('Not Implemented.');
  }

  getAuthorityCode(messageCode: string): number {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getAuthorityCode(messageCode);
  }

  getDomainCode(messageCode: string): number {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getDomainCode(messageCode);
  }

  getLibraryCode(messageCode: string): number {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getLibraryCode(messageCode);
  }

  getMessagePriority(messageCode: string): MessagePriority {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getMessagePriority(messageCode);
  }

  getMessageSeverity(messageCode: string): MessageSeverity {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getMessageSeverity(messageCode);
  }

  getBaseMessageCode(messageCode: string): number {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    const version = this.getValidVersion(messageCode);
    return version.getBaseMessageCode(messageCode);
  }


  /**
   * @todo implement
   */
  private getValidVersion(messageCode: string): MessageEncodingVersion {
    Errors.verifyNotWhitespace('messageCode', messageCode);

    throw new Error('Not Implemented.');
  }
}

function createEncodingVersionMap(encodingVersions: Iterable<MessageEncodingVersion>):
    Map<number, MessageEncodingVersion> {
  return Iterables.toMap(encodingVersions, v => v.version);
}
