import React from 'react';
import {
  EdgeAnimationSpeed,
  EdgeModel,
  EdgeStyle,
  EdgeTerminalType,
  Model,
  NodeModel,
  NodeShape,
  NodeStatus
} from '@patternfly/react-topology';
import SignOutAltIcon from '@patternfly/react-icons/dist/esm/icons/skull-icon';
import { createEdge, createNode } from '../utils/styleUtils';
import { logos } from '../utils/logos';
import { SVGIconProps } from '@patternfly/react-icons/dist/esm/createIcon';

const getRandomNode = (numNodes: number, notNode = -1): number => {
  let node = Math.floor(Math.random() * numNodes);
  if (node === notNode) {
    node = getRandomNode(numNodes, notNode);
  }
  return node;
};

export interface GeneratorNodeOptions {
  shapes?: NodeShape[];
  statuses?: NodeStatus[];
  statusDecorators?: boolean;
  showDecorators?: boolean;
  nodeLabels?: boolean;
  nodeSecondaryLabels?: boolean;
  nodeBadges?: boolean;
  nodeIcons?: boolean;
  smallNodes?: boolean;
  contextMenus?: boolean;
}

export interface GeneratorEdgeOptions {
  edgeStyles?: EdgeStyle[];
  edgeStatuses?: NodeStatus[];
  edgeAnimations?: EdgeAnimationSpeed[];
  edgeTags?: boolean;
  terminalTypes?: EdgeTerminalType[];
}

export const DefaultNodeOptions: GeneratorNodeOptions = {
  shapes: [NodeShape.ellipse],
  statuses: [NodeStatus.default],
  statusDecorators: false,
  showDecorators: false,
  nodeLabels: true,
  nodeSecondaryLabels: false,
  nodeBadges: false,
  nodeIcons: false,
  smallNodes: false,
  contextMenus: false
};

export const DefaultEdgeOptions: GeneratorEdgeOptions = {
  edgeStyles: [EdgeStyle.default],
  edgeStatuses: [NodeStatus.default],
  edgeAnimations: [EdgeAnimationSpeed.none],
  edgeTags: false,
  terminalTypes: [EdgeTerminalType.directional]
};

export const getNodeOptions = (
  index: number,
  nodeCreationOptions: GeneratorNodeOptions
): {
  status?: NodeStatus;
  shape?: NodeShape;
  label?: string;
  secondaryLabel?: string;
  badge?: string;
  showStatusDecorator?: boolean;
  showDecorators?: boolean;
  showContextMenu?: boolean;
  labelIconClass?: string;
  labelIcon?: React.ComponentClass<SVGIconProps>;
} => {
  const shapeEnumIndex = Math.round(Math.random() * (nodeCreationOptions.shapes.length - 1));
  const labelIconClass = index % 2 === 0 && nodeCreationOptions.nodeIcons ? logos.get('icon-java') : undefined;
  const labelIcon = index % 2 === 1 && nodeCreationOptions.nodeIcons ? SignOutAltIcon : undefined;
  return {
    status: nodeCreationOptions.statuses[index % nodeCreationOptions.statuses.length],
    shape: nodeCreationOptions.shapes[shapeEnumIndex],
    label: nodeCreationOptions.nodeLabels ? `Node ${index} Title` : undefined,
    secondaryLabel: nodeCreationOptions.nodeSecondaryLabels ? `Node subtitle` : undefined,
    badge: nodeCreationOptions.nodeBadges ? 'CS' : undefined,
    showStatusDecorator: nodeCreationOptions.statusDecorators,
    showDecorators: nodeCreationOptions.showDecorators,
    showContextMenu: nodeCreationOptions.contextMenus,
    labelIconClass,
    labelIcon
  };
};

export const generateNode = (index: number, nodeCreationOptions: GeneratorNodeOptions): NodeModel => {
  const nodeId = `node-${index}`;
  const width = nodeCreationOptions.smallNodes ? 48 : 75;
  let height = nodeCreationOptions.smallNodes ? 48 : 75;

  const nodeOptions = getNodeOptions(index, nodeCreationOptions);
  if (nodeOptions.shape === NodeShape.stadium) {
    height *= 0.5;
  }
  return createNode({
    id: nodeId,
    width,
    height,
    setLocation: false,
    ...nodeOptions
  });
};

export const generateEdge = (
  index: number,
  sourceId: string,
  targetId: string,
  options: GeneratorEdgeOptions
): EdgeModel =>
  createEdge(sourceId, targetId, {
    style: options.edgeStyles[index % options.edgeStyles.length],
    animation: options.edgeAnimations[index % options.edgeAnimations.length],
    terminalType: options.terminalTypes[index % options.terminalTypes.length],
    terminalStatus: options.edgeStatuses[index % options.edgeStatuses.length],
    tag: options.edgeTags ? '250kbs' : undefined,
    tagStatus: options.edgeStatuses[index % options.edgeStatuses.length]
  });

export const generateDataModel = (
  numNodes: number,
  numGroups: number,
  numEdges: number,
  groupDepth: number = 0,
  nodeOptions: GeneratorNodeOptions = {},
  edgeOptions: GeneratorEdgeOptions = {}
): Model => {
  const nodeCreationOptions = { ...DefaultNodeOptions, ...nodeOptions };
  const edgeCreationOptions = { ...DefaultEdgeOptions, ...edgeOptions };

  const groups: NodeModel[] = [];
  const nodes: NodeModel[] = [];
  const edges: EdgeModel[] = [];

  const createGroup = (
    childNodes: NodeModel[],
    baseId: string = 'Group',
    index: number,
    level: number = 0
  ): NodeModel => {
    const id = `${baseId}-${index}`;
    const group: NodeModel = {
      id,
      children: [],
      type: 'group',
      group: true,
      label: id,
      style: { padding: 15 },
      // data items are used to pass to the component to show various option, demo purposes only
      data: {
        badge: nodeCreationOptions.nodeBadges ? 'GN' : undefined,
        badgeColor: '#F2F0FC',
        badgeTextColor: '#5752d1',
        badgeBorderColor: '#CBC1FF',
        collapsedWidth: 75,
        collapsedHeight: 75,
        showContextMenu: nodeCreationOptions.contextMenus,
        collapsible: true
      }
    };
    if (level === groupDepth) {
      group.children = childNodes.map(n => n.id);
    } else {
      const nodesPerChildGroup = Math.floor(childNodes.length / 2);
      if (nodesPerChildGroup < 1) {
        const g1 = createGroup(childNodes, id, 1, level + 1);
        group.children = [g1.id];
      } else {
        const g1 = createGroup(childNodes.slice(0, nodesPerChildGroup), id, 1, level + 1);
        const g2 = createGroup(childNodes.slice(nodesPerChildGroup), id, 2, level + 1);
        group.children = [g1.id, g2.id];
      }
    }

    groups.push(group);
    return group;
  };

  for (let i = 0; i < numNodes; i++) {
    const node = generateNode(i, nodeCreationOptions);
    nodes.push(node);
  }

  const nodesPerGroup = Math.floor((numNodes - 2) / numGroups);
  for (let i = 0; i < numGroups; i++) {
    createGroup(nodes.slice(i * nodesPerGroup, (i + 1) * nodesPerGroup), 'Group', i + 1);
  }

  for (let i = 0; i < numEdges; i++) {
    const sourceNum = getRandomNode(numNodes);
    const targetNum = getRandomNode(numNodes, sourceNum);
    const edge = generateEdge(i, nodes[sourceNum].id, nodes[targetNum].id, edgeCreationOptions);
    edges.push(edge);
  }

  nodes.push(...groups);

  return { nodes, edges };
};
