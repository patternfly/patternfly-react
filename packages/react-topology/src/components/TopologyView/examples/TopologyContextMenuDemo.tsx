import * as React from 'react';

// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1 } from '@patternfly/react-icons';

import {
  ColaLayout,
  ComponentFactory,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  Graph,
  GraphComponent,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  NodeModel,
  NodeShape,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withContextMenu,
  WithContextMenuProps,
  ContextMenuSeparator,
  ContextMenuItem
} from '@patternfly/react-topology';

interface CustomNodeProps {
  element: Node;
}

const CustomNode: React.FC<CustomNodeProps & WithContextMenuProps> = ({ element, onContextMenu, contextMenuOpen }) => {
  const Icon = Icon1;

  return (
    <DefaultNode element={element} onContextMenu={onContextMenu} contextMenuOpen={contextMenuOpen}>
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
  const contextMenuItem = (label: string, i: number): React.ReactElement => {
    if (label === '-') {
      return <ContextMenuSeparator key={`separator:${i.toString()}`} />;
    }
    return (
      // eslint-disable-next-line no-alert
      <ContextMenuItem key={label} onClick={() => alert(`Selected: ${label}`)}>
        {label}
      </ContextMenuItem>
    );
  };

  const createContextMenuItems = (...labels: string[]): React.ReactElement[] => labels.map(contextMenuItem);

  const contextMenu = createContextMenuItems('First', 'Second', 'Third', '-', 'Fourth');
  switch (type) {
    case 'group':
      return DefaultGroup;
    default:
      switch (kind) {
        case ModelKind.graph:
          return withContextMenu(() => contextMenu)(GraphComponent);
        case ModelKind.node:
          return withContextMenu(() => contextMenu)(CustomNode);
        case ModelKind.edge:
          return withContextMenu(() => contextMenu)(DefaultEdge);
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
    shape: NodeShape.ellipse
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.octagon
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rhombus
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rect
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

export const TopologyContextMenuDemo: React.FC = () => {
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

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface />
    </VisualizationProvider>
  );
};
