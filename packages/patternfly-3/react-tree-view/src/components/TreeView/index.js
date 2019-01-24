import React from 'react';
import { Tree } from 'react-wooden-tree';

require('react-wooden-tree/dist/react-wooden-tree.css');
require('./style.css');

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
  'state.expanded': Tree.nodeExpanded,
  'state.checked': Tree.nodeChecked,
  'state.disabled': Tree.nodeDisabled,
  'state.selected': Tree.nodeSelected,
  nodes: Tree.nodeChildren,
  loading: Tree.nodeLoading
};

class TreeView extends React.Component {
  /**
   * Constructor.
   * @param {{}} props
   */
  constructor(props) {
    super(props);

    this.data = Tree.initTree(data);

    this.state = {
      tree: this.data
    };

    this.onDataChange = this.onDataChange.bind(this);
    // this.lazyLoad = this.lazyLoad.bind(this);
  }

  /**
   * The callback function for changing data in the tree.
   *
   * @param {string} nodeId The nodeId of the node.
   * @param {string} type The field name which changed.
   * @param {boolean} value The new value to assign.
   */
  onDataChange(nodeId, type, value) {
    let node = Tree.nodeSelector(this.data, nodeId);
    if (node == null) {
      return;
    }

    if (actionMapper.hasOwnProperty(type)) {
      node = actionMapper[type](node, value);
      this.data = Tree.nodeUpdater(this.data, node);
    } else {
      // console.log(nodeId, type, value);
    }

    this.setState({ tree: this.data });
  }

  render() {
    return (
      <div className="App">
        <Tree
          nodeIcon="fa fa-file-o"
          data={this.state.tree}
          onDataChange={this.onDataChange}
          lazyLoad={this.lazyLoad}
          {...this.props}
        />
      </div>
    );
  }
}

export { TreeView };
