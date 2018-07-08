# ECMAScript Proposals

<!-- cSpell:ignore ality lookbehind nonblocking rauschmayer signbit -->
<!-- cSpell:ignore esnext hfround nullary superset mixins regexpu -->
<!-- cSpell:ignore hashbang stringify -->
<!-- markdownlint-disable no-inline-html -->

ECMAScript, the standard for JavaScript, is an evolving language
specification, [ECMA-262][ecma-262], and maintained by Ecma Technical
Committee 39 - ECMAScript ([TC39][ecma-tc39]). Proposed changes go
through [four stages][ecma-tc39-process] to archive approval for the next
version of the standard that is currently released yearly. Status for
proposals are tracked by the [tc39/proposals][github-tc39-proposals]
repository [README][github-tc39-proposals-readme].

Axel Rauschmayer provides a useful guide to the coming features in the
next version of the standard in his post [Feature watch: ECMAScript 2018][2ality-2018].

Typescript support for proposals is tracked [here][github-ts-esnext].
Babel support for proposals is tracked [here][github-babel-proposals].
NodeJs support for proposals is tracked [here][node-green].

## Table Of Proposals

Table of ECMAScript proposals and their usage in **Jail**.

| Proposal                             | Status      | Information       | Jali | Polyfill | TypeScript   | Babel Plugin                        | NodeJs       | Comment                                            |
|:-------------------------------------|-------------|:-----------------:|:----:|:---------|:------------:|:------------------------------------|:-------------|:--------------------------------------------------------|
| [modules][1]                         | ES2015      | [mdn01]<br>[mdn02]| Yes  |          | Yes          | [transform-es2015-modules-commonjs] | 9            | Babel transform not used as modules are supported by Webpack 2.<br>Used by AVA based unit testing|
| [function.name property][2]          | ES2015      | [mdn03]           | Yes  |          | Yes          | [transform-es2015-function-name]    | 6 LTS        | Transform used for browser.                             |
| [Array#includes][42]                 | ES2016      | [mdn05]           | Yes  | core.js  | Yes          | NA                                  | 6 LTS        |                                                         |
| [exponentiation operator][3]         | ES2016      | [mdn04]           | Yes  |          | Yes          | [transform-exponentiation-operator] | 8 LTS        |                                                         |
| [Object.{values,entries}][4]         | ES2017      | [mdn06]<br>[mdn07]| Yes  | core.js  | Yes          | NA                                  | 8 LTS        |                                                         |
| [String#{padStart,padEnd}][5]        | ES2017      | [mdn08]<br>[mdn09]| Yes  | core.js  | Yes          | NA                                  | 8 LTS        |                                                         |
| [Object.getOwnPropertyDescriptors][6]| ES2017      | [mdn10]           | Yes  | core.js  | Yes          | NA                                  | 8 LTS        |                                                         |
| [trailing commas from function calls][9]| ES2017   | [2ality00]        | Yes  |          | Yes          | [syntax-trailing-function-commas]   | 8 LTS        |                                                         |
| [Async Functions][8]                 | ES2017      | [mdn11]           | Yes  |          | Yes          | [transform-async-to-generator]      | 8 LTS        |                                                         |
| [Shared memory and atomics][14]      | ES2017      | [mdn13]           | See notes|      | [2.6][ts26] #[15753]|                              | 9            | Typescript supports the syntax. Implementation support javascript runtime and version|
| [Lifting Template Literal Restriction][24]| ES2018 | [mdn14]<br>[2ality02]|   |          | #[12700]     | V7 Core See PR #[274]               | 9            |                                                         |
| [`s` (`dotAll`) flag for regular expressions][37]| ES2018| [2ality10]  | Yes  |          |              | [transform-modern-regexp]           | 9            |                                                         |
| [RegExp named capture groups][35]    | ES2018      | [2ality09]        | Yes  |          |              | [transform-modern-regexp]           | 10           | Babel may also support through regexpu See [babel proposals #35][babel-proposals-35]|
| [RegExp Lookbehind Assertions][39]   | ES2018      | [2ality07]        |      |          |              | No. See [transform-modern-regexp #5][transform-modern-regexp5]| 9|                                           |
| [RegExp Unicode Property Escapes][23]| ES2018      | [2ality08]        | Yes  |          |              | [transform-unicode-property-regex]  | 10           |                                                         |
| [Rest/Spread Properties][13]         | ES2018      | [2ality04]        | Yes  |          | [2.1][ts21]] | [transform-object-rest-spread]      | 8 LTS        |                                                         |
| [Promise#finally][16]                | ES2018      | [2ality11]        | Yes  | core.js  |              |                                     | 10           | [promise.prototype.finally][promise.prototype.finally]  |
| [Asynchronous Iteration][11]         | ES2018      | [2ality05]        | Yes  |          | [2.3][ts23] #[11326]| [transform-async-generator-functions]| 10   |                                                         |
| [Optional catch binding][44]         | ES2019      | [2ality14]        | Yes  |          | [2.5][ts25] #[17467]| [transform-optional-catch-binding]|         | [Added to chrome codebase 2018-01-19](https://bugs.chromium.org/p/v8/issues/detail?id=6889)|
| [JSON superset][65]                  | ES2019      |                   |      |          |              | PR #[#7985]                         |              |                                                         |
| [Function#toString revision][10]     | Stage 3     | [2ality01]        |      |          |              |                                     | 10. 6 LTS (Partial)|                                                   |
| [global][15]                         | Stage 3     | [2ality03]        | Yes  | core.js  | #[12902]     |                                     |              | core.js v2.5.0                                          |
| [import()][34]                       | Stage 3     | [2ality06]        | Yes  |          | [2.4][ts24] #[14495]| [syntax-dynamic-import]      |              | Babel syntax/transform not used as dynamic modules are [supported by Webpack 2][code-splitting-with-es2015].<br>Used by AVA based unit testing|
| [Legacy RegExp features in JavaScript][32]| Stage 3|                   |      |          |              |                                     |              |                                                         |
| [BigInt][43]                         | Stage 3     | [2ality12]        |      |          | #[15096]     | PR #[6015]                          |              |                                                         |
| [`import.meta`][45]                  | Stage 3     | [2ality15]        |      |          |              |                                     |              |                                                         |
| [Private instance methods and accessors][46]| Stage 3|[2ality13]       |      |          | #[9950]      | V7 [transform-class-properties]     |              | See #[7842] Merged 2018-05-18 for 7.0.0-beta.48         |
| [Array#{flat,flatMap}][49]           | Stage 3     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Instance class fields and methods][47]| Stage 3   | [2ality13]        | Yes  |          | Yes. See comment| [transform-class-properties]     |              | Bug in TypeScript #[12212] does not pass through to Babel|
| [Static class fields and methods][75]| Stage 3     | [2ality13]        | Yes  |          | Yes. See comment| [transform-class-properties]     |              | Bug in TypeScript #[12212] does not pass through to Babel|
| [String#{trimStart,trimEnd}][17]     | Stage 3     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [String#matchAll][41]                | Stage 3     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Symbol#description][60]             | Stage 3     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Numeric separators][48]             | Stage 2     |                   |      |          | *2.7* #[20582]| [transform-numeric-separator]      |              |                                                         |
| [function.sent metaproperty][12]     | Stage 2     |                   | Yes  |          |              | [transform-function-sent]           |              |                                                         |
| [Decorators][18]                     | Stage 2     |                   | Yes  |          | Yes          | [transform-decorators-legacy]       |              | [Needs write in Babel][babel-2016-12-07]                |
| [Throw expressions][51]              | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Atomics.waitAsync][59]              | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Hashbang Grammar][85]               | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [WeakRefs][29]                       | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Object.fromEntries][84]             | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Top-level await][79]                | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [New Set methods][82]                | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Well-formed `JSON.stringify`][90]   | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Function#toString() censorship][78] | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Realms][56]                         | Stage 2     |                   |      |          |              |                                     |              |                                                         |
| [Date.parse fallback semantics][25]  | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [export v from "mod"; statements][27]| Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Observable][19]                     | Stage 1     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Frozen Realms][30]                  | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Math Extensions][22]                | Stage 1     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [`of` and `from` on collection constructors][33]| Stage 1|             | Yes  | core.js  |              |                                     |              |                                                         |
| Generator arrow functions            | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Promise.try][38]                    | Stage 1     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Optional Chaining][52]              | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Math.signbit: IEEE-754 sign bit][53]| Stage 1     |                   | Yes  | core.js  |              |                                     |              |                                                         |
| [Error stacks][54]                   | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [do expressions][55]                 | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Temporal][57]                       | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Float16 on TypedArrays, DataView, Math.hfround][58]| Stage 1|         |      |          |              |                                     |              |                                                         |
| [Number.{parseInt,parseFloat} changes| Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Binary AST][61]                     | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Pipeline Operator][62]              | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Extensible numeric literals][63]    | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [First-Class Protocols][64]          | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Nullary coalescing operator][66]    | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Partial application][67]            | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Cancellation  API][74]              | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [InterpreterDirective][68]           | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [String#replaceAll][69]              | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [String#codePoints][70]              | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Distinguishing literal strings][71] | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Object.freeze + Object.seal syntax][72]| Stage 1  |                   |      |          |              |                                     |              |                                                         |
| [Block Params][73]                   | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [{BigInt,Number}.fromString][76]     | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Math.seededRandoms][77]             | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Maximally minimal mixins][80]       | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Getting last item from Array][81]   | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Collection methods][83]             | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Richer Keys][86]                    | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Slice notation][87]                 | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Logical Assignment Operators][88]   | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Sequence properties in Unicode property escapes][88]| Stage 1|        |      |          |              |                                     |              |                                                         |
| [Module Keys][91]                    | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Class Static Block][92]             | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [class Access Expressions][93]       | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [Pattern Matching][94]               | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [RegExp Match array offsets][95]     | Stage 1     |                   |      |          |              |                                     |              |                                                         |
| [String.prototype.at][21]            | Stage 0     |                   | Yes  | core.js  |              |                                     |              |                                                         |

