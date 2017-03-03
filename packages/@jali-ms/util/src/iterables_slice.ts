import * as ArgumentVerifiers from './argument-verifiers';


/* tslint:disable:max-line-length */
/**
 * Returns a segment of the original sequence.
 *
 * Skips `begin` elements and takes `end - begin` elements or the rest of the elements if `end` is
 * not specified. If begin is past the last element, no elements are returned. If `begin` or `end`
 * is a negative value, the sequence is converted to an array and <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
 * target="_blank">Array#slice</a> is called.
 *
 * > **Note:** To retrieve the first element, use {@link first} or {@link firstOrDefault}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {number} [begin] -
 *    The first element to include. If negative, converts to an array and uses <a
 *    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
 *    target="_blank">Array#slice</a>
 * @param {number} [end] -
 *    The first element to include.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
 *     target="_blank">Array#slice</a>
 *
 * @since 0.0.1
 */
export default function* slice<T>(sequence: Iterable<T>, begin?: number, end?: number): Iterable<T> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  if (begin != undefined) { ArgumentVerifiers.verifyNumber('begin', begin); }
  if (end != undefined) { ArgumentVerifiers.verifyNumber('end', end); }

  if (Array.isArray(sequence)) { return yield * (sequence as T[]).slice(begin, end); }

  if (begin != undefined && begin < 0 || end != undefined && end < 0) {
    return yield * [...sequence].slice(begin, end);
  }

  let index = 0;
  for (const element of sequence) {
    if (index >= (begin || 0)) {
      if (end != undefined && index === end) { break; }
      yield element;
    }

    index += 1;
  }
}
