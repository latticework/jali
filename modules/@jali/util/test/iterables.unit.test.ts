import test from "ava";
//import assert from "espower";

import {TestDescription, makeTitle, TestType, ProductEpic, RepoPackage, TestDisposition } from "../testing";

import { toMap } from "../src/iterables";

test(makeTitle({
    type: TestType.Smoke,
    epic: ProductEpic.Util,
    package: RepoPackage.Util,
    functionName: "toMap_sequence_keySelector",
    dispostion: TestDisposition.Positive,
    description: "string-key",
} as TestDescription), async t => {
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
