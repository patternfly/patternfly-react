import * as React from 'react';
import {
  AbstractAnchor,
  AnchorEnd,
  ColaLayout,
  ComponentFactory,
  DefaultEdge,
  DefaultNode,
  Graph,
  GraphComponent,
  Layer,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  NodeModel,
  Point,
  useAnchor,
  useSvgAnchor,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDragNode,
  WithDragNodeProps
} from '@patternfly/react-topology';

class RightAnchor extends AbstractAnchor {
  getLocation(): Point {
    return this.getReferencePoint();
  }

  getReferencePoint(): Point {
    const bounds = this.owner.getBounds();
    return new Point(bounds.right(), bounds.y + bounds.height / 2);
  }
}

type CustomNodeProps = {
  element: Node;
} & WithDragNodeProps;

const CustomNode: React.FC<CustomNodeProps> = ({ element, dragNodeRef }) => {
  const targetRef = useSvgAnchor(AnchorEnd.target, 'edge-point'); // overrides anchor for end points
  useAnchor(RightAnchor, AnchorEnd.source, 'edge-point'); // overrides anchor for end points
  const { width, height } = element.getDimensions();

  return (
    <Layer id="bottom">
      <DefaultNode element={element} dragNodeRef={dragNodeRef}>
        <circle ref={targetRef} fill="red" r="5" cx={width * 0.75} cy={height * 0.75} />
      </DefaultNode>
    </Layer>
  );
};

const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined =>
  new ColaLayout(graph, { layoutOnDrag: false });

const customComponentFactory: ComponentFactory = (kind: ModelKind) => {
  switch (kind) {
    case ModelKind.graph:
      return GraphComponent;
    case ModelKind.node:
      return withDragNode()(CustomNode);
    case ModelKind.edge:
      return DefaultEdge;
    default:
      return undefined;
  }
};

const NODE_DIAMETER = 75;

const NODES: NodeModel[] = [
  {
    id: 'node-0',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 250,
    y: 120
  },
  {
    id: 'node-1',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 350,
    y: 120
  },
  {
    id: 'node-2',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 450,
    y: 120
  },
  {
    id: 'node-3',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 250,
    y: 320
  },
  {
    id: 'node-4',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 350,
    y: 320
  },
  {
    id: 'node-5',
    type: 'node',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    x: 450,
    y: 320
  }
];

const EDGES = [
  {
    id: 'edge-node-0-node-1',
    type: 'edge-point',
    source: 'node-0',
    target: 'node-1'
  },
  {
    id: 'edge-node-1-node-2',
    type: 'edge-point',
    source: 'node-1',
    target: 'node-2'
  },
  {
    id: 'edge-node-3-node-4',
    type: 'edge-point',
    source: 'node-3',
    target: 'node-4'
  },
  {
    id: 'edge-node-4-node-5',
    type: 'edge-point',
    source: 'node-4',
    target: 'node-5'
  }
];

export const TopologyCustomNodeDemo: React.FC = () => {
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
