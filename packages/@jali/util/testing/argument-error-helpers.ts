import { ContextualTestContext } from "ava";

export interface TestContext {
  test: ContextualTestContext
  classContructor: any,
  parameterName?: string,
  errorMessage?: string,
  defaultMessage?: string,
}

export function testArgumentError(context: TestContext) {
  // arrange
  const t = context.test;
  const name = context.parameterName;
  const message = context.errorMessage || context.defaultMessage;

  const expected =
    `Error in argument${name ? ` '${name}'` : ""}${(message) ? `: ${message}` : ""}`;
  const target = context.classContructor;

  // act
  const result = new target(name, message);
  const actual = result.message;

  // assert
  t.plan(1);
  t.is(actual, expected);
}