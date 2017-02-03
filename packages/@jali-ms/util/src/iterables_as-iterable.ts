import * as TypeGuards from './type-guards';

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
 * @see <a href="manual/overview.html#package-jali-ms-util">
 *    package <code>@jali-ms/util</code></a>
 * @see <a href="manual/overview.html#module-jali-ms-util-iterables">
 *    module <code>@jali-ms/util/iterables</code></a>
 * @see <a href="manual/example.html#jali_ms_util_iterators_asiterable">
 *    Example method <code>jali_ms_util_iterators_asiterable</code>, examples ① & ②</a>
 * @see {@link asArray}
 * @since 0.0.1
 */
export default function asIterable<T>(
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
