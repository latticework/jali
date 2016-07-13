import { default as ProductEpic } from "./product-epic";
import { default as RepoPackage } from "./repo-package";
import { default as TestDisposition} from "./test-disposition";
import { default as TestType } from "./test-type";

interface TestDescription {
  readonly type: TestType;
  readonly dispostion: TestDisposition;
  readonly epic: ProductEpic;
  readonly package: RepoPackage;
  readonly functionName: string;
  readonly description: string;
}

export default TestDescription;
