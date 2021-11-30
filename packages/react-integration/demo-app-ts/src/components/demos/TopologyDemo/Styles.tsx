import * as React from 'react';
import {
  BadgeLocation,
  LabelPosition,
  Model,
  NodeModel,
  NodeShape,
  NodeStatus,
  useComponentFactory,
  useModel
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
  secondaryLabel?: string;
  labelPosition?: LabelPosition;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
  row: number;
  column: number;
  width?: number;
  height?: number;
  shape?: NodeShape;
  status?: NodeStatus;
  showStatusDecorator?: boolean;
  statusDecoratorTooltip?: React.ReactNode;
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
    ...options,
    status: options.status || 'default',
    selected: options.selected === undefined ? false : options.selected,
    hover: options.hover === undefined ? false : options.hover
  }
});

const STATUS_VALUES = Object.values(NodeStatus);
const STATUS_COUNT = STATUS_VALUES.length;
const ICON_STATUS_VALUES = [NodeStatus.success, NodeStatus.warning, NodeStatus.danger];

const createStatusNodes = (
  shape: NodeShape,
  column: number,
  statusPerRow = 1,
  label: string = '',
  selected = false,
  hover = false,
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
      column: column + ((index * STATUS_COUNT) % statusPerRow) * STATUS_COUNT,
      selected,
      hover,
      showStatusDecorator,
      statusDecoratorTooltip
    })
  );

const createStatusNodeShapes = (
  statusPerRow = 1,
  label: string = '',
  selected = false,
  hover = false,
  labelPosition: LabelPosition = LabelPosition.bottom,
  showStatusDecorator?: boolean,
  statusDecoratorTooltip?: React.ReactNode
): NodeModel[] =>
  Object.values(NodeShape).reduce((nodes: NodeModel[], shape: string | NodeShape, index) => {
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

export const NodeStatusDecoratorStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: createStatusNodeShapes(1, '', false, false, LabelPosition.bottom, true, 'Tooltip Text')
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
  badgeLocation?: BadgeLocation;
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
          ...createBadgeNodes({ row: 3, badge: 'CSN', selected: true }),
          ...createBadgeNodes({ row: 4, badge: 'CSNY', badgeLocation: BadgeLocation.below })
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

export const NodeSecondaryLabelStyles = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);
  const nodes = Object.values(NodeShape).reduce((nodes: NodeModel[], shape: string | NodeShape, index) => {
    nodes.push(
      createNode({
        id: `${shape}-secondary`,
        shape: shape as NodeShape,
        label: 'Primary Label',
        secondaryLabel: 'Secondary Label',
        labelPosition: LabelPosition.bottom,
        row: 1,
        column: index + 1,
        x: index * RIGHT_LABEL_COLUMN_WIDTH,
        truncateLength: 13
      })
    );
    nodes.push(
      createNode({
        id: `${shape}-secondary-long`,
        shape: shape as NodeShape,
        label: 'Primary Label',
        secondaryLabel: 'Very Long Secondary Label',
        labelPosition: LabelPosition.bottom,
        row: 2,
        column: index + 1,
        x: index * RIGHT_LABEL_COLUMN_WIDTH,
        y: 165,
        truncateLength: 13
      })
    );
    nodes.push(
      createNode({
        id: `${shape}-secondary-long-badged`,
        label: 'Label Bottom',
        secondaryLabel: 'Very Long Secondary Label',
        shape: shape as NodeShape,
        row: 3,
        column: index + 1,
        x: index * (RIGHT_LABEL_COLUMN_WIDTH + 45),
        y: 330,
        labelIconClass: logos.get('icon-java'),
        truncateLength: 13,
        badge: 'CS',
        hover: true,
        showContextMenu: true,
        badgeColor: '#ace12e',
        badgeTextColor: '#0f280d',
        badgeBorderColor: '#486b00',
        marginX: 100
      })
    );
    return nodes;
  }, []);

  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes
      }),
      []
    )
  );
  return null;
});
