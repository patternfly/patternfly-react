# PatternFly React Getting Started

This README is intended to further detail some of the steps mentioned in the PatternFly React [Contributing Guide](./CONTRIBUTING.md#code-consistency) and help new contributors getting started with PatternFly React.

## Learning React

If you haven't already, we highly recommend taking a look at the [React Documentation site](https://reactjs.org/). This contains up to date information on React from the project's core maintainers at Facebook.

We also have a few documents started on this subject with some helpful links and descriptions that might help you learn React. Feel free to add your own docs and helpful links here!

- [Getting Started w/ React](https://gist.github.com/priley86/770aaf64ccca5bdfdb4beee208956f7b) by Patrick Riley

## Storybook

PatternFly 3 React uses React Storybook to demonstrate React UI components and patterns. You can read more about Storybook UI Development in the [Readme](https://github.com/patternfly/patternfly-react#storybook-ui-development).

After you have written your new PatternFly component, tests, and Storybook stories, please publish your Storybook for others to review it.

## PatternFly React Doc

PatternFly 4 React uses Gatsby. Examples are created toe demonstrate of the use of the React components. Documents are generated from these examples.

### Adding Component Documentation

Component Documentation has two parts. a `[Component].docs.js` file, and files under `[Component]/examples/`. Each file must follow a few guidelines for them to be consumed properly by the docs website.

The `docs.js` file has the following structure

```js
import SimpleExample from './examples/SimpleComponent';
import { Component, ComponentSize } from '@patternfly/react-core'; // only @patternfly/react-* imports are allowed

export default {
  title: 'Component', // Title to display at the top of the docs page
  description: 'description', // Opening description for the component
  components: {
    Component: Component // Key value pair for components to include prop documentation
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
  static description = 'description'; // Optional: Extra description for the example
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
1. Do not do any iteration of variants, sizes, etc in the render. This is easier for the developer, but it makes it much harder to reason for the consumer.
1. Keep anything you think is useful inside this file. The source view (coming soon) will only include the source of the example. If everything is broken out it will not be useful to the consumer. Remember, you are writing examples not a super optimized application.
1. Try not to add extra external dependencies. These will only be approved on a case by case basis.

## Testing

PatternFly React currently uses [Jest](https://facebook.github.io/jest/) for running snapshot tests. In the future, we will also use Airbnb's [Enzyme](http://airbnb.io/enzyme/) library. More to come soon on this topic ;-)

## Code Conventions

This section is meant to further detail some of the conventions mentioned in the Code Consistency section of the [Contributing Guide](https://github.com/patternfly/patternfly-react/blob/master/CONTRIBUTING.md#code-consistency).

PatternFly React currently uses the [Standard Javascript Style](https://standardjs.com/) and [Airbnb Style Guide](https://github.com/airbnb/javascript) rule conventions for Javascript. We've tailored many of these rules to help keep the code consistent and help ensure our continuous integration system can test rules when a pull request is opened. We've also ensured these rules work in conjunction with our auto formatter, [Prettier](https://prettier.io/).

A good percentage of the javascript rules mentioned will be automatically fixed by Prettier, so it is important to use Prettier when contributing to PatternFly React.

### Prettier

You can run the Prettier auto formatter in a few ways:

- Use your IDE and auto-format the code on save. This will likely be the most reliable option if you want immediate feedback on what the code will look like after it has been formatted as you develop. Prettier supports all of the most popular IDEs in use today. Find your IDE and install the plugin from the list of editors Prettier supports [here](https://prettier.io/docs/en/editors.html).
  - Note: if you are using VSCode, we have the settings currently checked in to the project (so you will get those automatically). You can view all code formatting errors in the "Output" console of VSCode as you save and format files.
- Run the command:
  - You can simply run `npm run prettier` and all code will be formatted.

The following is a breakdown of many of the Javascript rules implemented (beyond formatting rules fixed by Prettier) and how you can go about fixing them. You can find the most up to date settings on these rules in PatternFly React's [eslintrc](https://github.com/patternfly/patternfly-react/blob/master/.eslintrc).

### Eslint Rules

The following are a few of the most common lint rule issues you may encounter in PatternFly React. These notes are meant to help beginners. As always, consult the latest documentation when addressing these rules.

#### React Rules

**react/prefer-stateless-function**

First and foremost, please try to ensure all React components are stateless when possible (i.e. a component should be stateless if it does not use `this.state` or the `this` keyword). Stateless components optimize the rendering path, ensure modular design, promote good test coverage, and ensure good separation of concerns ([read more](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) on why stateless components are preferred). When possible, you should always "[lift state](https://reactjs.org/docs/lifting-state-up.html)" to the closest common ancestor. This is a core tenant of React and ensures a reduced surface area for bugs.

Example bad:

```
class ComponentA extends React.Component {
  render(){
    const {name} = this.props;
	return (<p> Hello {name}, you are Stateful!</p>)
  }
}
```

Example good:

```
const ComponentA = ({name, ...props}) => (
  <p {...props}> Hello {name}, you are Stateless!</p>
)
```

See the following [eslint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md) for more details.

**react/require-default-props**

This lint rule indicates you have left out a default prop. All `propTypes` which are not marked `isRequired` should have a corresponding `defaultProp`.

Example bad (missing defaults):

```
DropdownKebab.propTypes  = {
/** additional kebab dropdown classes */
className:  PropTypes.string,
/** children nodes */
children:  PropTypes.node,
/** kebab dropdown id */
id:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
/** menu right aligned */
pullRight:  PropTypes.bool,
/** dropdown component class */
componentClass:  PropTypes.func,
/** toggle style */
toggleStyle:  PropTypes.string
};
```

Example good (with defaults for all non-required props):

```
DropdownKebab.propTypes  = {
/** additional kebab dropdown classes */
className:  PropTypes.string,
/** children nodes */
children:  PropTypes.node,
/** kebab dropdown id */
id:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
/** menu right aligned */
pullRight:  PropTypes.bool,
/** dropdown component class */
componentClass:  PropTypes.func,
/** toggle style */
toggleStyle:  PropTypes.string
};

DropdownKebab.defaultProps  = {
className:  '',
children:  null,
pullRight:  false,
componentClass:  ButtonGroup,
toggleStyle:  'link'
};
```

See the following [eslint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) for more details.

#### Eslint Rules

**one-var**

All `let`, `const` variables should be declared on separate lines:

Example bad:

```
let updatedSelectedRows, updatedRow;
```

Example good:

```
let updatedSelectedRows;
let updatedRow;
```

See the following [eslint rule](https://eslint.org/docs/rules/one-var) for more details.

**import/first**

Absolute imports should come before relative imports.

Example bad:

```
import { bindMethods } from  '../../../common/helpers';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
```

Example good:

```
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindMethods } from  '../../../common/helpers';
```

See the following [eslint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md) for more details.

**prefer-destructuring**

ES6 gives us the ability to [destructure assignments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Please prefer destructuring when possible.

Example bad:

```
const checked = event.target.checked;
```

Example good:

```
const { checked } =  event.target;
```

See the following [eslint rule](https://eslint.org/docs/rules/prefer-destructuring) for more details.

**class-methods-use-this**

This rule fails when you have a class method that does not use `this` and should be marked static. All class methods should be bound to the class and use `this`.

Example bad:

```
class MockServerApi extends React.Component {
  toggleRow(row) {
    return  Object.assign({}, row, { selected:  !row.selected });
  }
  selectRow({row}){
    this.mockRows[index] = this.toggleRow(this.mockRows[index]);
  }
}
```

Example good:

```
class MockServerApi extends React.Component {
  static toggleRow(row) {
    return  Object.assign({}, row, { selected:  !row.selected });
  }
  selectRow({row}){
    this.mockRows[index] = MockServerApi.toggleRow(this.mockRows[index]);
  }
}
```

See the following [eslint rule](https://eslint.org/docs/rules/class-methods-use-this) for more details.

**consistent-return**

All functions should consistently return a value (both JSX and non JSX functions).

Example bad:

```
<Table.Body onRow={(row, { rowIndex }) => {
	switch (rowIndex) {
	  case 0:
	    return { className: 'active' };
	  case 2:
	    return { className: 'success' };
}} />
```

Example good:

```
<Table.Body onRow={(row, { rowIndex }) => {
	switch (rowIndex) {
	  case 0:
	    return { className: 'active' };
	  case 2:
	    return { className: 'success' };
	  default:
	    return null;
}} />
```

Note: You may also frequently see this rule fail when iterating with `map`. Ensure your `map` callback function returns a value.

See the following [eslint rule](https://eslint.org/docs/rules/consistent-return) for more details.

**no-restricted-globals**

Example bad:

```
!isNaN(value)
```

Example good:

```
!Number.isNaN(value)
```

See the following [eslint rule](https://eslint.org/docs/rules/no-restricted-globals) for more details.
