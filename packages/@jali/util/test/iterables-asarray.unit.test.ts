import test from 'ava';

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';

import { testAsArray } from '../testing/iterables-helpers'

////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// asArrayOfT_valueOrSequence_ctor

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'missing-value'), async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsArray({
    test: t,
    valueOrSequence: undefined,
    ctor: undefined,
    target: Iterables,
    expected: [],
    expectingMessage: 'Array should be empty.',
  });
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'single-value'), async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsArray({
    test: t,
    valueOrSequence: 1,
    ctor: undefined,
    target: Iterables,
    expected: [1],
    expectingMessage: 'Array should have one element.',
  });
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'array-value'), async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = [1,2,3];
  // act
  // assert
  t.plan(1);

  testAsArray({
    test: t,
    valueOrSequence: expectedArray,
    ctor: undefined,
    target: Iterables,
    expected: expectedArray,
    expectingMessage: 'Array should have three elements.',
  });
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'missing-string'), async t => {
  await Promise.resolve();

  // arrange
  // act
  // assert
  t.plan(1);

  testAsArray({
    test: t,
    valueOrSequence: undefined,
    ctor: String,
    target: Iterables,
    expected: [],
    expectingMessage: 'Array should be empty.',
  });
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'single-string'), async t => {
  await Promise.resolve();

  // arrange
  const stringValue = 'abc';
  // act
  // assert
  t.plan(1);

  testAsArray({
    test: t,
    valueOrSequence: stringValue,
    ctor: String,
    target: Iterables,
    expected: [stringValue],
    expectingMessage: 'Array should have one element.',
  });
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'asArrayOfT_valueOrSequence_ctor',
    'string-array-value'), async t => {
  await Promise.resolve();

  // arrange
  const expectedArray = ['abc','def','ghi'];
  // act
  // assert
  t.plan(1);

  testAsArray({
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

