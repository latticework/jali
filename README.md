# jali
Specification-driven serverless microservice DevOps framework and infrastructure http://jali-ms.io/

<!-- badges -->
<!--
[![NPM version][npm-image]][npm-url]
-->
[![OpenHub stats](https://www.openhub.net/p/jali/widgets/project_thin_badge.gif)](https://www.openhub.net/p/jali)
[![project status](https://img.shields.io/badge/project_status-pre--alpha-AA0114.svg)](https://github.com/latticework/jali/milestones)
[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://github.com/latticework/jali/milestones#boards?repos=45436564&milestones=0.1.0#)
[![Dependency Status](https://dependencyci.com/github/latticework/jali/badge)](https://dependencyci.com/github/latticework/jali)
[![bitHound Overall Score](https://www.bithound.io/github/latticework/jali/badges/score.svg)](https://www.bithound.io/github/latticework/jali)

[![CLA assistant](https://cla-assistant.io/readme/badge/latticework/jali)](https://cla-assistant.io/latticework/jali)
[![Gitter](https://badges.gitter.im/latticework/jali.svg)](https://gitter.im/latticework/jali?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)



> ## Table of Contents
>
> - [Introduction](#introduction)
> - [Technologies Demonstrated](#technologies-demonstrated)
>   - [Development environment](#development-environment)
>   - [Cloud development tools](#cloud-development-tools)
>   - [NodeJS Development Tools](#nodejs-development-tools)
> - [Developing Jali](#developing-jali)

## Introduction

Jali is
- **specification-driven** permitting consumer driven contracts and multi-version management
- **serverless** so you can your routines and run using any and all configurable platforms
- where the **microservice** is the unit of development, delivery and management
- a full **DevOps** platform because modern microservice delivery is continuous
- an extensible, polyglot **framework** providing circuit breaking and self-documenting APIs and explicit routine services
- an **infrastructure** pluggable for many major microservice platforms (eventually...)

To learn more about developing and managing microservices with Jali, visit our [website].

## Technologies Demonstrated

See [CREDITS.md] for instructions or examples how to use some of these technologies

### Development environment
- [VirtualBox] ([wiki][VirtualBoxWiki]) a free and open-source hypervisor for x86 computers
- [Vagrant] ([wiki][VagrantWiki]) manages virtual development environments
  - [chef_zero provisioner][chef_zeroProvisioner] allows you to provision the guest OS using Chef
  - [vagrant-omnibus] "ensures the desired version of Chef is installed"
  - [vagrant-berkshelf] "plugin to add Berkshelf integration to the Chef provisioners"
- [Ubuntu] ([wiki][UbuntuWiki]) development platform vagrant guest OS
- [Chef] ([wiki][ChefWiki]) configuration management for Ubuntu development environment
  - [ChefDK] Chef developer tools
    - [Berkshelf] Chef cookbook dependency manager
    - [chef-zero] "lightweight Chef server that runs in-memory on the local machine"
- [Visual Studio Code][vscode] ([wiki][vscodeWiki]) cross platform source code editor
- [JaliDev] seed project for providing team-consistent development environments using the
  technologies above.

### Cloud development tools
- [bitHound] NodeJS code analysis
- [ZenHub] GitHub-integrated agile project management

### NodeJS Development Tools
- `npm` as a task runner
- [TypeScript 2.0][TypeScript] ([wiki][TypeScriptWiki]) adds optional static typing to JavaScript
  - [TypeDoc] TypeScript document generator
    > Warning: [**TypeDoc** doesn't work with TypeScript 2 yet][TypeDocNotCompatible]
  - [dgeni] Flexible JavaScript documentation generator used by AngularJS, Protractor and other JS projects
    > Warning [**dgeni**, incredibly, doesn't work with TypeScript 2 yet][dgeniNotCompatible]
  - [esdoc]
- [EcmaScript 2017+][EcmaScript] ([wiki][EcmaScriptWiki]) the maturing JavaScript language
- [webpack 2][webpack] ([wiki][WebpackWiki]) NodeJS module loader
- [Babel 6][Babel] JavaScript parser and transpilation platform
- [AVA] Concurrent JavaScript test framework for EcmaScript + Babel
- [istanbul] JavaScript code coverage tool
  - [nyc] Istanbul CLI

## Developing Jali

_See [CONTRIBUTING.md]._

[//]: - (From https://github.com/igrigorik/ga-beacon)
[![Analytics](https://ga-beacon.appspot.com/UA-81234965-2/welcome-page)](https://github.com/igrigorik/ga-beacon)

[AVA]: https://github.com/avajs/ava
[Babel]: https://babeljs.io/
[Berkshelf]:http://berkshelf.com/
[bitHound]: https://www.bithound.io/
[Chef]: https://www.chef.io/
[ChefDK]: https://downloads.chef.io/chef-dk/
[ChefWiki]: https://en.wikipedia.org/wiki/Chef_(software)
[chef-zero]: https://docs.chef.io/ctl_chef_client.html#run-in-local-mode
[chef_zeroProvisioner]: https://www.vagrantup.com/docs/provisioning/chef_zero.html
[CONTRIBUTING.md]: ./CONTRIBUTING.md
[CREDITS.md]: ./CREDITS.md
[dgeni]: https://github.com/angular/dgeni
[dgeniNotCompatible]: https://github.com/angular/dgeni-packages/issues/193
[EcmaScript]: https://github.com/tc39/proposals
[EcmaScriptWiki]: https://en.wikipedia.org/wiki/ECMAScript
[esdoc]: https://esdoc.org/
[istanbul]: https://github.com/gotwarlost/istanbul
[JaliDev]: https://github.com/latticework/jalidev
[nyc]: https://github.com/istanbuljs/nyc
[TypeDoc]: http://typedoc.io/
[TypeDocNotCompatible]: https://github.com/TypeStrong/typedoc/issues/234
[TypeScript]: https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/
[TypeScriptWiki]: https://en.wikipedia.org/wiki/TypeScript
[Ubuntu]: http://www.ubuntu.com/
[UbuntuWiki]: https://en.wikipedia.org/wiki/Ubuntu
[Vagrant]: https://www.vagrantup.com/
[vagrant-berkshelf]:https://github.com/berkshelf/vagrant-berkshelf
[vagrant-omnibus]: https://github.com/chef/vagrant-omnibus
[VagrantWiki]: https://en.wikipedia.org/wiki/Vagrant_(software)
[VirtualBox]: https://www.virtualbox.org/
[VirtualBoxWiki]: https://en.wikipedia.org/wiki/VirtualBox
[vscode]: https://code.visualstudio.com/
[vscodeWiki]: https://en.wikipedia.org/wiki/Visual_Studio_Code
[webpack]: https://gist.github.com/sokra/27b24881210b56bbaff7
[website]: http://jali-ms.io/
[WebpackWiki]: https://en.wikipedia.org/wiki/Webpack
[ZenHub]: https://www.zenhub.com/
