import * as React from 'react';
import {
  Visualization,
  VisualizationSurface,
  Model,
  ModelKind,
  Edge,
  Node,
  AnchorEnd,
  withTargetDrag,
  withSourceDrag,
  DragEvent,
  DragObjectWithType,
  withDndDrop,
  withPanZoom,
  GraphComponent,
  withCreateConnector,
  CREATE_CONNECTOR_DROP_TYPE,
  ConnectorChoice,
  useSvgAnchor,
  withDragNode,
  WithDragNodeProps,
  Layer,
  Graph,
  isGraph,
} from '../src';
import defaultComponentFactory from './components/defaultComponentFactory';
import DefaultEdge from './components/DefaultEdge';
import DefaultNode from './components/DefaultNode';
import NodeRect from './components/NodeRect';

export default {
  title: 'Connector',
};

type NodeProps = {
  element: Node;
};

type EdgeProps = {
  element: Edge;
};

export const reconnect = () => {
  const vis = new Visualization();
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory((kind) => {
    if (kind === ModelKind.graph) {
      return withPanZoom()(GraphComponent);
    }
    if (kind === ModelKind.node) {
      return withDndDrop<
        Edge,
        any,
        { droppable?: boolean; hover?: boolean; canDrop?: boolean },
        NodeProps
      >({
        accept: 'test',
        canDrop: (item, monitor, props) => {
          return (
            !props || (item.getSource() !== props.element && item.getTarget() !== props.element)
          );
        },
        collect: (monitor) => ({
          droppable: monitor.isDragging(),
          hover: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })(DefaultNode);
    }
    if (kind === ModelKind.edge) {
      return withSourceDrag<DragObjectWithType, Node, any, EdgeProps>({
        item: { type: 'test' },
        begin: (monitor, props) => {
          props.element.raise();
          return props.element;
        },
        drag: (event, monitor, props) => {
          props.element.setStartPoint(event.x, event.y);
        },
        end: (dropResult, monitor, props) => {
          if (monitor.didDrop() && dropResult && props) {
            props.element.setSource(dropResult);
          }
          props.element.setStartPoint();
        },
      })(
        withTargetDrag<DragObjectWithType, Node, { dragging?: boolean }, EdgeProps>({
          item: { type: 'test' },
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
          collect: (monitor) => ({
            dragging: monitor.isDragging(),
          }),
        })(DefaultEdge),
      );
    }
    return undefined;
  });
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 20,
        y: 150,
        width: 20,
        height: 20,
      },
      {
        id: 'n2',
        type: 'node',
        x: 200,
        y: 50,
        width: 100,
        height: 30,
      },
      {
        id: 'n3',
        type: 'node',
        x: 200,
        y: 300,
        width: 30,
        height: 30,
      },
    ],
    edges: [
      {
        id: 'e1',
        type: 'edge',
        source: 'n1',
        target: 'n2',
        bendpoints: [
          [50, 30],
          [110, 10],
        ],
      },
      {
        id: 'e2',
        type: 'edge',
        source: 'n1',
        target: 'n3',
      },
    ],
  };
  vis.fromModel(model);
  return <VisualizationSurface visualization={vis} />;
};

type ColorChoice = ConnectorChoice & {
  color: string;
};

export const createConnector = () => {
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 20,
        y: 150,
        width: 104,
        height: 104,
      },
      {
        id: 'n2',
        type: 'node',
        x: 200,
        y: 50,
        width: 100,
        height: 30,
      },
      {
        id: 'n3',
        type: 'node',
        x: 200,
        y: 300,
        width: 30,
        height: 30,
      },
    ],
  };

  const vis = new Visualization();
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory((kind) => {
    if (kind === ModelKind.graph) {
      return withDndDrop({
        accept: CREATE_CONNECTOR_DROP_TYPE,
        dropHint: 'create',
      })(withPanZoom()(GraphComponent));
    }
    if (kind === ModelKind.node) {
      return withCreateConnector(
        (
          source: Node,
          target: Node | Graph,
          event: DragEvent,
          choice: ColorChoice | undefined,
        ): any[] | null => {
          if (!choice) {
            return [
              { label: 'Create Annotation', color: 'red' },
              { label: 'Create Binding', color: 'green' },
            ];
          }

          let targetId;
          if (isGraph(target)) {
            if (!model.nodes) {
              model.nodes = [];
            }
            targetId = `n${vis.getGraph().getNodes().length + 1}`;
            model.nodes.push({
              id: targetId,
              type: 'node',
              x: event.x - 15,
              y: event.y - 15,
              height: 30,
              width: 30,
            });
          } else {
            targetId = target.getId();
          }
          const id = `e${vis.getGraph().getEdges().length + 1}`;
          if (!model.edges) {
            model.edges = [];
          }
          model.edges.push({
            id,
            type: 'edge',
            source: source.getId(),
            target: targetId,
            data: {
              color: choice.color,
            },
          });
          vis.fromModel(model);
          return null;
        },
      )(
        withDndDrop<
          Node,
          any,
          { droppable?: boolean; hover?: boolean; canDrop?: boolean },
          NodeProps
        >({
          accept: CREATE_CONNECTOR_DROP_TYPE,
          canDrop: (item, monitor, props) => {
            return !props || item !== props.element;
          },
          collect: (monitor) => ({
            droppable: monitor.isDragging(),
            hover: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
        })(DefaultNode),
      );
    }
    return undefined;
  });
  vis.fromModel(model);
  return <VisualizationSurface visualization={vis} />;
};

export const anchors = () => {
  const NodeWithPointAnchor: React.FC<{ element: Node } & WithDragNodeProps> = (props) => {
    const nodeRef = useSvgAnchor();
    const targetRef = useSvgAnchor(AnchorEnd.target, 'edge-point');
    const { width, height } = props.element.getDimensions();
    return (
      <>
        <Layer id="bottom">
          <NodeRect {...(props as any)} />
        </Layer>
        <circle ref={nodeRef} fill="lightgreen" r="5" cx={width * 0.25} cy={height * 0.25} />
        <circle ref={targetRef} fill="red" r="5" cx={width * 0.75} cy={height * 0.75} />
      </>
    );
  };
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 150,
        y: 10,
        width: 100,
        height: 100,
      },
      {
        id: 'n2',
        type: 'node',
        x: 25,
        y: 250,
        width: 50,
        height: 50,
      },
      {
        id: 'n3',
        type: 'node',
        x: 225,
        y: 250,
        width: 50,
        height: 50,
      },
    ],
    edges: [
      {
        id: 'e1',
        type: 'edge-point',
        source: 'n1',
        target: 'n3',
      },
      {
        id: 'e2',
        type: 'edge-point',
        source: 'n2',
        target: 'n1',
      },
    ],
  };

  const vis = new Visualization();
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory((kind) => {
    if (kind === ModelKind.node) {
      return withDragNode()(NodeWithPointAnchor);
    }
    return undefined;
  });
  vis.fromModel(model);
  return <VisualizationSurface visualization={vis} />;
};
