# [Jali GitHub Issue Template][jali-issue-template] Instructions

<!-- markdownlint-disable -->
<!-- cSpell:ignore -->

[//]: # (Keep lines to 72 characters to leave room for the preview     )
[//]: # (pane.                                                         )
[//]: # (Note: Comment format explained by:                            )
[//]: # (http://stackoverflow.com/a/32190021                           )

This template supports five types of issues: **Question**, **Idea**,
**Bug**, **Enhancement**, and **Epic**. Review [§ General Instructions](#general-instructions),
then use the [§ Template Form Decision Tree](#template-form-decision-tree)
to chose the correct form. Please fill out the appropriate template and
remove others.

> ## Table Of Contents
> - [General Instructions](#general-instructions)
>   - [Issue workflow](#issue-workflow)
>   - [Commit types](#commit-types)
> - [Template Form Decision Tree](#template-form-decision-tree)
> - [Template Forms](#template-forms)
>   - [Question](#question-question)
>   - [Idea](#idea-bulb)
>   - [Bug](#bug-beetle)
>   - [Enhancement](#enhancement-arrow_forward)
>   - [Epic](#epi-movie_camera)

## General Instructions

### Issue workflow

The Jali repository uses [ZenHub][zen-hub] for project management. See
[CONTRIBUTING.md] for the proper workflow for Jali GitHub issues. If
you are a `non-contributor`, please enter your issue using the
`Question` or `Idea` form. See the [§ Template Form Decision Tree](#template-form-decision-tree)
for exact instructions.

### Commit types

An issue can be focused by specifying what kind of commit is envisioned
by a change. If more than one type of commit is associated with the
issue, consider how you can break it up into multiple issues.

> **Important:** See
> [CONTRIBUTING.md § Commit types][commit-types] for list of commit types
> and their emoji character representations.

## Template Form Decision Tree

Use the following decision tree to choose the appropriate form:

1. Are you a `non-contributor` or a `contributor`? If `non-contributor`,
   go to **(A)**; if `contributor`, go to **(D)**.
1. **(A)** You are a `non-contributor`. Are you suggesting a change to
   current documentation, implementation, or behavior of the Jali
   developer experience or system operation? If yes, go to **(C)**;
   otherwise, go to **(B)**.
1. **(B)** You are a `non-contributor` asking a question. Enter any bug
   reports also as a question. Go to **(J)**.
1. **(C)** You are a `non-contributor` wanting an enhancement. Is the
   change really just a defect from documented functionality? If yes, go
   to **(B)**. Otherwise, are you quite certain the desired change or
   addition does not exist? If yes, go to **(K)**; otherwise, go to **(B)**.
1. **(D)** You are a `contributor`. If you have a question, go to
   **(E)**, if a bug report, go to **(F)**; otherwise, go to **(H)**.
1. **(E)** You are a `contributor` asking a question. Go to **(J)**.
1. **(F)** Do you have enough details to complete the `Bug` form? If
   yes, go to **(G)**; otherwise, go to **(E)**.
1. **(G)** You are a `contributor` entering a bug report. If you are a 
   `core-contributor` go to **(L)**; otherwise, go to **(J)**.
1. **(H)** You are a `contributor` wanting an enhancement. Do you you
   have enough information to fill out the `Enhancement` form? If yes,
   go to **(I)**; otherwise, go to **(K)**.
1. **(I)** Are you a `core-contributor` that needs to create an `Epic`?
   If yes, go to **(N)**; otherwise, if you are a `core-contributor`, go
   to **(M)**. If not, go to **(K)**.
1. **(J)** Check on [StackOverflow][stack-overflow-jali] if the question
   has been asked already. If not, and it meets StackOverflow criteria
   for questions, create a StackOverflow question; otherwise, create a
   [Question](#question-❓-question).
   ❌
1. **(K)** Create an [Idea](#idea-❓-bulb). ❌
1. **(L)** Create a [Bug](#bug-🐞-beetle). ❌
1. **(M)** Create an [Enhancement](#enhancement-▶️️-arrow_forward). ❌
1. **(N)** Create an [Epic](#epic-🎥-movie_camera). ❌


## Template Forms

### Question ❓ `:question:`

Usage questions should be asked at [StackOverflow][stack-overflow-jali].
However, not all questions are appropriate for StackOverflow. See
[Welcome to Stack Overflow](http://stackoverflow.com/tour) for
what kinds of questions are appropriate for StackOverflow. Use the
`jali` tag for questions about Jali. Other questions should be asked in,
this, the `jali` GitHub repo, by creating an issue using the `Question`
form. If you are a non-`core-contributor`, enter a `Bug` using the
`Question` form.  A `core-contributor` may create a `Bug` for you.

#### Question Instructions

- **Title**
  - Use a short interrogative sentence, i.e. a question, that
    should be under 120 characters in length.
  - End with the emoji sequence: `❓` `<`[commit-type-emoji][commit-types]`>` `🎁`
- **Commit Type**
  - Use the commit types most closely related to your question.
- **Question Details**
  - Feel free to add formatting and images. For log dumps and other
    large data, attach documents. If you have created a PR or are a
    non-core contributor, keep the **Question** header but include
    the `Bug` form body.

```markdown
# Question: `<commit-type-name>`

## Details


```

### Idea 💡 `:bulb:`

An `Idea` is a suggested change to the system. If you not a
`core-contributor` and intend to submit a GitHub PR, you should submit
an `Idea` issue first, then reference the Idea from the PR. A
`core-contributor` may create a `Bug` or `Enhancement` for you.

#### Idea Instructions

- **Title**
  - Use a short imperative verb phrase. It should be under 120
    characters in length.
  - End with the emoji sequence: `💡` `<`[commit-type-emoji][commit-types]`>` `🎁`
- **Commit Type**
  - Use the commit types most closely related to your question.
* **Idea details**
  - Feel free to add formatting and images. For log dumps and other
    large data, attach documents. If you have created a PR or are a
    non-core contributor, keep the **Idea** header but include the 
    the `Enhancement` form body.

```markdown
# Idea: `<commit-type-name>`

## Details


```

### Bug 🐞 `:beetle:`

The `Bug` form should only be used by `core-contributors`; others should
use the `Idea` form. A `Bug` is a defect of the intended function of the product.
If you are formally suggesting a change to the behavior of the product,
use the `Enhancement` form; otherwise, use the `Idea` form. Bugs are
formal issues. Please fill the form out completely.

#### Bug Instructions

- **Title**
  - Use a short declarative sentence that explains the defective
    behavior. It should be under 120 characters in length.
  - End with the emoji sequence:
    `🐞` `<`[commit-type-emoji][commit-types]`>` `🎁`
- **Commit Type**
  - Choose the [commit type][commit-types] most closely related to your
    bug. For bugs, the commit type is usually `fix`.
- **Defect Version**
  - Specify the `semver` version of the project that is exhibiting the
    incorrect behavior.
- **Severity**
  - Specify the bug's severity. Include the number and name. Use one of:
    - `0 Corrupts Data`
    - `1 Crashes Product`
    - `2 Blocks Functionality`
    - `3 Incorrect Behavior`
    - `4 Incorrect Display`
    - `5 Documentation Error`
    - `6 Cosmetic Defect`
- **Bug Description**
  - Feel free to add formatting and an image. For many images, details,
    or logs, add attachments in the **Defective Behavior** section,
    instead.
- **Steps to Reproduce**
  - Provide a repeatable sequence of steps that reproduce the defect. At
    the end, describe how the tester can verify that the bug has been
    reproduced. If you can't reproduce the bug reliably, submit an `Idea`
    instead, using the `Bug` form template.
- **Defective Behavior**
  - Explain erroneous outcome. Include images and attachments, such as
    logs, if possible.
- **Desired Behavior**
  - Explain how you think the product ought to operate. Include images,
    if possible.

```markdown
# Bug `<commit-type-name>`

## Details

| Version | Severity |
|:-|:-|
|  |  |

## Description


## Steps to Reproduce

1. First, ...
1. Next, ...

## Defective Behavior


## Desired Behavior


```

### Enhancement ▶️️ `:arrow_forward:`

The `Enhancement` form should only be used by `core-contributors`;
others should use the `Idea` form. An `Enhancement` represents a change
to the product. Every change must be formally introduced as an
`Enhancement` before a PR can be triaged.

#### Enhancement Instructions

- **Title**
  - Use a very short imperative verb phrase since the title is used in
    the feature branch for the issue.
  - End with the emoji sequence:
    `▶️️` `<`[commit-type-emoji][commit-types]`>` `🎁`
- **Definition**
  - Use "In order to, As a, I want to" format for new features. For  )
    changes to existing features, include the "Whereas" clause. If   )
    the format is too cumbersome, Start with "In order to" but       )
    include a different subsequent clause that somehow includes a    )
    Jali product role an an action performed.                        )
- **Tasks**
  - Use a markdown task list to itemize the development tasks that   )
    contribute toward completion of the Enhancement.                 )
- **Acceptance criteria**
  - Include a task list of detailed tests that will be performed to  )
    verify that the Enhancement works.                               )

```markdown
# Enhancement `<commit-type-name>`

## Definition
[//]: # ( Format follows http://blog.crisp.se/2014/09/25/david-evans/as-a-i-want-so-that-considered-harmful)
In order to ...,

As a ...,

I want to ...(,

Whereas currently ...).

## Tasks

- [ ] Task 1.
- [ ] Task 2.

## Acceptance Criteria

- [ ] Criterion 1.
- [ ] Criterion 2.

```

### Epic 🎥 `:movie_camera:`

In Jali, a [ZenHub][zen-hub] *Epic* associates related `Enhancement`
issues into a feature requirement category.

#### Epic Instructions

- **Title**
  - Use a very short noun phrase, such as `User Management`.
  - End with the emoji sequence:
    `🎥` `<`[commit-type-emoji][commit-types]`>` `🎁`
- **Title**
  - Clearly, but succinctly, define which would constitute an 
    `Enhancement` that would fit in this `Epic` and which would not.

```markdown
# Epic `epic-type-name`

## Description


```

[CONTRIBUTING.md]: ./CONTRIBUTING.md
[commit-types]: ./CONTRIBUTING.md#commit-types
[jali-issue-template]: https://github.com/latticework/jali/issues/new
[stack-overflow-jali]: http://stackoverflow.com/questions/tagged/jali
[zen-hub]: https://www.zenhub.com/
