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
| [Asynchronous Iterators][11]         | Stage 2     |      |                                     |                | Nope.                                                   |
| [function.sent metaproperty][12]     | Stage 2     | Yes  | [transform-function-sent]           |                |                                                         |
| [Rest/Spread Properties][13]         | Stage 2     |      | [transform-object-rest-spread]      |                | "Not enabled since it uses the<br>destructuring transform not needed in Node6" |
| [Shared memory and atomics][14]      | Stage 2     |      |                                     |                | Nope.                                                   |
| [System.global][15]                  | Stage 2     | Yes  |                                     |                | core.js                                                 |
| [Class Fields][20]                   | Stage 2     | Yes  | [transform-class-properties]        |                |                                                         |
| [Promise.prototype.finally][16]      | Stage 2     |      |                                     |                |                                                         |
| [String.prototype.{trimStart,trimEnd}][17]| Stage 2| Yes |                                     |                | core.js                                                 |
| [Class and Property Decorators][18]  | Stage 2     | Yes  | [transform-decorators-legacy]       |                | Already in typescript.                                  |
| [Observable][19]                     | Stage 1     | Yes  |                                     |                | core.js                                                 |
| [RegExp Unicode Property Escapes][23]| Stage 1     |      |                                     |                |                                                         |
| [Math Extensions][22]                | Stage 1     |      |                                     |                |                                                         |
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
[16]: https://github.com/ljharb/proposal-promise-finally
[17]: https://github.com/sebmarkbage/ecmascript-string-left-right-trim
[18]: https://github.com/wycats/javascript-decorators/blob/master/README.md
[19]: https://github.com/zenparsing/es-observable
[20]: https://github.com/jeffmo/es-class-fields-and-static-properties
[21]: https://github.com/mathiasbynens/String.prototype.at
[22]: https://github.com/rwaldron/proposal-math-extensions
[23]: https://github.com/mathiasbynens/es-regex-unicode-property-escapes
[24]: https://github.com/disnet/template-literal-revision

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
[node6]:        https://www.npmjs.com/package/babel-preset-node6