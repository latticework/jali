# Jali Development Procedures

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
[//]: # (Note: Comment format explained by:                            )
[//]: # (http://stackoverflow.com/a/32190021                           )

<!-- cSpell:ignore -->

<!-- markdownlint-disable ul-style -->

> ## Table of Contents
>
> - [Create Release Procedure](#create-release-procedure)
> - [Release Procedure](#release-procedure)
> - [Update Change Log Procedure](#update-change-log-procedure)

<!-- markdownlint-enable ul-style -->

## Create Release Procedure

1. Create branch with the new version name. E.g., `v0.1.2`
1. In the branch update these file locations
   1. Set new version in  `packages/@jali-ms/util/package.json#version`.
   1. Update [CHANGELOG.md](./CHANGELOG.md). See [§ Update Change Log Procedure](#update-change-log-procedure)
1. Copy new CHANGELOG section to new GitHub Release item with the
   new version name. E.g., `v0.1.2`.
1. Edit the CHANGELOG section text
   > You may want to make these changes in a text editor, rather than
   > the GitHub built-in editor. It is hoped that this process can be
   > automated.
   1. Add the following line at the top.
      > `[CHANGELOG](https://github.com/latticework/jali/blob/master/CHANGELOG.md#vMmw-YYYYMMDD)`

      Set the hash to the proper values for the appropriate CHANGELOG
      section header.
   1. Change all top level ordered list items to second level headers, and
      move all list items up one level.
   1. Remove all the link text for each Issue list item. (E.g.:
      `[\[doc\]][doc] [#92][#92] ([#98][#98] — [69fecf5][69fecf5] — [@clavecoder][@clavecoder]`)
1. Copy the appropriate link reference definitions from the `queries`
   section of the CHANGELOG for the links in the milestone list items.
   Preview the markdown in the GitHub editor to make sure it is correct.
1. Save changes as draft.

<!-- markdownlint-disable ul-style -->

## Release Procedure

***TBD***

> ### Release Procedure Notes
>
> - Release should be automated with jali-bot. See [babel-bot][babel-bot]
> - Plan is to merge `package.json` files for each project with
>   `packages/@jali-ms/package.json` so version is only updated there.
> - Determine how to handle concurrent versions.

<!-- markdownlint-enable ul-style -->


## Update Change Log Procedure

1. On [QUERIES.md](/project/QUERIES.md), navigate to each of the [§ Housekeeping](/project/QUERIES.md#housekeeping)
   reports and ensure that there are items in an invalid state (This
   will be automated in the future.)
   - Closed Items without a close reason
   - Closed Items in an invalid state
   - Closed Enhancements with no epic
   - Closed Bugs with no epic
1. Copy the [Changelog Template](/project/CHANGELOG-TEMPLATE.md) and
   paste a new section into the [CHANGELOG.md](/CHANGELOG.md) file,
   updating the text for the specified version.
   - Date should be the earliest documented UTC date of the public
     packages
     > E.g.: `npm list @jali-ms/util` lists the date
     > `2017-01-15T21:33:07.064Z` for `v0.0.1`. Thus `2017-01-15` should
     > be used.
1. For each **Enhancement** in the milestone
   1. Copy the title, except for the state emoji.
   1. If it is an **Original Enhancement**, add the contents of the
      `Features` section. If it is a **Replacement Enhancement**, add
      the contents of the `New Features` and `Updated Features`
      sections.
   1. Remove changes that were not implemented (i.e., not checked) then
      remove the GitHub checkboxes.
1. For each *Bug* in the milestone, add the title, except for the status
   emoji.
1. For all Enhancements and Bugs, add the appropriate Epic Code, Issue
   Id, PR Id, Commit SHA, and User Name.
   1. If multiple PRs are involved, add them on subsequent lines in the
      markdown file. They will display consecutively on the formatted page.
   1. If there are multiple commits per PR, enter the number of commits
      rather than siting them.
1. For each task in the milestone, except for `bot` tasks, add the
   title, except for the status emoji, under the appropriate section as
   indicated by the commit type. Add the appropriate task id.
1. Verify that all the links are added and correct. Note that they are
   separated by type so it is easy to copy and paste. Be sure to order
   them as shown.

[babel-bot]: https://github.com/babel/babel-bot


