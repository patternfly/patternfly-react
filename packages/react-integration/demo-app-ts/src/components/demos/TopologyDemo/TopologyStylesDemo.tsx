import * as React from 'react';
import {
  EdgeStyle,
  Model,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';

const NODE_DIAMETER = 75;

const NODES = [
  {
    id: 'node-0',
    type: 'node',
    label: 'Node 0',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.ellipse,
    status: NodeStatus.success,
    showDecorators: true,
    showStatusDecorator: true,
    showStatusDecoratorTooltip: 'Tooltip Text'
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.rect,
    status: NodeStatus.info
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    status: NodeStatus.warning,
    statusPerRow: 1,
    showStatusDecorator: true,
    showDecorators: true,
    showStatusDecoratorTooltip: 'Tooltip Text',
    shape: NodeShape.rhombus
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.trapezoid
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    status: NodeStatus.danger,
    showDecorators: true,
    showStatusDecorator: true,
    showStatusDecoratorTooltip: 'Tooltip Text',
    shape: NodeShape.hexagon
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.octagon,
    status: NodeStatus.info
  },
  {
    id: 'Group-1',
    children: ['node-0', 'node-1', 'node-2', 'node-3'],
    type: 'group-hull',
    group: true,
    label: 'Group-1',
    style: {
      padding: 15
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

export const TopologyStylesDemo = React.memo(() => {
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
    newController.registerLayoutFactory(defaultLayoutFactory);
    newController.registerComponentFactory(defaultComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface state={{ selectedIds }} />
    </VisualizationProvider>
  );
});
