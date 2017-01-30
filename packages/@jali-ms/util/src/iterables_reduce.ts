import * as ArgumentVerifiers from './argument-verifiers';

export default function reduce<T>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => T,
    initialValue?: T): T;
export default function reduce<T, U>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => U,
    initialValue: U): U;
/* tslint:disable:max-line-length */
/**
 * Aggregates a sequence to a single computed element value.
 *
 * If `initialValue` is specified `accumulator` is called for the first element using the initial
 * value. Otherwise, it is called against the second element using the first element as the initial
 * value.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param U -
 *    The accumulator result type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!ElementAccumulator<T, U>} accumulator -
 *    The element aggregation function
 * @param {T} [initialValue] -
 *    Optional initial value; otherwise, first element is used as initial value
 * @return {Iterable<U>} -
 *    A sequence of converted elements
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
 *     target="_blank">Array#reduce</a>
 *
 * @since 0.0.1
 */
export default function reduce<T, U>(
/* tslint:enable:max-line-length */
    sequence: Iterable<T>,
    accumulator: (
      previousValue: T | U,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => T | U,
    initialValue?: T): T | U {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('accumulator', accumulator);

  let index = 0;
  // Assignment to quiet TypeScript compiler.
  let value: T | U = undefined as any as T | U;
  for (const element of sequence) {
    if (index === 0) {
      if (initialValue != undefined) {
        value = accumulator(initialValue, element, index, sequence);
      } else {
        value = element;
      }
    } else {
      value = accumulator(value, element, index, sequence);
    }

    index = index + 1;
  }

  return value;
}
