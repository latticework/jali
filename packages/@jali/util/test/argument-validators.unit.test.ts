import test from 'ava';
//import * as assert from 'assert';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, TestDisposition, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers'

import * as ArgumentValidators from '../src/argument-validators';
import ArgumentError from '../src/argument-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util, 
  RepoPackage.Util, 
  'argument-validators');
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyArgumentOfT_name_value_test_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyArgumentOfT_name_value_test_message', 
    'name-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const testResult = true;
  const expectedValue = 1;
  let actualValue = 0;
  const test = (value: number) => { actualValue = value; return testResult; };
  const target = ArgumentValidators;

  // act
  target.verifyArgument(name, expectedValue, test, message);

  // assert
  t.plan(1);
  t.true(actualValue === expectedValue, 'test was not called.');
});


test(title(TestType.Smoke, 'verifyArgumentOfT_name_value_test_message', 
    'name-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const expectedValue = 1;
  const expectedError = new ArgumentError(name, message);
  const testResult = false;
  let actualValue = 0;
  const test = (value: number) => { actualValue = value; return testResult; };
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyArgument(name, expectedValue, test, message);

  // assert
  t.plan(4);
  const actualError = t.throws(action);
  t.true(actualValue === expectedValue, 'test was not called.');

  testArgumentError({
    test: t,
    classConstructor: ArgumentError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});

//////////////
// Unit tests
