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
// mapOfT_sequence_converter

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'mapOfT_sequence_converter',
    'doubled'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const converter = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e * 2;
  };
  const expected = [4, 8, 12];
  const target = Iterables;

  // act
  const actual = target.map(sequence, converter);
  const actualArray = Array.from(actual);

  // assert
  t.plan(4);

  t.deepEqual([...actualElements], sequence);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actualArray, expected, 'map should be doubled');
});

/** ***********************************************************************************************/
test.failing(title(TestType.Smoke, 'mapOfT_sequence_converter',
    'doubled-not-array'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = (function*(arr: number[]) {for (const e of arr) {yield e;}})([2, 4, 6]);
  const expectedElements = [...sequence];
  const expectedIndexes = [0, 1, 2];
  const expectedSequences = [sequence, sequence, sequence];
  const actualElements: number[] = [];
  const actualIndexes: number[] = [];
  const actualSequences: Iterable<number>[] = [];
  const converter = (e: number, i: number, s: Iterable<number>) => {
    actualElements.push(e);
    actualIndexes.push(i);
    actualSequences.push(s);
    return e * 2;
  };
  const expected = [4, 8, 12];
  const target = Iterables;

  // act
  const actual = target.map(sequence, converter);
  const actualArray = Array.from(actual);

  // assert
  t.plan(4);
  t.deepEqual(actualElements, expectedElements);
  t.deepEqual([...actualIndexes], [...expectedIndexes]);
  t.deepEqual([...actualSequences], [...expectedSequences]);
  t.deepEqual(actualArray, expected, 'map should be doubled');
});
