import * as _ from 'lodash';
import { GraphElement, Node, isNode, isGraph, NodeStyle } from '../types';

const groupNodeElements = (nodes: GraphElement[]): Node[] => {
  if (!_.size(nodes)) {
    return [];
  }
  const groupNodes: Node[] = [];
  _.forEach(nodes, (nextNode) => {
    if (isNode(nextNode) && nextNode.isGroup() && !nextNode.isCollapsed()) {
      groupNodes.push(nextNode);
      groupNodes.push(...groupNodeElements(nextNode.getChildren()));
    }
  });
  return groupNodes;
};

const leafNodeElements = (nodeElements: Node | Node[] | null): Node[] => {
  const nodes: Node[] = [];

  if (!nodeElements) {
    return nodes;
  }

  if (Array.isArray(nodeElements)) {
    _.forEach(nodeElements, (nodeElement: Node) => {
      nodes.push(...leafNodeElements(nodeElement));
    });
    return nodes;
  }

  if (nodeElements.isGroup() && !nodeElements.isCollapsed()) {
    const leafNodes: Node[] = [];
    const children: GraphElement[] = nodeElements.getChildren();
    if (_.size(children)) {
      _.forEach(
        children.filter((e) => isNode(e)),
        (element: Node) => {
          leafNodes.push(...leafNodeElements(element));
        },
      );
    }
    return leafNodes;
  }

  return [nodeElements];
};

const getTopCollapsedParent = (node: Node): Node => {
  let returnNode: Node = node;
  try {
    let parent = !isGraph(node) && node.getParent();
    while (parent && !isGraph(parent)) {
      if ((parent as Node).isCollapsed()) {
        returnNode = parent as Node;
      }
      parent = parent.getParent();
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return returnNode;
};

const getClosestVisibleParent = (node: Node): Node | null => {
  if (!node) {
    return null;
  }

  let returnNode = null;
  try {
    let parent = node.getParent();
    while (parent) {
      if (!parent.isVisible()) {
        // parent isn't visible so no descendant could be visible
        returnNode = null;
      } else if ((parent as Node).isCollapsed() || !returnNode) {
        // parent is collapsed, no descendant is visible, but parent is
        returnNode = parent as Node;
      }
      parent = parent.getParent();
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return returnNode;
};

const getElementPadding = (element: GraphElement): number => {
  const stylePadding = element.getStyle<NodeStyle>().padding;
  if (!stylePadding) {
    return 0;
  }

  if (Array.isArray(stylePadding)) {
    // For a padding that is not consistent on all sides, use the max padding
    return stylePadding.reduce((val, current) => {
      return Math.max(val, current);
    }, 0);
  }

  return stylePadding as number;
};

const getGroupPadding = (element: GraphElement, padding = 0): number => {
  if (isGraph(element)) {
    return padding;
  }
  let newPadding = padding;
  if (isNode(element) && element.isGroup() && !element.isCollapsed()) {
    newPadding += getElementPadding(element);
  }
  if (element.getParent()) {
    return getGroupPadding(element.getParent(), newPadding);
  }
  return newPadding;
};

export {
  groupNodeElements,
  leafNodeElements,
  getTopCollapsedParent,
  getClosestVisibleParent,
  getElementPadding,
  getGroupPadding,
};
