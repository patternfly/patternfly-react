---
title: Contributing
section: patternfly-4
---
# Contributing to @patternfly/react-core

## Adding a new component

1. Check for open issues that are not assigned to anyone, and assign yourself. If you do not see an issue for the component you want to contribute open an issue and assign yourself. Assigning yourself will ensure that others do not begin working on the component you currently have in progress.
1. Generate the component scaffolding by running `yarn generate`. This will generate a structure that resembles the following
   ```text
   packages/react-core/src/[type]/[ComponentName]/
     index.ts - Barrel File exporting public exports
     ComponentName.tsx - Component Implementation
     ComponentName.test.tsx - Component Tests
     ComponentName.md - Component Docs
     examples/ - dir for all examples
         SimpleComponentName.js - Simple Example
   ```
1. Write the component implementation in `[Component].tsx`.
1. Add jest tests to `[Component].test.tsx`. All new components must be tested.
1. Add any additional public exports to `index.ts`.
1. Update the generated `[ComponentName].md.` See how to create [component docs.](../react-core/README.md)
1. Add integration tests to the demo-app found [here](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-integration).

## Additional information

See the PatternFly React Guide for full details on [Code Contribution Guidelines](../../CONTRIBUTING.md)
