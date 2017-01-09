# EcmaScript Proposals

<!-- markdownlint-disable no-inline-html -->

Table of EcmaScript proposals and their usage in **Jail**.

| Proposal                             | Status      | Jali | Babel Plugin                        | Babel Preset   | Comment                                                 |
|--------------------------------------|-------------|:----:|-------------------------------------|----------------|---------------------------------------------------------|
| [modules][1]                         | ES2015      | Yes  | [transform-es2015-modules-commonjs] | [es2015-node6]<br>[node6] |                                              |
| [function.name property][2]          | ES2015      | Yes  | [transform-es2015-function-name]    | [es2015-node6] | V6 Some behind flag                                     |
| [exponentiation operator][3]         | ES2016      | Yes  | [transform-exponentiation-operator] | [es2016]       |                                                         |
| [Object.values/Object.entries][4]    | ES2017      | Yes  |                                     |                | core.js                                                 |
| [String padding][5]                  | ES2017      | Yes  |                                     |                | core.js                                                 |
| [Object.getOwnPropertyDescriptors][6]| ES2017      | Yes  |                                     |                | core.js                                                 |
| [trailing commas from function calls][9]| ES2017   | Yes  | [syntax-trailing-function-commas]   | [node6]        |                                                         |
| [Async Functions][8]                 | ES2017      | Yes  | [transform-async-to-generator]      |                |                                                         |
| [SIMD][7]                            | Stage 3     |      |                                     |                | Not included.<br>Can use polyfill.                      |
| [Function.prototype.toString revision][10]| Stage 3|      |                                     |                | ???                                                     |
| [Lifting Template Literal Restriction][24]| Stage 3|      |                                     |                | ???                                                     |
| [global][15]                         | Stage 3     |      |                                     |                |                                                         |
| [Rest/Spread Properties][13]         | Stage 3     |      | [transform-object-rest-spread]      |                | "Not enabled since it uses the<br>destructuring transform not needed in Node6" |
| [Asynchronous Iteration][11]         | Stage 3     |      |                                     |                | Nope.                                                   |
| [Shared memory and atomics][14]      | Stage 3     |      |                                     |                | Nope.                                                   |
| [import()][34]                       | Stage 3     |      |                                     |                |                                                         |
| [function.sent metaproperty][12]     | Stage 2     | Yes  | [transform-function-sent]           |                |                                                         |
| [String.prototype.{trimStart,trimEnd}][17]| Stage 2| Yes  |                                     |                | core.js                                                 |
| [Public Class Fields][20]            | Stage 2     | Yes  | [transform-class-properties]        |                |                                                         |
| [Promise.prototype.finally][16]      | Stage 2     |      |                                     |                |                                                         |
| [Class and Property Decorators][18]  | Stage 2     | Yes  | [transform-decorators-legacy]       |                | Already in typescript.                                  |
| [Legacy RegExp features in JavaScript][32]| Stage 2|      |                                     |                |                                                         |
| [RegExp Lookbehind Assertions][39]   | Stage 2     |      |                                     |                |                                                         |
| [RegExp Unicode Property Escapes][23]| Stage 2     |      |                                     |                |                                                         |
| [Private Fields][28]                 | Stage 2     |      |                                     |                |                                                         |
| [Intl.Segmenter][36]                 | Stage 2     |      |                                     |                |                                                         |
| [Date.parse fallback semantics][25]  | Stage 1     |      |                                     |                |                                                         |
| [export ns from][26]                 | Stage 1     |      |                                     |                |                                                         |
| [export default from][27]            | Stage 1     |      |                                     |                |                                                         |
| [Observable][19]                     | Stage 1     | Yes  |                                     |                | core.js                                                 |
| [String#matchAll][41]                | Stage 1     |      |                                     |                |                                                         |
| [WeakRefs][29]                       | Stage 1     |      |                                     |                |                                                         |
| [Frozen Realms][30]                  | Stage 1     |      |                                     |                |                                                         |
| [Math Extensions][22]                | Stage 1     |      |                                     |                |                                                         |
| [`of` and `from` on collection constructors][33]| Stage 1||                                     |                |                                                         |
| Generator arrow functions            | Stage 1     |      |                                     |                |                                                         |
| [RegExp named capture groups][35]    | Stage 1     |      |                                     |                |                                                         |
| [`s` (`dotAll`) flag for regular expressions][37]| Stage1|||                                    |                |                                                         |
| [`Promise.try`][38]                  | Stage 1     |      |                                     |                |                                                         |
| [64-Bit Integer Operations][40]      | Stage 1     |      |                                     |                |                                                         |
| [String.prototype.at][21]            | Stage 0     | Yes  |                                     |                | core.js                                                 |

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

[transform-es2015-modules-commonjs]: https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/
[transform-es2015-function-name]:    https://babeljs.io/docs/plugins/transform-es2015-function-name/
[transform-exponentiation-operator]: https://babeljs.io/docs/plugins/transform-exponentiation-operator/
[transform-async-to-generator]:      http://babeljs.io/docs/plugins/transform-async-to-generator/
[syntax-trailing-function-commas]:   https://babeljs.io/docs/plugins/syntax-trailing-function-commas/
[transform-function-sent]:           https://www.npmjs.com/package/babel-plugin-transform-function-sent
[transform-object-rest-spread]:      https://babeljs.io/docs/plugins/transform-object-rest-spread/
[transform-decorators-legacy]:       https://babeljs.io/docs/plugins/transform-decorators/
[transform-class-properties]:        https://babeljs.io/docs/plugins/transform-class-properties/

[es2015-node6]: https://www.npmjs.com/package/babel-preset-es2015-node6
[es2016]:       https://www.npmjs.com/package/babel-preset-es2016
[node6]:        https://www.npmjs.com/package/babel-preset-node6