## Document Workflow

Next update to process for meeting **TC39 2018-05** from TC39 Proposals
README document is 83f2325 on 2018-05-22.

### Process Status

- Looking at **TC39 2018-05**
- Add [transform-optional-catch-binding]

[1]:  http://www.ecma-international.org/ecma-262/6.0/#sec-modules
[2]:  http://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname
[3]:  https://github.com/rwaldron/exponentiation-operator
[4]:  https://github.com/tc39/proposal-object-values-entries
[5]:  https://github.com/tc39/proposal-string-pad-start-end
[6]:  https://github.com/ljharb/proposal-object-getownpropertydescriptors
[7]:  https://docs.google.com/presentation/d/1MY9NHrHmL7ma7C8dyNXvmYNNGgVmmxXk8ZIiQtPlfH4/edit?usp=sharing
[8]:  https://github.com/tc39/ecmascript-asyncawait
[9]:  https://jeffmo.github.io/es-trailing-function-commas/
[10]: https://tc39.github.io/Function-prototype-toString-revision
[11]: https://github.com/tc39/proposal-async-iteration
[12]: https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
[13]: https://github.com/sebmarkbage/ecmascript-rest-spread
[14]: https://github.com/tc39/ecmascript_sharedmem
[15]: https://github.com/tc39/proposal-global
[16]: https://github.com/tc39/proposal-promise-finally
[17]: https://github.com/sebmarkbage/ecmascript-string-left-right-trim
[18]: http://tc39.github.io/proposal-decorators/
[19]: https://github.com/tc39/proposal-observable
[21]: https://github.com/mathiasbynens/String.prototype.at
[22]: https://github.com/rwaldron/proposal-math-extensions
[23]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[24]: https://github.com/tc39/proposal-template-literal-revision
[25]: https://github.com/tc39/proposal-date-time-string-format
[26]: https://github.com/leebyron/ecmascript-export-ns-from
[27]: https://github.com/leebyron/ecmascript-export-default-from
[29]: https://github.com/tc39/proposal-weakrefs
[30]: https://github.com/FUDCo/frozen-realms
[32]: https://github.com/tc39/proposal-regexp-legacy-features
[33]: https://github.com/leobalter/proposal-setmap-offrom
[34]: https://github.com/tc39/proposal-dynamic-import
[35]: https://github.com/tc39/proposal-regexp-named-groups
[36]: https://github.com/tc39/proposal-intl-segmenter
[37]: https://github.com/mathiasbynens/es-regexp-dotall-flag
[38]: https://github.com/ljharb/proposal-promise-try
[39]: https://github.com/tc39/proposal-regexp-lookbehind
[40]: https://gist.github.com/BrendanEich/4294d5c212a6d2254703
[41]: https://github.com/tc39/String.prototype.matchAll
[42]: https://github.com/tc39/Array.prototype.includes/
[43]: https://github.com/tc39/proposal-bigint
[44]: https://github.com/tc39/proposal-optional-catch-binding
[45]: https://github.com/tc39/proposal-import-meta
[46]: https://github.com/tc39/proposal-private-methods
[47]: https://github.com/tc39/proposal-class-fields
[48]: https://github.com/tc39/proposal-numeric-separator
[49]: https://github.com/tc39/proposal-flatMap
[51]: https://github.com/tc39/proposal-throw-expressions
[52]: https://github.com/tc39/proposal-optional-chaining
[53]: http://jfbastien.github.io/papers/Math.signbit.html
[54]: https://github.com/tc39/proposal-error-stacks
[55]: https://github.com/tc39/proposal-do-expressions
[56]: https://github.com/tc39/proposal-realms
[57]: https://github.com/tc39/proposal-temporal
[58]: https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit#slide=id.p
[59]: https://github.com/tc39/proposal-atomics-wait-async
[60]: https://github.com/tc39/proposal-Symbol-description
[61]: https://github.com/syg/ecmascript-binary-ast
[62]: https://github.com/tc39/proposal-pipeline-operator
[63]: https://github.com/littledan/proposal-extensible-numeric-literals
[64]: https://github.com/michaelficarra/proposal-first-class-protocols
[65]: https://github.com/tc39/proposal-json-superset
[66]: https://github.com/tc39-transfer/proposal-nullish-coalescing
[67]: https://github.com/rbuckton/proposal-partial-application
[68]: https://gist.github.com/bmeck/59cf8c16959eccffd8b7e9828826a842
[69]: https://github.com/tc39/proposal-string-replace-all
[70]: https://github.com/RReverser/string-prototype-codepoints
[71]: https://github.com/mikewest/tc39-proposal-literals
[72]: https://github.com/keithamus/object-freeze-seal-syntax
[73]: https://github.com/samuelgoto/proposal-block-params
[74]: https://github.com/tc39/proposal-cancellation
[75]: https://github.com/tc39/proposal-static-class-features/
[76]: https://github.com/tc39/proposal-number-fromstring
[77]: https://github.com/tc39/proposal-seeded-random
[78]: https://github.com/rwaldron/tc39-notes/blob/master/es8/2018-01/jan-23.md#functionprototypetostring-censorship-for-stage-1
[79]: https://docs.google.com/presentation/d/1B0csbsot4HTrk30ueYMDqd1S-nRkCiIcVXaWgtSU_0Q/edit
[80]: https://gist.github.com/justinfagnani/9502b5f46599f474a67a5fce2f7af910
[81]: https://github.com/keithamus/proposal-array-last
[82]: https://github.com/Ginden/set-methods
[83]: https://github.com/Ginden/collection-methods
[84]: https://github.com/tc39/proposal-object-from-entries
[85]: https://github.com/bmeck/proposal-hashbang
[86]: https://docs.google.com/presentation/d/1q3CGeXqskL1gHTATH_VE9Dhj0VGTIAOzJ1cR0dYqDBk/edit#slide=id.p
[87]: https://github.com/gsathya/proposal-slice-notation/
[88]: https://github.com/jridgewell/proposal-logical-assignment
[89]: https://github.com/mathiasbynens/proposal-regexp-unicode-sequence-properties
[90]: https://github.com/gibson042/ecma262-proposal-well-formed-stringify
[91]: https://github.com/mikesamuel/tc39-module-keys
[92]: https://github.com/rbuckton/proposal-class-static-block
[93]: https://github.com/rbuckton/proposal-class-access-expressions
[94]: https://github.com/tc39/proposal-pattern-matching
[95]: https://github.com/rbuckton/proposal-regexp-match-offsets

