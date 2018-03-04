import createId from 'uniqid';

/**
 * Holds TreeView2 data and actions
 */
export default class TreeView2Manager {
  static createNodesFlatMap(nodes) {
    let nodesFlatMap = {};

    nodes.forEach(node => {
      if (!node.id) node.id = createId();
      nodesFlatMap[node.id] = node;

      if (node.nodes && node.nodes.length > 0) {
        nodesFlatMap = {
          ...nodesFlatMap,
          ...TreeView2Manager.createNodesFlatMap(node.nodes)
        };
      }
    });

    return nodesFlatMap;
  }

  constructor(tree) {
    this.tree = tree;

    this.nodes = TreeView2Manager.createNodesFlatMap(tree);
  }

  getNodeById(nodeOrId) {
    return nodeOrId.id ? nodeOrId : this.nodes[nodeOrId];
  }

  unselectAllNodes() {
    for (const node of Object.values(this.nodes)) {
      node.selected = false;
    }
  }

  toggleNodeSelected(id) {
    const node = this.getNodeById(id);

    node.selected = !node.selected;
  }

  selectNode(id, unselectAll = true) {
    const node = this.getNodeById(id);

    if (unselectAll) this.unselectAllNodes();

    node.selected = true;
  }

  toggleNodeExpand(id) {
    const node = this.getNodeById(id);

    node.expanded = !node.expanded;
  }

  selectNodeAndToggleExpand(id) {
    const node = this.getNodeById(id);

    this.selectNode(node);
    this.toggleNodeExpand(node);
  }

  getVisibleNodes(tree = this.tree) {
    const visibleNodes = [];

    for (const node of tree) {
      visibleNodes.push(node);

      if (node.nodes && node.nodes.length > 0 && node.expanded) {
        visibleNodes.push(...this.getVisibleNodes(node.nodes));
      }
    }

    return visibleNodes;
  }

  getSelectedNodes(nodes = Object.values(this.nodes)) {
    return nodes.filter(node => node.selected);
  }

  toggleSelectedNodesExpand(selectedNodes = this.getSelectedNodes()) {
    if (selectedNodes.length === 1) {
      this.toggleNodeExpand(selectedNodes[0]);
    } else if (selectedNodes.length > 1) {
      selectedNodes
        .filter(node => !node.expanded)
        .forEach(node => this.toggleNodeExpand(node));
    }
  }

  shiftSelectNode(
    id,
    visibleNodes = this.getVisibleNodes(),
    selectedNodes = this.getSelectedNodes()
  ) {
    const node = this.getNodeById(id);

    const nodesToSelect = [];

    if (selectedNodes.length > 0) {
      const [nodeIndex, firstSelectedNodeIndex, lastSelectedNodeIndex] = [
        visibleNodes.indexOf(node),
        visibleNodes.indexOf(selectedNodes[0]),
        visibleNodes.indexOf(selectedNodes.reverse()[0])
      ];

      if (nodeIndex < firstSelectedNodeIndex) {
        // select all nodes from clicked-node to first-selected-node
        for (let i = nodeIndex; i < firstSelectedNodeIndex; i++) {
          nodesToSelect.push(visibleNodes[i]);
        }
      } else if (nodeIndex > lastSelectedNodeIndex) {
        // select all nodes from last-selected-node to clicked-node
        for (let i = lastSelectedNodeIndex + 1; i <= nodeIndex; i++) {
          nodesToSelect.push(visibleNodes[i]);
        }
      } else {
        // select all nodes from first-selected-node to clicked-node
        for (let i = firstSelectedNodeIndex + 1; i <= nodeIndex; i++) {
          nodesToSelect.push(visibleNodes[i]);
        }
      }
    } else {
      nodesToSelect.push(node);
    }

    for (const nodeToSelect of nodesToSelect) {
      this.selectNode(nodeToSelect, false);
    }
  }

  selectPrevNode(
    unselectAll = true,
    visibleNodes = this.getVisibleNodes().reverse(),
    selectedNodes = this.getSelectedNodes().reverse()
  ) {
    this.selectNextNode(unselectAll, visibleNodes, selectedNodes);
  }

  selectNextNode(
    unselectAll = true,
    visibleNodes = this.getVisibleNodes(),
    selectedNodes = this.getSelectedNodes()
  ) {
    let nodeToSelect;

    if (selectedNodes.length > 0) {
      const lastSelectedNode = selectedNodes[selectedNodes.length - 1];

      const lastSelectedNodeIndex = visibleNodes.indexOf(lastSelectedNode);

      if (lastSelectedNodeIndex < visibleNodes.length - 1) {
        nodeToSelect = visibleNodes[lastSelectedNodeIndex + 1];
      }
    } else {
      [nodeToSelect] = visibleNodes;
    }

    if (nodeToSelect) {
      this.selectNode(nodeToSelect, unselectAll);
    }
  }
}
