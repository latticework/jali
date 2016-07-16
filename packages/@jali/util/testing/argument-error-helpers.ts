import { ContextualTestContext } from 'ava';

import ArgumentTypeError from '../src/argument-type-error';

export interface TestContext<TError extends Error> {
  test: ContextualTestContext
  classConstructor: new (name?: string, message?: string) => TError,
  error?: TError,
  parameterName?: string,
  errorMessage?: string,
  defaultMessage?: string,
}

export function testArgumentError<TError extends Error>(context: TestContext<TError>) {
  // arrange
  const t = context.test;
  const name = context.parameterName;
  const message = context.errorMessage || context.defaultMessage;

  const expectedMessage = (context.error)
    ? context.errorMessage
    : `Error in argument${name ? ` '${name}'` : ''}${(message) ? `: ${message}` : ''}`;

  const target = context.classConstructor;

  // act
  const result = context.error || new target(name, message);

  // assert
  t.true(result instanceof context.classConstructor);

  const actualMessage = result.message;
  t.is(actualMessage, expectedMessage);
}

export interface ArgumentTypeErrorTestContext {
  test: ContextualTestContext,
  classConstructor?: Function,
  error?: Error,
  type: string,
  parameterName?: string,
  errorMessage?: string,
}

export function testArgumentTypeError(context: ArgumentTypeErrorTestContext) {
  // arrange
  const t = context.test;
  const errorConstructor = context.classConstructor || ArgumentTypeError;
  const type = context.type;
  const name = context.parameterName;
  const message = context.errorMessage || `Argument must have type '${type}'. Yours is not`;

  const expectedMessage = (context.error)
    ? context.errorMessage
    : `Error in argument${name ? ` '${name}'` : ''}${(message) ? `: ${message}` : ''}`;

  const target = ArgumentTypeError;

  // act
  const result = context.error || new target(type, name, message);

  // assert
  t.true(
    result instanceof errorConstructor, 
    `Object of type '${result.constructor.name}' does not have error type '${errorConstructor.name}'`);

  const actualMessage = result.message;
  t.is(actualMessage, expectedMessage);
}
