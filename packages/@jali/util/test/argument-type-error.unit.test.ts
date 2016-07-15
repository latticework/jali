import test, { ContextualTestContext } from 'ava';
//import * as assert from 'assert';

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import ArgumentTypeError from '../src/argument-type-error';

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util, 
  RepoPackage.Util, 
  'ArgumentTypeError');
////////////////////////////////////////////////////////////////////////////////////////////////////

interface ArgumentTypeErrorTestContext {
  test: ContextualTestContext
  type: string,
  parameterName?: string,
  errorMessage?: string,
}

function testArgumentTypeError(context: ArgumentTypeErrorTestContext) {
  // arrange
  const t = context.test;
  const type = context.type;
  const name = context.parameterName;
  const message = context.errorMessage || `Argument must have type '${type}'. Yours is not`;

  const expected =
    `Error in argument${name ? ` '${name}'` : ''}${(message) ? `: ${message}` : ''}`;
  const target = ArgumentTypeError;

  // act
  const result = new target(type, name, message);
  const actual = result.message;

  // assert
  t.plan(1);
  t.is(actual, expected);
}



////////////////////////////////////////////////////////////////////////////////////////////////////
// constructor_name_message

//////////////
// Smoke tests

test(title(TestType.Smoke, 'constructor_name_message', 
    'name-specified'), async t => {
  await Promise.resolve();

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: 'Name',
    errorMessage: 'Message',
  });
});


//////////////
// Unit tests

test(title(TestType.Unit, 'constructor_name_message', 
    'all-specified'), async t => {
  await Promise.resolve();

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: 'Name',
    errorMessage: 'Message',
  });
});

test(title(TestType.Unit, 'constructor_name_message', 
    'message-specified'), async t => {
  await Promise.resolve();

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: undefined,
    errorMessage: 'Message',
  });
});

test(title(TestType.Unit, 'constructor_name_message', 
    'none-specified'), async t => {
  await Promise.resolve();

  testArgumentTypeError({
    test: t,
    type: 'number',
    parameterName: undefined,
    errorMessage: undefined,
  });
});
