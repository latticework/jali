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
// filterOfT_sequence_test

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'filterOfT_sequence_test',
    'two-matches'),
  async t => {
  await Promise.resolve();

  // arrange
  const first = {key: 'one', value: 1};
  const second = {key: 'two', value: 2};
  const third = {key: 'three', value: 3};
  const fourth = {key: 'four', value: 4};
  const expected = [second, third];
  const target = [first, second, third, fourth];

  // act
  const actual = Iterables.filter(target, v => v.key[0] === 't');

  // assert
  t.plan(1);
  t.deepEqual([...actual], [...expected]);
});