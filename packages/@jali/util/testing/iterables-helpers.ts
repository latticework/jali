import { ContextualTestContext } from 'ava';

import * as Iterables from '../src/iterables';


export function *toIterable(arr: number[]) {
  yield *arr;
}

export type asArrayOfT_valueOrSequence_type<T> = T | Iterable<T> | undefined;
export type asArrayOfT_ctor_type = (new(...args: any[]) => any) | undefined;
export type asArrayOfT_return_type<T> = T[];

// tslint:disable-next-line:class-name
export interface AsArrayOfT_TestContext<T> {
  test: ContextualTestContext;
  valueOrSequence: asArrayOfT_valueOrSequence_type<T>;
  ctor: asArrayOfT_ctor_type;
  target: typeof Iterables;
  expected: asArrayOfT_return_type<T>;
  expectingMessage: string;
}

export function testAsArray<T>(context: AsArrayOfT_TestContext<T>) {
  // arrange
  const t = context.test;
  const valueOrSequence = context.valueOrSequence;
  const ctor = context.ctor;
  const target = context.target;
  const expected = context.expected;

  // act
  const actual = target.asArray(valueOrSequence, ctor);

  // assert
  t.deepEqual(actual, expected, context.expectingMessage);
}


export type asIterableOfT_valueOrSequence_type<T> = T | Iterable<T> | undefined;
export type asIterableOfT_ctor_type = (new(...args: any[]) => any) | undefined;
export type asIterableOfT_return_type<T> = Iterable<T>;

// tslint:disable-next-line:class-name
export interface AsIterableOfT_TestContext<T> {
  test: ContextualTestContext;
  valueOrSequence: asIterableOfT_valueOrSequence_type<T>;
  ctor: asIterableOfT_ctor_type;
  target: typeof Iterables;
  expected: asIterableOfT_return_type<T>;
  expectingMessage: string;
}

export function testAsIterable<T>(context: AsIterableOfT_TestContext<T>) {
  // arrange
  const t = context.test;
  const valueOrSequence = context.valueOrSequence;
  const ctor = context.ctor;
  const target = context.target;
  const expected = context.expected;

  // act
  const actual = target.asIterable(valueOrSequence, ctor);

  // assert
  t.deepEqual(actual, expected, context.expectingMessage);
}
