import test from 'ava';

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';

////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// sliceOfT_sequence_begin_end

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'no-end'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const begin = 1;
  const end = undefined;
  const expectedSequence = [4, 6];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'with-end'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const begin = 0;
  const end = 2;
  const expectedSequence = [2, 4];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'no-end-not-array'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const begin = 1;
  const end = undefined;
  const expectedSequence = [4, 6];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'with-end-not-array'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const begin = 0;
  const end = 2;
  const expectedSequence = [2, 4];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});


//////////////
// Unit tests


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'no-end-reverse'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const begin = -1;
  const end = undefined;
  const expectedSequence = [6];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'with-end-reverse'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const begin = -2;
  const end = 2;
  const expectedSequence = [4];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'with-negative-end'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const begin = 0;
  const end = -1;
  const expectedSequence = [2, 4];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});


/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'sliceOfT_sequence_begin_end',
    'no-end-reverse-not-array'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const begin = -1;
  const end = undefined;
  const expectedSequence = [6];
  const target = Iterables;

  // act
  const actual = target.slice(sequence, begin, end);
  const actualSequence = Array.from(actual);

  // assert
  t.plan(1);
  t.deepEqual(actualSequence, expectedSequence);
});

