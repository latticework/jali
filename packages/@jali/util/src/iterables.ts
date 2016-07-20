import * as ArgumentVerifiers from './argument-verifiers';

export function toMap<TKey, TValue>(
    sequence: Iterable<TValue>, keySelector: (value: TValue) => TKey) {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('keySelector', keySelector);

  let map = new Map<TKey, TValue>();

  for (const value of sequence) {
    map.set(keySelector(value), value);
  }

  return map;
}

export function has<T>(sequence: Iterable<T>): boolean
export function has<T>(sequence: Iterable<T>, value: T | null , loose?: boolean): boolean
export function has<T>(sequence: Iterable<T>, test: (value: T) => boolean): boolean
export function has<T>(
    sequence: Iterable<T>, valueOrTest?: (value: T) => boolean | T, looseValue = false):
    boolean {
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

  ArgumentVerifiers.verifyBoolean('looseValue', looseValue);

  for (let element of sequence) {
    if (looseValue && element == valueOrTest || element === valueOrTest) {
      return true;
    }
  }

  return false;
}

export function firstOrDefault<T>(sequence: Iterable<T>, value?: T): T | undefined {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  for (let element of sequence) {
    return element;
  }

  return value;
}

export function* where<T>(sequence: Iterable<T>, test: (element: T) => boolean): Iterable<T> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  for (let element of sequence) {
    if (test(element)) {
      yield element;
    }
  }
}
