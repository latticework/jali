import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers';

import ArgumentWhitespaceStringError from '../src/argument-whitespace-string-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentWhitespaceStringError');
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
    classConstructor: ArgumentWhitespaceStringError,
    defaultMessage: 'Argument must contain non-whitespace characters. Yours has only whitespace',
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
    classConstructor: ArgumentWhitespaceStringError,
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
    classConstructor: ArgumentWhitespaceStringError,
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
    classConstructor: ArgumentWhitespaceStringError,
    defaultMessage: 'Argument must contain non-whitespace characters. Yours has only whitespace',
    errorMessage: undefined,
    parameterName: undefined,
    test: t,
  });
});
