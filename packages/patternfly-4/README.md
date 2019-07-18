# Packages

PatternFly 4 comsumes [@patternfly/patternfly](https://github.com/patternfly/patternfly-next) CSS in `react-styles` that are then used throughout components and packages.

## Published packages

These packages are published on NPM and available to consumers

### react-core

Common [PatternFly components](https://pf4.patternfly.org/) implemented using normal HTML components.

### react-charts

Charts which wrap [Victory Charts](https://formidable.com/open-source/victory/docs/victory-chart/).

### react-table

Uses an in-house [ReactTabular](https://reactabular.js.org/#/) to implement charts.

### react-inline-edit-extension

Allows for inline editing in react-table.

### react-virtualized-extension

Allows for virtual scrolling in react-table.

### react-styles

Creates JS objects from the CSS in [@patternfly/patternfly](https://github.com/patternfly/patternfly-next) and wraps emotion to provide StyleSheet utilities.

### react-tokens

Creates JS objects from the global CSS in [@patternfly/patternfly](https://github.com/patternfly/patternfly-next).

### react-topology

This package implements a topology view.

## Private packages

These packages are internal to the project and for developers.

### react-docs

Gatsby project to demonstrate our components.

### react-integration

[Cypress](https://www.cypress.io/) suite with a Create React App demo project to test TypeScript types.
