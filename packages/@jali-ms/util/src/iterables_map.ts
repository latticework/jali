import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Returns a sequence of elements that are the result of calling the specified converter function on
 * each element.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param U -
 *    The result type of the converter function. NOTE: This is a TypeScript type parameter, not a
 *    parameter of the function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!ElementConverter<T, U>} converter -
 *    The element conversion function.
 * @return {Iterable<U>} -
 *    A sequence of converted elements.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
 *     target="_blank">Array#map</a>
 *
 * @since 0.0.1
 */
export  default function* map<T, U>(
    sequence: Iterable<T>, converter: (element: T, index: number, sequence: Iterable<T>) => U):
    Iterable<U> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('converter', converter);

  if (Array.isArray(sequence)) {
    yield* (sequence as T[]).map(converter);
    return;
  }

  let index = 0;
  for (const element of sequence) {
    yield converter(element, index, sequence);

    index += 1;
  }
}
