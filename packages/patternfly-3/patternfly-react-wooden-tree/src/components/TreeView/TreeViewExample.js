import React from 'react';
import TreeView from './index';

const data = [
  {
    text: 'Parent 1',
    icon: 'fa fa-folder',
    nodes: [
      {
        text: 'Child 1',
        nodes: [{ text: 'Grandchild 1' }, { text: 'Grandchild 2' }]
      },
      {
        text: 'Child 2',
        nodes: [{ text: 'Grandchild 1' }, { text: 'Grandchild 2' }]
      }
    ]
  },
  {
    text: 'Parent 2',
    icon: 'fa fa-folder',
    nodes: [{ text: 'Child 1' }]
  },
  {
    text: 'Parent 3',
    icon: 'fa fa-folder'
  },
  {
    text: 'Parent 4',
    icon: 'fa fa-folder'
  },
  {
    text: 'Parent 5',
    icon: 'fa fa-folder'
  }
];

const EXPANDED = 'state.expanded';
const CHECKED = 'state.checked';
const DISABLED = 'state.disabled';
const SELECTED = 'state.selected';
const NODES = 'nodes';
const LOADING = 'loading';

const actionMapper = {
  [EXPANDED]: TreeView.nodeExpanded,
  [CHECKED]: TreeView.nodeChecked,
  [DISABLED]: TreeView.nodeDisabled,
  [SELECTED]: TreeView.nodeSelected,
  [NODES]: TreeView.nodeChildren,
  [LOADING]: TreeView.nodeLoading
};

class TreeViewExample extends React.Component {
  state = {
    tree: TreeView.initTree(data)
  };

  /**
   * The callback function for changing data in the tree.
   *
   * @param {string} nodeId The nodeId of the node.
   * @param {string} type The field name which changed.
   * @param {boolean} value The new value to assign.
   */
  onDataChange = (nodeId, type, value) => {
    let node = TreeView.nodeSelector(this.state.tree, nodeId);
    if (node == null) {
      return;
    }

    if (actionMapper.hasOwnProperty(type)) {
      node = actionMapper[type](node, value);
      this.setState({ tree: TreeView.nodeUpdater(this.state.tree, node) });
    }
  };

  render() {
    return (
      <div className="App">
        <TreeView nodeIcon="fa fa-file-o" data={this.state.tree} onDataChange={this.onDataChange} {...this.props} />
      </div>
    );
  }
}

export default TreeViewExample;
