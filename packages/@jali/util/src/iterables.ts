import * as ArgumentVerifiers from './argument-verifiers';
import InvalidStateError from './invalid-state-error';
import { isIterable, makeIsIterable } from './type-guards';

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
export function* concat<T>(sequence: Iterable<T>, ...items: Iterable<T>[]): Iterable<T> {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyArray('items', items);

  for (const element of sequence) {
    yield element;
  }

  for (const item of items) {
    for (const element of item) {
      yield element;
    }
  }
}

/* tslint:disable:max-line-length */
/**
 * Returns a value indicating whether every element fulfills the specified test.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!function(value: T, index?: number, sequence?: Iterable<T>): boolean} test -
 *    A function that returns a value indicating whether an element of the sequence fulfills the
 *    requirement.
 *
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
 *     target="_blank">Array#every</a>
 *
 * @since 0.0.1
 */
export function every<T>(
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
 * @param {!function(element: T): boolean} test -
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
export function* filter<T>(sequence: Iterable<T>, test: (element: T) => boolean): Iterable<T> {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  for (let element of sequence) {
    if (test(element)) {
      yield element;
    }
  }
}

/* tslint:disable:max-line-length */
/**
 * Returns the first value matching the specified test or `undefined` if no match was found.
 *
 * > **Note:** To return whether a match was found, use {@link includes}. To return all matching values
 * > use {@link filter}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!function(value: T, index?: number, sequence?: Iterable<T>): boolean} test -
 *    A function that returns a value indicating whether an element of the sequence fulfills the
 *    requirement.
 * @return {T | undefined} -
 *    The matched element or `undefined` if no match is found.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
 *     target="_blank">Array#find</a>
 * @see {@link filter}
 * @see {@link includes}
 * @since 0.0.1
 */
export function find<T>(
    sequence: Iterable<T>, test: (value: T, index?: number, sequence?: Iterable<T>) => boolean):
    T | undefined {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  if (Array.isArray(sequence)) { return (sequence as T[]).find(test); }

  for (let element of sequence) {
    return element;
  }

  return undefined;
}

/**
 * Returns the first element of a sequence.
 *
 * > **Note:** To not throw on an empty sequence, use {@link firstOrDefault}. To return the first
 * > value matching a test, use {@link find}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on.
 *
 * @throws {InvalidStateError}
 *    `sequence` as no elements.
 *
 * @see {@link find}
 * @see {@link firstOrDefault}
 */
export function first<T>(sequence: Iterable<T>): T {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  for (const element of sequence) {
    return element;
  }

  throw new InvalidStateError(`'@jali/util/src/first' called for an empty sequence`);
}

/**
 * Returns the first element of a sequence.
 *
 * > **Note:** To throw on an empty sequence, use {@link first}. To return the first value
 * > matching a test, use {@link find}.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on.
 *
 * @throws {InvalidStateError}
 *    `sequence` as no elements.
 *
 * @see {@link find}
 * @see {@link firstOrDefault}
 */
export function firstOrDefault<T>(sequence: Iterable<T>, defaultValue?: T): T | undefined {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  for (const element of sequence) {
    return element;
  }

  return defaultValue;
}

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
export function includes<T>(
  sequence: Iterable<T>, value: T | undefined | null, fromIndex?: number): boolean {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  if (fromIndex) { ArgumentVerifiers.verifyNumber('fromIndex', fromIndex); }

  const test = Number.isNaN(value as any)
    ? (e: T) => Number.isNaN(e as any)
    : (e: T) => e === value;

  const localSequence = fromIndex
    ? slice(sequence, fromIndex)
    : sequence;

  return some(localSequence, test);
}

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
 * @param {!function(element: T): U} converter -
 *    The element conversion function.
 * @return {Iterable<U>} -
 *    A sequence of converted elements.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
 *     target="_blank">Array#map</a>
 *
 * @since 0.0.1
 */
export function* map<T, U>(sequence: Iterable<T>, converter: (element: T) => U): Iterable<U> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('converter', converter);

  for (const element of sequence) {
    yield converter(element);
  }
}

export function reduce<T>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => T,
    initialValue?: T): T
export function reduce<T, U>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => U,
    initialValue: U): U
