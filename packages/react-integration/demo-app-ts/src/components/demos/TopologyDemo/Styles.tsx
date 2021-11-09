import * as React from 'react';
import { Model, NodeModel, NodeShape, NodeStatus, useComponentFactory, useModel } from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import withTopologySetup from './utils/withTopologySetup';
import stylesComponentFactory from './components/stylesComponentFactory';

const createNode = (options: {
  id: string;
  type?: string;
  row: number;
  column: number;
  width?: number;
  height?: number;
  shape?: NodeShape;
  status?: NodeStatus;
  selected?: boolean;
  hover?: boolean;
}): NodeModel => ({
  id: options.id,
  type: options.type || 'node',
  x: 20 + (options.column - 1) * 100,
  y: 20 + (options.row - 1) * 100,
  width: options.width || 75,
  height: options.height || 75,
  shape: options.shape || NodeShape.circle,
  status: options.status || NodeStatus.default,
  data: {
    status: options.status || 'default',
    selected: options.selected === undefined ? false : options.selected,
    hover: options.hover === undefined ? false : options.hover
  }
});

const createStatusNodes = (shape: NodeShape, column: number, selected = false, hover = false): NodeModel[] =>
  Object.values(NodeStatus).map((status, index) =>
    createNode({ id: `${shape}-${status}`, shape, status, row: index + 1, column, selected, hover })
  );

export const NodeStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          ...createStatusNodes(NodeShape.circle, 1),
          ...createStatusNodes(NodeShape.triangle, 2),
          ...createStatusNodes(NodeShape.rect, 3),
          ...createStatusNodes(NodeShape.hexagon, 4),
          ...createStatusNodes(NodeShape.octagon, 5)
        ]
      }),
      []
    )
  );
  return null;
});

export const NodeHoverStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          ...createStatusNodes(NodeShape.circle, 1, false, true),
          ...createStatusNodes(NodeShape.triangle, 2, false, true),
          ...createStatusNodes(NodeShape.rect, 3, false, true),
          ...createStatusNodes(NodeShape.hexagon, 4, false, true),
          ...createStatusNodes(NodeShape.octagon, 5, false, true)
        ]
      }),
      []
    )
  );
  return null;
});

export const NodeSelectedStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          ...createStatusNodes(NodeShape.circle, 1, true),
          ...createStatusNodes(NodeShape.triangle, 2, true),
          ...createStatusNodes(NodeShape.rect, 3, true),
          ...createStatusNodes(NodeShape.hexagon, 4, true),
          ...createStatusNodes(NodeShape.octagon, 5, true)
        ]
      }),
      []
    )
  );
  return null;
});
