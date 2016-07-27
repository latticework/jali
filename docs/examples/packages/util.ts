import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';

//
function jali_util_example_01(): void {
  logIndented(1, `jali_util_example_01: Examples for module '@jali/util/errors'`);

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


  logIndented(2, `Example for function 'verifyNotNull'`);
  logException(3, () => functionWithParameters(null as any as number, 'value', true));

  console.log();

  // U+1680	OGHAM SPACE MARK
  logIndented(2, `Example for function 'verifyNotWhitespace'`);
  logException(3, () => functionWithParameters(1, '\u{1680}', true));

  console.log();

  logIndented(2, `Example for function 'verifyTruthy'`);
  logException(3, () => functionWithParameters(1, 'value', NaN as any as boolean));

  console.log();

  logIndented(2, `Example for function 'verifyArgument'`);
  logException(3, () => functionWithParameters(1, 'value with spaces', true));

  console.log();

  logIndented(2, `Example for function 'verifyArgument' with specified message function`);
  logException(3, () => functionWithParameters(20, 'value', true));
}

function logIndented(depth: number, message: string): void {
  const indentation = " ".repeat(4 * depth);
  const lines = message.split(/\r?\n/);
  const indentedLines = lines.map(l => indentation + l);
  const logMessage = indentedLines.join('\n');

  console.log(logMessage);
}

function logException(depth: number, fn: () => void): void {
  try { fn() } catch (err) { logIndented(depth, err.toString()); }
}

function jali_util_example_02(): void {
  logIndented(1, `jali_util_example_02: Examples for module '@jali/util/iterators'`);

  
}

logIndented(0, `utils.ts: Examples for package '@jali/util/errors'`);
console.log();
jali_util_example_01();
console.log();
jali_util_example_02();
