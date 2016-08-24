import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import { testArgumentTypeError, } from '../testing/argument-error-helpers';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentTypeError');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// constructor_name_message

//////////////
// Smoke tests

test(
  title(
    TestType.Smoke,
    'constructor_name_message',
    'name-specified'),
  async t => {
  await Promise.resolve();

  t.plan(2);

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: 'Name',
    errorMessage: 'Message',
  });
});


//////////////
// Unit tests

test(
  title(
    TestType.Unit,
    'constructor_name_message',
    'all-specified'),
  async t => {
  await Promise.resolve();

  t.plan(2);

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: 'Name',
    errorMessage: 'Message',
  });
});

test(
  title(
    TestType.Unit,
    'constructor_name_message',
    'message-specified'),
  async t => {
  await Promise.resolve();

  t.plan(2);

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: undefined,
    errorMessage: 'Message',
  });
});

test(
  title(
    TestType.Unit,
    'constructor_name_message',
    'none-specified'),
  async t => {
  await Promise.resolve();

  t.plan(2);

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: undefined,
    errorMessage: undefined,
  });
});
