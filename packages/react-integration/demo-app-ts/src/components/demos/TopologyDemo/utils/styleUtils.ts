import * as React from 'react';
import {
  BadgeLocation,
  EdgeAnimationSpeed,
  EdgeModel,
  EdgeStyle,
  EdgeTerminalType,
  LabelPosition,
  NodeModel,
  NodeShape,
  NodeStatus
} from '@patternfly/react-topology';
import { DataTypes } from '../components/StyleNode';
import { logos } from './logos';

export const ROW_HEIGHT = 140;
export const BOTTOM_LABEL_ROW_HEIGHT = 165;
export const COLUMN_WIDTH = 100;
export const RIGHT_LABEL_COLUMN_WIDTH = 200;

export const DEFAULT_NODE_SIZE = 75;

export const NODE_STATUSES = [
  NodeStatus.danger,
  NodeStatus.success,
  NodeStatus.warning,
  NodeStatus.info,
  NodeStatus.default
];
export const NODE_SHAPES = [
  NodeShape.ellipse,
  NodeShape.rect,
  NodeShape.rhombus,
  NodeShape.trapezoid,
  NodeShape.hexagon,
  NodeShape.octagon,
  NodeShape.stadium
];
export const STATUS_VALUES = Object.values(NodeStatus);
export const STATUS_COUNT = STATUS_VALUES.length;
export const SHAPE_COUNT = Object.keys(NodeShape).length;
export const ICON_STATUS_VALUES = [NodeStatus.success, NodeStatus.warning, NodeStatus.danger];

export const EDGE_STYLES = [
  EdgeStyle.dashed,
  EdgeStyle.dashedMd,
  EdgeStyle.dotted,
  EdgeStyle.dashedLg,
  EdgeStyle.dashedXl,
  EdgeStyle.solid
];
export const EDGE_STYLE_COUNT = EDGE_STYLES.length;

export const EDGE_ANIMATION_SPEEDS = [
  EdgeAnimationSpeed.medium,
  EdgeAnimationSpeed.mediumFast,
  EdgeAnimationSpeed.mediumSlow,
  EdgeAnimationSpeed.fast,
  EdgeAnimationSpeed.none,
  EdgeAnimationSpeed.slow
];
export const EDGE_ANIMATION_SPEED_COUNT = EDGE_ANIMATION_SPEEDS.length;

export const EDGE_TERMINAL_TYPES = [
  EdgeTerminalType.directionalAlt,
  EdgeTerminalType.circle,
  EdgeTerminalType.square,
  EdgeTerminalType.cross,
  EdgeTerminalType.none,
  EdgeTerminalType.directional
];
export const EDGE_TERMINAL_TYPES_COUNT = EDGE_TERMINAL_TYPES.length;

export const AlternateTerminalTypes = [EdgeTerminalType.circle, EdgeTerminalType.square, EdgeTerminalType.cross];

export const createNode = (options: {
  id: string;
  type?: string;
  label?: string;
  secondaryLabel?: string;
  labelPosition?: LabelPosition;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
  row?: number;
  column?: number;
  width?: number;
  height?: number;
  shape?: NodeShape;
  status?: NodeStatus;
  showStatusDecorator?: boolean;
  statusDecoratorTooltip?: React.ReactNode;
  showDecorators?: boolean;
  selected?: boolean;
  hover?: boolean;
  x?: number;
  y?: number;
  showContextMenu?: boolean;
  labelIconClass?: string;
  marginX?: number;
  truncateLength?: number;
  setLocation?: boolean;
  dataType?: DataTypes;
}): NodeModel => {
  const shape = options.shape || NodeShape.ellipse;
  const width = options.width || DEFAULT_NODE_SIZE;
  let height = options.height;
  if (!height) {
    height = DEFAULT_NODE_SIZE;
    if (shape === NodeShape.trapezoid) {
      height *= 0.75;
    } else if (shape === NodeShape.stadium) {
      height *= 0.5;
    }
  }

  const nodeModel: NodeModel = {
    id: options.id,
    type: options.type || 'node',
    label: options.label,
    width,
    height,
    shape,
    status: options.status || NodeStatus.default,
    labelPosition: options.labelPosition,
    // data items are used to pass to the component to show various option, demo purposes only
    data: {
      dataType: 'Default',
      ...options
    }
  };
  if (options.setLocation !== false) {
    nodeModel.x =
      (options.marginX || 60) +
      (options.x ??
        (options.column - 1) *
          (options.label && options.labelPosition === LabelPosition.right ? RIGHT_LABEL_COLUMN_WIDTH : COLUMN_WIDTH));
    nodeModel.y =
      20 +
      (width - height) / 2 +
      (options.y ??
        (options.row - 1) *
          (!options.label || options.labelPosition === LabelPosition.right ? ROW_HEIGHT : BOTTOM_LABEL_ROW_HEIGHT));
  }

  return nodeModel;
};

