import * as ArgumentVerifiers from './argument-verifiers';

/**
 * Converts a sequence to a {@link Map} using the specified key selector function.
 *
 * @param TKey -
 *    The key type for the {@link Map}. NOTE: This is a TypeScript type parameter, not a parameter
 *    of the function.
 * @param TValue -
 *    The `Iterable` element type and the value type for the {@link Map}. NOTE: This is a TypeScript
 *    type parameter, not a parameter of the function.
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {function(value: TValue): TKey} keySelector -
 *    The function that retrieves a key for the specified element.
 * @return {Map<TKey, TValue>} -
 *    The new map.
 * @since 0.0.1
 */
export  default function toMap<TKey, TValue>(
    sequence: Iterable<TValue>, keySelector: (value: TValue) => TKey): Map<TKey, TValue> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('keySelector', keySelector);

  let map = new Map<TKey, TValue>();

  for (const value of sequence) {
    map.set(keySelector(value), value);
  }

  return map;
}
