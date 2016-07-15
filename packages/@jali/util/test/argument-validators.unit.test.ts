import test from 'ava';
//import * as assert from 'assert';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, TestDisposition, } from '../testing';
import { testArgumentError, } from '../testing/argument-error-helpers'

import * as ArgumentValidators from '../src/argument-validators';

// import ArgumentEmptyStringError from '../src/argument-empty-string-error';
import ArgumentError from '../src/argument-error';
import ArgumentFalseError from '../src/argument-false-error';
// import ArgumentFalsyError from '../src/argument-falsy-error';
// import ArgumentNanError from '../src/argument-nan-error';
// import ArgumentNullError from '../src/argument-null-error';
// import ArgumentTypeError from '../src/argument-type-error';
// import ArgumentUndefinedError from '../src/argument-undefined-error';
// import ArgumentWhitespaceStringError from '../src/argument-whitespace-string-error';
// import ArgumentZeroError from '../src/argument-zero-error';

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
    'message-not-specified-test-succeeds'), async t => {
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
    'message-not-specified-test-fails', TestDisposition.Negative), async t => {
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

test(title(TestType.Unit, 'verifyArgumentOfT_name_value_test_message', 
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
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


test(title(TestType.Unit, 'verifyArgumentOfT_name_value_test_message', 
    'message-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
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

////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyBoolean_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyBoolean_name_value_message', 
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true;
  const target = ArgumentValidators;

  // act
  target.verifyBoolean(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Smoke, 'verifyBoolean_name_value_message', 
    'message-not-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action);

  testArgumentError({
    test: t,
    classConstructor: ArgumentError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyBoolean_name_value_message', 
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true;
  const target = ArgumentValidators;

  // act
  target.verifyBoolean(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyBoolean_name_value_message', 
    'message-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action);

  testArgumentError({
    test: t,
    classConstructor: ArgumentError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});