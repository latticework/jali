import * as ArgumentVerifiers from './argument-verifiers';

import * as Iterables from './iterables';

export function isError(value: any): value is Error {
  return (value as Error).message !== undefined;
}

export function makeIsIterable<T>(
  elementTypeGuard: (element: any) => boolean, deep?: boolean): (value: any) => value is Iterable<T>
export function makeIsIterable<T>(
  elementTest: (element: any) => boolean, deep?: boolean): (value: any) => value is Iterable<T>
export function makeIsIterable<T>(
  elementTypeGuard: any, deep = false):
    (value: any) => value is Iterable<T> {
  ArgumentVerifiers.verifyFunction('elementTypeGuard', elementTypeGuard);

  const test = (value: any) => {
    if (!isIterable(value)) {
      return false;
    }

    if (!deep) {
      const first = Iterables.find(value);

      if (first === undefined) {
        return true;
      }

      return elementTypeGuard(first);
    }

    for (const element of value as Iterable<T>) {
      if (!elementTypeGuard(element)) {
        return false;
      }
    }

    return true;
  };

  // Need type assertion: See https://github.com/Microsoft/TypeScript/issues/5951.
  return test as (value: any) => value is Iterable<T>;
}



export function isIterable<T>(value: any): value is Iterable<T> {
  return value && (value as Iterable<T>)[Symbol.iterator] !== undefined;
}

