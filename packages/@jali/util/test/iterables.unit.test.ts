import test from 'ava';

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';

class fakeValue {
  public constructor(public value: any) {

  }

  public valueOf(): Object {
    return this.value;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////
// toMapOfTKeyTValue_sequence_keySelector

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'toMapOfTKeyTValue_sequence_keySelector',
    'string-key'), async t => {
  await Promise.resolve();

  // arrange
  const first = {key: 'one', value: 1};
  const second = {key: 'two', value: 2};
  const target = [first, second];
  const expected = new Map([[first.key, first], [second.key, second]]);

  // act
  const actual = Iterables.toMap(target, v => v.key);

  // assert
  t.plan(1);
  // spread used for bug in babel Map constructor.
  t.deepEqual([...expected], [...actual]);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// hasOfT_sequence

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence',
    'empty'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const target = [];

  // act
  const actual = Iterables.has(target);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence',
    'not-empty'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const target = [1];

  // act
  const actual = Iterables.has(target);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// hasOfT_sequence_value_loose

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence_value_loose',
    'has-value-with-default-parameters'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const value = 1;
  const target = [value];

  // act
  const actual = Iterables.has(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence_value_loose',
    'does-not-have-value-with-default-parameters'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = 1;
  const target = [2];

  // act
  const actual = Iterables.has(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

//////////////
// Unit tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence_value_loose',
    'does-not-have-value-not-loose'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = new fakeValue(1);
  const target = [1] as [Object];

  // act
  const actual = Iterables.has(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence_value_loose',
    'has-value-loose'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const value = new fakeValue(1);
  const target = [1] as [Object];

  // act
  const actual = Iterables.has(target, value, true);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'hasOfT_sequence_value_loose',
    'does-not-have-loose'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = 1;
  const target = [2];

  // act
  const actual = Iterables.has(target, value, true);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

