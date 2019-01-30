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

const actionMapper = {
  'state.expanded': TreeView.nodeExpanded,
  'state.checked': TreeView.nodeChecked,
  'state.disabled': TreeView.nodeDisabled,
  'state.selected': TreeView.nodeSelected,
  nodes: TreeView.nodeChildren,
  loading: TreeView.nodeLoading
};

class TreeViewExample extends React.Component {
  /**
   * Constructor.
   * @param {{}} props
   */
  constructor(props) {
    super(props);

    this.data = TreeView.initTree(data);

    this.state = {
      tree: this.data
    };

    this.onDataChange = this.onDataChange.bind(this);
  }

  /**
   * The callback function for changing data in the tree.
   *
   * @param {string} nodeId The nodeId of the node.
   * @param {string} type The field name which changed.
   * @param {boolean} value The new value to assign.
   */
  onDataChange(nodeId, type, value) {
    let node = TreeView.nodeSelector(this.data, nodeId);
    if (node == null) {
      return;
    }

    if (actionMapper.hasOwnProperty(type)) {
      node = actionMapper[type](node, value);
      this.data = TreeView.nodeUpdater(this.data, node);
    }
    this.setState({ tree: this.data });
  }

  render() {
    return (
      <div className="App">
        <TreeView nodeIcon="fa fa-file-o" data={this.state.tree} onDataChange={this.onDataChange} {...this.props} />
      </div>
    );
  }
}

export default TreeViewExample;
