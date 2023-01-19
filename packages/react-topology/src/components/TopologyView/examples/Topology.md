---
id: Topology view
section: extensions
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

## Basic Usage

To use React Topology out-of-the-box, you will first need to transform your back-end data into a [Model](https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/types.ts#L16-L20). These model objects contain the information needed to display the nodes and edges. Each node and edge has a set of properties used by PF Topology as well as a data field which can be used to customize the nodes and edges by the application.

import {
ColaLayout,
CREATE_CONNECTOR_DROP_TYPE,
DefaultEdge,
DefaultGroup,
DefaultNode,
EdgeAnimationSpeed,
EdgeStyle,
EdgeTerminalType,
GraphComponent,
LabelPosition,
ModelKind,
NodeShape,
NodeStatus,
nodeDragSourceSpec,
nodeDropTargetSpec,
SELECTION_EVENT,
Visualization,
VisualizationProvider,
VisualizationSurface,
withDndDrop,
withDragNode,
withSelection
} from '@patternfly/react-topology';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

## Examples

### Baseline Topology

1. Create a new Controller which can be done using the default `Visualization` class.

  It is important to note that three `register` methods are accessed by the controller.

  The following two must be declared explicitly:

    - `registerLayoutFactory`: This method sets the layout of your topology view (e.g. Force, Dagre, Cola, etc.). If your application supports all layouts, use `defaultLayoutFactory` as a parameter. If you only want to support a subset of the available layout options, update `defaultLayout` to a custom implementation .

    - `registerComponentFactory`: This method lets you customize the components in your topology view (e.g. nodes, groups, and edges). You can use `defaultComponentFactory` as a parameter.

  The register method below is initialized in `Visualization.ts`. It doesn't need to be declared unless you support a custom implementation which modifies the types.

    - `registerElementFactory`: This method sets the types of the elements being used (e.g. graphs, nodes, edges). `defaultElementFactory` uses types from `ModelKind` and is exported in `index.ts`.


2. The `fromModel` method must be called on the controller to create the nodes. `fromModel` will take your data model as a parameter. Your data model should include a `graph` object, on which you will need to set `id` , `type` and `layout`.

3. To create your topology view component, add a `VisualizationProvider`, which is a useful context provider. It allows access to the created Controller and is required when using the `VisualizationSurface` component.

4. You can use the provided `VisualizationSurface` to provide the SVG component required for the topology components. The `VisualizationSurface` can take a state parameter that will allow you to pass your state settings along to the Controller.

```ts file='./TopologyBaselineDemo.tsx'
```

### Custom Nodes

To create a demo with custom node styling, you will need to create a custom node component, which your `customComponentFactory` will return.

To do this, you will need:

- A `CustomNode` component, with `CustomNodeProps` as the generic type, and the destructured `element` as the parameter. The code in the example shows how you can get data from `element` and apply it to the attributes of `DefaultNode`.

Within each node in your `NODES` array, you can set `data` to include additional custom attributes.

```ts file='./TopologyCustomNodeDemo.tsx'
```

### Custom Edges

Edges can be styled using properties on `EdgeModel`:
- edgeStyle: choose from the `EdgeStyle` enumeration providing solid, dashed, or dotted
- animationSpeed: choose from the `EdgeAnimationSpeed` enumeration providing various speeds

You can also customize your edges further by providing a custom Edge component. In the component you can specify a variety of parameters to pass to `DefaultEdge` or you can create the SVG elements to depict the edge.

```ts file='./TopologyEdgeDemo.tsx'
```
