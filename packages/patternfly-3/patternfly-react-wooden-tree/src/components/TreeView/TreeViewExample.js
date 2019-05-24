import React from 'react';
import WoodenTreeView, { ActionTypes } from './index';

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
  [ActionTypes.EXPANDED]: WoodenTreeView.nodeExpanded,
  [ActionTypes.CHECKED]: WoodenTreeView.nodeChecked,
  [ActionTypes.DISABLED]: WoodenTreeView.nodeDisabled,
  [ActionTypes.SELECTED]: WoodenTreeView.nodeSelected,
  [ActionTypes.CHILD_NODES]: WoodenTreeView.nodeChildren,
  [ActionTypes.LOADING]: WoodenTreeView.nodeLoading
};

class TreeViewExample extends React.Component {
  state = {
    tree: WoodenTreeView.convertHierarchicalTree(WoodenTreeView.initHierarchicalTree(data))
  };

  /**
   * The callback function for changing data in the tree.
   *
   * @param {[string, string, any]} commands The array of node changing commands.
   */
  onDataChange = commands => {
    let tree = { ...this.state.tree };
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      let node = WoodenTreeView.nodeSelector(tree, command.nodeId);
      if (node !== null) {
        if (actionMapper.hasOwnProperty(command.type)) {
          node = actionMapper[command.type](node, command.value);
          tree = WoodenTreeView.nodeUpdater(tree, node);
        } else if (command.type === ActionTypes.ADD_NODES) {
          tree = WoodenTreeView.addNodes(tree, command.value);
        }
      }
    }
    this.setState({ tree });
  };

  render() {
    return (
      <div className="App">
        <WoodenTreeView
          nodeIcon="fa fa-file-o"
          data={this.state.tree}
          callbacks={{
            onDataChange: this.onDataChange
          }}
          {...this.props}
        />
      </div>
    );
  }
}

export default TreeViewExample;
