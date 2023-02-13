---
id: With Toolbar
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  BadgeLocation,
  ColaLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  LabelPosition,
  ModelKind,
  NodeShape,
  NodeStatus,
  observer,
  SELECTION_EVENT,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';

import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### With Toolbar

To add a toolbar, wrap your `VisualizationProvider` with the `TopologyView` component, which will accept `viewToolbar` and/or `contextToolbar` as props.

- `contextToolbar`: displayed at the top of the view, should contain components for changing context
- `viewToolbar`: displayed below the context toolbar, should contain components for changing view contents

**Note**: You can set the state on the controller to track values such as the `viewOptions`.

The GraphElement components can retrieve state from the controller via:
`element.getController().getState<ControllerState>();`
and react to that state accordingly.

You will need to pass in the corresponding props and the related `viewOptions` state values into your custom `DefaultNode` component for all the view options you want to track.

```ts file='./TopologyToolbarDemo.tsx'
```
