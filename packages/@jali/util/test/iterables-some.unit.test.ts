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
// someOfT_sequence

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'someOfT_sequence',
    'empty'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const target = [];

  // act
  const actual = Iterables.some(target);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'someOfT_sequence',
    'not-empty'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const target = [1];

  // act
  const actual = Iterables.some(target);

  // assert
  t.plan(1);
  t.is(actual, expected);
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'someOfT_sequence_test',
    'test-succeeds'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const test = (element: number) => element === 1;
  const target = [0, 1];

  // act
  const actual = Iterables.some(target, test);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'someOfT_sequence_test',
    'test-fails'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const test = (element: number) => element === 1;
  const target = [0, 2];

  // act
  const actual = Iterables.some(target, test);

  // assert
  t.plan(1);
  t.is(actual, expected);
});


