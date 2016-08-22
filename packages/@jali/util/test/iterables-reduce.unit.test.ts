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
// reduceOfT_sequence_accumulator

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'reduceOfT_sequence_accumulator',
    'sum'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const expectedElements = [4, 6];
  const expectedPrevious = [2, 6];
  const expectedIndexes = [1, 2];
  const expectedSequences = [sequence, sequence];
  const actualPrevious: number[] = [];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const accumulator = (p: number, e: number, i: number, s: Iterable<number>) => {
    actualPrevious.push(p);
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return p + e;
  };
  const expected = 12;
  const target = Iterables;

  // act
  const actual = target.reduce(sequence, accumulator);

  // assert
  t.plan(5);

  t.deepEqual(actualPrevious, expectedPrevious);
  t.deepEqual([...actualElements], expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actual, expected, 'reduce should sum elements');
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'reduceOfT_sequence_accumulator',
    'sum-not-array'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const expectedElements = [4, 6];
  const expectedPrevious = [2, 6];
  const expectedIndexes = [1, 2];
  const expectedSequences = [sequence, sequence];
  const actualPrevious: number[] = [];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const accumulator = (p: number, e: number, i: number, s: Iterable<number>) => {
    actualPrevious.push(p);
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return p + e;
  };
  const expected = 12;
  const target = Iterables;

  // act
  const actual = target.reduce(sequence, accumulator);

  // assert
  t.plan(5);

  t.deepEqual(actualPrevious, expectedPrevious);
  t.deepEqual([...actualElements], expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actual, expected, 'reduce should sum elements');
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'reduceOfT_sequence_accumulator',
    'specified-initial-sum'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const expectedElements = sequence;
  const expectedPrevious = [1, 3, 7];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualPrevious: number[] = [];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const accumulator = (p: number, e: number, i: number, s: Iterable<number>) => {
    actualPrevious.push(p);
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return p + e;
  };
  const initialValue = 1;
  const expected = 12 + initialValue;
  const target = Iterables;

  // act
  const actual = target.reduce(sequence, accumulator, initialValue);

  // assert
  t.plan(5);

  t.deepEqual(actualPrevious, expectedPrevious);
  t.deepEqual([...actualElements], expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actual, expected, 'reduce should sum elements');
});

/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'reduceOfT_sequence_accumulator',
    'specified-initial-sum-not-array'), async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const expectedElements = [...sequence];
  const expectedPrevious = [1, 3, 7];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualPrevious: number[] = [];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const accumulator = (p: number, e: number, i: number, s: Iterable<number>) => {
    actualPrevious.push(p);
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return p + e;
  };
  const initialValue = 1;
  const expected = 12 + initialValue;
  const target = Iterables;

  // act
  const actual = target.reduce(sequence, accumulator, initialValue);

  // assert
  t.plan(5);

  t.deepEqual(actualPrevious, expectedPrevious);
  t.deepEqual([...actualElements], expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actual, expected, 'reduce should sum elements');
});