[syntax-trailing-function-commas]:   https://babeljs.io/docs/plugins/syntax-trailing-function-commas/
[syntax-dynamic-import]:             https://babeljs.io/docs/plugins/syntax-dynamic-import/
[transform-async-to-generator]:      https://babeljs.io/docs/plugins/transform-async-to-generator/
[transform-async-generator-functions]: https://babeljs.io/docs/plugins/transform-async-generator-functions/
[transform-class-properties]:        https://babeljs.io/docs/plugins/transform-class-properties/
[transform-decorators-legacy]:       https://babeljs.io/docs/plugins/transform-decorators/
[transform-es2015-modules-commonjs]: https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
[transform-es2015-function-name]:    https://babeljs.io/docs/plugins/transform-es2015-function-name/
[transform-exponentiation-operator]: https://babeljs.io/docs/plugins/transform-exponentiation-operator/
[transform-function-sent]:           https://www.npmjs.com/package/babel-plugin-transform-function-sent
[transform-modern-regexp]:           https://www.npmjs.com/package/babel-plugin-transform-modern-regexp
[transform-numeric-separator]:       https://www.npmjs.com/package/babel-plugin-transform-numeric-separator
[transform-object-rest-spread]:      https://babeljs.io/docs/plugins/transform-object-rest-spread/
[transform-optional-catch-binding]:  https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-catch-binding.html
[transform-unicode-property-regex]:  https://www.npmjs.com/package/babel-plugin-transform-unicode-property-regex