export const createEdge = (
  sourceId: string,
  targetId: string,
  options: {
    style?: EdgeStyle;
    animation?: EdgeAnimationSpeed;
    terminalType?: EdgeTerminalType;
    terminalStatus?: NodeStatus;
    tag?: string;
    tagStatus?: string;
  }
): EdgeModel => ({
  id: `edge-${sourceId}-${targetId}`,
  type: 'edge',
  source: sourceId,
  target: targetId,
  edgeStyle: options.style,
  animationSpeed: options.animation,
  // data items are used to pass to the component to show various option, demo purposes only
  data: {
    endTerminalType: options.terminalType,
    endTerminalStatus: options.terminalStatus,
    tag: options.tag,
    tagStatus: options.tagStatus
  }
});

const createStatusNodes = (
  shape: NodeShape,
  column: number,
  statusPerRow = 1,
  label: string = '',
  selected?: boolean,
  hover?: boolean,
  labelPosition?: LabelPosition,
  showStatusDecorator?: boolean,
  statusDecoratorTooltip?: React.ReactNode
): NodeModel[] =>
  (showStatusDecorator ? ICON_STATUS_VALUES : STATUS_VALUES).map((status, index) =>
    createNode({
      id: `${shape}-${status}`,
      shape,
      label,
      labelPosition,
      status,
      row: Math.ceil((index + 1) / statusPerRow),
      column: column + ((index * STATUS_COUNT) % statusPerRow) * SHAPE_COUNT,
      selected,
      hover,
      showStatusDecorator,
      statusDecoratorTooltip
    })
  );

export const createStatusNodeShapes = (
  statusPerRow = 1,
  label: string = '',
  selected?: boolean,
  hover?: boolean,
  labelPosition: LabelPosition = LabelPosition.bottom,
  showStatusDecorator?: boolean,
  statusDecoratorTooltip?: React.ReactNode
): NodeModel[] =>
  NODE_SHAPES.reduce((nodes: NodeModel[], shape: string | NodeShape, index) => {
    nodes.push(
      ...createStatusNodes(
        shape as NodeShape,
        index + 1,
        statusPerRow,
        label,
        selected,
        hover,
        labelPosition,
        showStatusDecorator,
        statusDecoratorTooltip
      )
    );
    return nodes;
  }, []);

export const createBadgeNodes = (options: {
  row: number;
  badge?: string;
  badgeLocation?: BadgeLocation;
  hover?: boolean;
  selected?: boolean;
  showContextMenu?: boolean;
  showIconClass?: boolean;
  marginX?: number;
}): NodeModel[] => {
  const nodes: NodeModel[] = [];
  const columnWidth =
    COLUMN_WIDTH + (options.badge ? 65 : 0) + (options.showIconClass ? 35 : 0) + (options.showContextMenu ? 24 : 0);
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
      x: columnWidth,
      y: (options.row - 1) * ROW_HEIGHT,
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
      shape: NodeShape.rhombus,
      x: columnWidth * 2,
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
      column: 3,
      shape: NodeShape.trapezoid,
      x: columnWidth * 3,
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
      id: `badged-${options.row}-5`,
      label: 'Long Truncated Node Title',
      column: 4,
      shape: NodeShape.hexagon,
      x: columnWidth * 4,
      y: (options.row - 1) * BOTTOM_LABEL_ROW_HEIGHT,
      badgeColor: '#ace12e',
      badgeTextColor: '#0f280d',
      badgeBorderColor: '#486b00',
      labelIconClass: options.showIconClass ? logos.get('icon-jenkins') : undefined,
      truncateLength: 13,
      ...options
    })
  );

  nodes.push(
    createNode({
      id: `badged-${options.row}-6`,
      label: 'Long Truncated Node Title',
      column: 4,
      shape: NodeShape.octagon,
      x: columnWidth * 5,
      y: (options.row - 1) * BOTTOM_LABEL_ROW_HEIGHT,
      badgeColor: '#ace12e',
      badgeTextColor: '#0f280d',
      badgeBorderColor: '#486b00',
      labelIconClass: options.showIconClass ? logos.get('icon-jenkins') : undefined,
      truncateLength: 13,
      ...options
    })
  );

  nodes.push(
    createNode({
      id: `badged-${options.row}-7`,
      label: 'Label Right',
      column: 2,
      shape: NodeShape.stadium,
      x: columnWidth * 6,
      y: (options.row - 1) * ROW_HEIGHT,
      labelIconClass: options.showIconClass ? logos.get('icon-mongodb') : undefined,
      truncateLength: 13,
      ...options
    })
  );

  return nodes;
};

