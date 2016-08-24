import test from 'ava';
import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';


class FakeValue {
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
// includesOfT_sequence_value_fromIndex

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'empty'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence: number[] = [];
  const value = 1;
  const fromIndex = undefined;
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should not include.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'includes'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const value = 3;
  const fromIndex = undefined;
  const expected = true;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'not-includes'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const value = 4;
  const fromIndex = undefined;
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'has-value-with-default-parameters'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const value = 1;
  const target = [value];

  // act
  const actual = Iterables.includes(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'does-not-have-value-with-default-parameters'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = 1;
  const target = [2];

  // act
  const actual = Iterables.includes(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

//////////////
// Unit tests

/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'includesOfT_sequence_value_fromIndex',
    'empty-from-zero'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence: number[] = [];
  const value = 1;
  const fromIndex = 0;
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should not include.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'includesOfT_sequence_value_fromIndex',
    'includes-from-index'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const value = 3;
  const fromIndex = 1;
  const expected = true;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'includesOfT_sequence_value_fromIndex',
    'not-includes-from-index'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const value = 4;
  const fromIndex = 2;
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});

/** ***********************************************************************************************/
test(
  title(
    TestType.Unit,
    'includesOfT_sequence_value_fromIndex',
    'not-includes-before-index'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, 2, 3];
  const value = 1;
  const fromIndex = 2;
  const expected = false;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'includes-NaN'),
  async t => {
  await Promise.resolve();

  // arrange
  const sequence = [1, NaN, 3];
  const value = NaN;
  const fromIndex = undefined;
  const expected = true;
  const target = Iterables;

  // act
  const actual = target.includes(sequence, value, fromIndex);

  // assert
  t.plan(1);

  t.is(actual, expected, 'Should include.');
});


/** ***********************************************************************************************/
test(
  title(
    TestType.Smoke,
    'includesOfT_sequence_value_fromIndex',
    'does-not-have-value-not-loose'),
  async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = new FakeValue(1);
  const target = [1] as [Object];

  // act
  const actual = Iterables.includes(target, value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});