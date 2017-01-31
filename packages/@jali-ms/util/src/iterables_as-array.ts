import * as TypeGuards from './type-guards';




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
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-iterables">
 *    module <code>@jali-ms/util/iterables</code></a>
 * @see <a href="manual/example.html#jali_ms_util_iterators_asarray">
 *    Example method <code>jali_ms_util_iterators_asarray</code>, examples ① & ②</a>
 * @see {@link asIterable}
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
 *    target="_blank">Array.from (MDN)</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"
 *    target="_blank">spread syntax (MDN)</a>
 * @since 0.0.1
 */
export default function asArray<T>(valueOrSequence: T | Iterable<T> | undefined, ctor?: new(...args: any[]) => T): T[] {
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

    const iterableTypeGuard = TypeGuards.makeIsIterable(e => e instanceof localCtor, false);

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

  if (TypeGuards.isIterable(valueOrSequence)) {
    return [...(valueOrSequence as Iterable<T>)];
  }

  return [valueOrSequence];
}
