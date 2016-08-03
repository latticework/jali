import 'reflect-metadata';

import { createWriteStream, WriteStream } from 'fs';

import Example from './example';
import ExampleMetadata from './example-metadata'

export default class ExampleContext {
  public readonly metadata: ExampleMetadata
  public readonly console: Console;
  private readonly stream: WriteStream;
  private _markerIndex = 0;
  public get markerIndex() { return this._markerIndex; }

  public constructor(
      public readonly obj: Object,
      public readonly fn: Function | undefined,
      public readonly path: string,
      public readonly indent = 2,
      console?: Console) {
    this.stream = createWriteStream(path);
    this.console = console || global.console;

    const classMetadata = Example.getMetadata(obj.constructor);
    const functionMetadata = fn && Example.getMetadata(obj, fn.name);

    this.metadata = {
      pkg: functionMetadata && functionMetadata.pkg || classMetadata.pkg,
      module: functionMetadata && functionMetadata.module || classMetadata.module,
      type: functionMetadata && functionMetadata.member || classMetadata.type,
      member: functionMetadata && functionMetadata.member || classMetadata.member,
    }
  }

  public static indentLines(
      depth: number, message: string, indent = 2, width = 80, marker?: string): string {

    const markerLength = (marker) ? marker.length : 0;
    const indentationLength = indent * depth;
    const columnWidth = width - indentationLength - markerLength;
    const indentation = ' '.repeat(indentationLength);
    const lines = message.split(/\r?\n/);

    let indentedLines: string[] = [];

    for (const line of lines) {
      let marked = !marker ? true : false;
      let lineFragment = line;

      while (lineFragment.length > columnWidth)
      {
        let lastSpaceIndex = lineFragment.lastIndexOf(' ', columnWidth - 1);

        if (lastSpaceIndex === -1) {
          let indentedLine = indentation + lineFragment.substring(0, columnWidth);

          if (!marked) {
            indentedLine += ' '.repeat(columnWidth - indentedLine.length - markerLength) + marker;
            marked = true;
          }

          indentedLines.push(indentedLine);

          lineFragment = lineFragment.substr(columnWidth);
        }
        else {
          let indentedLine = indentation + lineFragment.substring(0, lastSpaceIndex);
          if (!marked){
            indentedLine += ' '.repeat(columnWidth - indentedLine.length - markerLength) + marker;
            marked = true;
          }

          indentedLines.push(indentedLine);

          if (lastSpaceIndex === lineFragment.length) {
            lineFragment = '';
          }
          else {
            lineFragment = lineFragment.substr(lastSpaceIndex + 1);
          }
        }
      }

      let indentedLine = indentation + lineFragment;

      if (!marked) {
        indentedLine += ' '.repeat(columnWidth - line.length - markerLength) + marker;
        marked = true;
      }

      indentedLines.push(indentedLine);
    }

    return indentedLines.join('\n');
  }

  public log(message: string = '') {
    this.console.log(message);
    this.stream.write(message + '\n');
  }

  public logIndented(depth: number, message: string, indent = 2, width = 80, marker?: string | boolean): void {

    const logMessage = Class.indentLines(depth, message, indent, width, this.getMarker(marker));

    this.log(logMessage);
  }

  public logException(depth: number, fn: () => void, indent = 2, width = 80, marker?: string | boolean): void {
    try { fn() } catch (err) { this.logIndented(depth, err.toString(), indent, width, this.getMarker(marker)); }
  }

  private getMarker(marker?: string | boolean): string | undefined {
    if (!marker) {
      return undefined;
    }

    if (typeof marker === 'string') {
      return marker;
    }

    const markerNumber = this._markerIndex + 1;
    this._markerIndex = this._markerIndex + 1;

    if (markerNumber <= 20) {
      return String.fromCharCode(0x2460 + markerNumber);
    }

    const markerNumerals = markerNumber.toString();

    return [...markerNumerals].map(char => String.fromCharCode(0x2460 + parseInt(char))).join();
  }
}
const Class = ExampleContext;
