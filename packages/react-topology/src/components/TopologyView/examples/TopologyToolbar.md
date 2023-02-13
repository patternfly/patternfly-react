---
<<<<<<< HEAD
id: Toolbar
section: topology
sortValue: 32
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyToolbarDemo.tsx
=======
id: With Toolbar
section: topology
>>>>>>> 389e7f9b9 (docs(topology): add toolbar demo (#8668))
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
<<<<<<< HEAD
import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Topology with a toolbar

To add a toolbar to the topology view, wrap your `VisualizationProvider` with the `TopologyView` component, which will accept `viewToolbar` and/or `contextToolbar` as props.
=======

import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### With Toolbar

To add a toolbar, wrap your `VisualizationProvider` with the `TopologyView` component, which will accept `viewToolbar` and/or `contextToolbar` as props.
>>>>>>> 389e7f9b9 (docs(topology): add toolbar demo (#8668))

- `contextToolbar`: displayed at the top of the view, should contain components for changing context
- `viewToolbar`: displayed below the context toolbar, should contain components for changing view contents

**Note**: You can set the state on the controller to track values such as the `viewOptions`.

The GraphElement components can retrieve state from the controller via:
`element.getController().getState<ControllerState>();`
and react to that state accordingly.

You will need to pass in the corresponding props and the related `viewOptions` state values into your custom `DefaultNode` component for all the view options you want to track.

```ts file='./TopologyToolbarDemo.tsx'
```
