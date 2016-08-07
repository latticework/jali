import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers';

import ArgumentNullError from '../src/argument-null-error';

const DEFAULT_MESSAGE = `Argument must have a non-null value. Yours is 'null'`;

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentNullError');
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
    classConstructor: ArgumentNullError,
    parameterName: 'Name',
    errorMessage: undefined,
    defaultMessage: DEFAULT_MESSAGE,
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
    classConstructor: ArgumentNullError,
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
    classConstructor: ArgumentNullError,
    parameterName: undefined,
    errorMessage: 'Message',
    defaultMessage: undefined,
  });
});

test(title(TestType.Unit, 'constructor_name_message',
    'none-specified'), async t => {
  await Promise.resolve();

  t.plan(2);
  testArgumentError({
    test: t,
    classConstructor: ArgumentNullError,
    parameterName: undefined,
    errorMessage: undefined,
    defaultMessage: DEFAULT_MESSAGE,
  });
});
