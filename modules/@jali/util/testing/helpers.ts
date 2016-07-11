import { default as ProductEpic } from "./product-epic";
import { default as RepoPackage } from "./repo-package";
import { default as TestDescription } from "./test-description";
import { default as TestDisposition} from "./test-disposition";
import { default as TestType } from "./test-type";

export function makeTitle(description: TestDescription): string {
    const type: string = TestType[description.type];
    const epic: string = ProductEpic[description.epic];
    const pkg = RepoPackage[description.package];
    const polarity = TestDisposition[description.dispostion];
    const func = description.functionName;
    const descr = description.description;

    const scope = `type‿${type}＿epic‿${epic}＿package‿${pkg}`;

    return `${scope}＿function‿${func}＿disposition‿${polarity}＿${descr}`;
}