[274]: https://github.com/babel/babylon/pull/274
[4576]: https://github.com/babel/babel/pull/4576
[6015]: https://github.com/babel/babel/pull/6015
[7842]: https://github.com/babel/babel/pull/7842
[7985]: https://github.com/babel/babel/pull/7985
[transform-modern-regexp5]: https://github.com/DmitrySoshnikov/babel-plugin-transform-modern-regexp/issues/5
[babel-proposals-35]: https://github.com/babel/proposals/issues/35#issuecomment-392068353

[9950]: https://github.com/Microsoft/TypeScript/issues/9950
[11326]: https://github.com/Microsoft/TypeScript/issues/11326
[12212]: https://github.com/Microsoft/TypeScript/issues/12212
[12700]: https://github.com/Microsoft/TypeScript/issues/12700
[12902]: https://github.com/Microsoft/TypeScript/issues/12902
[14495]: https://github.com/Microsoft/TypeScript/issues/14495
[15096]: https://github.com/Microsoft/TypeScript/issues/15096
[15753]: https://github.com/Microsoft/TypeScript/issues/15753
[17467]: https://github.com/Microsoft/TypeScript/issues/17467
[20582]: https://github.com/Microsoft/TypeScript/issues/20582

[code-splitting-with-es2015]: https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

