---
id: Control Bar
section: topology
sortValue: 31
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyControlBarDemo.tsx
propComponents: ['TopologyControlBar', 'TopologyView']

---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  action,
  ColaLayout,
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  ModelKind,
  NodeShape,
  SELECTION_EVENT,
  TopologyControlBar,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withPanZoom,
  withSelection
  } from '@patternfly/react-topology';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Topology with a control bar

To add a control bar to the topology view, wrap your `VisualizationProvider` with the `TopologyView` component, which accepts `controlBar` as a prop.

Pass the `TopologyControlBar` component to the `controlBar` prop, and pass the `controlButtons` prop into `TopologyControlBar`. Then call the function `createTopologyControlButtons`, which will create the common control buttons via several parameters listed below:

1. To render the default control buttons, pass in `defaultControlButtonsOptions`. These default options include:
     - Zoom In
     - Zoom Out
     - Fit to Screen
     - Reset View
     - Legend

    You can override these defaults by passing in any of the `defaultControlButtonsOptions` as a parameter, with your updated boolean value of the default option.

2. For each button, pass in each action callback method as parameter.

```ts file="./TopologyControlBarDemo.tsx"
```
