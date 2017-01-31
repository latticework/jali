import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Concatenates a sequence of a type with zero or more other sequences of that type.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!Iterable<T>[]} items -
 *    Array of `Iterable` to concatenate.
 * @returns {Iterable<T>} -
 *    A sequence of elements
 *
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'
 *     target="_blank">Array#concat</a>
 *
 * @since 0.0.1
 */
export  default function* concat<T>(sequence: Iterable<T>, ...items: Iterable<T>[]): Iterable<T> {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyArray('items', items);

  // In concat, do not check for array since items may also not be arrays.

  for (const element of sequence) {
    yield element;
  }

  for (const item of items) {
    for (const element of item) {
      yield element;
    }
  }
}
