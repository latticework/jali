import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Returns a value indicating whether any of the elements of a sequence pass the specified test.
 *
 * > **Note:** To return the first matching value, use {@link find}. To return all matching values,
 * > use {@link filter}. To match on equality, use {@link includes}.
 *
 * @param T -
 *    The `Iterator` element type. <b>NOTE:</b> This is a TypeScript type parameter, not a
 *    parameter of the function.
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {?ElementTest<T>} [test] -
 *    If not defined, indicates that the function should test for any existing elements; otherwise,
 *    a function that indicates whether an element meets a requirement.
 * @return {boolean} -
 *    `true` if an element was found that meets the test; otherwise, `false`;
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
 *     target="_blank">Array#some</a>
 * @see {@link filter}
 * @see {@link find}
 * @see {@link includes}
 * @since 0.0.1
 */
export  default function some<T>(
    sequence: Iterable<T>, test?: (value: T, index: number, sequence: Iterable<T>) => boolean): boolean {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  if (test === undefined) {
    for (let element of sequence) {
      element = element; // This quiets the compiler error for `noUnusedLocals`.
      return true;
    }

    return false;
  }

  if (Array.isArray(sequence)) { return (sequence as T[]).some(test); }

  let index = 0;
  for (let element of sequence) {
    if (test(element, index, sequence)) {
      return true;
    }

    index += 1;
  }

  return false;
}
