import test from 'ava';
//import * as assert from 'assert';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, TestDisposition, } from '../testing';
import { testArgumentError, testArgumentTypeError, } from '../testing/argument-error-helpers'

import * as ArgumentValidators from '../src/argument-validators';

// import ArgumentEmptyStringError from '../src/argument-empty-string-error';
import ArgumentError from '../src/argument-error';
// import ArgumentFalseError from '../src/argument-false-error';
// import ArgumentFalsyError from '../src/argument-falsy-error';
// import ArgumentNanError from '../src/argument-nan-error';
// import ArgumentNullError from '../src/argument-null-error';
import ArgumentTypeError from '../src/argument-type-error';
import ArgumentUndefinedError from '../src/argument-undefined-error';
// import ArgumentWhitespaceStringError from '../src/argument-whitespace-string-error';
// import ArgumentZeroError from '../src/argument-zero-error';

// import { DEFAULT_ARGUMENT_UNDEFINED_ERROR_MESSAGE } from '../src/argument-undefined-error.unit.test'

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

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyBoolean_name_value_message', 
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyBoolean_name_value_message', 
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('boolean', name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


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
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyBoolean_name_value_message', 
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('boolean', name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyBoolean(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyFunction_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyFunction_name_value_message', 
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = () => {};
  const target = ArgumentValidators;

  // act
  target.verifyFunction(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyFunction_name_value_message', 
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyFunction(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyFunction_name_value_message', 
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('function', name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyFunction(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'boolean',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyFunction_name_value_message', 
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = () => {};
  const target = ArgumentValidators;

  // act
  target.verifyFunction(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyFunction_name_value_message', 
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyFunction(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'function',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyFunction_name_value_message', 
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('function', name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyFunction(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'function',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyDefined_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyDefined_name_value_message', 
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true;
  const target = ArgumentValidators;

  // act
  target.verifyDefined(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyDefined_name_value_message', 
    'message-not-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyDefined(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyDefined_name_value_message', 
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true;
  const target = ArgumentValidators;

  // act
  target.verifyDefined(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyDefined_name_value_message', 
    'message-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentValidators;

  // act
  const action = () => target.verifyDefined(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentError({
    test: t,
    classConstructor: ArgumentUndefinedError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});


