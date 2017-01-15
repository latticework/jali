import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers';

import ArgumentEmptyStringError from '../src/argument-empty-string-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentEmptyStringError');
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
  testArgumentError({
    classConstructor: ArgumentEmptyStringError,
    defaultMessage: 'Argument must not be an empty string. Yours is empty',
    errorMessage: undefined,
    parameterName: 'Name',
    test: t,
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
  testArgumentError({
    classConstructor: ArgumentEmptyStringError,
    defaultMessage: undefined,
    errorMessage: 'Message',
    parameterName: 'Name',
    test: t,
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
  testArgumentError({
    classConstructor: ArgumentEmptyStringError,
    defaultMessage: undefined,
    errorMessage: 'Message',
    parameterName: undefined,
    test: t,
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
  testArgumentError({
    classConstructor: ArgumentEmptyStringError,
    defaultMessage: 'Argument must not be an empty string. Yours is empty',
    errorMessage: undefined,
    parameterName: undefined,
    test: t,
  });
});
