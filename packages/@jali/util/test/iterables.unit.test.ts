import test from "ava";
// import assert from "espower";

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from "../testing";

import { toMap, } from "../src/iterables";

////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util);
////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////
// toMap_sequence_keySelector

test(title(TestType.Smoke, "toMap_sequence_keySelector", "string-key"), async t => {
  await Promise.resolve();

  // arrange
  let first = {key: "one", value: 1};
  let second = {key: "two", value: 2};
  let target = [first, second];
  let expected = new Map([[first.key, first], [second.key, second]]);

  // act
  let actual = toMap(target, v => v.key);

  // assert
  t.plan(1);
  // spread used for bug in babel Map constructor.
  t.deepEqual([...expected], [...actual]);
});
