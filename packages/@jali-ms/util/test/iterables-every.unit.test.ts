import test from 'ava';
import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';

import { toIterable } from '../testing/iterables-helpers';


////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// everyOfT_sequence_test

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'everyOfT_sequence_test',
    'succeeds'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const test = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e % 2 === 0;
  };
  const expected = true;
  const target = Iterables;

  // act
  const actual = target.every(sequence, test);

  // assert
  t.plan(4);

  t.deepEqual([...actualElements], sequence);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.is(actual, expected, 'Every should be multiple of 2');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'everyOfT_sequence_test',
    'fails'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const test = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e % 3 !== 0;
  };
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.every(sequence, test);

  // assert
  t.plan(4);

  t.deepEqual([...actualElements], sequence);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.is(actual, expected, 'Not every should NOT be multiple of 3');
});


//////////////
// Unit tests

/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'everyOfT_sequence_test',
    'succeeds-not-array'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = toIterable([2, 4, 6]);
  const expectedElements = [...sequence];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const test = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e % 2 === 0;
  };
  const expected = true;
  const target = Iterables;

  // act
  const actual = target.every(sequence, test);

  // assert
  t.plan(4);
  t.is(actualElements.length, 3);
  t.deepEqual(actualElements, expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.is(actual, expected, 'Every should be multiple of 2');
});

/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'everyOfT_sequence_test',
    'fails-not-array'),
  async t => {
  await Promise.resolve();

  // arrange
  // const sequence = toIterable([2, 4, 6]);
  const sequence = Iterables.concat([2, 4, 6]);
  const expectedElements = [...sequence];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const test = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e % 3 !== 0;
  };
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.every(sequence, test);

  // assert
  t.plan(4);
  t.deepEqual([...actualElements], expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.is(actual, expected, 'Not every should NOT be multiple of 3');
});
