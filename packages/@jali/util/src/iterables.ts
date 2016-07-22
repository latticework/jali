import * as ArgumentVerifiers from './argument-verifiers';


export function* filter<T>(sequence: Iterable<T>, test: (element: T) => boolean): Iterable<T> {
  ArgumentVerifiers.verifyIterable('sequence', sequence);
  ArgumentVerifiers.verifyFunction('test', test);

  for (let element of sequence) {
    if (test(element)) {
      yield element;
    }
  }
}

export function has<T>(sequence: Iterable<T>): boolean
export function has<T>(sequence: Iterable<T>, value: T | null , loose?: boolean): boolean
export function has<T>(sequence: Iterable<T>, test: (value: T) => boolean): boolean
export function has<T>(
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

export function firstOrDefault<T>(sequence: Iterable<T>): T | undefined
export function firstOrDefault<T>(sequence: Iterable<T>, value: T): T
export function firstOrDefault<T>(sequence: Iterable<T>, value?: T): T | undefined {
  ArgumentVerifiers.verifyIterable('sequence', sequence);

  for (let element of sequence) {
    return element;
  }

  return value;
}

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
