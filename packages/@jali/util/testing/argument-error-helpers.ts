import { ContextualTestContext } from 'ava';

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
