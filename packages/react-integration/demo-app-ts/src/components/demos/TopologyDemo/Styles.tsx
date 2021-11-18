import * as React from 'react';
import {
  Model,
  NodeModel,
  NodeShape,
  NodeStatus,
  useComponentFactory,
  useModel,
  LabelPosition
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import withTopologySetup from './utils/withTopologySetup';
import stylesComponentFactory from './components/stylesComponentFactory';
import { logos } from './utils/logos';

const ROW_HEIGHT = 100;
const BOTTOM_LABEL_ROW_HEIGHT = 125;
const COLUMN_WIDTH = 100;
const RIGHT_LABEL_COLUMN_WIDTH = 200;

const createNode = (options: {
  id: string;
  type?: string;
  label?: string;
  labelPosition?: LabelPosition;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  row: number;
  column: number;
  width?: number;
  height?: number;
  shape?: NodeShape;
  status?: NodeStatus;
  selected?: boolean;
  hover?: boolean;
  x?: number;
  y?: number;
  showContextMenu?: boolean;
  labelIconClass?: string;
  marginX?: number;
  truncateLength?: number;
}): NodeModel => ({
  id: options.id,
  type: options.type || 'node',
  label: options.label,
  x:
    (options.marginX || 60) +
    (options.x ??
      (options.column - 1) *
        (options.label && options.labelPosition === LabelPosition.right ? RIGHT_LABEL_COLUMN_WIDTH : COLUMN_WIDTH)),
  y:
    20 +
    (options.y ??
      (options.row - 1) *
        (options.label && options.labelPosition === LabelPosition.right ? ROW_HEIGHT : BOTTOM_LABEL_ROW_HEIGHT)),
  width: options.width || 75,
  height: options.height || 75,
  shape: options.shape || NodeShape.circle,
  status: options.status || NodeStatus.default,
  data: {
    status: options.status || 'default',
    selected: options.selected === undefined ? false : options.selected,
    hover: options.hover === undefined ? false : options.hover,
    labelPosition: options.labelPosition,
    badge: options.badge,
    badgeColor: options.badgeColor,
    badgeTextColor: options.badgeTextColor,
    badgeBorderColor: options.badgeBorderColor,
    badgeClassName: options.badgeClassName,
    showContextMenu: options.showContextMenu ?? false,
    labelIconClass: options.labelIconClass,
    truncateLength: options.truncateLength
  }
});

const STATUS_VALUES = Object.values(NodeStatus);
const STATUS_COUNT = STATUS_VALUES.length;

const createStatusNodes = (
  shape: NodeShape,
  column: number,
  statusPerRow = 1,
  label: string = '',
  selected = false,
  hover = false,
  labelPosition?: LabelPosition
): NodeModel[] =>
  STATUS_VALUES.map((status, index) =>
    createNode({
      id: `${shape}-${status}`,
      shape,
      label,
      labelPosition,
      status,
      row: Math.ceil((index + 1) / statusPerRow),
      column: column + ((index * STATUS_COUNT) % statusPerRow) * STATUS_COUNT,
      selected,
      hover
    })
  );

const createStatusNodeShapes = (
  statusPerRow = 1,
  label: string = '',
  selected = false,
  hover = false,
  labelPosition: LabelPosition = LabelPosition.bottom
): NodeModel[] =>
  Object.values(NodeShape).reduce((nodes: NodeModel[], shape: string | NodeShape, index) => {
    nodes.push(
      ...createStatusNodes(shape as NodeShape, index + 1, statusPerRow, label, selected, hover, labelPosition)
    );
    return nodes;
  }, []);

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
        nodes: createStatusNodeShapes()
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
        nodes: createStatusNodeShapes(1, '', false, true)
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
        nodes: createStatusNodeShapes(1, '', true)
      }),
      []
    )
  );
  return null;
});

export const NodeLabelStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: createStatusNodeShapes(2, 'Node Title')
      }),
      []
    )
  );
  return null;
});

export const NodeLabelHoverStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: createStatusNodeShapes(2, 'Node Title', false, true)
      }),
      []
    )
  );
  return null;
});

export const NodeLabelSelectedStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: createStatusNodeShapes(2, 'Node Title', true)
      }),
      []
    )
  );
  return null;
});

