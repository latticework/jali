import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Returns a subset of the sequence of those elements that pass the specified test.
 *
 * > **Note:** To return whether a match was found, use {@link includes}. To return the first
 * > matching value, use {@link find}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!ElementTest<T>} test -
 *    The filter function
 * @return {Iterable<T>} -
 *    A sequence of elements
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
 *     target="_blank">Array#filter</a>
 * @see {@link find}
 * @see {@link includes}
 * @since 0.0.1
 */
export default function* filter<T>(
    sequence: Iterable<T>, test: (element: T, index: number, sequence: Iterable<T>) => boolean):
    Iterable<T> {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  let index = 0;
  for (let element of sequence) {
    if (test(element, index, sequence)) {
      yield element;
    }

    index += 1;
  }
}
