import test from 'ava';
import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';
import { testAsIterable } from '../testing/iterables-helpers'


////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// asIterableOfT_valueOrSequence_ctor

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'missing-value'),
  async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: undefined,
    ctor: undefined,
    target: Iterables,
    expected: [],
    expectingMessage: 'Array should be empty.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'single-value'),
  async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: 1,
    ctor: undefined,
    target: Iterables,
    expected: [1],
    expectingMessage: 'Array should have one element.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'array-value'),
  async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = [1,2,3];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: expectedArray,
    ctor: undefined,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});

/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'asIterableOfT_valueOrSequence_ctor',
    'not-array-value'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([1, 2, 3]);
  const expectedArray = [...sequence];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: sequence,
    ctor: undefined,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'missing-string'),
  async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: undefined,
    ctor: String,
    target: Iterables,
    expected: [],
    expectingMessage: 'Array should be empty.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'single-string'),
  async t => {
  await Promise.resolve();

  // arrange
  const stringValue = 'abc';
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: stringValue,
    ctor: String,
    target: Iterables,
    expected: [stringValue],
    expectingMessage: 'Array should have one element.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'asIterableOfT_valueOrSequence_ctor',
    'string-array-value'),
  async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = ['abc','def','ghi'];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: expectedArray,
    ctor: String,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});

//////////////
// Unit tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'missing-map'),
  async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: undefined,
    ctor: Map,
    target: Iterables,
    expected: [],
    expectingMessage: 'Array should be empty.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'single-map'),
  async t => {
  await Promise.resolve();

  // arrange
  const mapValue = new Map([[1, 'abc'], [2, 'def'], [3, 'ghi']]);
  // act
  // assert
  t.plan(1);

  testAsIterable<Map<number, string>>({
    test: t,
    valueOrSequence: mapValue,
    ctor: Map,
    target: Iterables,
    expected: [mapValue],
    expectingMessage: 'Array should have one element.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'single-map-no-ctor'),
  async t => {
  await Promise.resolve();

  // arrange
  const mapValue = new Map([[1, 'abc'], [2, 'def'], [3, 'ghi']]);
  // act
  // assert
  t.plan(1);

  testAsIterable<Map<number, string>>({
    test: t,
    valueOrSequence: mapValue as Map<number, string>,
    ctor: undefined,
    target: Iterables,
    expected: [...mapValue] as any as Map<number, string>[],
    expectingMessage: 'Array should have three elements.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'map-array-value'),
  async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = [
    new Map([[1, 'abc'], [2, 'def'], [3, 'ghi']]),
    new Map([[4, 'jkl'], [5, 'mno'], [6, 'pqr']]),
    new Map([[7, 'stu'], [8, 'vwx'], [9, 'yza']]),
  ];
  // act
  // assert
  t.plan(1);

  testAsIterable<Map<number, string>>({
    test: t,
    valueOrSequence: expectedArray,
    ctor: Map,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'single-string-no-ctor'),
  async t => {
  await Promise.resolve();

  // arrange
  const stringValue = 'abc';
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: stringValue,
    ctor: undefined,
    target: Iterables,
    expected: [...stringValue],
    expectingMessage: 'Array should have three elements.',
  });
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'asIterableOfT_valueOrSequence_ctor',
    'string-array-value-no-ctor'),
  async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = ['abc','def','ghi'];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    test: t,
    valueOrSequence: expectedArray,
    ctor: undefined,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});