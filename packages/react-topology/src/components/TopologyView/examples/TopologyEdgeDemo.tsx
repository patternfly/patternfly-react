import * as React from 'react';

// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1 } from '@patternfly/react-icons';

import {
  ColaLayout,
  ComponentFactory,
  CREATE_CONNECTOR_DROP_TYPE,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  Edge,
  EdgeAnimationSpeed,
  EdgeModel,
  EdgeStyle,
  EdgeTerminalType,
  Graph,
  GraphComponent,
  LabelPosition,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  NodeModel,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
  WithDragNodeProps,
  withSelection,
  WithSelectionProps
} from '@patternfly/react-topology';

interface CustomNodeProps {
  element: Node;
}

interface DataEdgeProps {
  element: Edge;
}

const CONNECTOR_SOURCE_DROP = 'connector-src-drop';
const CONNECTOR_TARGET_DROP = 'connector-target-drop';

const DataEdge: React.FC<DataEdgeProps> = ({ element, ...rest }) => (
  <DefaultEdge
    element={element}
    startTerminalType={EdgeTerminalType.cross}
    endTerminalType={EdgeTerminalType.directionalAlt}
    {...rest}
  />
);

const CustomNode: React.FC<CustomNodeProps & WithSelectionProps & WithDragNodeProps> = ({
  element,
  selected,
  onSelect,
  ...rest
}) => {
  const Icon = Icon1;

  return (
    <DefaultNode
      element={element}
      showStatusDecorator
      selected={selected}
      onSelect={onSelect}
      labelPosition={LabelPosition.right}
      {...rest}
    >
      <g transform={`translate(25, 25)`}>
        <Icon style={{ color: '#393F44' }} width={25} height={25} />
      </g>
    </DefaultNode>
  );
};

const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined =>
  new ColaLayout(graph, { layoutOnDrag: false });

const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string) => {
  switch (type) {
    case 'group':
      return DefaultGroup;
    case 'node':
      return withDndDrop(
        nodeDropTargetSpec([CONNECTOR_SOURCE_DROP, CONNECTOR_TARGET_DROP, CREATE_CONNECTOR_DROP_TYPE])
      )(withDragNode(nodeDragSourceSpec('node', true, true))(withSelection()(CustomNode)));
    case 'data-edge':
      return DataEdge;
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return CustomNode;
        case ModelKind.edge:
          return DefaultEdge;
        default:
          return undefined;
      }
  }
};

const NODE_DIAMETER = 75;

const NODES: NodeModel[] = [
  {
    id: 'node-0',
    type: 'node',
    label: 'Node 0',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.ellipse,
    x: 350,
    y: 50
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    x: 150,
    y: 150
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.octagon,
    x: 150,
    y: 350
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rhombus,
    x: 350,
    y: 450
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    x: 550,
    y: 350
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    labelPosition: LabelPosition.right,
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rect,
    x: 550,
    y: 150
  },
  {
    id: 'Group-1',
    children: ['node-0', 'node-1', 'node-2'],
    type: 'group',
    group: true,
    label: 'Group-1',
    style: {
      padding: 40
    }
  }
];

const EDGES: EdgeModel[] = [
  {
    id: `edge-1`,
    type: 'edge',
    source: 'node-4',
    target: 'node-5'
  },
  {
    id: `edge-2`,
    type: 'data-edge',
    source: 'node-0',
    target: 'node-1',
    edgeStyle: EdgeStyle.dashedMd,
    animationSpeed: EdgeAnimationSpeed.medium
  }
];

export const TopologyEdgeDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout: 'Cola'
      }
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(customLayoutFactory);
    newController.registerComponentFactory(customComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface state={{ selectedIds }} />
    </VisualizationProvider>
  );
};
