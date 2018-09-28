# Contributing to @patternfly/react-core

## Adding a new component

1. Check for open issues that are not assigned to anyone, and assign yourself. If you do not see an issue for the component you want to contribute open an issue and assign yourself. Assigning yourself will ensure that others do not begin working on the component you currently have in progress.
2. Generate the component scaffolding by running `yarn generate`. This will generate a structure that resembles the following
   ```text
   packages/react-core/src/[type]/[ComponentName]/
     index.js - Barrel File exporting public exports
     ComponentName.js - Component Implementation
     ComponentName.test.js - Component Tests
     ComponentName.docs.js - Component Docs
     examples/ - dir for all examples
         SimpleComponentName.js - Simple Example
   ```
3. Write the component implementation in `[Component].js`.
4. Add tests to `[Component].test.js`. All new components must be tested.
5. Add any additional public exports to `index.js`
6. Update the generated example and add any others. Any examples created must be imported into `[ComponentName].docs.js` [See Below](#adding-component-documentation)

## Adding Component Documentation

Component Documentation has two parts. a `[Component].docs.js` file, and files under `[Component]/examples/`. Each file must follow a few guidelines for them to be consumed properly by the docs website.

The `docs.js` file has the following structure

```js
import SimpleExample from './examples/SimpleComponent';
import { Component, ComponentSize } from '@patternfly/react-core'; // only @patternfly/react-* imports are allowed

export default {
  title: 'Component', // Title to display at the top of the docs page
  description: 'description', // Opening description for the component
  components: {
    Component: Component // Key value pair for components to include prop documentaion
  },
  enumValues: {
    // Optional
    ComponentSize: Object.values(ComponentSize) // key value pair for any enums that cannot be statically analyzed.
  },
  examples: [SimpleExample] // Array of examples to include on the page.  They must be stored under /examples/
};
```

An example file has the following structure

```jsx
import React from 'react';
import { Component } from '@patternfly/react-core'; // only @patternfly/react-* imports are allowed
import something from './common/something'; // any directory under examples/ is ignored in page generation.
import styles from './Example.styles.js'; // any .styles.js file under examples/ is ignored in page generation

// note: this can be a function too with the title, etc, set similar to setting Component.propTypes
class Example extends React.Component {
  static title = 'Simple Example'; // Sets the examples title
  static description = 'description'; // Optional: Extra descrption for the example
  static getContainerProps = () => ({
    // Optional: Adds any extra props to the container.  Useful for example specific styles
    style: styles
  });

  render() {
    return <Component />;
  }
}

export default Example;
```

Some things to keep in mind when writing examples:

1. Keep them simple. It is much easier for a person to understand what is going on.
2. Do not do any iteration of variants, sizes, etc in the render. This is easier for the developer, but it makes it much harder to reason for the consumer.
3. Keep anything you think is useful inside this file. The source view (coming soon) will only include the source of the example. If everything is broken out it will not be useful to the consumer. Remember, you are writing examples not a super optimized application.
4. Try not to add extra external dependencies. These will only be approved on a case by case basis.

## Code Contribution Guidelines

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

8.  Create a Demo

    - For PatternFly 4, you can build and deploy the demo documentation to any hosting site of your choice.

9.  Create a Pull Request

## Additional Information

See the PatternFly React Guide for full details on [Code Contribution Guidelines](https://github.com/patternfly/patternfly-react/blob/master/CONTRIBUTING.md#code-contribution-guidelines)