/* tslint:disable:max-line-length */
/**
 * Aggregates a sequence to a single computed element value.
 *
 * If `initialValue` is specified `accumulator` is called for the first element using the initial
 * value. Otherwise, it is called against the second element using the first element as the initial
 * value.
 *
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param U -
 *    The accumulator result type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {!function(previousValue: U, currentValue: T, currentIndex: number, sequence: Iterable<T>) => U} accumulator -
 *    The element conversion function.
 * @param {T} [initialValue] -
 *    Optional initial value; otherwise, first element is used
 * @return {Iterable<U>} -
 *    A sequence of converted elements.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
 *     target="_blank">Array#reduce</a>
 *
 * @since 0.0.1
 */
export function reduce<T, U>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: T | U,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => T | U,
    initialValue?: T): T | U {
  let index = 0;
  // Assignment to quiet TypeScript compiler.
  let value: T | U = undefined as any as T | U;
  for (const element of sequence) {
    if (index === 0) {
      if (initialValue !== undefined) {
        value = accumulator(initialValue, element, index, sequence);
      } else {
        value = element;
      }
    } else {
      value = accumulator(value, element, index, sequence);
    }
    index = index + 1;
  }

  return value;
}

/* tslint:disable:max-line-length */
/**
 * Returns a segment of the original sequence.
 *
 * Skips `begin` elements and takes `end - begin` elements or the rest of the elements if `end` is
 * not specified. If begin is past the last element, no elements are returned. If `begin` is a
 * negative value, the sequence is converted to an array and <a
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
 * @param {number} begin -
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
export function* slice<T>(sequence: Iterable<T>, begin: number, end?: number): Iterable<T> {
  if (begin < 0) {
    return [...sequence].slice(begin, end);
  }
  let index = 0;
  for (const element of sequence) {
    if (index < begin) { continue; }
    if (end !== undefined && index === end) { break; }
    yield element;
  }
}

export function some<T>(sequence: Iterable<T>): boolean
export function some<T>(sequence: Iterable<T>, test: (value: T) => boolean): boolean
/* tslint:disable:max-line-length */
/**
 * Returns a value indicating whether any of the elements of a sequence pass the specified test.
 *
 * @param T -
 *    The `Iterator` element type. <b>NOTE:</b> This is a TypeScript type parameter, not a
 *    parameter of the function.
 * @param {Iterable<T>} sequence -
 *    The `Iterable` to operate on
 * @param {function(value: T): boolean} [test] -
 *    If not defined, indicates that the function should test for any existing elements; otherwise,
 *    either an element to match or a test function to execute
 * @return {boolean} -
 *    `true` if the test succeeded; otherwise, `false`;
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
 *     target="_blank">Array#some</a>
 * @since 0.0.1
 */
export function some<T>(
    sequence: Iterable<T>, test?: (value: T, index?: number, sequence?: Iterable<T>) => boolean): boolean {
/* tslint:enable:max-line-length */
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  if (test === undefined) {
    for (let element of sequence) {
      element = element; // This quiets the compiler error for `noUnusedLocals`.
      return true;
    }

    return false;
  }

  for (let element of sequence) {
    if (test(element)) {
      return true;
    }
  }

  return false;
}

/**
 * Converts an argument that could either be a value of a type or a sequence of that type to
 * an array of that type.
 *
 * Specify the constructor to specify the iteration type. Use for values, such as strings, that are
 * also iterables of another type.
 *
 * > **Note:** To treat a string as a value rather than a sequence of characters, you must specify
 * > the `String` constructor.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {T | Iterable<T>} valueOrSequence -
 *    A value that could be a value or an Iterable of that value type.
 * @param {function (...args: any[]): T} [ctor] -
 *    Optional constructor for the type being iterated.
 * @return {Array<T>} an array of the value type.
 * @since 0.0.1
 */
export function toArray<T>(valueOrSequence: T | Iterable<T>, ctor?: new(...args: any[]) => T): T[] {
  if (typeof valueOrSequence === undefined) {
    return [];
  }

  if (typeof ctor !== 'undefined') {
    // Quiet Typescript 2.1.beta / VSCode 1.4.0 compiler error.
    // tslint:disable:no-shadowed-variable
    const localCtor = ctor as new(...args: any[]) => T;

    if (valueOrSequence instanceof localCtor) {
      return [valueOrSequence];
    }

    const iterableTypeGuard = makeIsIterable(e => e instanceof localCtor, false);

    if (iterableTypeGuard(valueOrSequence)) {
      if (Array.isArray(valueOrSequence)) {
        return valueOrSequence;
      }

      return [...valueOrSequence];
    }
  }

  if (Array.isArray(valueOrSequence)) {
    return valueOrSequence;
  }

  if (isIterable(valueOrSequence)) {
    return [...(valueOrSequence as Iterable<T>)];
  }

  return [valueOrSequence];
}

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
