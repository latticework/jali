// import * as path from 'path';

import * as Util from '@jali/util';
import * as Errors from '@jali/util/errors';
import { verifyArgument, verifyTruthy } from '@jali/util/errors';
import * as Iterables from '@jali/util/iterables';
import * as TypeGuards from '@jali/util/type-guards';

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
   * @/jali/util/iterables.asArray
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'asArray')
  public jali_util_iterators_asarray(writer: ExampleContext): void {
    writer.logIndented(2, `number to number[]`, '①');

    const numberOrNumbers: number | Iterable<number> = 2;
    const array = Iterables.asArray(numberOrNumbers);
    const isArrayOfNumber = TypeGuards.makeIsIterable(e => typeof e === 'number', true);

    const output =
      `Is '${array}' a 'number[]' (${isArrayOfNumber(array)}) with length '1' ` +
      `(${array.length === 1}) and first value of '2'? '${Iterables.find(array) === 2}'`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `string to string[]`, '②');

    const stringOrStrings: string | Iterable<string> = 'DodgerBlue';
    const array2 = Iterables.asArray(stringOrStrings, String);
    const array3 = Iterables.asArray(stringOrStrings);
    const isArrayOfString = TypeGuards.makeIsIterable(e => typeof e === 'string', true);

    const output2 =
      `Is '${array2}' a 'string[]' (${isArrayOfString(array2)}) with length '1' ` +
      `(${array2.length === 1}) and first value of 'DodgerBlue'? ` +
      `'${Iterables.find(array2) === 'DodgerBlue'}'`;

    writer.logIndented(3, output2);

    const output3 =
      `Is '${array3}' a 'string[]' (${isArrayOfString(array3)}) with length '1' ` +
      `(${array3.length === 1}) and first value of 'DodgerBlue'? ` +
      `'${Iterables.find(array3) === 'DodgerBlue'}'`;

    writer.logIndented(3, output3);
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
    writer.logIndented(3, `Days of Week: '${Iterables.asArray(daysOfWeek)}`);
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
      `Sequence '${numbers}' has these even values: '${Iterables.asArray(evens)}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Select every other element`, '②');
    const numbers2 = [1, 6, 6, 24];
    const evenIndexed = Iterables.filter(numbers2, (_, i) => i % 2 === 0);

    const output2 =
      `Even indexed elements of sequence '${numbers2}' are '${Iterables.asArray(evenIndexed)}'.`;

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

    writer.log();

    writer.logIndented(2, `Get the first element`, '③');
    const first = Iterables.find(numbers);

    const output3 =
      `The first element in sequence '${numbers}' is '${first}'.`;

    writer.logIndented(3, output3);
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
    const objectsDisplay = [...objects].map(o => JSON.stringify(o)).join();

    const output =
      `Sequence '${objectsDisplay}' has these Ids: '${numbers}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Multiply element by position`, '②');
    const numbers2 = [1, 6, 6, 24];
    const scaled = Iterables.map(numbers2, (e, i) => e * (i + 1));
    const output2 = `Sequence '${numbers2}' elements scaled by position: '${[...scaled]}'.`;

    writer.logIndented(3, output2);
  }

  /**
   * @/jali/util/iterables.reduce
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'reduce')
  public jali_util_iterators_reduce(writer: ExampleContext): void {
    writer.logIndented(2, `Compute average`, '①');

    let average = { count: 0, value: 0, };

    const numbers = [2, 6, 10, 22, 999];
    const result = Iterables.reduce(numbers, (p, e) => {
      return {
        count: p.count + 1,
        value: (p.value * p.count + e) / (p.count + 1)
      }
    }, average);

    const output =
      `The average of sequence '${numbers}' is: '${result.value}'.`;

    writer.logIndented(3, output);
  }

  /**
   * @/jali/util/iterables.slice
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'slice')
  public jali_util_iterators_slice(writer: ExampleContext): void {
    writer.logIndented(2, `Get paged data from a store`, '①');


    const computeValue = (i: number) => Array.from(
      'abcde', (c, ci) => {
        const offset = i % 26 - (i % 26 + ci >= 26 ? 26 : 0);
        return String.fromCharCode(c.charCodeAt(0) + offset);
    }).join('');


    const store: {id: number, value: string}[] = [];
    for (let i = 0; i < 1000; i++) {
      store.push({
        id: i,
        value: computeValue(i),
      });
    }

    const getPage = (pageNumber: number, pageSize: number) =>
      Iterables.slice(store, pageNumber * pageSize, pageNumber * pageSize + pageSize);

    const writePage = (pageNumber: number, page: Iterable<{id: number, value: string}>) => {
      const output =
        `Data for page '${pageNumber}' is '${JSON.stringify(Array.from(page))}'.`;

      writer.logIndented(3, output);
    }

    const pageSize = 10;

    let pageNumber = 0;

    let page = getPage(pageNumber, pageSize);
    writePage(pageNumber, page);

    writer.log();

    pageNumber = 43;
    page = getPage(pageNumber, pageSize);
    writePage(pageNumber, page);
  }

  /**
   * @/jali/util/iterables.some
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'some')
  public jali_util_iterators_some(writer: ExampleContext): void {
    writer.logIndented(2, `Determine if any element is divisible by 5`, '①');

    const numbers = [2, 6, 10, 22, 999];
    const areDivisible = Iterables.some(numbers, e => e % 5 === 0);

    const output =
      `Are any element of '${numbers}' divisible by five? '${areDivisible}'.`;

    writer.logIndented(3, output);

    writer.log();

    writer.logIndented(2, `Determine if there is a fourth element`, '②');
    const numbers2 = [1, 6, 6, 24];
    const hasFourth = Iterables.some(numbers2, (_, i) => i === 3);

    const output2 =
      `Is there a fourth element in sequence '${numbers2}'? '${hasFourth}'.`;

    writer.logIndented(3, output2);

    writer.log();

    writer.logIndented(2, `Determine if the sequence is empty`, '③');
    const hasAny = Iterables.some(numbers2);

    const output3 =
      `Is sequence '${numbers2}' empty? '${!hasAny}'.`;

    writer.logIndented(3, output3);
  }

  /**
   * @/jali/util/iterables.toMap
   */
  @Example('@jali/util', '@jali/util/iterators', 'Iterables', 'toMap')
  public jali_util_iterators_tomap(writer: ExampleContext): void {
    writer.logIndented(2, `Entities mapped by id`, '①');

    const queryResult = [
      {id: 4, firstName: 'Sam', lastName: 'Smith',},
      {id: 10, firstName: 'Janet', lastName: 'Jones',},
      {id: 7, firstName: 'Karina', lastName: 'Kelly',},
    ];

    const byId = Iterables.toMap(queryResult, e => e.id);

    for (const id of Array.from(byId.keys()).sort((a, b) => a < b ? -1 : a === b ? 0 : 1)) {
      writer.logIndented(3, JSON.stringify(byId.get(id)));
    }
  }
}