[2ality-2018]: http://2ality.com/2017/02/ecmascript-2018.html
[2ality00]: http://www.2ality.com/2015/11/trailing-comma-parameters.html
[2ality01]: http://www.2ality.com/2016/08/function-prototype-tostring.html
[2ality03]: http://www.2ality.com/2016/09/global.html
[2ality02]: http://www.2ality.com/2016/09/template-literal-revision.html
[2ality04]: http://www.2ality.com/2016/10/rest-spread-properties.html
[2ality05]: http://www.2ality.com/2016/10/asynchronous-iteration.html
[2ality06]: http://www.2ality.com/2017/01/import-operator.html
[2ality07]: http://2ality.com/2017/05/regexp-lookbehind-assertions.html
[2ality08]: http://2ality.com/2017/07/regexp-unicode-property-escapes.html
[2ality09]: http://2ality.com/2017/05/regexp-named-capture-groups.html
[2ality10]: http://2ality.com/2017/07/regexp-dotall-flag.html
[2ality11]: http://2ality.com/2017/07/promise-prototype-finally.html
[2ality12]: http://2ality.com/2017/03/es-integer.html
[2ality13]: http://2ality.com/2017/07/class-fields.html
[2ality14]: http://2ality.com/2017/08/optional-catch-binding.html
[2ality15]: http://2ality.com/2017/11/import-meta.html
[babel-2016-12-07]: https://babeljs.io/blog/2016/12/07/the-state-of-babel
[ecma-262]: https://www.ecma-international.org/publications/standards/Ecma-262.htm
[github-babel-proposals]: https://github.com/babel/proposals
[github-tc39-proposals]: https://github.com/tc39/proposals
[github-tc39-proposals-readme]: https://github.com/tc39/proposals/blob/master/README.md
[github-ts-esnext]: https://github.com/Microsoft/TypeScript/labels/ES%20Next
[mdn01]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[mdn02]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn03]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
[mdn04]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)
[mdn05]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
[mdn06]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
[mdn07]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
[mdn08]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
[mdn09]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
[mdn10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
[mdn11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[mdn12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD
[mdn13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
[mdn14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals
[node-green]: http://node.green/
[promise.prototype.finally]: https://www.npmjs.com/package/promise.prototype.finally
[ecma-tc39]: https://www.ecma-international.org/memento/TC39.htm
[ecma-tc39-process]: https://tc39.github.io/process-document/
[ts21]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
[ts23]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html
[ts24]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html
[ts25]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-5.html
[ts26]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html
