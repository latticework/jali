import * as TypeGuards from './type-guards';

import ArgumentEmptyStringError from './argument-empty-string-error';
import ArgumentError from './argument-error';
import ArgumentFalseError from './argument-false-error';
import ArgumentFalsyError from './argument-falsy-error';
import ArgumentNanError from './argument-nan-error';
import ArgumentNullError from './argument-null-error';
import ArgumentTypeError from './argument-type-error';
import ArgumentUndefinedError from './argument-undefined-error';
import ArgumentWhitespaceStringError from './argument-whitespace-string-error';
import ArgumentZeroError from './argument-zero-error';

export function verifyArgument<T>(
    name: string, value: T, test: (value: T) => boolean, message?: string): void | never {
  if (!test(value)) {
    throw new ArgumentError(name, message);
  }
}

export function verifyBoolean(name: string, value: boolean, message?: string): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'boolean') {
    throw new ArgumentTypeError('boolean', name, message);
  }
}

export function verifyFunction(name: string, value: Object, message?: string): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'function') {
    throw new ArgumentError(name, message);
  }
}

export function verifyDefined<T>(name: string, value: T, message?: string): void | never {
  if (value === undefined) {
    throw new ArgumentUndefinedError(name, message);
  }
}

export function verifyIterable<T>(name: string, value: Iterable<T>, message?: string):
    void | never {
  verifyDefined(name, value, message);

  if (!TypeGuards.isIterable(value)) {
    throw new ArgumentError(name, message);
  }
}

export function verifyNonEmpty(name: string, value: string, message?: string): void | never {
  verifyDefined(name, value, message);

  if (value === '') {
    throw new ArgumentEmptyStringError(name, message);
  }
}

export function verifyNotWhitespace(name: string, value: string, message?: string): void | never {
  verifyNonEmpty(name, value, message);

  if (value.trim() === '') {
    throw new ArgumentWhitespaceStringError(name, message);
  }
}

export function verifyNotNull<T>(name: string, value: T, message?: string): void | never {
  verifyDefined(name, value, message);

  if (value === null) {
    throw new ArgumentNullError(name, message);
  }
}

export function verifyNonZero(name: string, value: number, message?: string): void | never {
  verifyNumber(name, value, message);

  if (value === 0) {
    throw new ArgumentZeroError(name, message);
  }
}

export function verifyNumber(name: string, value: number, message?: string): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'number') {
    throw new ArgumentTypeError('number', name, message);
  }

  if (value === NaN) {
    throw new ArgumentNanError(name, message);
  }
}

export function verifyObject(name: string, value: Object, message?: string): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'object') {
    throw new ArgumentTypeError('object', name, message);
  }
}

export function verifyString(name: string, value: string, message?: string): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'string') {
    throw new ArgumentTypeError('string', name, message);
  }
}

export function verifyTrue(name: string, value: boolean, message?: string): void | never {
  verifyDefined(name, value, message);

  if (value === false) {
    throw new ArgumentFalseError(name, message);
  }
}

export function verifyTruthy<T>(name: string, value: T, loose = false, message?: string):
    void | never {
  if (!value) {
    if (loose) {
      throw new ArgumentFalsyError(name, message);
    }

    verifyNotNull(name, value, message); // Also checks for defined.

    if (typeof value === 'boolean' ) {
      verifyTrue(name, value as any as boolean, message);
    }

    if (typeof value === 'string' ) {
      verifyNonEmpty(name, value as any as string, message);
    }

    if (typeof value === 'number' ) {
      // Also checks for number and not NaN
      verifyNonZero(name, value as any as number, message);
    }
  }
}
