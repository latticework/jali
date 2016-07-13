import test from "ava";
//import * as assert from "assert";

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from "../testing";

import ArgumentEmptyStringError from "../src/argument-empty-string-error";

////////////////////////////////////////////////////////////////////////////////////////////////////
const title = makeTitleFunc(ProductEpic.Util, RepoPackage.Util, "ArgumentEmptyStringError");
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// toMap_sequence_keySelector

test(title(TestType.Smoke, "constructor_name_message", "all-specified"), async t => {
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
