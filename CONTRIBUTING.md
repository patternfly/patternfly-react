# Contributing to PatternFly React

## Code of Conduct

This project is governed by the [Contributor Covenant version 1.4][1].  All contributors and participants
agree to abide by its terms. To report violations, send an email to [patternfly@redhat.com][2].

## Issue Contributions

The [issue tracker](https://github.com/patternfly/patternfly-react/issues) is the preferred channel for bug reports, features requests, and submitting pull requests.

### Issues and labels

Our issue tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

- `bug` - A bug is a _demonstrable problem_ that is caused by the code in the repository. Please check if the issue has already been reported before reporting a new bug.
- `duplicate` - A duplicate signifies that another issue encapsulates or restates this issue. Duplicates will be closed and referenced as such.
- `enhancement` - An enhancement is a feature request. Please provide as much detail as possible and consider whether your idea fits the scope and aims of this project.
- `help wanted` - Issues we need or would love help from the community to resolve.
- `pending response` - This label indicates that the issue is awaiting reply from a contributor or a maintainer.
- `question` - Use the question label to indicate you are having a problem with something and would like feedback from the community.
- `wontfix` - The issue is legitimate, but it is not something the team is currently able or willing to fix or implement. Issues with this label may be revisited in the future.

## React Component Contribution Process

React component contributions should observe the following high level process:

1. Check the [PatternFly Decision Tree](https://github.com/patternfly/patternfly-design/blob/master/resources/decision-tree/PatternflyDecisionTree.pdf) to see if your component meets the criteria for an addition to PatternFly. If you're unsure, reach out to us on the mailing list!
2. Create an `enhancement` issue to indicate you'd like to contribute this component to PatternFly React.
  - At this time, the PatternFly React design team will review the enhancement issue and verify that the component passes the decision tree. Only components that pass will be accepted into the repo. If the component does not pass, the team will work with you on identifying any sub-components that can be extracted that would be needed by more than one project.
3. Implement the component observing our [react component requirements](#react-component-requirements)
and [code contribution guidelines](#code-contribution-guidelines).
4. Submit your pull request and be sure to reference the `enhancement` issue so that others interested in this component may discuss.
5. Test your component. Once the pull request is merged, please test the component can successfully be used as intended downstream.
6. If you submit a pull request, then please also contribute by reviewing other pull requests. Please remember that reviewing other contributions is just as important!

### Adding CSS for your Component contribution

Ideally, all the css that is needed for the components in patternfly-react would be defined in the core css [patternfly](https://github.com/patternfly/patternfly) repo. However, there may be cases where additional css is needed to complete the patternfly-react component contribution. In the case where the css is specific to the component implementation in the patternfly-react repo, then the css would remain in the repo. In the case where the component does not exist yet in the core css  repo and css is needed in the patternfly-react repo to style the component, then the css would only remain in the patternfly-react repo until the component is added to the core css repo. Once the css is available as part of core css repo, it will be removed from the patternfly-react repo.

## React Component Requirements

Please ensure that all React UI components contributed meet the following guidelines:

* This repository serves as a UI / presentational component library only. This means we should not be introducing container components which subscribe to state updates or handle data fetching (i.e. redux aware components). Prefer [stateless functional components](http://buildwithreact.com/article/stateless-functional-components)
when possible and accept [props](https://facebook.github.io/react/docs/components-and-props.html) as UI display parameters.
* Provide a [single default export](http://exploringjs.com/es6/ch_modules.html#_single-default-export) for exporting your React UI component as an ES6 Module in your component's jsx definition.
* Provide an associated `.stories.js` [story](https://getstorybook.io/docs/react-storybook/basics/writing-stories) for your component. Stories should demonstrate as many different UI states for your component as possible. Use Storybook [knobs](https://github.com/storybooks/storybook-addon-knobs) to enable dynamic visualizations of your component's props.
* Provide a [jest snapshot test](https://facebook.github.io/jest/docs/snapshot-testing.html) to ensure your UI markup does not change unexpectedly.
* Ensure the component's rendered design and Storybook stories meet [PatternFly design standard](https://github.com/patternfly/patternfly-design).
**Note:** If your component does not yet have PatternFly design documentation, the PatternFly React design team will first confirm that the pattern passes the [PatternFly Decision Tree](https://github.com/patternfly/patternfly-design/blob/master/resources/decision-tree/PatternflyDecisionTree.pdf) and then start the process for generating design documentation.
* Ensure the code is properly formatted and there are no linting errors. PatternFly React uses custom eslint configuration based on [Javascript Standard Style](https://standardjs.com/) and [Prettier](https://github.com/prettier/prettier) for code formatting. You can automatically format your code with `npm run prettier` and run the project's linter with `npm run lint`.

### Code Consistency

* All files and folders under `src/components` should name with PascalCase except `index.js` files
* Each component should treat as a standalone package and live under its own folder
* Single file per component with **default export**
* When component is a set of components (e.g., ListGroup and ListGroupItem),
  they should live in the same folder named on the parent component (e.g., ListGroup)
* Each component folder should have an `index.js` file with **named exports** of all the relevant components in the folder
* Always prefer **default imports** between components in the same folder
* Components that are not getting exported (to consumers) from
  the `index.js` file should be in a subfolder named `InnerComponents`
* Exporting components from other libraries (without manipulating them)
  to consumers is a common task, use:
  ```js
  # Badge/Badge.js
  export { Badge as default } from 'react-bootstrap';

  # Badge/index.js
  export { default as Badge } from './Badge';

  # index.js
  export * from './Badge';
  ```

## Code Contribution Guidelines

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

  ```bash
  # Clone your fork of the repo into the current directory
  git clone https://github.com/<your-username>/patternfly-react.git
  # Navigate to the newly cloned directory
  cd patternfly-react
  # Assign the original repo to a remote called "upstream"
  git remote add upstream https://github.com/patternfly-react/patternfly-react.git
  ```
2. Create a branch:

  ```text
  $ git checkout -b my-branch -t origin/master
  ```

3. Develop your component. After development is complete, ensure tests and lint standards pass.

  ```text
  $ npm run test
  ```
Ensure no lint errors are introduced in `npm-debug.log` after running this command.

4. Add a commit using `npm run commit`:

This project uses [`semantic-release`](https://npmjs.com/package/semantic-release) to do automatic releases and generate a changelog based on the commit history. So we follow [a convention][3] for commit messages. Please follow this convention for your commit messages.

You can use `commitizen` to help you to follow [the convention][3].

Once you are ready to commit the changes, please use the below commands:

  ```text
  $ git add <files to be committed>
  $ npm run commit
  ```
... and follow the instruction of the interactive prompt.

5. Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time. Ensure all commits related to a single issue have been [squashed](https://github.com/ginatrapani/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit).

  ```text
  $ git fetch upstream
  $ git rebase upstream/master
  ```

6. Push

  ```text
  $ git push origin my-branch
  ```

7. Export Storybook

Lastly, you'll want to export Storybook in your fork and note the Storybook url generated.

  ```text
  $ npm run storybook:build
  $ npm run storybook:deploy
  ```

8. Create a Pull Request

[Open a pull request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `master` branch. Please be sure to include all of the following in your PR:

  * Any relevant issues associated with this pull request (`enhacement` issues, `bug` issues, etc.)
  * Storybook documentation
     * Include a link to the design documentation in the [PatternFly Pattern Library](http://www.patternfly.org/pattern-library/) if it exists. If a PatternFly design does not exist yet, then provide a description that explains when the component would be used and what goal or task it helps to accomplish.
     * Include the generated Storybook url (from **Step 7**)

Once your pull request has been reveiwed, if all conditions above have been met your pull request will be approved and merged.

Please help in ensuring all relevant issues are closed and that any subsequent issues needed have been noted with this pull request.

 [1]: http://contributor-covenant.org/version/1/4/code_of_conduct.md
 [2]: mailto:patternfly@redhat.com
 [3]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md
