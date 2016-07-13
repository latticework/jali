import test from "ava";
//import * as assert from "assert";

import { makeTitleFunc, TestType, ProductEpic, RepoPackage, } from "../testing";
import { TestContext, testArgumentError, } from "../testing/argument-error-helpers"

import ArgumentEmptyStringError from "../src/argument-empty-string-error";

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(
  ProductEpic.Util, 
  RepoPackage.Util, 
  "ArgumentEmptyStringError");
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// constructor_name_message

//////////////
// Smoke tests

test(title(TestType.Smoke, "constructor_name_message", 
    "name-specified"), async t => {
  await Promise.resolve();

  testArgumentError({
    test: t,
    classContructor: ArgumentEmptyStringError,
    parameterName: "Name",
    errorMessage: undefined,
    defaultMessage: "Argument must not be an empty string. Yours is empty",
  } as TestContext);
});


//////////////
// Unit tests

test(title(TestType.Unit, "constructor_name_message", 
    "all-specified"), async t => {
  await Promise.resolve();

  // arrange
  const name = "Name";
  const message = "Message";
  const target = ArgumentEmptyStringError;
  let expected = `Error in argument '${name}': ${message}`;

  // act
  const result = new target(name, message);
  const actual = result.message;

  // assert
  t.plan(1);

  t.is(actual, expected);
});

test(title(TestType.Unit, "constructor_name_message", 
    "message-specified"), async t => {
  await Promise.resolve();

  // arrange
  const message = "Message";
  const target = ArgumentEmptyStringError;
  let expected = `Error in argument: ${message}`;

  // act
  const result = new target(undefined, message);
  const actual = result.message;

  // assert
  t.plan(1);

  t.is(actual, expected);
});

test(title(TestType.Unit, "constructor_name_message", 
    "none-specified"), async t => {
  await Promise.resolve();

  // arrange
  const target = ArgumentEmptyStringError;

  let expected = 
    `Error in argument: Argument must not be an empty string. Yours is empty`;

  // act
  const result = new target();
  const actual = result.message;

  // assert
  t.plan(1);

  t.is(actual, expected);
});
