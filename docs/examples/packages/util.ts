import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';

//
function jali_util_example_01() {
  console.log('jali_util_example_01');

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
      ""
      )
  }

  console.log('@jali/util/')
  try
  {
    functionWithParameters(null as any as number, 'value', true)
  }
}

jali_util_example_01();
