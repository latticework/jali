import test from 'ava';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, TestDisposition, } from '../testing';
import { testArgumentError, testArgumentTypeError, } from '../testing/argument-error-helpers';

import * as ArgumentVerifiers from '../src/argument-verifiers';

import ArgumentEmptyStringError from '../src/argument-empty-string-error';
import ArgumentError from '../src/argument-error';
import ArgumentFalseError from '../src/argument-false-error';
import ArgumentFalsyError from '../src/argument-falsy-error';
import ArgumentNanError from '../src/argument-nan-error';
import ArgumentNullError from '../src/argument-null-error';
import ArgumentTypeError from '../src/argument-type-error';
import ArgumentUndefinedError from '../src/argument-undefined-error';
import ArgumentWhitespaceStringError from '../src/argument-whitespace-string-error';
import ArgumentZeroError from '../src/argument-zero-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'argument-verifiers');
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
  const target = ArgumentVerifiers;

  // act
  target.verifyArgument(name, expectedValue, test, message);

  // assert
  t.plan(1);
  t.true(actualValue === expectedValue, 'test was not called.');
});

//////////////
// Unit tests

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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

test(title(TestType.Unit, 'verifyArgumentOfT_name_value_test_message',
    'message-function-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const expectedValue = 1;
  const expectedError = new ArgumentError(name, message);
  const testResult = false;
  let actualValue = 0;
  const test = (value: number) => { actualValue = value; return testResult; };
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyArgument(name, expectedValue, test, messageFn);

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
    'message-function-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('boolean', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyBoolean(name, value, messageFn);

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
    'message-function-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('function', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyFunction(name, value, messageFn);

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
  const target = ArgumentVerifiers;

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
    'message-function-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyDefined(name, value, messageFn);

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


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyIterableOfT_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyIterableOfT_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const value = [];
  const message = undefined;
  const target = ArgumentVerifiers;

  // act
  target.verifyIterable(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as Iterable<number>;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyIterable(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'iterable',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true as any as Iterable<number>;
  const expectedError = new ArgumentTypeError('iterable', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyIterable(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'iterable',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = [];
  const target = ArgumentVerifiers;

  // act
  target.verifyIterable(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as Iterable<number>;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyIterable(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'iterable',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true as any as Iterable<number>;
  const expectedError = new ArgumentTypeError('iterable', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyIterable(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'iterable',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyIterableOfT_name_value_message',
    'message-function-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = true as any as Iterable<number>;
  const expectedError = new ArgumentTypeError('iterable', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyIterable(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'iterable',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyNonEmpty_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyNonEmpty_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 'non-empty';
  const target = ArgumentVerifiers;

  // act
  target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-not-specified-test-fails-for-empty', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 'non-empty';
  const target = ArgumentVerifiers;

  // act
  target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-specified-test-fails-for-empty', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonEmpty_name_value_message',
    'message-function-test-fails-for-empty', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonEmpty(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyNonZero_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyNonZero_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyNonZero(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as number;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '' as any as number;
  const expectedError = new ArgumentTypeError('number', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-not-specified-test-fails-for-zero', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 0;
  const expectedError = new ArgumentZeroError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyNonZero(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as number;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '' as any as number;
  const expectedError = new ArgumentTypeError('number', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-specified-test-fails-for-zero', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 0;
  const expectedError = new ArgumentZeroError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNonZero_name_value_message',
    'message-function-test-fails-for-zero', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messgeFn = () => message;
  const value = 0;
  const expectedError = new ArgumentZeroError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNonZero(name, value, messgeFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyNotWhitespace_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 'not-whitespace';
  const target = ArgumentVerifiers;

  // act
  target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

test(title(TestType.Smoke, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-succeeds-with-some-whitespace'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  // Includes http://www.fileformat.info/info/unicode/char/1680/browsertest.htm
  // Includes http://www.fileformat.info/info/unicode/char/2003/index.htm
  const value = ' \t\v not-whitespace\u2003\r\n';
  const target = ArgumentVerifiers;

  // act
  target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-fails-for-empty', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-not-specified-test-fails-for-whitespace', TestDisposition.Negative), async t => {
  await Promise.resolve();

  console.log('message-not-specified-test-fails-for-whitespace');
  // arrange
  const name = 'Name';
  const message = undefined;
  // Includes http://www.fileformat.info/info/unicode/char/1680/browsertest.htm
  // Includes http://www.fileformat.info/info/unicode/char/2003/index.htm
  const value = ' \t\v \u2003\r\n';
  const expectedError = new ArgumentWhitespaceStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 'non-empty';
  const target = ArgumentVerifiers;

  // act
  target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-specified-test-fails-for-empty', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-specified-test-fails-for-whitespace', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  // Includes http://www.fileformat.info/info/unicode/char/1680/browsertest.htm
  // Includes http://www.fileformat.info/info/unicode/char/2003/index.htm
  const value = ' \t\v \u2003\r\n';
  const expectedError = new ArgumentWhitespaceStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotWhitespace_name_value_message',
    'message-function-test-fails-for-whitespace', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  // Includes http://www.fileformat.info/info/unicode/char/1680/browsertest.htm
  // Includes http://www.fileformat.info/info/unicode/char/2003/index.htm
  const value = ' \t\v \u2003\r\n';
  const expectedError = new ArgumentWhitespaceStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotWhitespace(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyNotNull_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyNotNull_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyNotNull(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotNull(name, value, message);

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

test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-not-specified-test-fails-for-null', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = null as any as boolean;
  const expectedError = new ArgumentNullError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotNull(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentError({
    test: t,
    classConstructor: ArgumentNullError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyNotNull(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-specified-test-fails', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotNull(name, value, message);

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

test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-specified-test-fails-for-null', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = null as any as boolean;
  const expectedError = new ArgumentNullError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotNull(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentError({
    test: t,
    classConstructor: ArgumentNullError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNotNull_name_value_message',
    'message-specified-test-fails-for-null', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = null as any as boolean;
  const expectedError = new ArgumentNullError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNotNull(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentError({
    test: t,
    classConstructor: ArgumentNullError,
    error: actualError,
    errorMessage: expectedError.message,
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyNumber_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyNumber_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyNumber(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as number;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '' as any as number;
  const expectedError = new ArgumentTypeError('number', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-not-specified-test-fails-for-nan', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = NaN;
  const expectedError = new ArgumentNanError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyNumber(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as number;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '' as any as number;
  const expectedError = new ArgumentTypeError('number', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-specified-test-fails-for-nan', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = NaN;
  const expectedError = new ArgumentNanError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyNumber_name_value_message',
    'message-function-test-fails-for-nan', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = NaN;
  const expectedError = new ArgumentNanError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyNumber(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyObject_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyObject_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = {};
  const target = ArgumentVerifiers;

  // act
  target.verifyObject(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as Object;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyObject(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'object',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 1 as any as Object;
  const expectedError = new ArgumentTypeError('object', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyObject(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'object',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = {};
  const target = ArgumentVerifiers;

  // act
  target.verifyObject(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as Object;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyObject(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'object',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 1 as any as Object;
  const expectedError = new ArgumentTypeError('object', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyObject(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'object',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyObject_name_value_message',
    'message-function-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = 1 as any as Object;
  const expectedError = new ArgumentTypeError('object', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyObject(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'object',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyString_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyString_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '';
  const target = ArgumentVerifiers;

  // act
  target.verifyString(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyString(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = 1 as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyString(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '';
  const target = ArgumentVerifiers;

  // act
  target.verifyString(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as string;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyString(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = 1 as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyString(name, value, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


test(title(TestType.Unit, 'verifyString_name_value_message',
    'message-function-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = 1 as any as string;
  const expectedError = new ArgumentTypeError('string', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyString(name, value, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// verifyTrue_name_value_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'verifyTrue_name_value_message',
    'message-not-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyTrue(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-not-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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


test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-not-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('boolean', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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

test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-not-specified-test-fails-for-false', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = undefined;
  const value = false;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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

test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-specified-test-succeeds'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyTrue(name, value, message);

  // assert
  t.plan(1);
  t.pass();
});


test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-specified-test-fails-for-undefined', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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

test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-specified-test-fails-for-wrong-type', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = '' as any as boolean;
  const expectedError = new ArgumentTypeError('boolean', name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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


test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-specified-test-fails-for-false', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const value = false;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, message);

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


test(title(TestType.Unit, 'verifyTrue_name_value_message',
    'message-function-test-fails-for-false', TestDisposition.Negative), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const message = 'Message';
  const messageFn = () => message;
  const value = false;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTrue(name, value, messageFn);

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
// verifyTruthy_name_value_message

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-with-default-parameters'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-for-boolean'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-for-function'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = () => {};
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-for-number'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-for-object'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = {};
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-succeeds-for-string'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = '1';
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-undefined',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = undefined as any as boolean;
  const expectedError = new ArgumentUndefinedError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-null',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = null as any as boolean;
  const expectedError = new ArgumentNullError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-false',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = false;
  const expectedError = new ArgumentFalseError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-zero',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = 0;
  const expectedError = new ArgumentZeroError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-nan',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = NaN;
  const expectedError = new ArgumentNanError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-not-specified-not-loose-test-fails-for-empty-string',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = false;
  const message = undefined;
  const value = '';
  const expectedError = new ArgumentEmptyStringError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

/** ***********************************************************************************************/
/** ***********************************************************************************************/

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-succeeds-for-boolean'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = true;
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-succeeds-for-function'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = () => {};
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-succeeds-for-number'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = 1;
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-succeeds-for-object'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = {};
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-succeeds-for-string'), async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = '1';
  const target = ArgumentVerifiers;

  // act
  target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(1);
  t.pass();
});

//////////////
// Unit tests

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-undefined',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = undefined as any as boolean;
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-null',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = null as any as boolean;
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-false',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = false;
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

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

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-zero',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = 0;
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-nan',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = NaN;
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'number',
    error: actualError,
    errorMessage: expectedError.message,
  });
});

/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-specified-loose-test-fails-for-empty-string',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const value = '';
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, message);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});


/** ***********************************************************************************************/
test(title(TestType.Unit, 'verifyTruthy_name_value_message',
    'message-function-loose-test-fails-for-empty-string',
    TestDisposition.Negative),
    async t => {
  await Promise.resolve();

  // arrange
  const name = 'Name';
  const loose = true;
  const message = 'Message';
  const messageFn = () => message;
  const value = '';
  const expectedError = new ArgumentFalsyError(name, message);
  const target = ArgumentVerifiers;

  // act
  const action = () => target.verifyTruthy(name, value, loose, messageFn);

  // assert
  t.plan(3);
  const actualError = t.throws(action) as Error;

  testArgumentTypeError({
    test: t,
    classConstructor: expectedError.constructor,
    type: 'string',
    error: actualError,
    errorMessage: expectedError.message,
  });
});
