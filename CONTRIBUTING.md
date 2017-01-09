# Developing Jali

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
<!-- cSpell:ignore polsedit, polseditx, secpol, vistauac -->

Provides contribution requirements, contribution guidelines, and
onboarding information.

<!-- markdownlint-disable MD004 -->

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
> - [Issue states](#issue-states)
> - [Pull Request type](#pull-request-type)
> - [Pull Request states](#pull-request-states)

<!-- markdownlint-enable MD004 -->

## Getting Started

### Prerequisites

1. Install [**Oracle VirtualBox**](https://www.virtualbox.org/wiki/Downloads)
1. Install [**Vagrant**](https://www.vagrantup.com/downloads.html)
1. Install and configure Chef:

    1. Install [**ChefDK**](https://downloads.chef.io/chef-dk/)

       - For Windows 10, use the Windows 2012r2 x68_64 download

    1. Install the Chef **vagrant-omnibus** Vagrant plugin

       > `vagrant plugin install vagrant-omnibus`

    1. Install the **vagrant-berkshelf** Vagrant plugin

       > `vagrant plugin install vagrant-berkshelf`

#### Prerequisites for NodeJS users

<!-- markdownlint-disable MD004 -->
> On **Windows 10** you need to be a part of the `Administrators` group
> and always run `vagrant` from a console as administrator. You possibly
> can add the `SeCreateSymbolicLinkPrivilege` to your account. However
> your account can't "look" like an admin account or will get a stripped
> down Windows security token like administrators do but can't "run as
> administrator". You would have to either disable User Account Control
> (UAC) or make sure your account does not have any of the restricted
> privileges. See article `Windows Vista Application Development
> Requirements for User Account Control Compatibility` section
> [New Technologies for Windows][vistauac_topic3] subsection `Access
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

<!-- markdownlint-enable MD004 -->

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

## Contribution Requirements

To contribute you must sign the
[Jali Contributor License Agreement](https://cla-assistant.io/latticework/jali)

## Contribution Guidelines

### Triage

A core contributor will triage **Question** or **Idea** issues. A
**Question** is triaged by either suggesting the user post the question
on StackOverflow or by answering the question. The question may result
in the creation of **Bug** or **Enhancement** issues; or it may simply
be closed.

An **Idea** is triaged by either putting it in the **Icebox** ZenHub
pipeline until more points accumulate or by the creation of **Bug** or
**Enhancement** issues.

A **Bug** and **Enhancement** issue is triaged by moving it to the
**Icebox** or **Backlog** ZenHub pipeline or by closing it.

### Emoji

Jali projects embrace the use of emoji in GitHub to facilitate
communication. The emoji sets are used to identify issue type, commit
type, and issue status. These emoji are placed at the end of the issue
title in the order Issue Type, Commit Type, Issue Status separated by a
single space. Until the issue is triaged only the issue type should be
included. If possible, always use the Unicode symbol.

> Note: In the future, the emoji will be maintained automatically using
> a bot such as [mary-poppins].

### Commit message guidelines

Use the proper commit type emoji. Allowed commit types and the
corresponding emoji. Use the Unicode character if you can. You can copy
the actual Unicode character by viewing the raw version of this
markdown document.

| Commit Type Code | Unicode Emoji | GitHub Shortcode |
|:--|:-:|:--|
| feat | ✨ | `:sparkles:` |
| fix | 🔧 | `:wrench:` |
| docs | 📄 | `:page_facing_up:` |
| style | 💄 | `:lipstick:` |
| refactor | 📐 | `:triangular_ruler:` |
| perf | 🏃 | `:running:` |
| test | 🔬 | `:microscope:` |
| chore | 🔨 | `:hammer:` |

### Issue states

| Issue State | Unicode Emoji | GitHub Shortcode |
|:--|:-:|:--|
| New | 🎁 | `:gift:` |
| Icebox | 💤 | `:zzz:` |
| Backlog | ☰ | N/A |
| In Progress | 🚶 | `:walking:` |
| Review/QA | ⚖ | N/A |
| Done | ☑️ |`:ballot_box_with_check:` |
| Closed | TBD | TBD |

### Pull Request type

| PR State | Unicode Emoji | GitHub Shortcode |
|:--|:-:|:--|
| fast-forward | 🔃 | `:arrows_clockwise:` |
| merge | 🔀 | `:twisted_rightwards_arrows:` |
| revert | 🔄 | `:arrows_counterclockwise:` |

### Pull Request states

| PR State | Unicode Emoji | GitHub Shortcode |
|:--|:-:|:--|
| New | 🎁 | `:gift:` |
| Review/QA | ⚖ | N/A |
| Merged | 💋 | `:kiss:` |
| Closed | 🚫 | `:no_entry_sign:` |

[mary-poppins]: https://github.com/btford/mary-poppins
[StackOverflow]: http://stackoverflow.com/questions/tagged/jali
[vistauac_topic3]: https://msdn.microsoft.com/en-us/library/bb530410.aspx#vistauac_topic3
