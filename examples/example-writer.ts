import { createWriteStream, WriteStream } from 'fs';

// TODO: Add disposables.
export default class ExampleWriter {
  public readonly console: Console;

  public constructor(
      public readonly path: string, public readonly indent = 2, console?: Console) {
    this.stream = createWriteStream(path);
    this.console = console || global.console;
  }

  public static indentLines(
      depth: number, message: string, indent = 2, width = 80): string {
    const indentationLength = indent * depth;
    const columnWidth = width - indentationLength;
    const indentation = " ".repeat(indentationLength);
    const lines = message.split(/\r?\n/);


    let indentedLines: string[] = [];

    for (const line of lines) {
      let lineFragment = line;

      while (lineFragment.length > columnWidth)
      {
        let lastSpaceIndex = lineFragment.lastIndexOf(' ', columnWidth - 1);

        if (lastSpaceIndex === -1) {
          indentedLines.push(indentation + lineFragment.substring(0, columnWidth));
          lineFragment = lineFragment.substr(columnWidth);
        }
        else {
          indentedLines.push(indentation + lineFragment.substring(0, lastSpaceIndex));

          if (lastSpaceIndex === lineFragment.length) {
            lineFragment = '';
          }
          else {
            lineFragment = lineFragment.substr(lastSpaceIndex + 1);
          }
        }
      }

      indentedLines.push(indentation + lineFragment);
    }

    return indentedLines.join('\n');
  }

  public log(message: string = '') {
    this.console.log(message);
    this.stream.write(message + '\n');
  }

  public logIndented(depth: number, message: string, indent = 2, width = 80): void {

    const logMessage = Class.indentLines(depth, message, indent, width);

    this.log(logMessage);
  }

  public logException(depth: number, fn: () => void): void {
    try { fn() } catch (err) { this.logIndented(depth, err.toString()); }
  }

  private readonly stream: WriteStream;
}
const Class = ExampleWriter;