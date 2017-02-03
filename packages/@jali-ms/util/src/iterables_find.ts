import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Returns the first value matching the specified test or `undefined` if no match was found. If no
 * test is specified, returns the first element, or `undefined` if the sequence is empty.
 *
 * > **Note:** To return whether a match was found, use {@link some}. To match a specific element
 * > value, use {@link includes}. To return all matching values, use {@link filter}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {ElementTest<T>} [test] -
 *    A function that returns a value indicating whether an element of the sequence fulfills the
 *    requirement.
 * @return {T | undefined} -
 *    The matched element or `undefined` if no match is found.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
 *     target="_blank">Array#find</a>
 * @see {@link filter}
 * @see {@link includes}
 * @see {@link some}
 * @since 0.0.1
 */
export default function find<T>(
    sequence: Iterable<T>, test?: (value: T, index: number, sequence: Iterable<T>) => boolean):
    T | undefined {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  if (test) { ArgumentVerifiers.verifyFunction('test', test); };

  if (!test) {
    for (const element of sequence) {
      return element;
    }

    return undefined;
  }

  if (Array.isArray(sequence)) { return (sequence as T[]).find(test); }

  let index = 0;
  for (let element of sequence) {
    if (test(element, index, sequence)) {
      return element;
    }
  }

  return undefined;
}
