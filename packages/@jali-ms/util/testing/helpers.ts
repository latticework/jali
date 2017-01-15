import { default as ProductEpic } from './product-epic';
import { default as RepoPackage } from './repo-package';
import { default as TestDescription } from './test-description';
import { default as TestDisposition} from './test-disposition';
import { default as TestType } from './test-type';

export function makeTitle(description: TestDescription): string {
  const type: string = TestType[description.type];
  const polarity = TestDisposition[description.disposition];
  const epic: string = ProductEpic[description.epic];
  const pkg = RepoPackage[description.package];
  const func = description.functionName;
  const descr = description.description;

  const scope = `type‿${type}＿disposition‿${polarity}＿epic‿${epic}＿package‿${pkg}`;

  return `${scope}＿function‿${func}＿${descr}`;
}

export function makeTitleFunc(epic: ProductEpic, pkg: RepoPackage, targetName: string):
    (
      type: TestType,
      functionName: string,
      description: string,
      disposition?: TestDisposition) => string {
  return (
      type: TestType,
      functionName: string,
      description: string,
      disposition: TestDisposition = TestDisposition.Positive
    ) => makeTitle({
      description: description,
      disposition: disposition,
      epic: epic,
      functionName: `${targetName ? `${targetName}﹍` : ''}${functionName}`,
      package: pkg,
      type: type,
    } as TestDescription);
}
