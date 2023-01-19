import * as React from 'react';

// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1 } from '@patternfly/react-icons';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { FolderOpenIcon as Icon2 } from '@patternfly/react-icons';

import {
  ColaLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  ModelKind,
  NodeModel,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withPanZoom
} from '@patternfly/react-topology';
import { ComponentFactory, Graph, Layout, LayoutFactory, Model, Node, NodeStatus } from '@patternfly/react-topology';

interface CustomNodeProps {
  element: Node;
}

const BadgeColors = [
  {
    name: 'A',
    badgeColor: '#ace12e',
    badgeTextColor: '#0f280d',
    badgeBorderColor: '#486b00'
  },
  {
    name: 'B',
    badgeColor: '#F2F0FC',
    badgeTextColor: '#5752d1',
    badgeBorderColor: '#CBC1FF'
  }
];

const CustomNode: React.FC<CustomNodeProps> = ({ element }) => {
  const data = element.getData();
  const Icon = data.alternate ? Icon2 : Icon1;
  const badgeColors = BadgeColors.find(badgeColor => badgeColor.name === data.badge);

  return (
    <DefaultNode
      element={element}
      showStatusDecorator
      badge={data.badge}
      badgeColor={badgeColors?.badgeColor}
      badgeTextColor={badgeColors?.badgeTextColor}
      badgeBorderColor={badgeColors?.badgeBorderColor}
    >
      <g transform={`translate(25, 25)`}>
        <Icon style={{ color: '#393F44' }} width={25} height={25} />
      </g>
    </DefaultNode>
  );
};

const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'Cola':
      return new ColaLayout(graph);
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string) => {
  switch (type) {
    case 'group':
      return DefaultGroup;
    default:
      switch (kind) {
        case ModelKind.graph:
          return withPanZoom()(GraphComponent);
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
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.ellipse,
    status: NodeStatus.danger,
    data: {
      badge: 'B',
      isAlternate: false
    }
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    status: NodeStatus.warning,
    data: {
      badge: 'B',
      isAlternate: false
    }
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.octagon,
    status: NodeStatus.success,
    data: {
      badge: 'A',
      isAlternate: true
    }
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rhombus,
    status: NodeStatus.info,
    data: {
      badge: 'A',
      isAlternate: false
    }
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    status: NodeStatus.default,
    data: {
      badge: 'C',
      isAlternate: false
    }
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rect,
    data: {
      badge: 'C',
      isAlternate: true
    }
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

const EDGES = [
  {
    id: 'edge-node-4-node-5',
    type: 'edge',
    source: 'node-4',
    target: 'node-5',
    edgeStyle: EdgeStyle.default
  },
  {
    id: 'edge-node-0-node-2',
    type: 'edge',
    source: 'node-0',
    target: 'node-2',
    edgeStyle: EdgeStyle.default
  }
];

export const TopologyPanZoomDemo: React.FC = () => {
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
