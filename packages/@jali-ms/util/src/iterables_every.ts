import * as ArgumentVerifiers from './argument-verifiers';

/* tslint:disable:max-line-length */
/**
 * Returns a value indicating whether every element fulfills the specified test.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!ElementTest<T>} test -
 *    A function that returns a value indicating whether an element of the sequence fulfills the
 *    requirement.
 *
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
 *     target="_blank">Array#every</a>
 *
 * @since 0.0.1
 */
export default function every<T>(
    sequence: Iterable<T>, test: (value: T, index?: number, sequence?: Iterable<T>) => boolean) {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  if (Array.isArray(sequence)) { return (sequence as T[]).every(test); }


  let index = 0;
  for (const element of sequence) {
    if (!test(element, index, sequence)) {
      return false;
    }

    index += 1;
  }

  return true;
}
