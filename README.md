# Jali

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
<!-- cSpell:ignore atlassian, cirkel, clas, gitter, lerna -->

Specification-driven serverless microservice DevOps framework and
infrastructure [http://jali-ms.io/](http://jali-ms.io/)

<!-- badges -->
[//]: # (Add a table of NPM badges. Consider https://badge.fury.io/)

[![OpenHub stats](https://www.openhub.net/p/jali/widgets/project_thin_badge.gif)](https://www.openhub.net/p/jali)
[![project status](https://img.shields.io/badge/project_status-pre--alpha-AA0114.svg)](https://github.com/latticework/jali/milestones)
[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://github.com/latticework/jali/milestones#boards?repos=45436564&milestones=0.1.0#)
[![Dependency Status](https://dependencyci.com/github/latticework/jali/badge)](https://dependencyci.com/github/latticework/jali)
[![bitHound Overall Score](https://www.bithound.io/github/latticework/jali/badges/score.svg)](https://www.bithound.io/github/latticework/jali)

[![CLA assistant](https://cla-assistant.io/readme/badge/latticework/jali)](https://cla-assistant.io/latticework/jali)
[![Gitter](https://badges.gitter.im/latticework/jali.svg)](https://gitter.im/latticework/jali?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://semaphoreci.com/api/v1/latticework/jali/branches/master/shields_badge.svg)](https://semaphoreci.com/latticework/jali)

<!-- markdownlint-disable ul-style -->

> ## Table of Contents
>
> - [Introduction](#introduction)
> - [Developing Jali](#developing-jali)
> - [Technologies Demonstrated](#technologies-demonstrated)
>   - [Development environment](#development-environment)
>   - [Cloud development tools](#cloud-development-tools)
>   - [NodeJS Development Tools](#nodejs-development-tools)

<!-- markdownlint-enable ul-style -->

## Introduction

### **Jali** is

- **specification-driven** permitting consumer driven contracts and
  multi-version management
- **serverless** so you can write just your routines and run using any
  and all configurable platforms
- where the **microservice** is the unit of development, delivery and
  management
- a full multitenant, partitionable **DevOps** platform because modern
  microservice delivery is continuous
- an extensible, polyglot **framework** providing circuit breaking and
  self-documenting APIs and explicit routine services
- an **infrastructure** pluggable for many major microservice platforms
  (eventually...)

To learn more about developing and managing microservices with Jali,
  visit our [website].

## Developing Jali

*See [CONTRIBUTING.md](./CONTRIBUTING.md).*

## Project Design

*See [DESIGN.md](./project/DESIGN.md).*

## Technologies Demonstrated

See [CREDITS.md](./project/CREDITS.md) for instructions or examples how
to use some of these technologies.

### Development environment

- [VirtualBox][virtual-box] ([wiki][virtual-box-wiki]) a free and
  open-source hypervisor for x86 computers
- [Vagrant][vagrant] ([wiki][vagrant-wiki]) manages virtual development
  environments
  - [chef_zero provisioner][chef-zero-provisioner] allows you to
    provision the guest OS using Chef
  - [vagrant-omnibus][vagrant-omnibus] ensures the desired version of
    Chef is installed
  - [vagrant-berkshelf][vagrant-berkshelf] plugin to add berkshelf
    integration to the Chef provisioners
- [Ubuntu][ubuntu] ([wiki][ubuntu-wiki]) 16.04 development platform
  vagrant guest OS
- [Chef][chef] ([wiki][chef-wiki]) configuration management used for
  Ubuntu development environment
  - [ChefDK][chef-dev-kit] Chef developer tools
    - [Berkshelf][berkshelf] Chef cookbook dependency manager
    - [chef-zero][chef-zero] lightweight Chef server that runs in-memory
      on the local machine
- [Visual Studio Code][vscode] ([wiki][vscode-wiki]) cross platform
  source code editor
  - Extensions
    - [vscode-markdownlint][vscode-markdownlint] Markdown linting and
      style checking for Visual Studio Code
    - [code-spell-checker][code-spell-checker] Spelling checker for
      source code
    - Many more. See `clavecoder's` Visual Studio Code Sync Settings
      [clavecoder-extensions] file for a full list of useful Visual
      Studio Code extensions.
- [jalidev][jali-dev] seed project for providing team-consistent
  development environments using the technologies above. (*incomplete*)

### Cloud/GitHub development tools

- ALM
  - [ZenHub][zen-hub] GitHub-integrated agile project management
- CI
  - [SemaphoreCI][semaphore-ci]: Make continuous delivery easy
- PR policy checks
  - [bitHound][bit-hound]: Node.js code analysis your team can agree on
  - [VersionEye][version-eye]: notifies you about out-dated
    dependencies, security vulnerabilities and license violations in
    your Git repositories
  - [Dependency CI][dependency-ci]: Continuously Test Your Dependencies
  - [CLA assistant][cla-assistant]: Easily handle Contributor License
    Agreements (CLAs)

### NodeJS Development Tools

- `monorepo`-style projects
  - [Why is Babel a monorepo?][monorepo-babel]
  - [New wave modularity with Lerna, monorepos, and npm organizations][monorepo-turf]
  - [SETTING UP A JAVASCRIPT MONOREPO][monorepo-cycle]
  - [Monorepos in Git][atlassian-monorepo]
- `npm` as a task runner
  - [How to Use npm as a Build Tool][keith-cirkel]
- [TypeScript 2.1][type-script] ([wiki][type-script-wiki]) adds optional
  static typing to JavaScript
  - [TypeDoc][type-doc] TypeScript document generator (not integrated)
  - [tslint] An extensible linter for the TypeScript language
- [EcmaScript 2017+][ecma-script] ([wiki][ecma-script-wiki]) The maturing
  JavaScript language
  - See [ecmascript-proposals.md](./ecmascript-proposals.md) for what
    features and proposals are implemented in Jali
  - [esdoc][esdoc]  (integrated by Jali)
  - [eslint][eslint] The pluggable linting utility for JavaScript and JSX
- [webpack 2][webpack] ([wiki][webpack-wiki]) NodeJS module loader
- [Babel 6][babel] JavaScript parser and transpilation platform
- [AVA][ava] Concurrent JavaScript test framework for EcmaScript + Babel
  - [istanbul][istanbul] JavaScript code coverage tool
    - [nyc][nyc] Istanbul CLI

[//]: - (From https://github.com/igrigorik/ga-beacon)
[![Analytics](https://ga-beacon.appspot.com/UA-81234965-2/welcome-page)](https://github.com/igrigorik/ga-beacon)

[atlassian-monorepo]: https://developer.atlassian.com/blog/2015/10/monorepos-in-git/
[ava]: https://github.com/avajs/ava
[babel]: https://babeljs.io/
[berkshelf]:http://berkshelf.com/
[bit-hound]: https://www.bit-hound.io/
[chef]: https://www.chef.io/
[chef-dev-kit]: https://downloads.chef.io/chef-dk/
[chef-wiki]: https://en.wikipedia.org/wiki/Chef_(software)
[chef-zero]: https://docs.chef.io/ctl_chef_client.html#run-in-local-mode
[chef-zero-provisioner]: https://www.vagrantup.com/docs/provisioning/chef_zero.html
[cla-assistant]: https://cla-assistant.io/
[clavecoder-extensions]: https://gist.github.com/clavecoder/fa29a8846199bee62bc99ef94fbe86df#file-extensions-json
[code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[dependency-ci]: https://dependencyci.com/
[ecma-script]: https://github.com/tc39/proposals
[ecma-script-wiki]: https://en.wikipedia.org/wiki/ECMAScript
[esdoc]: https://esdoc.org/
[eslint]: http://eslint.org/
[istanbul]: https://github.com/gotwarlost/istanbul
[jali-dev]: https://github.com/latticework/jalidev
[keith-cirkel]: https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
[monorepo-babel]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md#why-is-babel-a-monorepo
[monorepo-cycle]: http://staltz.com/setting-up-a-javascript-monorepo.html
[monorepo-turf]: http://www.macwright.org/2016/07/08/lerna-npm-organizations-new-wave-modularity.html
[nyc]: https://github.com/istanbuljs/nyc
[semaphore-ci]: https://semaphoreci.com/
[tslint]: https://palantir.github.io/tslint/
[type-doc]: http://typedoc.io/
[type-script]: https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/
[type-script-wiki]: https://en.wikipedia.org/wiki/TypeScript
[ubuntu]: http://www.ubuntu.com/
[ubuntu-wiki]: https://en.wikipedia.org/wiki/Ubuntu
[vagrant]: https://www.vagrantup.com/
[vagrant-berkshelf]:https://github.com/berkshelf/vagrant-berkshelf
[vagrant-omnibus]: https://github.com/chef/vagrant-omnibus
[vagrant-wiki]: https://en.wikipedia.org/wiki/Vagrant_(software)
[version-eye]: https://www.version-eye.com/
[virtual-box]: https://www.virtualbox.org/
[virtual-box-wiki]: https://en.wikipedia.org/wiki/VirtualBox
[vscode]: https://code.visualstudio.com/
[vscode-wiki]: https://en.wikipedia.org/wiki/Visual_Studio_Code
[vscode-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[webpack]: https://gist.github.com/sokra/27b24881210b56bbaff7
[website]: http://jali-ms.io/
[webpack-wiki]: https://en.wikipedia.org/wiki/Webpack
[zen-hub]: https://www.zen-hub.com/
