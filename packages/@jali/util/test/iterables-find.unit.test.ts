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
// findOfT_sequence_test

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'empty'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [];
  const expected = undefined;
  const target = Iterables;

  // act
  const actual = target.find(sequence);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should not be found.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'non-empty'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const expected = 1;
  const target = Iterables;

  // act
  const actual = target.find(sequence);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should find.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'no-match'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const test = (e: number) => e % 5 === 0;
  const expected = undefined;
  const target = Iterables;

  // act
  const actual = target.find(sequence, test);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should not be found.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'matches'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [2, 4, 6];
  const test = (e: number) => e % 3 === 0;
  const expected = 6;
  const target = Iterables;

  // act
  const actual = target.find(sequence, test);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should find.');
});


//////////////
// Unit tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'not-array-no-match'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = Iterables.concat([2, 4, 6]);
  const test = (e: number) => e % 5 === 0;
  const expected = undefined;
  const target = Iterables;

  // act
  const actual = target.find(sequence, test);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should not be found.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'findOfT_sequence_test',
    'not-array-matches'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = Iterables.concat([2, 4, 6]);
  const test = (e: number) => e % 3 === 0;
  const expected = 6;
  const target = Iterables;

  // act
  const actual = target.find(sequence, test);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should find.');
});
