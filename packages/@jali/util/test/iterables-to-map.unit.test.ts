import test from 'ava';

import {makeTitleFunc, TestType, ProductEpic, RepoPackage, } from '../testing';

import * as Iterables from '../src/iterables';


////////////////////////////////////////////////////////////////////////////////////////////////////
let title = makeTitleFunc(
  ProductEpic.Util,
  RepoPackage.Util,
  'Iterables');
////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////
// toMapOfTKeyTValue_sequence_keySelector

//////////////
// Smoke tests

/** ***********************************************************************************************/
test(title(TestType.Smoke, 'toMapOfTKeyTValue_sequence_keySelector',
    'string-key'), async t => {
  await Promise.resolve();

  // arrange
  const first = {key: 'one', value: 1};
  const second = {key: 'two', value: 2};
  const target = [first, second];
  const expected = new Map([[first.key, first], [second.key, second]]);

  // act
  const actual = Iterables.toMap(target, v => v.key);

  // assert
  t.plan(1);
  // spread used for bug in babel Map constructor.
  t.deepEqual([...actual], [...expected]);
});
