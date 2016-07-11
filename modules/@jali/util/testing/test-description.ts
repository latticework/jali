import { default as ProductEpic } from "./product-epic";
import { default as RepoPackage } from "./repo-package";
import { default as TestDisposition} from "./test-disposition";
import { default as TestType } from "./test-type"; 

interface TestDescription {
    readonly type: TestType,
    readonly epic: ProductEpic,
    readonly package: RepoPackage,
    readonly functionName: string,
    readonly dispostion: TestDisposition,
    readonly description: string,
}

export default TestDescription;
