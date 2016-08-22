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
// concatOfT_sequence_items

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'concatOfT_sequence_items',
    'two-sequences'), async t => {
  await Promise.resolve();

  // arrange
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const expected = first.concat(second);
  const target = Iterables;

  // act
  const actual = target.concat(first, second);

  // assert
  t.plan(1);

  t.deepEqual([...actual], [...expected]);
});


//////////////
// Unit tests

/** ***********************************************************************************************/
test(title(TestType.Unit, 'concatOfT_sequence_items',
    'one-sequence'), async t => {
  await Promise.resolve();

  // arrange
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];
  const expected = first.concat(second, third);
  const target = Iterables;

  // act
  const actual = target.concat(first, second, third);

  // assert
  t.plan(1);

  t.deepEqual([...actual], [...expected]);
});


/** ***********************************************************************************************/
test(title(TestType.Smoke, 'concatOfT_sequence_items',
    'three-sequences'), async t => {
  await Promise.resolve();

  // arrange
  const first = [1, 2, 3];
  const second = [1, 2, 3];
  const expected = first.concat(second);
  const target = Iterables;

  // act
  const actual = target.concat(first, second);

  // assert
  t.plan(1);

  t.deepEqual([...actual], [...expected]);
});


