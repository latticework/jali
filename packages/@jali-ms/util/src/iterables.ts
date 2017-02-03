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

export { default as asArray } from './iterables_as-array'
export { default as asIterable } from './iterables_as-iterable'
export { default as concat } from './iterables_concat'
export { default as every } from './iterables_every'
export { default as filter } from './iterables_filter'
export { default as find } from './iterables_find'
export { default as includes } from './iterables_includes'
export { default as map } from './iterables_map'
export { default as reduce } from './iterables_reduce'
export { default as slice } from './iterables_slice'
export { default as some } from './iterables_some'
export { default as toMap } from './iterables_to-map'
