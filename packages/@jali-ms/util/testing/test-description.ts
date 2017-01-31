import { default as ProductEpic } from './product-epic';
import { default as RepoPackage } from './repo-package';
import { default as TestDisposition} from './test-disposition';
import { default as TestType } from './test-type';

/* tslint:disable */
// TODO: Although linting seems to work locally, it fails on bitHound
// See: https://www.bithound.io/github/latticework/jali/blob/a3aea32e00015f851838240cfb57e1755140c7f7/packages/@jali-ms/util/testing/test-description.ts

interface TestDescription {
  readonly type: TestType;
  readonly disposition: TestDisposition;
  readonly epic: ProductEpic;
  readonly package: RepoPackage;
  readonly functionName: string;
  readonly description: string;
}

export default TestDescription;
