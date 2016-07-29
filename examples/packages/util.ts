// import * as path from 'path';

import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';

// import LogOptions from '../log-options';
import Example from '../example';
import ExampleWriter from '../example-writer'

export default class UtilExamples {
  /**
   *
   */
  @Example('@jali/util', '@jali/util/errors')
  public jali_util_example_01(writer: ExampleWriter): void {
    writer.logIndented(1, `jali_util_example_01: Examples for module '@jali/util/errors'`);

    function functionWithParameters(
        notNullNumber: number, notWhitespaceString: string, truthyBoolean: boolean): void {
      Util.Errors.verifyNotNull('nonNullNumber', notNullNumber);
      Errors.verifyNotWhitespace('notWhitespaceString', notWhitespaceString);
      verifyTruthy('truthyBoolean', truthyBoolean);

      verifyArgument('notWhitespaceString', notWhitespaceString, arg => !arg.match(/\w/u));

      verifyArgument(
        'notNullNumber',
        notNullNumber,
        arg => arg >= 10 && arg < 20,
        arg => `Argument must be between 10 and 19. Yours is '${arg}'`)
    }


    writer.logIndented(2, `Example for function 'verifyNotNull'`);
    writer.logException(3, () => functionWithParameters(null as any as number, 'value', true));

    console.log();

    // U+1680	OGHAM SPACE MARK
    writer.logIndented(2, `Example for function 'verifyNotWhitespace'`);
    writer.logException(3, () => functionWithParameters(1, '\u{1680}', true));

    console.log();

    writer.logIndented(2, `Example for function 'verifyTruthy'`);
    writer.logException(3, () => functionWithParameters(1, 'value', NaN as any as boolean));

    console.log();

    writer.logIndented(2, `Example for function 'verifyArgument'`);
    writer.logException(3, () => functionWithParameters(1, 'value with spaces', true));

    console.log();

    writer.logIndented(2, `Example for function 'verifyArgument' with specified message function`);
    writer.logException(3, () => functionWithParameters(20, 'value', true));
  }

  /**
   *
   */
  @Example('@jali/util', '@jali/util/iterators')
  public jali_util_example_02(writer: ExampleWriter): void {
    writer.logIndented(1, `jali_util_example_02: Examples for module '@jali/util/iterators'`);


  }

}

////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function utilExamples(options: LogOptions) {
//   const writer = new ExampleWriter(
//     options.rootDir, options.indent, options.console);

//   writer.logIndented(0, `utils.ts: Examples for package '@jali/util/errors'`);
//   writer.log();
//   jali_util_example_01(writer);
//   console.log();
//   jali_util_example_02(writer);
// }

// function executeExample(options: LogOptions, fn: (options: LogOptions) => void): void {
//   const filePath = path.resolve(options.rootDir, fn.name + ".md");
//   const writer = new ExampleWriter(options.)
// }
