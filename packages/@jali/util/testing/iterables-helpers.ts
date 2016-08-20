import { ContextualTestContext } from 'ava';

import * as Iterables from '../src/iterables';


export type asArrayOfT_valueOrSequence_type<T> = T | T[] | undefined;
export type asArrayOfT_ctor_type = (new(...args: any[])=> any) | undefined;
export type asArrayOfT_return_type<T> = T[];

export interface AsArrayOfT_TestContext<T> {
  test: ContextualTestContext;
  valueOrSequence: asArrayOfT_valueOrSequence_type<T>,
  ctor: asArrayOfT_ctor_type,
  target: typeof Iterables,
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