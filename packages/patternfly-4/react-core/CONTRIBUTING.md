# Contributing to @patternfly/react-core

## Adding a new component
1. Check for open issues that are not assigned to anyone, and assign yourself. If you do not see an issue for the component you want to contribute open an issue and assign yourself. Assigning yourself will ensure that others do not begin working on the component you currently have in progress.
1. Generate the component scaffolding by running `yarn generate`. This will generate a structure that resembles the following
    ```text
    packages/react-core/src/[type]/[ComponentName]/
      index.js - Barrel File exporting public exports
      ComponentName.js - Component Implementation
      ComponentName.test.js - Component Tests
      ComponentName.docs.js - Component Docs
      examples/ - dir for all examples
          SimpleComponentName.js - Simple Example
    ```
1. Write the component implementation in `[Component].js`.
1. Add tests to `[Component].test.js`.  All new components must be tested.
1. Add any additional public exports to `index.js`
1. Update the generated example and add any others. Any examples created must be imported into `[ComponentName].docs.js` [See Below](#adding-component-documentation)


## Adding Component Documentation

Component Documentation has two parts.  a `[Component].docs.js` file, and files under `[Component]/examples/`.  Each file must follow a few guidelines for them to be consumed properly by the docs website.

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
  enumValues: { // Optional
    ComponentSize: Object.values(ComponentSize) // key value pair for any enums that cannot be statically analyzed.
  },
  examples: [SimpleExample] // Array of examples to include on the page.  They must be stored under /examples/
}
```

An example file has the following structure
```jsx
import React from 'react';
import { Component } from '@patternfly/react-core'; // only @patternfly/react-* imports are
import something from './common/something'; // any directory under examples/ is ignored in page generation.
import styles from './Example.styles.js'; // any .styles.js file under examples/ is ignored in page generation

// note: this can be a function too with the title, etc, set similar to setting Component.propTypes
class Example extends React.Component {
  static title = 'Simple Example'; // Sets the examples title
  static description = 'description'; // Optional: Extra descrption for the example
  static getContainerProps = () => ({ // Optional: Adds any extra props to the container.  Useful for example specific styles
    style: styles,
  });

  render() {
    return (
      <Component />
    );
  }
}

export default Example;
```

Some things to keep in mind when writing examples:
1. Keep them simple.  It is much easier for a person to understand what is going on.
1. Do not do any iteration of variants, sizes, etc in the render.  This is easier for the developer, but it makes it much harder to reason for the consumer.
1. Keep anything you think is useful inside this file. The source view (coming soon) will only include the source of the example.  If everything is broken out it will not be useful to the consumer. Remember, you are writing examples not a super optimized application.
1. Try not to add extra external dependencies. These will only be approved on a case by case basis.