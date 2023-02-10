import * as React from 'react';

import {
  AnchorEnd,
  //   ColaLayout,
  ComponentFactory,
  DefaultEdge,
  //   DefaultNode,
  //   Graph,
  GraphComponent,
  graphDropTargetSpec,
  Layer,
  //   Layout,
  //   LayoutFactory,
  Model,
  ModelKind,
  Node,
  //   nodeDragSourceSpec,
  SELECTION_EVENT,
  useCombineRefs,
  //   useComponentFactory,
  useSvgAnchor,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  WithDndDragProps,
  withDndDrop,
  WithDndDropProps,
  withDragNode,
  WithDragNodeProps,
  WithSelectionProps
} from '@patternfly/react-topology';

interface CustomNodeProps {
  element: Node;
}

// const BadgeColors = [
//   {
//     name: 'A',
//     badgeColor: '#ace12e',
//     badgeTextColor: '#0f280d',
//     badgeBorderColor: '#486b00'
//   },
//   {
//     name: 'B',
//     badgeColor: '#F2F0FC',
//     badgeTextColor: '#5752d1',
//     badgeBorderColor: '#CBC1FF'
//   }
// ];

type NodeRectProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps;

const NodeRect: React.FunctionComponent<NodeRectProps> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  hover,
  canDrop,
  dndDropRef
}) => {
  const anchorRef = useSvgAnchor();
  const refs = useCombineRefs<SVGRectElement>(dragNodeRef, dndDragRef, dndDropRef, anchorRef);
  const { width, height } = element.getDimensions();

  let fill = 'lightgrey';
  if (canDrop && hover) {
    fill = 'lightgreen';
  } else if (canDrop && droppable) {
    fill = 'lightblue';
  } else if (selected) {
    fill = 'blue';
  }

  return (
    <rect
      ref={refs}
      onClick={onSelect}
      width={Math.max(0, width) - 2}
      height={Math.max(0, height) - 2}
      x={0}
      y={0}
      fill={fill}
      strokeWidth={1}
      stroke="#333333"
    />
  );
};

const CustomNode: React.FC<CustomNodeProps &
  WithSelectionProps &
  WithDragNodeProps &
  WithDndDropProps &
  WithDndDragProps> = ({ element, dndDragRef, dndDropRef, selected, onSelect, ...rest }) => {
  //   const data = element.getData();
  //   const Icon = Icon1;
  //   const badgeColors = BadgeColors.find(badgeColor => badgeColor.name === data.badge);
  const nodeRef = useSvgAnchor();
  const targetRef = useSvgAnchor(AnchorEnd.target, 'edge-point');
  const { width, height } = element.getDimensions();

  return (
    <>
      <>
        {/* <DefaultNode element={element} {...rest}> */}
        <Layer id="bottom">
          <NodeRect
            element={element}
            selected={selected}
            onSelect={onSelect}
            dndDragRef={dndDragRef}
            dndDropRef={dndDropRef}
            // attachments={
            //   <>
            //     <circle ref={nodeRef} fill="lightgreen" r="5" cx={width * 0.25} cy={height * 0.25} />
            //     <circle ref={targetRef} fill="red" r="5" cx={width * 0.75} cy={height * 0.75} />
            //   </>
            // }
            {...rest}
          />
          <circle ref={nodeRef} fill="lightgreen" r="5" cx={width * 0.25} cy={height * 0.25} />
          <circle ref={targetRef} fill="red" r="5" cx={width * 0.75} cy={height * 0.75} />
        </Layer>
        {/* </DefaultNode> */}
      </>
    </>
  );
};

// const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
//   switch (type) {
//     case 'Cola':
//       return new ColaLayout(graph);
//     default:
//       return new ColaLayout(graph);
//   }
// };

// const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string) => {
//   switch (type) {
//     case 'group':
//       return DefaultGroup;
//     default:
//       switch (kind) {
//         case ModelKind.graph:
//           return GraphComponent;
//         case ModelKind.node:
//           return withDragNode()(CustomNode);
//         case ModelKind.edge:
//           return DefaultEdge;
//         default:
//           return undefined;
//       }
//   }
// };

const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string): any => {
  switch (type) {
    case 'node':
      return withDragNode()(CustomNode);
    default:
      switch (kind) {
        case ModelKind.graph:
          return withDndDrop(graphDropTargetSpec())(GraphComponent as any);
        case ModelKind.node:
          return CustomNode;
        case ModelKind.edge:
          return DefaultEdge;
        default:
          return undefined;
      }
  }
};

// const NODE_DIAMETER = 75;

const NODES = [
  {
    id: 'n1',
    type: 'node',
    x: 150,
    y: 10,
    width: 100,
    height: 100
  },
  {
    id: 'n2',
    type: 'node',
    x: 25,
    y: 250,
    width: 50,
    height: 50
  },
  {
    id: 'n3',
    type: 'node',
    x: 225,
    y: 250,
    width: 50,
    height: 50
  }
];

const EDGES = [
  {
    id: 'e1',
    type: 'edge-point',
    source: 'n1',
    target: 'n3'
  },
  {
    id: 'e2',
    type: 'edge-point',
    source: 'n2',
    target: 'n1'
  }
];

// const NODES: NodeModel[] = [
//   {
//     id: 'node-0',
//     type: 'node',
//     // label: 'Node 0',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     status: NodeStatus.danger,
//     data: {
//       badge: 'B',
//       isAlternate: false
//     }
//   },
//   {
//     id: 'node-1',
//     type: 'node',
//     // label: 'Node 1',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     status: NodeStatus.warning,
//     data: {
//       badge: 'B',
//       isAlternate: false
//     }
//   },
//   {
//     id: 'node-2',
//     type: 'node',
//     // label: 'Node 2',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     status: NodeStatus.success,
//     data: {
//       badge: 'A',
//       isAlternate: true
//     }
//   },
//   {
//     id: 'node-3',
//     type: 'node',
//     // label: 'Node 3',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     status: NodeStatus.info,
//     data: {
//       badge: 'A',
//       isAlternate: false
//     }
//   },
//   {
//     id: 'node-4',
//     type: 'node',
//     // label: 'Node 4',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     status: NodeStatus.default,
//     data: {
//       badge: 'C',
//       isAlternate: false
//     }
//   },
//   {
//     id: 'node-5',
//     type: 'node',
//     // label: 'Node 5',
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.ellipse,
//     data: {
//       badge: 'C',
//       isAlternate: true
//     }
//   },
//   {
//     id: 'Group-1',
//     children: ['node-0', 'node-1', 'node-2'],
//     type: 'group',
//     group: true,
//     label: 'Group-1',
//     style: {
//       padding: 40
//     }
//   }
// ];

// const EDGES = [
//   {
//     id: 'edge-node-4-node-5',
//     type: 'edge-point',
//     source: 'node-4',
//     target: 'node-5',
//     edgeStyle: EdgeStyle.default
//   },
//   {
//     id: 'edge-node-0-node-2',
//     type: 'edge-point',
//     source: 'node-0',
//     target: 'node-2',
//     edgeStyle: EdgeStyle.default
//   }
// ];

export const TopologyCustomNodeDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph'
      }
    };

    const newController = new Visualization();
    // newController.registerLayoutFactory(customLayoutFactory);
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
