# Developing Jali
Provides contribution requirements, contribution guidelines, and onboarding information.

## Onboarding
### Prerequisites
1. Install Oracle VirtualBox
1. Install Vagrant
1. Install and configure Chef:

    1. Install __ChefDK__, [here](https://downloads.chef.io/chef-dk/)
    1. Install the __Chef Vagrant-Omnibus__ plugin

       > `vagrant plugin install vagrant-omnibus`
    1. Install the __Vagrant-Berkshelf__ plugin

       > `vagrant plugin install vagrant-berkshelf`


#### Note to NodeJS users
> On __Windows 10__ you need to be a part of the `Administrators` group and 
> always run `vagrant` from a console as administrator. You possibly can add the 
> `SeCreateSymbolicLinkPrivilege` to your account. However your account can't 
> "look" like an admin account or will get a stripped down Windows security 
> token like administrators do but can't "run as administrator". You would 
> have to either disable User Account Control (UAC) or make sure your account 
> does not have any of the restricted priviliges. See article `Windows Vista 
> Application Development Requirements for User Account Control Compatibility` 
> section [New Technologies for Windows][vistauac_topic3] subsection `Access 
> Token Changes` for more information and a list of restricted privileges. 
> [HT](http://superuser.com/a/839608)
> 
> To add privileges to create simlinks:
>
> 1.  Open a windows security policy editor
>     * On __Windows 10 Professional or Enterprise__ open `secpol.msc`
>     * On __Windows 10 Home__ download `polsedit` from [here](http://www.southsoftware.com/) 
>       and open `polseditx64.exe` 
> 2.  Add your user to `SeCreateSymbolicLinkPrivilege`

### Setup
1. Clone `jali`

   > `git clone https://github.com/latticework/jali.git`
1. Open a console window (perhaps as Administrator), cd to the project folder 
   and run Vagrant

   > `vagrant up`
1. Wait for Vagrant and Chef initializations to complete before using new the 
   virtual machine.
1. In the jali VM, cd to `/vagrant` and start developing.

#### Note to Visual Studio Code users
> Visual Studio Code has a display issue on Ubuntu 14.04. Use the following 
> instructions to get code to display correctly.
>
> 1. For command line execution, `code`, the fix has already been applied.
> 1. Edit /usr/share/applications/code.desktop
> 1. On the following lines, add `--disable-gpu` to the command line
>    - `[Desktop Entry]Exec`
>    - `[Desktop Action new-window]Exec`


[vistauac_topic3]: https://msdn.microsoft.com/en-us/library/bb530410.aspx#vistauac_topic3


## Contribution Requirements

## Contribution Guidelines

### Triage

A core contributor will triage **Question** or **Idea** issues. A
**Question** is triaged by either suggesting the user post the question on 
StackOverflow or by answering the question. The question may result in the 
creation of **Bug** or **Enhancement** issues; or it may simply be closed.

An **Idea** is triaged by either putting it in the **Icebox** ZenHub pipeline 
until more points accumulate or by the creation of **Bug** or **Enhancement** 
issues.

A **Bug** and **Enhancement** issue is triaged by moving it to the 
**Icebox** or **Backlog** ZenHub pipeline or by closing it. 

### Emoji
Jali projects embrace the use of emoji in GitHub to facilitate communication. 
The emoji sets are used to identify issue type, commit type, and issue status. 
These emoji are placed at the end of the issue title in the order Issue Type, 
Commit Type, Issue Status separated by a single space. Until the issue is 
triaged only the issue type should be included. If possible, always use the 
Unicode symbol.

### Commit message guidelines
Use the proper commit type emoji. Allowed commit types and the corresponding 
emoji. Use the Unicode character if you can. You can copy the actual Unicode 
character by viewing the raw version of this markdown document.

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

[StackOverflow]: http://stackoverflow.com/questions/tagged/jali