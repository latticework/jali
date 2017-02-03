import * as ArgumentVerifiers from './argument-verifiers';
import slice from './iterables_slice';
import some from './iterables_some';

/* tslint:disable:max-line-length */
/**
 * Returns a value indicating whether a match for the specified test was found.
 *
 * > **Note:** To return the first matching value, use {@link find}. To return all matching values
 * > use {@link filter}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {?T} value -
 *    The value search for strictly.
 * @param {number} [fromIndex] -
 * @return {boolean} -
 *    `true` if the element was found; otherwise, `false`.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
 *     target="_blank">Array#includes</a>
 * @see {@link find}
 * @see {@link filter}
 * @since 0.0.1
 */
export  default function includes<T>(
  sequence: Iterable<T>, value: T | undefined | null, fromIndex?: number): boolean {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  if (fromIndex) { ArgumentVerifiers.verifyNumber('fromIndex', fromIndex); }

  (sequence as T[]).includes(value as T, fromIndex);

  const test = Number.isNaN(value as any)
    ? (e: T) => Number.isNaN(e as any)
    : (e: T) => e === value;

  const localSequence = fromIndex
    ? slice(sequence, fromIndex)
    : sequence;

  return some(localSequence, test);
}
