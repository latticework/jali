import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers';

import ArgumentUndefinedError from '../src/argument-undefined-error';

const DEFAULT_ARGUMENT_UNDEFINED_ERROR_MESSAGE =
  `Argument must be defined. Yours is 'undefined'`;

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentUndefinedError');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// constructor_name_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'constructor_name_message',
    'name-specified'), async t => {
  await Promise.resolve();

  t.plan(2);
  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    parameterName: 'Name',
    errorMessage: undefined,
    defaultMessage: DEFAULT_ARGUMENT_UNDEFINED_ERROR_MESSAGE,
  });
});


//////////////
// Unit tests

test(title(TestType.Unit, 'constructor_name_message',
    'all-specified'), async t => {
  await Promise.resolve();

  t.plan(2);
  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    parameterName: 'Name',
    errorMessage: 'Message',
    defaultMessage: undefined,
  });
});

test(title(TestType.Unit, 'constructor_name_message',
    'message-specified'), async t => {
  await Promise.resolve();

  t.plan(2);
  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    parameterName: undefined,
    errorMessage: 'Message',
    defaultMessage: undefined,
  });
});

test(title(TestType.Unit, 'constructor_name_message',
    'none-specified'), async t => {
  await Promise.resolve();

  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    parameterName: undefined,
    errorMessage: undefined,
    defaultMessage: DEFAULT_ARGUMENT_UNDEFINED_ERROR_MESSAGE,
  });
});
