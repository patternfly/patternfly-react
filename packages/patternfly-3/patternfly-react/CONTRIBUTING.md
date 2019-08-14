# Contributing to patternfly-react

## Adding a new component

1. Check for open issues that are not assigned to anyone, and assign yourself. If you do not see an issue for the component you want to contribute open an issue and assign yourself. Assigning yourself will ensure that others do not begin working on the component you currently have in progress.
2. Generate the component scaffolding by running `yarn generate`. This will generate a structure that resembles the following
   ```text
   packages/patternfly-3/patternfly-react/src/components/[ComponentName]/
    index.js - Barrel File exporting public exports
    ComponentName.js - Component Implementation
    ComponentName.test.js - Component Tests
    ComponentName.stories.js - Component Stories
   ```
3. Write the component implementation in `[ComponentName].js`.
4. Add tests to `[ComponentName].test.js`. All new components must be tested.
5. Update the generated storybook `[ComponentName].stories.js`. When your stories contain multiple files, put them in a subfolder named `Stories`. Stories should demonstrate as many different UI states for your component as possible. Use Storybook knobs to enable dynamic visualizations of your component's props. For PatternFly 4 components, provide associated examples for documentation in the examples directory for the component.

## Additional Information

See the PatternFly React Guide for full details on [Code Contribution Guidelines](../../../CONTRIBUTING.md#code-contribution-guidelines)
