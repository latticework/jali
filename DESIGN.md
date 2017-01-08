# Jali Repository Design

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )

The **Jali** repository is designed to provide a uniform development
and execution environment for polyglot development of Jali packages
and programs within different PC Platforms, such as Windows, Mac, and
Linux distros.

> ## Table Of Contents
> - [Development philosophy](#jali-development-philosophy)
>   - [Bootstrapping](#bootstrapping)
>   - [Modules](#modules)
>   - [Extensions](#extensions)
>   - [Routines and Execution Context](#routines-and-execution-context)
> - [Jali GitHub repository](#jali-github-repository)
>   - [Monorepo](#monorepo)
>   - [Security and management](#security-and-management)
> - [Development host configuration](#development-host-configuration)
>   - [Vagrant configuration](#vagrant-configuration)
> - Development guest configuration
> - Jali build process


## Introduction

To set up your Jali development environment, follow the
[Getting Started](./CONTRIBUTING.md#getting-started) section of
**CONTRIBUTING.md**.

However to understand the design of the Jali repo, we
will discuss the following topics:

- [Development philosophy](#jali-development-philosophy)
- [Jali GitHub repository](#jali-github-repository)
- [Development host configuration](#development-host-configuration)
- Development guest configuration
- Jali build process

## Jali Development Philosophy

Jali provides a consistent, integrated Linux-based development
and operating environment for microservices. The goal is to have a
single, modular tool that provides the full DevOps stack with a
single tool-set. The toolset provides abstracted commands that is
implemented by plug-ins for different technologies and languages.

The key for Jail is to bring the DevOps process up to a 
semantic level to democratize access to microservices, regardless of
chosen language, platform, configuration management tool, cloud
provider, deployment orchestrator, or monitoring toolset.

It does not necessarily provide interchagable access to every technology
but allows the project team to pick or migrate to technologies that
may be different from other teams but maintain the same toolset and
microservice configuration and support.

Initial implementation will be for JavaScript and golang, with support
for dotnet and others to follow.

### Bootstrapping

A key design goal of Jali is build and run Jali development with Jali
itself. This may require some creative configuration in the Jali
project but will ensure that soundness of the Jali toolset.

### Modules

Another important design goal of Jali is polyglot modularity. To make
the module system as broadly applicable as possible,
[stdio](http://man7.org/linux/man-pages/man3/stdio.3.html) will be used
for all but trusted, i.e., internal, modules.

In the spirit of [bootstrapping](#bootstrapping), the goal is to have
as much of the native Jali functionality implemented as modules and
extensions. Which leads us to the next goal.

### Extensions

A final design goal is to have a well defined extension interface that
hopefully shares the activation/invocation mechanism with
[modules](#/modules). That would include internal cross cutting concerns
such as internal logging, etc.

### Routines and Execution Context

The core design goal, however, is the concepts of the Routine and
the Execution Context.

#### routines

As much as possible, Jali itself executes using the smallest unit of
execution used by Jali microservices: the **Routine**
(or, at a higher resolution, the **Routine Stage**). Routines are
invoked for a relatively short amount of time, defining an
execution configuration that enables Jali to manage it's execution
environment, scaling and partitioning, and lifetime. In addition,
a Jali Routine operates within a clearly defined set of execution
services, called the Execution Context.

#### execution context

In response to receiving a description of a routine's function by way of
its configuration, the Jali kernel presents a routine with an explicitly
defined **Execution Context** that provides microservice-relevant
context and services to the routine. These services include

- Runtime services
- Consistent Distributed Configuration
- Authentication, Authorization, and Accounting (AAA)
- Exception Processing
- Logging
- Metrics Processing
- Data Context/Caching

## Jali GitHub repository

### Monorepo

The [Jali GitHub repository](https://github.com/latticework/jali) is
a Monolithic Version Control repository or
[**monorepo**](http://danluu.com/monorepo/). This means that the
repository support many interrelated packages together rather than
existing as separate repositories, greatly simplifying development
and package authoring. Currently is supports JavaScript and NPM
packages. In the future it will support polyglot development with
golang and other platforms hosted in the same repo.

> You can see the packages in the
> [packages/@jali](https://github.com/latticework/jali/tree/master/packages/@jali)
> folder.

### Security and management

The repo is managed by core contributors who are members of the
**Latticework** research group and is updated using GitHub Pull Requests.

Project management utilizes [ZenHub](https://www.zenhub.com/) in a manner
specified in the [Contribution Guidelines](./CONTRIBUTING.md#contribution-guidelines)
section of **CONTRIBUTING.md**. The project uses GitHub
[issues](https://github.com/latticework/jali/issues) for as ZenHub Epics
and User Stories. Work item state is managed by using GitHub
[labels](https://github.com/latticework/jali/labels). The contribution
guidelines specifies the use of emoji to facilitate work item status
awareness. This feature may be automated in the future.

Development progress is tracked using a
[ZenHub KanBan board](https://github.com/latticework/jali/pulls#boards?repos=45436564)
and GitHub [milestones](https://github.com/latticework/jali/milestones).

Currently feature branches are made directly from **master**, though a
**dev** branch may be introduced as the product matures.

## Development Host Configuration

The goal is for Jali to support development hosts for Windows, Mac and
various Linux flavors. The goal is to have the host configuration
itself configuration driven with a **jali.json** configuration pattern.

Currently however Vagrant and ChefDK are required in addition to git.
Lets look how these work together to build the Jali dev environment.

### Vagrant configuration

As mentioned in the [Getting Started](./CONTRIBUTING.md#getting-started)
section of **CONTRIBUTING.md**, Jali integrates Vagrant with Chef using
the vagrant plugins
[vagrant-omnibus](https://github.com/chef/vagrant-omnibus) and
[vagrant-berkshelf](https://github.com/berkshelf/vagrant-berkshelf).

Respectively, these plugins install Chef into the vagrant guest machine
and execute Berkshelf files on those guest machines.

#### Vagrantfile layout
The [Vagrantfile](./Vagrantfile)