export const NodeHorizontalLabelStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: createStatusNodeShapes(1, 'Node Title', false, false, LabelPosition.right)
      }),
      []
    )
  );
  return null;
});

const createBadgeNodes = (options: {
  row: number;
  badge?: string;
  hover?: boolean;
  selected?: boolean;
  showContextMenu?: boolean;
  showIconClass?: boolean;
  marginX?: number;
}): NodeModel[] => {
  const nodes: NodeModel[] = [];
  nodes.push(
    createNode({
      id: `badged-${options.row}-1`,
      label: 'Label Bottom',
      column: 1,
      labelIconClass: options.showIconClass ? logos.get('icon-java') : undefined,
      truncateLength: 13,
      ...options
    })
  );
  nodes.push(
    createNode({
      id: `badged-${options.row}-2`,
      label: 'Label Right',
      column: 2,
      shape: NodeShape.rect,
      labelPosition: LabelPosition.right,
      x: COLUMN_WIDTH + 45,
      y: (options.row - 1) * BOTTOM_LABEL_ROW_HEIGHT,
      labelIconClass: options.showIconClass ? logos.get('icon-mongodb') : undefined,
      truncateLength: 13,
      ...options
    })
  );
  nodes.push(
    createNode({
      id: `badged-${options.row}-3`,
      label: 'Long Truncated Node Title',
      column: 3,
      shape: NodeShape.triangle,
      labelPosition: LabelPosition.bottom,
      x: COLUMN_WIDTH + RIGHT_LABEL_COLUMN_WIDTH + 175,
      y: (options.row - 1) * BOTTOM_LABEL_ROW_HEIGHT,
      badgeColor: '#ace12e',
      badgeTextColor: '#0f280d',
      badgeBorderColor: '#486b00',
      labelIconClass: options.showIconClass ? logos.get('icon-nodejs') : undefined,
      truncateLength: 13,
      ...options
    })
  );

  nodes.push(
    createNode({
      id: `badged-${options.row}-4`,
      label: 'Long Truncated Node Title',
      column: 4,
      shape: NodeShape.hexagon,
      labelPosition: LabelPosition.right,
      x: COLUMN_WIDTH + RIGHT_LABEL_COLUMN_WIDTH + COLUMN_WIDTH + 205,
      y: (options.row - 1) * BOTTOM_LABEL_ROW_HEIGHT,
      badgeColor: '#ace12e',
      badgeTextColor: '#0f280d',
      badgeBorderColor: '#486b00',
      labelIconClass: options.showIconClass ? logos.get('icon-jenkins') : undefined,
      truncateLength: 13,
      ...options
    })
  );

  return nodes;
};

export const NodeBadgedLabelStyles = withTopologySetup(() => {
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
          ...createBadgeNodes({ row: 1, badge: 'C' }),
          ...createBadgeNodes({ row: 2, badge: 'CS', hover: true }),
          ...createBadgeNodes({ row: 3, badge: 'CSN', selected: true })
        ]
      }),
      []
    )
  );
  return null;
});

export const NodeContextMenuLabelStyles = withTopologySetup(() => {
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
          ...createBadgeNodes({ row: 1, badge: 'C', showContextMenu: true }),
          ...createBadgeNodes({ row: 2, badge: 'CS', hover: true, showContextMenu: true }),
          ...createBadgeNodes({ row: 3, badge: 'CSN', selected: true, showContextMenu: true })
        ]
      }),
      []
    )
  );
  return null;
});

export const NodeIconLabelStyles = withTopologySetup(() => {
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
          ...createBadgeNodes({
            row: 1,
            badge: 'C',
            hover: false,
            showContextMenu: true,
            showIconClass: true,
            marginX: 100
          }),
          ...createBadgeNodes({
            row: 2,
            badge: 'CS',
            hover: true,
            showContextMenu: true,
            showIconClass: true,
            marginX: 100
          }),
          ...createBadgeNodes({
            row: 3,
            badge: 'CSN',
            selected: true,
            showContextMenu: true,
            showIconClass: true,
            marginX: 100
          })
        ]
      }),
      []
    )
  );
  return null;
});
