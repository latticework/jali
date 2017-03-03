# Jali Change Log

<!-- markdownlint-disable line-length -->

> For future changes see [ROADMAP.md](./project/ROADMAP.md).

## [Unreleased v0][unreleased-v0]

## [v0.1.0][v0.1.0] (2017-02-DD)

- Items
  - [All][milestone-0.1.0]
  - [Enhancements][milestone-0.1.0-feat]
  - [Bugs][milestone-0.1.0-fix]
  - [PRs][milestone-0.1.0-pr]
- New Features [feat]
  - Project Documentation ▶️️ 🔨              [\[devenv\]][devenv] [#120][#120] ([#121][#121] — [xxxxxxx][xxxxxxx] — [@clavecoder][@clavecoder])
    - CHANGELOG.md
    - project/CHANGELOG-TEMPLATE.md
    - project/PROCEDURES.md
    - project/QUERIES.md
- Changed Features [change]
  - Project Documentation ▶️️ 🔨              [\[devenv\]][devenv] [#120][#120] ([#121][#121] — [xxxxxxx][xxxxxxx] — [@clavecoder][@clavecoder])
    - Changed supporting documents
      - to project/CREDITS.md
      - to project/DESIGN.md
      - to project/ISSUE-TEMPLATE-INSTRUCTIONS.md
- Bug Fixes [fix]
  - Fix Known Test Failures 🐞 🔧       [\[jali-util\]][jali-util] [#103][#103] ([#104][#104] — 2 commits — [@clavecoder][@clavecoder])
    - @jali-ms/util/src/iterables_reduce
      - `initialValue` can now be `null` or `undefined`
    - @jali-ms/util/src/iterables_slice
      - `begin` and `end` can now be `null` or `undefined`
    - @jali-ms/util/src/iterables_slice
      - now works if `begin` or `end` is negative
  - Bad scope in doc links 🐞 🔧                      [\[doc\]][doc] [#92][#92] ([#98][#98] — [69fecf5][69fecf5] — [@clavecoder][@clavecoder])
  - Manual page garbled for esdoc 0.5.x 🐞 🔧         [\[doc\]][doc] [#80][#80] ([#101][#101] — [1c6adb1][1c6adb1] — [@clavecoder][@clavecoder])
  - Mute Status Check Issue 🐞 🔨             [\[devenv\]][devenv] [#110][#110] ([#111][#111] — [d8462b9][d8462b9] — [@clavecoder][@clavecoder])
  - Fix bitHound Issues 🐞 🔨                 [\[devenv\]][devenv] [#105][#105] ([#106][#106] — 7 commits — [@clavecoder][@clavecoder])
  - Bad Contributing Document Formatting 🐞 🔨  [\[devenv\]][devenv] [#96][#96] ([#97][#97] — [c876ec1][c876ec1] — [@clavecoder][@clavecoder])
  - Bad README Links 🐞 🔨                      [\[devenv\]][devenv] [#91][#91] ([#97][#97] — [c876ec1][c876ec1] — [@clavecoder][@clavecoder])
  - Enhancement link broken 🐞 🔨               [\[devenv\]][devenv] [#85][#85] ([#97][#97] — [c876ec1][c876ec1] — [@clavecoder][@clavecoder])

## [v0.0.1][v0.0.1] (2017-01-15)

- Items
  - [All][milestone-0.0.1]
  - [Enhancements][milestone-0.0.1-feat]
  - Bugs *(none)*
  - [PRs][milestone-0.0.1-pr]
- New Features [feat]
  - [JS] Argument validation functions ▶️️ 𝍖  [\[jali-util\]][jali-util] [#90][#90] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - validation functions
      - verifyArgument
      - verifyArray
      - verifyBoolean
      - verifyDefined
      - verifyFunction
      - verifyIterable
      - verifyNonEmpty
      - verifyNonZero
      - verifyNotNull
      - verifyNotWhitespace
      - verifyNumber
      - verifyObject
      - verifyString
      - verifyTrue
      - verifyTruthy
    - util/errors module
  - [JS] Iterator Functions ▶️️ 𝍖             [\[jali-util\]][jali-util] [#87][#87] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - Iterable functions
      - asArray
      - asIterable
      - concat
      - every
      - filter
      - find
      - includes
      - map
      - reduce
      - slice
      - some
      - toMap
    - util/iterables module
  - [JS] @jali-ms/util Type Guards ▶️️ 𝍖      [\[jali-util\]][jali-util] [#86][#86] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - Type guards
      - isError
      - makeIsIterable: Generates deep-checking type guard for iterable of given type
      - isIterable\<T\>
    - util/type-guards module
  - [JS] Invalid State Error ▶️️ 𝍖            [\[jali-util\]][jali-util] [#84][#84] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - InvalidStateError type. Subclass of Error.
    - util/errors module
  - [JS] Argument Errors ▶️️ 𝍖                [\[jali-util\]][jali-util] [#83][#83] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - Error types
      - Argument error are subclasses of more general error types.
      - ArgumentError. Subclass of Error
      - ArgumentFalsyError. Subclass of ArgumentError
      - ArgumentEmptyStringError. Subclass of ArgumentFalsyError
      - ArgumentFalseError. Subclass of ArgumentFalsyError
      - ArgumentNanError. Subclass of ArgumentFalsyError
      - ArgumentNullError. Subclass of ArgumentFalsyError
      - ArgumentUndefinedError. Subclass of ArgumentFalsyError
      - ArgumentUndefinedError. Subclass of ArgumentFalsyError
      - ArgumentZeroError. Subclass of ArgumentFalsyError
      - ArgumentWhitespaceStringError. Subclass of ArgumentError
      - ArgumentTypeError. Subclass of ArgumentError
    - util/errors module
  - Project Shell ▶️️ 🔨                          [\[devenv\]][devenv] [#122][#122] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
    - Provides Ubuntu 16.04 instead of 14.04
  - Project Documentation ️️️️▶️️ 🔨                  [\[devenv\]][devenv] [#119][#119] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
                                                                                  ([#88][#88] — [e71400b][e71400b] — [@clavecoder][@clavecoder])
    - README.md
    - LICENCE
    - CONTRIBUTING.md
    - CREDITS.md
    - DESIGN.md
    - ISSUE-TEMPLATE-INSTRUCTIONS.md
  - Canary Builds ▶️️ 🔨                          [\[devenv\]][devenv] [#113][#113] *this is an ongoing integration with greenkeeper*
    - Greenkeeper GitHub integration.
  - Provide GitHub issue template ▶️️ 🔨              [\[devenv\]][devenv] [#5][#5] ([#6][#6] — [bd41c4e][bd41c4e] — [@clavecoder][@clavecoder])
    - .github/ISSUE_TEMPLATE.md
  - [JS] Build Process ▶️️ 🔨                         [\[devenv\]][devenv] [#4][#4] ([#7][#7] — [53ac8ab][53ac8ab] — [@clavecoder][@clavecoder])
                                                                                  ([#88][#88] — [e71400b][e71400b] — [@clavecoder][@clavecoder])
    - **tsc** support in build script.
    - **Babel** to build script.
    - **Webpack 2** to build script.
    - **Typings** support.
    - TAP-based test code.
    - code coverage.
    - API documentation.
    - Package published to NPM.
  - Project Shell ▶️️ 🔨                              [\[devenv\]][devenv] [#1][#1] ([#3][#3] — [358d559][358d559] — [@clavecoder][@clavecoder])
    - `Vagrantfile`
      - Provides the `jali` Ubuntu 14.04 graphical guest operating system using the `VirtualBox` provider.
      - Provisions the `jali` box using the `chef_zero` provisioner
    - `main` cookbook in `site-cookbooks` that uses `Berksfile` to provision the `jali` box
      - The following components are provisioned.
        - Docker Service
        - The `Hack` font
        - `git`
        - NodeJS
        - Sphinx
        - VSCode
        - The latticework/jali GitHub repo
- Housekeeping Chores [chore]
  - change description or _TASK_TITLE_ [#_TASK_ID_][#_TASK_ID_]

<!-- epics -->

[devenv]: https://github.com/latticework/jali/issues/2
[doc]: https://github.com/latticework/jali/issues/81
[jali-util]: https://github.com/latticework/jali/issues/82
[#82]: https://github.com/latticework/jali/issues/82
[#81]: https://github.com/latticework/jali/issues/81
[#2]: https://github.com/latticework/jali/issues/2

<!-- queries -->

[milestone-0.1.0]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.1.0%20is:closed%20label:zzz-closed_completed
[milestone-0.1.0-feat]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.1.0%20is:closed%20label:type_enhancement%20label:zzz-closed_completed
[milestone-0.1.0-fix]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.1.0%20is:closed%20label:type_bug%20label:zzz-closed_completed
[milestone-0.1.0-pr]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.1.0%20is:closed%20is:pr%20label:zzz-closed_completed
[milestone-0.0.1]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.0.1%20is:closed%20label:zzz-closed_completed
[milestone-0.0.1-feat]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.0.1%20is:closed%20label:type_enhancement%20label:zzz-closed_completed
[milestone-0.0.1-pr]: https://github.com/latticework/jali/issues?utf8=✓&q=milestone:0.0.1%20is:closed%20is:pr%20label:zzz-closed_completed

<!-- diffs -->

[unreleased-v0]: https://github.com/latticework/jali/compare/v0.1.0...master
[v0.1.0]: https://github.com/latticework/jali/compare/v0.0.1...v0.1.0
[v0.0.1]: https://github.com/latticework/jali/tree/v0.0.1

<!-- issues -->

[#122]: https://github.com/latticework/jali/issues/122
[#120]: https://github.com/latticework/jali/issues/120
[#119]: https://github.com/latticework/jali/issues/119
[#113]: https://github.com/latticework/jali/issues/113
[#110]: https://github.com/latticework/jali/issues/110
[#105]: https://github.com/latticework/jali/issues/105
[#103]: https://github.com/latticework/jali/issues/103
[#90]: https://github.com/latticework/jali/issues/90
[#96]: https://github.com/latticework/jali/issues/96
[#92]: https://github.com/latticework/jali/issues/92
[#91]: https://github.com/latticework/jali/issues/91
[#87]: https://github.com/latticework/jali/issues/87
[#86]: https://github.com/latticework/jali/issues/86
[#85]: https://github.com/latticework/jali/issues/85
[#84]: https://github.com/latticework/jali/issues/84
[#83]: https://github.com/latticework/jali/issues/83
[#80]: https://github.com/latticework/jali/issues/80
[#5]: https://github.com/latticework/jali/issues/5
[#4]: https://github.com/latticework/jali/issues/4
[#1]: https://github.com/latticework/jali/issues/1

<!-- pull requests -->

[#121]: https://github.com/latticework/jali/pull/121
[#111]: https://github.com/latticework/jali/pull/111
[#106]: https://github.com/latticework/jali/pull/106
[#104]: https://github.com/latticework/jali/pull/104
[#101]: https://github.com/latticework/jali/pull/101
[#98]: https://github.com/latticework/jali/pull/98
[#97]: https://github.com/latticework/jali/pull/97
[#88]: https://github.com/latticework/jali/pull/88
[#7]: https://github.com/latticework/jali/pull/7
[#6]: https://github.com/latticework/jali/pull/6
[#3]: https://github.com/latticework/jali/pull/3

<!-- commits -->

[1c6adb1]: https://github.com/latticework/jali/commit/1c6adb1c82419673e296adb76d1ec39c08b3616a
[358d559]: https://github.com/latticework/jali/commit/358d55968a4f7da8a264038f949ef3c27918376e
[53ac8ab]: https://github.com/latticework/jali/commit/53ac8ab08cd61211a31c4e7bd5ef13e507258256
[69fecf5]: https://github.com/latticework/jali/commit/69fecf530ea78db63e6012dd00d8774b52b8c09b
[bd41c4e]: https://github.com/latticework/jali/commit/bd41c4ef6042328ff18af5bec13e8cb91b9b51ae
[c876ec1]: https://github.com/latticework/jali/commit/c876ec145672013a7bf28a7b2634fbe657eeff1d
[d8462b9]: https://github.com/latticework/jali/commit/d8462b91590384a5bd9dbb1581e1f969db630d50
[e71400b]: https://github.com/latticework/jali/commit/e71400bdf6b7e5451ceb489ea1c285af59a1b8e7

<!-- links -->

[@clavecoder]: https://github.com/clavecoder
