import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers';

import ArgumentNanError from '../src/argument-nan-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'ArgumentNanError');
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
    classConstructor: ArgumentNanError,
    parameterName: 'Name',
    errorMessage: undefined,
    defaultMessage: 'Argument must have a truthy value. Yours is \'NaN\'',
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
    classConstructor: ArgumentNanError,
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
    classConstructor: ArgumentNanError,
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
    classConstructor: ArgumentNanError,
    parameterName: undefined,
    errorMessage: undefined,
    defaultMessage: 'Argument must have a truthy value. Yours is \'NaN\'',
  });
});
