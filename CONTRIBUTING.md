# Contributing to PatternFly React

> ### Looking for a quick guide to PatternFly 3 React Contribution? [Go Here](./packages/patternfly-3/patternfly-react/CONTRIBUTING.md)
>
> ### Looking for a quick guide to PatternFly 4 React Contribution? [Go Here](./packages/patternfly-4/react-core/CONTRIBUTING.md)

## Outline

- [Code of Conduct](#code-of-conduct)
- [Issues and Project Board](#issues-and-project-board)
  - [Issue Labels](#issue-labels)
  - [PR Labels](#pr-labels)
  - [Project Board Columns](#project-board-columns)
- [Contribution Process](#contribution-process)
  - [Creating Issues for Bugs](#creating-issues-for-bugs)
  - [Creating Issues for New Components](#creating-issues-for-new-components)
  - [Contributing Components](#contributing-components)
  - [Adding Styling for your Components](#adding-styling-for-your-components)
  - [Using Generators](#using-generators)
- [Guidelines and Requirements](#guidelines-and-requirements)
  - [React Component Requirements](#react-component-requirements)
  - [Code Consistency](#code-consistency)
  - [Code Contribution Guidelines](#code-contribution-guidelines)
- [Becoming a Maintainer](#becoming-a-maintainer)
  - [How do I become a maintainer?](how-do-i-become-a-maintainer?)
  - [How do I lose maintainers status?](how-do-i-lose-maintainers-status?)
  - [Quick Tips for New Maintainers](quick-tips-for-new-maintainers)

## Code of Conduct

This project is governed by the [Contributor Covenant version 1.4][1]. All contributors and participants
agree to abide by its terms. To report violations, send an email to [patternfly@redhat.com][2].

## Issues and Project Board

We use issues to track work items, such as bug reports and feature requests. Issues can be found in the [issue tracker](https://github.com/patternfly/patternfly-react/issues) or [project board](https://github.com/patternfly/patternfly-react/projects/1). We use the project board to help visualize and manage status of an issue, and we use labels to help prioritize and identify issues.

### Issue Labels

Our issue tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

- `bug` - A bug is a _demonstrable problem_ that is caused by the code in the repository. Please check if the issue has already been reported before reporting a new bug.
- `duplicate` - A duplicate signifies that another issue encapsulates or restates this issue. Duplicates will be closed and referenced as such.
- `enhancement` - An enhancement is a feature request. Please provide as much detail as possible and consider whether your idea fits the scope and aims of this project.
- `breaking change` - this issue warrants a major release and potentially changes APIs for downstream consumers.
- `chore` - this issue improves internal tooling or build processes only.
- `documentation` - this issue affects documentation only.
- `css` - this issue affects CSS or has stylistic changes.
- `good first issue` - Issues that are ideal for new contributors.
- `help wanted` - Issues we need or would love help from the community to resolve.
- `pending response` - This label indicates that the issue is awaiting reply from a contributor or a maintainer.
- `question` - Use the question label to indicate you are having a problem with something and would like feedback from the community.
- `wontfix` - The issue is legitimate, but it is not something the team is currently able or willing to fix or implement. Issues with this label may be revisited in the future.
- `p1`, `p2`, `p3` - These are priority labels.

### PR Labels

Since the components in patternfly-react are based on patternfly, we want to make sure these components stay in sync with the core patternfly components as documented on [patternfly.org](http://www.patternfly.org/pattern-library/). To help make sure component contributions are consistent with the [design documentation](http://www.patternfly.org/pattern-library/) and [html/css implementation](https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/), we use the following labels during the PR review process.

- `css review` - The issue requires css review. Add this label when you are working on a component, and the html and css are ready for review against the core patternfly implementation.
- `ux review` - The issue requires ux design review. Add this label when you are working on a component, and the storybook example is ready for review by a ux designer.
- `css approved` - The issue has been reviewed and approved by a member of the css team.
- `ux approved` - The issue has been reviewed and approved by a member of the ux team.

The following labels also can be used to improve PatternFly React's [CHANGELOG.md](https://github.com/patternfly/patternfly-react/blob/master/CHANGELOG.md) when submitting PRs:

- `bug` - this PR resolves a bug issue. Releasing will cause a patch level semantic version change.
- `enhancement` - this PR adds a new feature and closes an `enhancement` issue. Releasing will cause a minor semantic version change.
- `breaking change` - this PR warrants a major release and potentially changes APIs for downstream consumers. Releasing will cause a major semantic version change.
- `chore` - this PR improves internal tooling or build processes only. These PRs do not effect release.
- `documentation` - this PR affects documentation only. These PRs do not effect release.
- `css` - this PR affects CSS or has minimal stylistic changes. Releasing will cause a patch level semantic version change.

### Project Board Columns

The project board uses the following columns to track issues:

- `Backlog` - Issues that are ready to be worked and available for any contributor to take.
- `Needs CSS/Design/Research` - Issues that require any work that would be completed outside of this repo related to css, design or research. For example some component contributions will require updates to css in the core [patternfly](https://github.com/patternfly/patternfly) repo.
- `Assigned` - Issues that are ready to be worked and are already assigned.
- `In Progress` - Issues that are actively being worked.
- `PR in Review` - Issues for which a PR is open and are ready for review.

Issues can be manually added to the project board from either the issue page or the project board page.

## Contribution Process

### Creating Issues for Bugs

If you find a bug within the repo, please help us track the issue by following these steps:

1.  In the issue tracker, check if the bug has already been reported.
    - If it does exist, but doesn’t capture key details that you have noticed, please add a comment to the existing bug.
2.  Create an issue if one doesn’t already exist.
    - Provide details like what component is affected, steps to reproduce, and any other information that is critical to addressing the issue
    - Assign the label “bug” to the issue

### Creating Issues for New Components

To create an issue for adding a new component to the repo, please observe the following process:

1.  If the component does not yet exist as a PatternFly component, check the [PatternFly Decision Tree](https://github.com/patternfly/patternfly-design/blob/master/resources/decision-tree/PatternflyDecisionTree.pdf) to see if your component meets the criteria for an addition to PatternFly. If you're unsure, reach out to us on the patternfly@redhat.com mailing list.
2.  If the component exists in PatternFly or passes the Decision Tree, then create an issue with the following details:
    - Assign the label `enhancement` to the issue
    - Include the text “Component -“ in the beginning of the title if the issue captures a new component
    - If the component is documented as a [PatternFly Library Pattern](http://www.patternfly.org/pattern-library/), include a link to it.

### Contributing Components

Components that are ready to be contributed can be found on the project board in the backlog column. They are identified with the text “Component” in the issue title.

Once you’ve identified a component to contribute, component contributions should observe the following high level process:

1.  On the Issue page for the component, click the link “assign yourself” if it is visible. If not, then add a comment to the issue stating that you are working the issue. A member of the admin team can invite you to the contributors group later.
2.  In the project board, move the issue to **In Progress**
3.  Implement the component observing our [react component requirements](#react-component-requirements)
    and [code contribution guidelines](#code-contribution-guidelines).
4.  Submit your pull request and be sure to reference the `enhancement` issue so that others interested in this component may discuss.
5.  Test your component. Once the pull request is merged, please test the component can successfully be used as intended downstream.

If you submit a pull request, then please also contribute by reviewing other pull requests. Please remember that reviewing other contributions is just as important!

### Adding Styling for your Components

Ideally, all the styles that are needed for the components in patternfly-react would be defined in the core [patternfly](https://github.com/patternfly/patternfly) repo. However, there may be cases where additional styles are needed to complete the patternfly-react component contribution. In the case where the styles are specific to the component implementation in the patternfly-react repo, then the styles would remain in the repo. In the case where the component does not exist yet in the core pattenrfly repo and styles are needed for the component in the patternfly-react repo, then the styles would only remain in the patternfly-react repo until the component is added to the core patternfly repo. Once the styles are available as part of core patternfly repo, it will be removed from the patternfly-react repo.

When it is necessary to add styling in the patternfly-react repo, the styling should be done in both Less and Sass (in the future a converter will be provided, see [Issue #169](https://github.com/patternfly/patternfly-react/issues/169)).

Inside the package directory:

- Add a Less file to the `less` directory and use the file name `<component>.less`
- Import the Less file into `less/paternfly-react.less` using `@import "<component>";`
- Add a Sass file to the `sass/patternfly-react/` directory and use the file name `_<component>.scss`
- Import the Sass file into `sass/patternfly-react/_patternfly-react.scss` using `@import "<component>";`

### Using Generators

To make contributing components and packages easier a generator utility has been provided.

To start the generator run:

```bash
yarn generate
```

Follow the prompts to generate the desired component or package.

Currently the following generators are provided

- PatternFly 4 Component
- PatternFly 3 Component
- Package

## Guidelines and Requirements

### React Component Requirements

Please ensure that all React UI components contributed meet the following guidelines:

- This repository serves as a UI / presentational component library only. This means we should not be introducing container components which subscribe to state updates or handle data fetching (i.e. redux aware components). Prefer [stateless functional components](http://buildwithreact.com/article/stateless-functional-components)
  when possible and accept [props](https://facebook.github.io/react/docs/components-and-props.html) as UI display parameters.
- Provide a [single default export](http://exploringjs.com/es6/ch_modules.html#_single-default-export) for exporting your React UI component as an ES6 Module in your component's jsx definition.
- For PatternFly 3 components, provide an associated `.stories.js` [story](https://getstorybook.io/docs/react-storybook/basics/writing-stories) for your component. Stories should demonstrate as many different UI states for your component as possible. Use Storybook [knobs](https://github.com/storybooks/storybook-addon-knobs) to enable dynamic visualizations of your component's props.
  For PatternFly 4 components, provide associated examples for documentation in the examples directory for the component.
- Provide a [jest snapshot test](https://facebook.github.io/jest/docs/snapshot-testing.html) to ensure your UI markup does not change unexpectedly.
- Ensure the component's rendered design and Storybook stories for PatternFly 3 or Documentation examples for PatternFly 4 meet [PatternFly design standard](https://github.com/patternfly/patternfly-design).
  **Note:** If your component does not yet have PatternFly design documentation, the PatternFly React design team will first confirm that the pattern passes the [PatternFly Decision Tree](https://github.com/patternfly/patternfly-design/blob/master/resources/decision-tree/PatternflyDecisionTree.pdf) and then start the process for generating design documentation.
- Ensure the code is properly formatted and there are no linting errors. PatternFly React uses custom eslint configuration based on [Javascript Standard Style](https://standardjs.com/) and [Prettier](https://github.com/prettier/prettier) for code formatting. You can automatically format your code with `yarn prettier` and run the project's linter with `yarn lint`.

### Code Consistency

- All files and folders under your package's `src/components` should name with PascalCase except `index.js` files
- If you need a constant file, it should be called `{Component_Name}Constants.js` (Component_Name with PascalCase)
- Each component should treat as a standalone package and live under its own folder. If you think your component can be made completely independent from other components, create it as a new package. This reduces the dependency tree and improves performance downstream. It also makes exported bundles lighter.
- Single file per component with **default export**
- Avoid using the bindMethods syntax for attaching methods to a class. Instead use class properties for example `testMethod = () => { return 'test'}`
- When component is a set of components (e.g., ListGroup and ListGroupItem),
  they should live in the same folder named on the parent component (e.g., ListGroup)
- Each component folder should have an `index.js` file with **named exports** of all the relevant components in the folder
- Always prefer **default imports** between components in the same folder
- Components that are not getting exported (to consumers) from
  the `index.js` file should be in a subfolder named `InnerComponents`
- Storybooks for PatternFly 3
  - Provide a storybook with your component named on the parent component with a `.stories.js` suffix (e.g., `ListGroup.stories.js`)
  - When your stories contain multiple files, put them in a subfolder named `Stories`
  - `src/**/*.stories.js` and `src/**/Stories/` are excluded from the package build output
- Documentation for PatternFly 4
  - Provide documentation for your component with examples in the component's example directory. examples (e.g `Listgroup/examples/SimpleListGroup.js`)
  - All examples should be added to the component's documentation file (`ComponentName.docs.js`) exports.
    See the getting started guide for more information on [Adding documentation](./GETTING-STARTED.md#adding-component-documentation)
- When writing a component and you want to use the classnames package, be sure to import and name it `classNames`. For example - `import classNames from 'classnames'`
- When destructuring or spreading expressions , use ...props as the variable name.
- Exporting components from other libraries (without manipulating them)
  to consumers is a common task, use:

  ```js
  # Badge/Badge.js
  import { Badge } from 'react-bootstrap';
  export default Badge;

  # Badge/index.js
  export { default as Badge } from './Badge';

  # index.js
  export * from './Badge';
  ```

  **Please see the [Getting Started Readme](./GETTING-STARTED.md) for additional information in getting started with building PatterFly 4 react components.**

### Code Contribution Guidelines

Adhering to the following process is the best way to get your work included in the project:

1.  [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/patternfly-react.git
# Navigate to the newly cloned directory
cd patternfly-react
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/patternfly/patternfly-react.git
```

2.  Create a branch:

```text
$ git checkout -b my-branch -t upstream/master
```

3. Generate your Component

```bash
# Run the tool to Generate the component scaffolding
 yarn generate
```

- When you select the option to generate a PatternFly 3 component, a structure resembling the following is generated
  ```text
  packages/patternfly-3/patternfly-react/src/components/[ComponentName]/
    index.js - Barrel File exporting public exports
    ComponentName.js - Component Implementation
    ComponentName.test.js - Component Tests
    ComponentName.stories.js - Component Stories
  ```
- When you select the option to generate a PatternFly 4 component, a structure resembling the following is generated
  ```text
  packages/patternfly-4/react-core/src/[type]/[ComponentName]/
    index.js - Barrel File exporting public exports
    ComponentName.js - Component Implementation
    ComponentName.test.js - Component Tests
    ComponentName.docs.js - Component Docs
    examples/ - dir for all examples
        SimpleComp
  ```

4.  Develop your component. After development is complete, ensure tests and lint standards pass.

```text
$ yarn test
```

Ensure no lint errors are introduced in `yarn-error.log` after running this command.

5.  Add a commit using `yarn commit`:

This project uses [`semantic-release`](https://npmjs.com/package/semantic-release) to do automatic releases and generate a changelog based on the commit history. So we follow [a convention][3] for commit messages. Please follow this convention for your commit messages.

You can use `commitizen` to help you to follow [the convention][3].

Once you are ready to commit the changes, please use the below commands:

```text
$ git add <files to be committed>
$ yarn commit
```

... and follow the instruction of the interactive prompt.

6.  Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time. Ensure all commits related to a single issue have been [squashed](https://github.com/ginatrapani/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit).

```text
$ git fetch upstream
$ git rebase upstream/master
```

7.  Push

```text
$ git push origin my-branch
```

8.  Create a Demo Storybook

    - For PatternFly 4, you can build and deploy the demo documentation to any hosting site of your choice.

    - For PatternFly 3, you'll want to export Storybook in your fork and note the Storybook url generated.
      ```text
      $ yarn storybook:build
      $ yarn storybook:deploy
      ```

9.  Create a Pull Request

[Open a pull request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `master` branch. Please be sure to include all of the following in your PR:

- Any relevant issues associated with this pull request (`enhancement` issues, `bug` issues, etc.)
- Storybook and Documentation
  - Include a link to the design documentation in the [PatternFly Pattern Library](http://www.patternfly.org/pattern-library/) if it exists. If a PatternFly design does not exist yet, then provide a description that explains when the component would be used and what goal or task it helps to accomplish.
  - for PatternFly 3, include the generated Storybook url. For for PatternFly 4, include the url for the deployed documentation. (from **Step 8**)

Once your pull request has been reviewed, if all conditions above have been met your pull request will be approved and merged.

Please help in ensuring all relevant issues are closed and that any subsequent issues needed have been noted with this pull request.

### Guidelines for React implementation from Core

- PF-React components should demonstrate all states implemented in Core without adding any new states.
- If a new state is introduced in PF-React, it should not be accepted by the reviewer until an issue is created explaining why this example/modification is needed in Core and PF-React. Tag a UX/UI designer. 
- Textual content and styles from PF-Next and PF-React should always be consistent.
- Larger PF-React components can be broken into sub-issues and those issues should link back to the larger issue.
- If an issue in Core will affect a component in PF-React, this issue should link to the main PF-React issue.
- The CSS Developers and UX Designers should be tagged to review their respective PF-React issue.

## Becoming a Maintainer

The documentation for becoming a maintainer has been taken from [Foreman](https://theforeman.org/handbook.html#Becomingamaintainer) and adapted for the PatternFly project.

As a maintainer, it is your responsibility to help manage and maintain the health of the PatternFly project. A PatternFly maintainer has commit permissions to one or more of the repositories under the [PatternFly organization](https://github.com/patternfly). To see a list of maintainers to the PatternFly project, view the [PatternFly GitHub Teams](https://github.com/orgs/patternfly/teams) page.

Maintainers are members of the PatternFly community who exhibit most of the following behaviors:

- Review and merge code and documentation.
- Help triaging bugs and testing pull requests.
- Make well formed pull requests.
- Have a sense of duty about the project.
- Play well with others, are respectful, show gratitude.

If you want to become a maintainer, we expect you to:

- Review and test pull requests submitted by others.
- Encourage and ensure design remains an integral part of the review process and pull in designers for review as needed (you can leverage @patternfly/patternfly-react-ux if there is no known associated designer).
- Maintain sustained activity versus sporadic.
- Support users and other developers on [PatternFly Slack](https://patternfly.slack.com/) (there is a channel dedicated to PatternFly React) and the [mailing list](mailto:patternfly@redhat.com).

Other things that are nice to do:

- Participate in (or even initiate) real-world events such as user/developer meetups, papers/talks at conferences, etc.

### How do I become a maintainer?

One person has to nominate you to the group of existing maintainers. The person who nominates you has to:

- Submit ten examples that prove this person behaves like a maintainer.
- Explain how the nominee is involved in the community and cares about the future of the project

This nomination is public and should be sent to the PatternFly mailing list. After the nomination is submitted, two other maintainers have to second the nomination. If no one objects in one week, the nomination is accepted.

Such objections may happen in public on the nomination e-mail thread. However, not everyone is comfortable giving objections publicly. Therefore, it is acceptable for other maintainers to raise their concerns with the sponsor and/or other maintainers privately if they wish to do so. The sponsor is expected to update the nomination e-mail thread to show that it is on hold pending private concerns.

Regardless, while objections are discussed either in private or public, the nomination is on hold until the objections are resolved or the nomination is rejected. In the event of a failed nomination, the sponsor (as part of the discussing group) will know the grounds for the rejection, and can pass along constructive feedback to the candidate. Care should be taken to do this sensitively.

### How do I lose maintainers status?

The maintainers team will be reevaluated periodically to ensure it remains up to date. If you are inactive in the community for six months, we will remove you from the maintainers list and revoke your permission, but we will make a mention of you on a list of previous maintainers. In the event that a maintainer continues to disregard good citizenship (or actively disrupts the project), we may need to revoke that person’s status.

The process for revoking someone's maintainer status is a discussion limited to the maintainer team given the sensitive nature of this conversation. The maintainer being discussed should be made aware of the reasons their membership is being discussed and why. It may be that this person simply does not have time and agrees to opt out of this role without any further discussion. If more is required, the process is similar to a nomination. A member should suggest the revocation with a good reason, two people second the motion, and a vote may be called if consensus cannot be reached. Someone from the maintainer team is required to follow up with the person being removed to update them and pass along constructive feedback. Again, care should be taken to do this sensitively.

### Quick tips for new maintainers

- If something you merged broke something, it’s your responsibility to resolve or coordinate how to resolve the issue.
- Do not merge your own commits
- Do not merge commits blindly. If you do not fully understand a pull request, ask existing maintainers to take a look
- Do not merge if the build is failing. Wait until tests are green to merge.

[1]: http://contributor-covenant.org/version/1/4/code_of_conduct.md
[2]: mailto:patternfly@redhat.com
[3]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md
