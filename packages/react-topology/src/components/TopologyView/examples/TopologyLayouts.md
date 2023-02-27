---
id: Layouts
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  action,
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  BreadthFirstLayout,
  ColaLayout,
  ColaGroupsLayout,
  ConcentricLayout,
  DagreLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  ForceLayout,
  GridLayout,
  GraphComponent,
  ModelKind,
  NodeShape,
  NodeStatus,
  observer,
  GRAPH_LAYOUT_END_EVENT,
  TopologyControlBar,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDragNode,
  withPanZoom
} from '@patternfly/react-topology';
import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Layouts
Layouts will help to position the nodes on the graph in some manner as defined by the chosen layout. There are many algorithms
for positioning nodes based on many factors (side of nodes, distance between nodes, edges, etc). Patternfy react-topology provides
some layouts that you can choose to customize your topology graph with:

##### Force:
This layout is built on top of the d3-force layout provided by [d3/d3-force](https://github.com/d3/d3-force).

##### Dagre:
This layout is built on top of the dagrejs dagre layout provided by [dagrejs/dagre](https://github.com/dagrejs/dagre).

##### Cola:
This layout is built on top of the WebCola layout provided by [tgdwyer/WebCola](://github.com/tgdwyer/WebCola). This layout uses `force simulation`
by default, but can be turned off by setting the options `layoutOnDrag` flag to false.

##### ColaGroups:
This layout uses the Cola layout recursively on each group such that the group's children locations are set before setting the group's location
relative to other groups/nodes at its level.

##### Grid:
This is a basic grid layout. It orders the nodes in a grid making the grid as `square` as possible.
Grid layout works well to distribute nodes without taking into consideration edges

##### Concentric:
Concentric layouts have better results focused on high connectivity. It places the nodes in a circular pattern.

##### BreadthFirst:
This layout uses a breadth first algorithm to place the nodes. A BreadthFirst layout may help in these cases, providing
a natural "levels" approach that can be combined with other algorithms to help users to identify the dependencies between elements.

Note: this first version currently doesn't manage the overflow of a row

### Examples
```ts file='./TopologyLayoutsDemo.tsx'
```
