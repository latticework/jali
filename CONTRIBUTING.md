# Developing Jali

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
<!-- cSpell:ignore polsedit, polseditx, secpol, vistauac -->

Provides contribution requirements, contribution guidelines, and
onboarding information.

<!-- markdownlint-disable ul-style -->

> ## Table Of Contents
>
> - [Getting Started](#getting-started)
>   - [Prerequisites](#prerequisites)
>     - [Prerequisites for NodeJS users](#prerequisites-for-nodejs-users)
>   - [Setup](#setup)
> - [Contribution Requirements](#contribution-requirements)
> - [Contribution Guidelines](#contribution-guidelines)
>   - [Triage](#triage)
>   - [Emoji](#emoji)
>   - [Commit message guidelines](#commit-message-guidelines)
>   - [Commit types](#commit-types)
>   - [Feature types](#feature-types)
>   - [Issue types](#issue-types)
>   - [Issue states](#issue-states)
>   - [Task types](#task-types)
>   - [Bug severities](#bug-severities)
>   - [Pull Request types](#pull-request-types)
>   - [Pull Request states](#pull-request-states)
>   - [Closure reasons](#closure-reasons)

<!-- markdownlint-enable ul-style -->

This document explains how to contribute to the Jali project. For an
introduction to Jali, see [README.md](./README.md). To understand the
design of the Jali project, see [DESIGN.md](./DESIGN.md).

## Getting Started

### Prerequisites

1. Install [**Oracle VirtualBox**][virtual-box-downloads]
1. Install [**Vagrant**][vagrant-downloads]
1. Install and configure Chef:

    1. Install [**ChefDK**][chef-dev-kit-download]

       - For Windows 10, use the Windows 2012r2 x68_64 download

    1. Install the Chef **vagrant-omnibus** Vagrant plugin

       > `vagrant plugin install vagrant-omnibus`

    1. Install the **vagrant-berkshelf** Vagrant plugin

       > `vagrant plugin install vagrant-berkshelf`

#### Prerequisites for NodeJS users

<!-- markdownlint-disable ul-style -->
> On **Windows 10** you need to be a part of the `Administrators` group
> and always run `vagrant` from a console as administrator. You possibly
> can add the `SeCreateSymbolicLinkPrivilege` to your account. However
> your account can't "look" like an admin account or will get a stripped
> down Windows security token like administrators do but can't "run as
> administrator". You would have to either disable User Account Control
> (UAC) or make sure your account does not have any of the restricted
> privileges. See article `Windows Vista Application Development
> Requirements for User Account Control Compatibility` section
> [New Technologies for Windows][vista-uac-topic-3] subsection `Access
> Token Changes` for more information and a list of restricted
> privileges. [HT](http://superuser.com/a/839608)
>
> This restriction
> [should soon be lifted](https://blogs.windows.com/buildingapps/2016/12/02/symlinks-windows-10/#a5WafruZLjxRYvpW.97).
>
> To add privileges to create simlinks:
>
> 1. Open a windows security policy editor
>    - On **Windows 10 Professional or Enterprise** open `secpol.msc`
>    - On **Windows 10 Home** download `polsedit` from
>      [here](http://www.southsoftware.com/)
>      and open `polseditx64.exe`
> 1. Add your user to `SeCreateSymbolicLinkPrivilege`

<!-- markdownlint-enable ul-style -->

### Setup

1. Clone `jali`
   > `git clone https://github.com/latticework/jali.git`
1. Open a console window (perhaps as Administrator), cd to the project
   folder and run Vagrant
   > `vagrant up`
1. Wait for Vagrant and Chef initializations to complete before using the
   virtual machine.
1. In the jali VM, cd to `/vagrant` and start developing or use
   **vagrant ssh**
   > `vagrant ssh`

1. Initialize `npm`.
   > `npm install`

1. Build Jali.
   > `npm test`

## Contribution Requirements

To contribute you must sign the
[Jali Contributor License Agreement](https://cla-assistant.io/latticework/jali)

## Contribution Guidelines

### Creating issues

For `non-contributors` and `contributors`, Jali issues consist of
`Questions` and `Ideas`. Only a `core-contributor` should create a
`Bug`, `Enhancement`, or `Epic`. Please follow
[ISSUE-TEMPLATE-INSTRUCTIONS.md](./ISSUE-TEMPLATE-INSTRUCTIONS.md) when
creating a Jali issue. It provides detailed instructions and a
systematic [decision tree](./ISSUE-TEMPLATE-INSTRUCTIONS.md#template-form-decision-tree)
to determine which issue form you should create.

### Triage

A `core-contributor` will triage **Question** or **Idea** issues. A
**Question** is triaged by either suggesting the user post the question
on [StackOverflow][stack-overflow] or by answering the question. The
question may result in the creation of **Bug** or **Enhancement**
issues; or it may simply be closed.

An **Idea** is triaged by either putting it in the **Icebox** ZenHub
pipeline until more points accumulate or by the creation of **Bug** or
**Enhancement** issues. It also may simply be closed.

A **Bug** or **Enhancement** issue is triaged by moving it to the
**Icebox** or **Backlog** ZenHub pipeline or by closing it.

### Emoji

The Jali project embraces the use of emoji in GitHub to facilitate
communication. The emoji sets are used to identify issue type, commit
type, and issue status. These emoji are placed at the end of the issue
title in the order Issue Type, Commit Type, Issue Status separated by a
single space. Until the issue is triaged only the issue type should be
included. If possible, always use the Unicode symbol.

> Note: In the future, the emoji will be maintained automatically using
> a bot such as [mary-poppins].

### Commit message guidelines

Use the proper commit type emoji. Allowed commit types and the
corresponding emoji are listed below. Use the Unicode character, if
possible, rather than the GitHub shortcode. You can copy the actual
Unicode character by viewing the raw version of this markdown document.

### Commit types

<!--
  Note that the perf emoji includes the VARIATION SELECTOR-16 (VS16)
  so it is actually two characters. See: https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)
  for more information on variation selectors.
-->

| Commit Type Code | GitHub Shortcode     | Unicode Emoji |
|:-----------------|:---------------------|:-------------:|
| feat             | `:sparkles:`         | ✨            |
| change           | `:tada:`             | 🎉            |
| fix              | `:wrench:`           | 🔧            |
| docs             | `:page_facing_up:`   | 📄            |
| style            | `:lipstick:`         | 💄            |
| refactor         | `:triangular_ruler:` | 📐            |
| perf             | N/A                  | ⏱️            |
| test             | `:microscope:`       | 🔬            |
| chore            | `:hammer:`           | 🔨            |
| bot              | `:rocket:`           | 🚀            |

### Feature types

| Feature Category        | Code      | GitHub Shortcode       | Unicode Emoji |
|:------------------------|:----------|:-----------------------|:-------------:|
| Software Package        | *various* | N/A                    | 𝍖            |
| Documentation           | doc       | `:page_facing_up:`     | 📄            |
| Development Tools       | dev       | N/A                    | 🛠️           |
| Development Environment | devenv    | `:hammer:`             | 🔨            |
| Dependency Updates      | packages  | `:package:`            | 📦            |

### Issue types

<!--
  Note that the Enhancement emoji includes the VARIATION SELECTOR-16 (VS16)
  so it is actually two characters. See: https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)
  for more information on variation selectors.
-->

| Issue Type  | GitHub Shortcode          | Unicode Emoji |
|:------------|:--------------------------|:-------------:|
| Question    | `:question:`              | ❓            |
| Idea        | `:bulb:`                  | 💡            |
| Bug         | `:beetle:`                | 🐞            |
| Enhancement | `:arrow_forward:`         | ▶️️            |
| Epic        | `:clapper:`               | 🎬            |
| Task        | `:clipboard:`             | 📋            |

### Issue states

| Issue State | GitHub Shortcode          | Unicode Emoji |
|:------------|:--------------------------|:-------------:|
| New         | `:gift:`                  | 🎁            |
| Icebox      | `:zzz:`                   | 💤            |
| Backlog     | N/A                       | ☰             |
| In Progress | `:walking:`               | 🚶             |
| Review/QA   | N/A                       | ⚖             |
| Done        | `:white_check_mark:`      | ✅             |
| Canceled    | `:x:`                     | ❌             |
| Removed     | `:no_entry_sign:`         | 🚫            |

### Task types

| Task Type    | GitHub Shortcode              | Unicode Emoji |
|:-------------|:------------------------------|:-------------:|
| Work         | `:nut_and_bolt:`              | 🔩            |
| Test         | `:microscope:`                | 🔬            |

### Bug severities

| Severity               | Description                               |
|:-----------------------|:------------------------------------------|
| 0 Corrupts Data        | Causes persistent data corruption         |
| 1 Crashes Product      | Causes application failure                |
| 2 Blocks Functionality | Error keeps other functions from being used|
| 3 Incorrect Behavior   | Component does not function as designed   |
| 4 Incorrect Display    | Use when display issues affect application function|
| 5 Documentation Error  | Use when the documentation is incomplete, incorrect, or unclear|
| 6 Cosmetic Defect      | Use for visual aberrations that do not affect application function|


### Pull Request types

<!--
  Note that the revert emoji includes the VARIATION SELECTOR-16 (VS16)
  so it is actually two characters. See: https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)
  for more information on variation selectors.
-->

| PR Type      | GitHub Shortcode              | Unicode Emoji |
|:-------------|:------------------------------|:-------------:|
| fast-forward | `:arrows_clockwise:`          | 🔃            |
| merge        | `:twisted_rightwards_arrows:` | 🔀            |
| revert       | `:leftwards_arrow_with_hook:` | ↩️️           |

### Pull Request states

<!--
  Note that the perf emoji includes the VARIATION SELECTOR-16 (VS16)
  so it is actually two characters. See: https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)
  for more information on variation selectors.
-->

| Reason    | GitHub Shortcode  | Unicode Emoji |
|:----------|:------------------|:-------------:|
| New       | `:gift:`          | 🎁            |
| Review/QA | N/A               | ⚖             |
| Merged    | `:kiss:`          | 💋            |
| Canceled  | `:no_entry_sign:` | ❌            |
| Removed   | `:no_entry_sign:` | 🚫            |

### Closure reasons

| Reason    | Label                | Item State | GitHub Shortcode     | Unicode Emoji |
|:----------|:---------------------|:-----------|:---------------------|:-------------:|
| Committed | zzz-closed_committed | Done       | `:white_check_mark:` | ✅            |
| Committed | zzz-closed_committed | Merged     | `:kiss:`             | 💋            |
| Canceled  | zzz-closed_canceled  | Canceled   | `:x:`                | ❌            |
| Removed   | zzz-closed_removed   | Removed    | `:no_entry_sign:`    | 🚫            |

[chef-dev-kit-download]: https://downloads.chef.io/chef-dk/
[mary-poppins]: https://github.com/btford/mary-poppins
[stack-overflow]: http://stackoverflow.com/questions/tagged/jali
[vagrant-downloads]: https://www.vagrantup.com/downloads.html
[vista-uac-topic-3]: https://msdn.microsoft.com/en-us/library/bb530410.aspx#vistauac_topic3
[virtual-box-downloads]: https://www.virtualbox.org/wiki/Downloads