export const createGroupNodes = (groupId = 'group1', x = 0): NodeModel[] => {
  const nodes: NodeModel[] = [];
  nodes.push(
    createNode({
      id: `${groupId}-1`,
      shape: NodeShape.trapezoid,
      label: 'Node 1',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x: x + 200,
      y: 50
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-2`,
      shape: NodeShape.rect,
      label: 'Node 2',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x,
      y: 150
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-3`,
      shape: NodeShape.octagon,
      label: 'Node 3',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x,
      y: 350
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-4`,
      shape: NodeShape.stadium,
      label: 'Node 4',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x: x + 200,
      y: 450
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-5`,
      shape: NodeShape.hexagon,
      label: 'Node 5',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x: x + 400,
      y: 350
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-6`,
      shape: NodeShape.rhombus,
      label: 'Node 6',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x: x + 400,
      y: 150
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-7`,
      shape: NodeShape.ellipse,
      label: 'Node 7',
      labelPosition: LabelPosition.right,
      row: 0,
      column: 0,
      x: x + 200,
      y: 250
    })
  );
  return nodes;
};

export const createGroupedGroupNodes = (
  groupId: string,
  x = 0,
  y = 100,
  hover: boolean = undefined,
  selected: boolean = undefined
): NodeModel[] => {
  const nodes: NodeModel[] = [];
  nodes.push(
    createNode({
      id: `${groupId}-Grouped-1`,
      shape: NodeShape.ellipse,
      label: 'Grouped Node 1',
      labelPosition: LabelPosition.bottom,
      row: 0,
      column: 0,
      x: x + 75,
      y,
      dataType: DataTypes.Alternate
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-Grouped-2`,
      shape: NodeShape.ellipse,
      label: 'Grouped Node 2',
      labelPosition: LabelPosition.bottom,
      row: 0,
      column: 0,
      x: x + 225,
      y,
      dataType: DataTypes.Alternate
    })
  );

  const groupNode = {
    id: groupId,
    type: 'group',
    label: 'Grouped Group Title',
    children: nodes.map(n => n.id),
    group: true,
    style: { padding: 17 },
    data: {
      badge: 'Label',
      badgeColor: '#F2F0FC',
      badgeTextColor: '#5752d1',
      badgeBorderColor: '#CBC1FF',
      hover,
      selected,
      collapsedWidth: 75,
      collapsedHeight: 75
    }
  };

  return [...nodes, groupNode];
};

export const createUnGroupedGroupNodes = (groupId: string, x = 0, y = 325): NodeModel[] => {
  const nodes: NodeModel[] = [];
  nodes.push(
    createNode({
      id: `${groupId}-UnGrouped-A`,
      shape: NodeShape.ellipse,
      label: 'Grouped Node A',
      labelPosition: LabelPosition.bottom,
      row: 0,
      column: 0,
      x,
      y
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-UnGrouped-B`,
      shape: NodeShape.ellipse,
      label: 'Grouped Node B',
      labelPosition: LabelPosition.bottom,
      row: 0,
      column: 0,
      x: x + 150,
      y
    })
  );
  nodes.push(
    createNode({
      id: `${groupId}-UnGrouped-C`,
      shape: NodeShape.ellipse,
      label: 'Grouped Node C',
      labelPosition: LabelPosition.bottom,
      row: 0,
      column: 0,
      x: x + 300,
      y
    })
  );
  return nodes;
};
