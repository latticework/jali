import test from 'ava';

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as TypeGuards from '../src/type-guards';


////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'TypeGuards');
////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////
// isError

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'isError',
    'is-error'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const value = new Error();
  const target = TypeGuards;

  // act
  const actual = target.isError(value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'isError',
    'is-not-error'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = "error";
  const target = TypeGuards;

  // act
  const actual = target.isError(value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// isIterableOfT_value

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'isIterableOfT_value',
    'is-iterable'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;
  const value = [];
  const target = TypeGuards;

  // act
  const actual = target.isIterable(value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'isIterableOfT_value',
    'is-not-iterable'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;
  const value = 1;
  const target = TypeGuards;

  // act
  const actual = target.isIterable(value);

  // assert
  t.plan(1);
  t.is(actual, expected);
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// makeIsIterableOfT_elementTypeGuard_deep

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-iterable_empty_default_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = undefined;
  const value = [];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-iterable_nonempty_default_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = undefined;
  const value = [1];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-not-iterable_default_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = undefined;
  const value = 1;
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-not-element_default_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = undefined;
  const value = ["one"];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});


//////////////
// Unit tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-iterable_empty_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = true;
  const value = [];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-iterable_nonempty_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = true;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = true;
  const value = [1, 2];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-not-iterable_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = true;
  const value = 1;
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'makeIsIterableOfT_elementTypeGuard_deep',
    'is-not-element_nonempty_deep'), async t => {
  await Promise.resolve();

  // arrange
  const expected = false;

  const test: (value: any) => value is number =
    ((value: any) => typeof value === 'number') as (value: any) => value is number;

  const deep = true;
  const value = [1, "two"];
  const target = TypeGuards;

  // act
  const actualFunction = target.makeIsIterable(test, deep);
  const actual = actualFunction(value);

  // assert
  t.plan(2);
  t.is(typeof actualFunction, 'function');
  t.is(actual, expected);
});

