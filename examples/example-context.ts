import 'reflect-metadata';


import * as fs from 'fs';
import { EOL } from 'os';
import * as path from 'path';

import * as mkdirp from 'mkdirp';
import * as sanitize from 'sanitize-filename';


import Example from './example';
import ExampleMetadata from './example-metadata'
import FilePath from './file-path';


export default class ExampleContext {
  public readonly console: Console;

  private _markerIndex = 0;
  public get markerIndex() { return this._markerIndex; }

  public readonly mdFile: string;
  public readonly metadata: ExampleMetadata

  public constructor(
      public readonly filePath: FilePath,
      public readonly obj: Object,
      public readonly fn: Function | undefined,
      public readonly indent = 2,
      console?: Console) {
    const clsBaseFileName = sanitize(obj.constructor.name);
    const fnBaseFileName = fn ? `${clsBaseFileName}_${sanitize(fn.name)}` : undefined;

    this.mdFile = fn
      ? path.join(filePath.mdRootDir, fnBaseFileName + '.md')
      : path.join(filePath.mdRootDir, clsBaseFileName + '.md');

    mkdirp.sync(filePath.mdRootDir);
    fs.closeSync(fs.openSync(this.mdFile, 'w'));

    this.console = console || global.console;

    const clsMetadata = Example.getMetadata(obj.constructor);
    const fnMetadata = fn ? Example.getMetadata(obj, fn.name) : undefined;

    this.metadata = {
      pkg: fnMetadata && fnMetadata.pkg || clsMetadata.pkg,
      module: fnMetadata && fnMetadata.module || clsMetadata.module,
      type: fnMetadata && fnMetadata.member || clsMetadata.type,
      member: fnMetadata && fnMetadata.member || clsMetadata.member,
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

    return indentedLines.join(EOL);
  }

  public log(message: string = '') {
    this.console.log(message);
    fs.appendFileSync(this.mdFile, message + EOL);
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
