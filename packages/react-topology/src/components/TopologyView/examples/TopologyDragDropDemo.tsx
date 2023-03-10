/* eslint-disable no-console */
import * as React from 'react';

// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1 } from '@patternfly/react-icons';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { FolderOpenIcon as Icon2 } from '@patternfly/react-icons';

import {
  ColaLayout,
  ComponentFactory,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  DragObjectWithType,
  Edge,
  EdgeStyle,
  Graph,
  GraphComponent,
  graphDropTargetSpec,
  groupDropTargetSpec,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  NodeModel,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
  WithDndDropProps,
  WithDragNodeProps,
  withPanZoom,
  withSelection,
  WithSelectionProps,
  withTargetDrag
} from '@patternfly/react-topology';

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

const CustomNode: React.FC<CustomNodeProps & WithSelectionProps & WithDragNodeProps & WithDndDropProps> = ({
  element,
  selected,
  onSelect,
  ...rest
}) => {
  const data = element.getData();
  const Icon = data.icon;
  const badgeColors = BadgeColors.find(badgeColor => badgeColor.name === data.badge);
  return (
    <DefaultNode
      element={element}
      showStatusDecorator
      badge={data.badge}
      badgeColor={badgeColors?.badgeColor}
      badgeTextColor={badgeColors?.badgeTextColor}
      badgeBorderColor={badgeColors?.badgeBorderColor}
      onSelect={onSelect}
      selected={selected}
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

const CONNECTOR_TARGET_DROP = 'connector-target-drop';

const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string): any => {
  switch (type) {
    case 'group':
      return withDndDrop(groupDropTargetSpec)(withDragNode(nodeDragSourceSpec('group'))(withSelection()(DefaultGroup)));
    default:
      switch (kind) {
        case ModelKind.graph:
          return withDndDrop(graphDropTargetSpec())(withPanZoom()(GraphComponent));
        case ModelKind.node:
          return withDndDrop(nodeDropTargetSpec([CONNECTOR_TARGET_DROP]))(
            withDragNode(nodeDragSourceSpec('node', true, true))(CustomNode)
          );
        case ModelKind.edge:
          return withTargetDrag<
            DragObjectWithType,
            Node,
            { dragging?: boolean },
            {
              element: Edge;
            }
          >({
            item: { type: CONNECTOR_TARGET_DROP },
            begin: (monitor, props) => {
              props.element.raise();
              return props.element;
            },
            drag: (event, monitor, props) => {
              props.element.setEndPoint(event.x, event.y);
            },
            end: (dropResult, monitor, props) => {
              if (monitor.didDrop() && dropResult && props) {
                props.element.setTarget(dropResult);
              }
              props.element.setEndPoint();
            },
            collect: monitor => ({
              dragging: monitor.isDragging()
            })
          })(DefaultEdge);
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
      icon: Icon1
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
      icon: Icon1
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
      icon: Icon1
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
      icon: Icon1
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
      icon: Icon2
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
      icon: Icon1
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

export const TopologyDragDropDemo: React.FC = () => {
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
