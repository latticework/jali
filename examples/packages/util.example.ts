// import * as path from 'path';

import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';
import * as Iterables from '@jali/util/iterables';

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
   * @/jali/util/iterables.concat
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'concat')
  public jali_util_iterators_concat(writer: ExampleContext): void {
    writer.logIndented(2, `Concatenate three sequences.`, '①');
    const weekendDays = ['Sunday', 'Saturday'];
    const workWeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const daysOfWeek = Iterables.concat([weekendDays[0]], workWeekDays, [weekendDays[1]]);
    writer.logIndented(3, `Days of Week: '${Iterables.toArray(daysOfWeek)}`);
  }

  /**
   * @/jali/util/iterables.every
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'every')
  public jali_util_iterators_every(writer: ExampleContext): void {
    writer.logIndented(2, `Test for only even numbers`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const result = Iterables.every(numbers, e => e % 2 === 0);

    const output =
      `Sequence '${numbers}' ${result ? 'has' : 'does not have'} only even values.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Test that all elements are multiple of position`, '②');
    const numbers2 = [1, 6, 6, 24];
    const multiples = Iterables.every(numbers2, (e, i) => e / (i + 1) % 1 === 0);

    const output2 =
      `Elements of sequence '${numbers2}' ${multiples ? 'are' : 'are not'} multiples of their position.`;

    writer.logIndented(3, output2);
  }

  /**
   * @/jali/util/iterables.filter
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'filter')
  public jali_util_iterators_filter(writer: ExampleContext): void {
    writer.logIndented(2, `Select even numbers`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const evens = Iterables.filter(numbers, e => e % 2 === 0);

    const output =
      `Sequence '${numbers}' has these even values: '${Iterables.toArray(evens)}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Select every other element`, '②');
    const numbers2 = [1, 6, 6, 24];
    const evenIndexed = Iterables.filter(numbers2, (_, i) => i % 2 === 0);

    const output2 =
      `Even indexed elements of sequence '${numbers2}' are '${Iterables.toArray(evenIndexed)}'.`;

    writer.logIndented(3, output2);
  }

  /**
   * @/jali/util/iterables.find
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'find')
  public jali_util_iterators_find(writer: ExampleContext): void {
    writer.logIndented(2, `Find first element divisible by 5`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const divisible = Iterables.find(numbers, e => e % 5 === 0);

    const output =
      `The first element of '${numbers}' divisible by five is: '${divisible}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Select fourth element`, '②');
    const numbers2 = [1, 6, 6, 24];
    const fourth = Iterables.find(numbers2, (_, i) => i === 3);

    const output2 =
      `The fourth element of sequence '${numbers2}' is '${fourth}'.`;

    writer.logIndented(3, output2);
  }

  /**
   * @/jali/util/iterables.first
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'first')
  public jali_util_iterators_first(writer: ExampleContext): void {
    writer.logIndented(2, `Get first element`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const first = Iterables.first(numbers);

    const output =
      `The first element of '${numbers}' is: '${first}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Try to get the first element of an empty sequence`, '②');
    const emptyNumbers: number[] = [];
    writer.logException(3, () => Iterables.first(emptyNumbers));
  }

  /**
   * @/jali/util/iterables.firstOrDefault
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'firstOrDefault')
  public jali_util_iterators_firstOrDefault(writer: ExampleContext): void {
    writer.logIndented(2, `Get first element`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const firstOrDefault = Iterables.firstOrDefault(numbers);

    const output =
      `The firstOrDefault element of '${numbers}' is: '${firstOrDefault}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Try to get the first element of an empty sequence`, '②');
    const emptyNumbers: number[] = [];
    const defaultValue = Iterables.firstOrDefault(emptyNumbers, 999);

    writer.logIndented(
      3,
      `Tried to get the first value of an empty sequence '${emptyNumbers}'. Got default value ` +
      `'${defaultValue}', instead.`);
  }

  /**
   * @/jali/util/iterables.includes
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'includes')
  public jali_util_iterators_includes(writer: ExampleContext): void {
    writer.logIndented(2, `Find an element`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const didFind = Iterables.includes(numbers, 999);
    const output = `Was '999' found in sequence '${numbers}'? '${didFind}'.`;
    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Don't find an element starting at an index`, '②');
    const numbers2 = [1, 6, 6, 24];
    const didNotFind = Iterables.includes(numbers2, 1, 2);
    const output2 = `Was '1' found in sequence '${numbers2}' starting at index '2'? '${didNotFind}'.`;

    writer.logIndented(3, output2);
  }

  /**
   * @/jali/util/iterables.map
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'map')
  public jali_util_iterators_map(writer: ExampleContext): void {
    writer.logIndented(2, `Transform to objects`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const objects = Iterables.map(numbers, e => { return {id: e} });

    const output =
      `Sequence '${Iterables.toArray(objects)}' has these Ids: '${numbers}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Select every other element`, '②');
    const numbers2 = [1, 6, 6, 24];
    const evenIndexed = Iterables.map(numbers2, (_, i) => i % 2 === 0);

    const output2 =
      `Even indexed elements of sequence '${numbers2}' are '${Iterables.toArray(evenIndexed)}'.`;

    writer.logIndented(3, output2);
  }

}

