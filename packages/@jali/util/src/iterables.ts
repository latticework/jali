import * as ArgumentVerifiers from './argument-verifiers';


/**
 * Returns a subset of the sequence of those elements that pass the specified test.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the function.
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {function(element: T): boolean} test -
 *    The filter function
 * @return {Iterable<T>} -
 *    A sequence of of elements
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array#filter</a>
 * @since 0.0.1
 */
export function* filter<T>(sequence: Iterable<T>, test: (element: T) => boolean): Iterable<T> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  for (let element of sequence) {
    if (test(element)) {
      yield element;
    }
  }
}

export function some<T>(sequence: Iterable<T>): boolean
export function some<T>(sequence: Iterable<T>, value: T | null , loose?: boolean): boolean
export function some<T>(sequence: Iterable<T>, test: (value: T) => boolean): boolean
/**
 * Returns a value indicating whether any of the elements of a sequence pass the specified test.
 *
 * @param T -
 *    The `Iterator` element type. <b>NOTE:</b> This is a TypeScript type parameter, not a parameter of the function.
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {T | null | function(value: T): boolean | undefined} [valueOrTest] -
 *    If not defined, indicates that the function should test for any existing elements; otherwise,
 *    either an element to match or a test function to execute
 * @param {T | undefined} [loose] -
 *    If `valueOrTest` is a value, indicates whether strict equality or loose equality should be
 *    used. The default is strict equality.
 * @return {boolean} -
 *    `true` if the test succeeded; otherwise, `false`;
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some">Array#some</a>
 * @since 0.0.1
 */
export function some<T>(
    sequence: Iterable<T>, valueOrTest?: (value: T) => boolean | T, loose = false)
    : boolean {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  if (valueOrTest === undefined) {
    for (let element of sequence) {
      element = element; // This quiets the compiler error for `noUnusedLocals`.
      return true;
    }

    return false;
  }

  if (typeof valueOrTest === 'function') {
    for (let element of sequence) {
      if (valueOrTest(element)) {
        return true;
      }
    }

    return false;
  }

  ArgumentVerifiers.verifyBoolean('loose', loose);

  for (let element of sequence) {
    if (loose && element == valueOrTest || element === valueOrTest) {
      return true;
    }
  }

  return false;
}

export function find<T>(sequence: Iterable<T>): T | undefined
export function find<T>(sequence: Iterable<T>, value: T): T
/**
 * Returns a value matching the specified test.
 *
 * @param T -
 *    The `Iterator` element type
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {T | undefined} value -
 *    The value to match or `undefined` if the first element matched.
 * @return {T | undefined} -
 *    The matched value or `undefined` if no match was found.
 */
export function find<T>(sequence: Iterable<T>, value?: T): T | undefined {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  for (let element of sequence) {
    return element;
  }

  return value;
}

/**
 * Converts a sequence to a map using the specified key selector function.
 *
 * @param TKey -
 *    The key type for the {@link Map}
 * @param TValue -
 *    The `Iterable` element type and the value type for the {@link Map}
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {function(value: TValue): TKey} keySelector -
 *    The function that retrieves a key for the specified element.
 * @return {Map<TKey, TValue>} -
 *    The new map.
 */
export function toMap<TKey, TValue>(
    sequence: Iterable<TValue>, keySelector: (value: TValue) => TKey): Map<TKey, TValue> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('keySelector', keySelector);

  let map = new Map<TKey, TValue>();

  for (const value of sequence) {
    map.set(keySelector(value), value);
  }

  return map;
}
