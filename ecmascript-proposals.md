# EcmaScript Proposals

<!-- cSpell:ignore ality lookbehind -->
<!-- markdownlint-disable no-inline-html -->

Table of EcmaScript proposals and their usage in **Jail**.

| Proposal                             | Status      | Information       | Jali | Polyfill | TypeScript   | Babel Plugin                        | Babel Preset   | [Node][NodeESNext]| Comment                                            |
|:-------------------------------------|-------------|:-----------------:|:----:|:---------|:------------:|:------------------------------------|:---------------|:-------------|:--------------------------------------------------------|
| [modules][1]                         | ES2015      | [MDN01]<br>[MDN02]| Yes  |          | Yes          | [transform-es2015-modules-commonjs] | [es2015-node6]<br>[node6]|    | Babel transform not used as modules are supported by Webpack 2.<br>Used by AVA based unit testing |
| [function.name property][2]          | ES2015      | [MDN03]           | Yes  |          | Yes          | [transform-es2015-function-name]    | [es2015-node6] | 6 LTS        | Transform used for browser.                             |
| [exponentiation operator][3]         | ES2016      | [MDN04]           | Yes  |          | Yes          | [transform-exponentiation-operator] | [es2016]       | 7            |                                                         |
| [Array#includes][42]                 | ES2016      | [MDN05]           | Yes  | core.js  | Yes          |                                     | [es2016]       | 6 LTS        |                                                         |
| [Object.{values,entries}][4]         | ES2017      | [MDN06]<br>[MDN07]| Yes  | core.js  | Yes          |                                     |                | 7            |                                                         |
| [String#{padStart,padEnd}][5]        | ES2017      | [MDN08]<br>[MDN09]| Yes  | core.js  | Yes          |                                     |                |              |                                                         |
| [Object.getOwnPropertyDescriptors][6]| ES2017      | [MDN10]           | Yes  | core.js  | Yes          |                                     |                |              |                                                         |
| [trailing commas from function calls][9]| ES2017   | [2ality00]        | Yes  |          | Yes          | [syntax-trailing-function-commas]   | [node6]        |              |                                                         |
| [Async Functions][8]                 | ES2017      | [MDN11]           | Yes  |          | Yes          | [transform-async-to-generator]      |                |              |                                                         |
| [SIMD][7]                            | Stage 3     | [MDN12]           |      |          |              |                                     |                |              | Not included.<br>Can use [polyfill](https://www.npmjs.com/package/simd). |
| [Function#toString revision][10]     | Stage 3     | [2ality01]        |      |          |              |                                     |                |              | ???                                                     |
| [Lifting Template Literal Restriction][24]| Stage 3| [2ality02]        |      |          | #[12700]     |                                     |                |              |                                                         |
| [global][15]                         | Stage 3     | [2ality03]        |      |          | #[12902]     |                                     |                |              | core.js implementation still has System.global          |
| [Rest/Spread Properties][13]         | Stage 3     | [2ality04]        | Yes  |          | Yes          | [transform-object-rest-spread]      |                |              | Introduced in TypeScript [2.1][ts21]                    |
| [Asynchronous Iteration][11]         | Stage 3     | [2ality05]        |      |          | 2.2 #[11326] | [transform-async-to-generator]      |                |              |                                                         |
| [Shared memory and atomics][14]      | Stage 3     | [MDN13]           |      |          |              |                                     |                |              | Nope.                                                   |
| [import()][34]                       | Stage 3     | [2ality06]        |      |          | #[12364]     |                                     |                |              | Webpack 2 [supports it][code-splitting-with-es2015]     |
| [function.sent metaproperty][12]     | Stage 2     |                   | Yes  |          |              | [transform-function-sent]           |                |              |                                                         |
| [String.prototype.{trimStart,trimEnd}][17]| Stage 2|                   | Yes  | core.js  |              |                                     |                |              |                                                         |
| [Public Class Fields][20]            | Stage 2     |                   | Yes  |          | Yes. See comment| [transform-class-properties]     |                |              | Bug in TypeScript #[12212] does not pass through to Babel|
| [Promise#finally][16]                | Stage 2     |                   |      |          |              |                                     |                |              | [promise.prototype.finally][promise.prototype.finally]  |
| [Class and Property Decorators][18]  | Stage 2     |                   | Yes  |          | Yes          | [transform-decorators-legacy]       |                |              | [Needs write in Babel][babel-2016-12-07]                |
| [Legacy RegExp features in JavaScript][32]| Stage 2|                   |      |          |              |                                     |                |              |                                                         |
| [RegExp Lookbehind Assertions][39]   | Stage 2     |                   |      |          |              |                                     |                |              |                                                         |
| [RegExp Unicode Property Escapes][23]| Stage 2     |                   |      |          |              |                                     |                |              |                                                         |
| [Private Fields][28]                 | Stage 2     |                   |      |          | #[9950]      | PR #[260]                           |                |              |                                                         |
| [Intl.Segmenter][36]                 | Stage 2     |                   |      |          |              |                                     |                |              |                                                         |
| [Date.parse fallback semantics][25]  | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [export ns from][26]                 | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [export default from][27]            | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [Observable][19]                     | Stage 1     |                   | Yes  | core.js  |              |                                     |                |              |                                                         |
| [String#matchAll][41]                | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [WeakRefs][29]                       | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [Frozen Realms][30]                  | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [Math Extensions][22]                | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [`of` and `from` on collection constructors][33]| Stage 1|             |      |          |              |                                     |                |              |                                                         |
| Generator arrow functions            | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [RegExp named capture groups][35]    | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [`s` (`dotAll`) flag for regular expressions][37]| Stage1|             |      |          |              |                                     |                |              |                                                         |
| [`Promise.try`][38]                  | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [64-Bit Integer Operations][40]      | Stage 1     |                   |      |          |              |                                     |                |              |                                                         |
| [String.prototype.at][21]            | Stage 0     |                   | Yes  | core.js  |              |                                     |                |              |                                                         |

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
[20]: https://tc39.github.io/proposal-class-public-fields/
[21]: https://github.com/mathiasbynens/String.prototype.at
[22]: https://github.com/rwaldron/proposal-math-extensions
[23]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[24]: https://github.com/tc39/proposal-template-literal-revision
[25]: https://github.com/mrrrgn/proposal-date-time-string-format
[26]: https://github.com/leebyron/ecmascript-export-ns-from
[27]: https://github.com/leebyron/ecmascript-export-default-from
[28]: https://github.com/zenparsing/es-private-fields
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

[syntax-trailing-function-commas]:   https://babeljs.io/docs/plugins/syntax-trailing-function-commas/
[transform-async-to-generator]:      http://babeljs.io/docs/plugins/transform-async-to-generator/
[transform-class-properties]:        https://babeljs.io/docs/plugins/transform-class-properties/
[transform-decorators-legacy]:       https://babeljs.io/docs/plugins/transform-decorators/
[transform-es2015-modules-commonjs]: https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
[transform-es2015-function-name]:    https://babeljs.io/docs/plugins/transform-es2015-function-name/
[transform-exponentiation-operator]: https://babeljs.io/docs/plugins/transform-exponentiation-operator/
[transform-function-sent]:           https://www.npmjs.com/package/babel-plugin-transform-function-sent
[transform-object-rest-spread]:      https://babeljs.io/docs/plugins/transform-object-rest-spread/

[es2015-node6]: https://www.npmjs.com/package/babel-preset-es2015-node6
[es2016]:       https://www.npmjs.com/package/babel-preset-es2016
[node6]:        https://www.npmjs.com/package/babel-preset-node6

[260]: https://github.com/babel/babylon/pull/260
[9950]: https://github.com/Microsoft/TypeScript/issues/9950
[4576]: https://github.com/babel/babel/pull/4576
[11326]: https://github.com/Microsoft/TypeScript/issues/11326
[12212]: https://github.com/Microsoft/TypeScript/issues/12212
[12364]: https://github.com/Microsoft/TypeScript/issues/12364
[12700]: https://github.com/Microsoft/TypeScript/issues/12700
[12902]: https://github.com/Microsoft/TypeScript/issues/12902

[code-splitting-with-es2015]: https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

[2ality00]: http://www.2ality.com/2015/11/trailing-comma-parameters.html
[2ality01]: http://www.2ality.com/2016/08/function-prototype-tostring.html
[2ality03]: http://www.2ality.com/2016/09/global.html
[2ality02]: http://www.2ality.com/2016/09/template-literal-revision.html
[2ality04]: http://www.2ality.com/2016/10/rest-spread-properties.html
[2ality05]: http://www.2ality.com/2016/10/asynchronous-iteration.html
[2ality06]: http://www.2ality.com/2017/01/import-operator.html
[babel-2016-12-07]: https://babeljs.io/blog/2016/12/07/the-state-of-babel
[MDN01]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[MDN02]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[MDN03]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
[MDN04]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)
[MDN05]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
[MDN06]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
[MDN07]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
[MDN08]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
[MDN09]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
[MDN10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
[MDN11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[MDN12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD
[MDN13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
[NodeESNext]: http://node.green/
[promise.prototype.finally]: https://www.npmjs.com/package/promise.prototype.finally
[ts21]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html

