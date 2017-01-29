import test from 'ava';
import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';
import { testAsIterable, toIterable } from '../testing/iterables-helpers';


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
    ctor: undefined,
    expected: [],
    expectingMessage: 'Array should be empty.',
    target: Iterables,
    test: t,
    valueOrSequence: undefined,
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
    ctor: undefined,
    expected: [1],
    expectingMessage: 'Array should have one element.',
    target: Iterables,
    test: t,
    valueOrSequence: 1,
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
  const expectedArray = [1, 2, 3];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    ctor: undefined,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: expectedArray,
  });
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asIterableOfT_valueOrSequence_ctor',
    'not-array-value'),
  async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = [1, 2, 3];
  const sequence = toIterable(expectedArray);
  // act
  // assert
  t.plan(1);

  testAsIterable({
    ctor: undefined,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: sequence,
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
    ctor: String,
    expected: [],
    expectingMessage: 'Array should be empty.',
    target: Iterables,
    test: t,
    valueOrSequence: undefined,
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
    ctor: String,
    expected: [stringValue],
    expectingMessage: 'Array should have one element.',
    target: Iterables,
    test: t,
    valueOrSequence: stringValue,
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
  const expectedArray = ['abc', 'def', 'ghi'];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    ctor: String,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: expectedArray,
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
    ctor: Map,
    expected: [],
    expectingMessage: 'Array should be empty.',
    target: Iterables,
    test: t,
    valueOrSequence: undefined,
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
    ctor: Map,
    expected: [mapValue],
    expectingMessage: 'Array should have one element.',
    target: Iterables,
    test: t,
    valueOrSequence: mapValue,
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
    ctor: undefined,
    expected: [...mapValue] as any as Map<number, string>[],
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: mapValue as Map<number, string>,
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
    ctor: Map,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: expectedArray,
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
    ctor: undefined,
    expected: [...stringValue],
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: stringValue,
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
  const expectedArray = ['abc', 'def', 'ghi'];
  // act
  // assert
  t.plan(1);

  testAsIterable({
    ctor: undefined,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
    target: Iterables,
    test: t,
    valueOrSequence: expectedArray,
  });
});
