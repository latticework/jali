// import * as path from 'path';

import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';

import Example from '../example';
import ExampleContext from '../example-context'

@Example('@jali/util')
export default class jali_util {

  @Example('@jali/util', '@jali/util/errors')
  public jali_util_errors(writer: ExampleContext): void {
    // Demonstrates verifying function arguments for low-level libraries. In service operations,
    // use Jali Notification Messages instead.
    function functionWithParameters(
        notNullNumber: number, notWhitespaceString: string, truthyBoolean: boolean): void {

      // Verifying JavaScript type or common scenarios. Often redundant in TypeScript but needed if
      // called otherwise. See examples ①, ②, & ③.
      Util.Errors.verifyNotNull('nonNullNumber', notNullNumber);
      Errors.verifyNotWhitespace('notWhitespaceString', notWhitespaceString);
      verifyTruthy('truthyBoolean', truthyBoolean);

      // Verifying invariants. In this case, the argument cannot contain a whitespace character
      // anywhere. See example ④.
      verifyArgument('notWhitespaceString', notWhitespaceString, arg => !arg.match(/\w/u));

      // Verifying with a custom message. In this case, the permitted range is specified. See
      // example ⑤.
      verifyArgument(
        'notNullNumber',
        notNullNumber,
        arg => arg >= 10 && arg < 20,
        arg => `Argument must be between 10 and 19. Yours is '${arg}'`)
    }

    writer.logIndented(2, `Example for function 'verifyNotNull'`, '①');
    writer.logException(3, () => functionWithParameters(null as any as number, 'value', true));

    writer.log();

    writer.logIndented(2, `Example for function 'verifyNotWhitespace'`, '②');
    writer.logException(3, () => functionWithParameters(1, ' \t\v', true));

    writer.log();

    writer.logIndented(2, `Example for function 'verifyTruthy'`, '③');
    writer.logException(3, () => functionWithParameters(1, 'value', NaN as any as boolean));

    writer.log();

    // U+1680	OGHAM SPACE MARK
    writer.logIndented(2, `Example for function 'verifyArgument'`, '④');
    writer.logException(3, () => functionWithParameters(1, 'HasA\u{1680}Space', true));

    writer.log();

    writer.logIndented(
      2, `Example for function 'verifyArgument' with specified message function`, '⑤');

    writer.logException(3, () => functionWithParameters(20, 'value', true));

    writer.log();
  }

  /**
   *
   */
  @Example('@jali/util', '@jali/util/iterators')
  public jali_util_iterators(_writer: ExampleContext): void {


  }

}

