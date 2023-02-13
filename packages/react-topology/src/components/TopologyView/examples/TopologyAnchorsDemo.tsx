import * as React from 'react';

import {
  AnchorEnd,
  ComponentFactory,
  DefaultEdge,
  GraphComponent,
  graphDropTargetSpec,
  Layer,
  Model,
  ModelKind,
  Node,
  SELECTION_EVENT,
  useCombineRefs,
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
  const nodeRef = useSvgAnchor();
  const targetRef = useSvgAnchor(AnchorEnd.target, 'edge-point');
  const { width, height } = element.getDimensions();

  return (
    <>
      <>
        <Layer id="bottom">
          <NodeRect
            element={element}
            selected={selected}
            onSelect={onSelect}
            dndDragRef={dndDragRef}
            dndDropRef={dndDropRef}
            {...rest}
          />
          <circle ref={nodeRef} fill="lightgreen" r="5" cx={width * 0.25} cy={height * 0.25} />
          <circle ref={targetRef} fill="red" r="5" cx={width * 0.75} cy={height * 0.75} />
        </Layer>
      </>
    </>
  );
};

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
