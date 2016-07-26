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
    name: string, value: T, test: (value: T) => boolean, message?: string | ((value: T) => string))
    : void | never {
  if (!test(value)) {
    throw new ArgumentError(name, errorMessage(value, message));
  }
}

export function verifyBoolean(
    name: string, value: boolean, message?: string | ((value: boolean) => string))
    : void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'boolean') {
    throw new ArgumentTypeError('boolean', name, errorMessage(value, message));
  }
}

export function verifyFunction(
    name: string, value: Object, message?: string | ((value: Object) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'function') {
    throw new ArgumentTypeError('function', name, errorMessage(value, message));
  }
}

export function verifyDefined<T>(
  name: string, value: T, message?: string | ((value: T) => string)): void | never {
  if (value === undefined) {
    throw new ArgumentUndefinedError(
      name, errorMessage<T | undefined>(value, message));
  }
}

export function verifyIterable<T>(
    name: string, value: Iterable<T>, message?: string | ((value: Iterable<T>) => string))
    : void | never {
  verifyDefined(name, value, message);

  if (!TypeGuards.isIterable(value)) {
    throw new ArgumentTypeError('iterable', name, errorMessage(value, message));
  }
}

export function verifyNonEmpty(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyString(name, value, message);

  if (value === '') {
    throw new ArgumentEmptyStringError(name, errorMessage(value, message));
  }
}

export function verifyNonZero(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyNumber(name, value, message);

  if (value === 0) {
    throw new ArgumentZeroError(name, errorMessage(value, message));
  }
}

export function verifyNotNull<T>(
    name: string, value: T, message?: string | ((value: T) => string)): void | never {
  verifyDefined(name, value, message);

  if (value === null) {
    throw new ArgumentNullError(name, errorMessage(value, message));
  }
}

export function verifyNotWhitespace(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyNonEmpty(name, value, message);

  if (value.trim() === '') {
    throw new ArgumentWhitespaceStringError(name, errorMessage(value, message));
  }
}

export function verifyNumber(
    name: string, value: number, message?: string | ((value: number) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'number') {
    throw new ArgumentTypeError('number', name, errorMessage(value, message));
  }

  if (Number.isNaN(value)) {
    throw new ArgumentNanError(name, errorMessage(value, message));
  }
}

export function verifyObject(
    name: string, value: Object, message?: string | ((value: Object) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'object') {
    throw new ArgumentTypeError('object', name, errorMessage(value, message));
  }
}

export function verifyString(
    name: string, value: string, message?: string | ((value: string) => string)): void | never {
  verifyDefined(name, value, message);

  if (typeof value !== 'string') {
    throw new ArgumentTypeError('string', name, errorMessage(value, message));
  }
}

export function verifyTrue(
    name: string, value: boolean, message?: string | ((value: boolean) => string)): void | never {
  verifyBoolean(name, value, message);

  if (value === false) {
    throw new ArgumentFalseError(name, errorMessage(value, message));
  }
}

export function verifyTruthy<T>(
    name: string, value: T, loose = false, message?: string | ((value: T) => string))
    : void | never {
  if (!value) {
    if (loose) {
      throw new ArgumentFalsyError(name, errorMessage(value, message));
    }

    verifyNotNull(name, value, message); // Also checks for defined.

    if (typeof value === 'boolean' ) {
      verifyTrue(name, value as any as boolean, errorMessage(value, message));
    }

    if (typeof value === 'string' ) {
      verifyNonEmpty(name, value as any as string, errorMessage(value, message));
    }

    if (typeof value === 'number' ) {
      // Also checks for not NaN
      verifyNonZero(name, value as any as number, errorMessage(value, message));
    }
  }
}

function errorMessage<T>(value: T, message?: string | ((value: T) => string)) {
  return (typeof message === 'function') ? message(value) : message;
}