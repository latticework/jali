import * as ArgumentVerifiers from './argument-verifiers';
import { isIterable, makeIsIterable } from './type-guards';

/**
 * @typedef {function} ElementTest -
 *    test performed on elements of a sequence
 * @param T -
 *    The `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {!T} element -
 *    The iteration element
 * @param {!number} index -
 *    The index of the element
 * @param {!Iterable<T>} sequence -
 *    The sequence being iterated
 * @return {boolean} -
 *    A value indicating whether the specified element passed the test.
 */

/**
 * @typedef {function} ElementConverter -
 *    Converts the input sequence element to an output sequence element.
 * @param T -
 *    The input `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter
 *    of the function.
 * @param U -
 *    The output `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter
 *    of the function.
 * @param {!T} element -
 *    The iteration element
 * @param {!number} index -
 *    The index of the element
 * @param {!Iterable<T>} sequence -
 *    The sequence being iterated
 * @return {U} -
 *    The converted value.
 */

/**
 * @typedef {function} ElementAccumulator -
 *    Aggregates the input sequence elements to an output value.
 * @param T -
 *    The input `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter
 *    of the function.
 * @param U -
 *    The output `Iterator` element type. NOTE: This is a TypeScript type parameter, not a parameter
 *    of the function.
 * @param {!U} previousValue -
 *    For the first execution either an `initialValue`, if specified, or the first element in the
 *    sequence. Otherwise, an intermediary accumulated value.
 * @param {!T} currentValue -
 *    The iteration element.
 * @param {!currentIndex} index -
 *    The index of the iteration element
 * @param {!Iterable<T>} sequence -
 *    The sequence being iterated
 * @return {U} -
 *    The accumulated value.
 */




/* tslint:disable:max-line-length */
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
 * > **Note:** To only ensure an iterable value, use {@link asIterable}.
 *
 * > **Note:** {@link asArray} is different from
 * > <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
 * > target="_blank">Array.from</a> or the
 * > <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"
 * > target="_blank">spread operator</a>, which only convert an iterable to an array.
 * > {@link asArray} ensures a value that can be a scalar value or an array of values is converted
 * > to an array.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {?(T | Iterable<T>)} valueOrSequence -
 *    A value that could be a value or an Iterable of that value type.
 * @param {function (...args: any[]): T} [ctor] -
 *    Optional constructor for the type being iterated.
 * @return {Array<T>} an array of the value type.
 *
 * @example <caption>ensures argument personOrPersons is converted to an array</caption>
 * const persons = Iterables.asArray(personOrPersons);
 *
 * @example <caption>ensures string argument colorOrColors is converted to an array</caption>
 * const persons = Iterables.asArray(colorOrColors, String);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-iterables">
 *    module <code>@jali/util/iterables</code></a>
 * @see <a href="manual/example.html#jali_util_iterators_asarray">
 *    Example method <code>jali_util_iterators_asarray</code>, examples ① & ②</a>
 * @see {@link asIterable}
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
 *    target="_blank">Array.from (MDN)</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"
 *    target="_blank">spread syntax (MDN)</a>
 * @since 0.0.1
 */
export function asArray<T>(valueOrSequence: T | Iterable<T> | undefined, ctor?: new(...args: any[]) => T): T[] {
/* tslint:enable:max-line-length */
  if (valueOrSequence === undefined) {
    return [];
  }

  if (typeof ctor !== 'undefined') {
    // Quiet Typescript 2.1.beta / VSCode 1.4.0 compiler error.
    // tslint:disable:no-shadowed-variable
    const localCtor = ctor as new(...args: any[]) => T;

    if (valueOrSequence instanceof localCtor ||
        typeof valueOrSequence === 'string' && localCtor as any === String) {
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
 * Converts an argument that could either be a value of a type or a sequence of that type to
 * a sequence of that type.
 *
 * Specify the constructor to specify the iteration type. Use for values, such as strings, that are
 * also iterables of another type.
 *
 * > **Note:** To treat a string as a value rather than a sequence of characters, you must specify
 * > the `String` constructor.
 *
 * > **Note:** To ensure an Array value, use {@link toArray}.
 *
 * @param T -
 *    The `value` type. **Note:** This is a TypeScript type parameter, not a parameter of the
 *    function.
 * @param {T | Iterable<T>} valueOrSequence -
 *    A value that could be a value or an Iterable of that value type.
 * @param {function (...args: any[]): T} [ctor] -
 *    Optional constructor for the type being iterated.
 * @return {Iterable<T>}
 *
 * @example <caption>ensures argument idOrIds is converted to an iterable</caption>
 * const ids = Iterables.asIterable(idOrIds);
 *
 * @see <a href="manual/overview.html#package-jali-util">
 *    package <code>@jali/util</code></a>
 * @see <a href="manual/overview.html#module-jali-util-iterables">
 *    module <code>@jali/util/iterables</code></a>
 * @see <a href="manual/example.html#jali_util_iterators_asiterable">
 *    Example method <code>jali_util_iterators_asiterable</code>, examples ① & ②</a>
 * @see {@link asArray}
 * @since 0.0.1
 */
export function asIterable<T>(
    valueOrSequence: T | Iterable<T>, ctor?: new(...args: any[]) => T): Iterable<T> {
  if (typeof valueOrSequence === 'undefined') {
    return [];
  }

  if (typeof ctor !== 'undefined') {
    // Quiet Typescript 2.1.beta / VSCode 1.4.0 compiler error.
    // tslint:disable:no-shadowed-variable
    const localCtor = ctor as new(...args: any[]) => T;

    if (valueOrSequence instanceof localCtor ||
        typeof valueOrSequence === 'string' && localCtor as any === String) {
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
export function* filter<T>(
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
export function find<T>(
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

  (sequence as T[]).includes(value as T, fromIndex);

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
 * @param {!ElementConverter<T, U>} converter -
 *    The element conversion function.
 * @return {Iterable<U>} -
 *    A sequence of converted elements.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
 *     target="_blank">Array#map</a>
 *
 * @since 0.0.1
 */
export function* map<T, U>(
    sequence: Iterable<T>, converter: (element: T, index: number, sequence: Iterable<T>) => U):
    Iterable<U> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('converter', converter);

  if (Array.isArray(sequence)) {
    yield* (sequence as T[]).map(converter);
    return;
  }

  let index = 0;
  for (const element of sequence) {
    yield converter(element, index, sequence);

    index += 1;
  }
}

export function reduce<T>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => T,
    initialValue?: T): T;
export function reduce<T, U>(
    sequence: Iterable<T>,
    accumulator: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      sequence: Iterable<T>) => U,
    initialValue: U): U;
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
 * @param {!ElementAccumulator<T, U>} accumulator -
 *    The element aggregation function
 * @param {T} [initialValue] -
 *    Optional initial value; otherwise, first element is used as initial value
 * @return {Iterable<U>} -
 *    A sequence of converted elements
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
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('accumulator', accumulator);

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
export function* slice<T>(sequence: Iterable<T>, begin?: number, end?: number): Iterable<T> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  if (begin !== undefined) { ArgumentVerifiers.verifyNumber('begin', begin); }
  if (end !== undefined) { ArgumentVerifiers.verifyNumber('end', end); }

  if (Array.isArray(sequence)) { return yield * (sequence as T[]).slice(begin, end); }


  if (begin < 0 || end < 0) { return [...sequence].slice(begin, end); }


  let index = 0;
  for (const element of sequence) {
    if (index >= begin || 0) {
      if (end !== undefined && index === end) { break; }
      yield element;
    }

    index += 1;
  }
}

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
export function some<T>(
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
