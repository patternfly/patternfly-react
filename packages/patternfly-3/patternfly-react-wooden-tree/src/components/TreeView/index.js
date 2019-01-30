import React from 'react';
import { Tree } from 'react-wooden-tree';
import * as PropTypes from 'prop-types';

require('react-wooden-tree/dist/react-wooden-tree.css');
require('./style.css');

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

    this.data = Tree.initTree(this.props.data);

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
    let node = Tree.nodeSelector(this.data, nodeId);
    if (node == null) {
      return;
    }

    if (actionMapper.hasOwnProperty(type)) {
      node = actionMapper[type](node, value);
      this.data = Tree.nodeUpdater(this.data, node);
    }
    this.setState({ tree: this.data });
  }

  render() {
    const { data, ...otherProps } = this.props;

    return (
      <div className="App">
        <Tree nodeIcon="fa fa-file-o" data={this.state.tree} onDataChange={this.onDataChange} {...otherProps} />
      </div>
    );
  }
}

// Eslint disable because wanted the default value for the non required field.
// Default values already defined in the tree view component.
/* eslint-disable */
TreeView.propTypes = {
  data: PropTypes.array.isRequired, // < The definitions of the tree nodes.

  // Checkbox
  showCheckbox: PropTypes.bool, // < Option: whenever the checkboxes are displayed.
  hierarchicalCheck: PropTypes.bool, // < If enabled parent and children are reflecting each other changes.
  checkboxFirst: PropTypes.bool, // < Determines if the node icon or the checkbox is the first.

  // Selection
  multiSelect: PropTypes.bool, // < Determines if multiple nodes can be selected.
  preventDeselect: PropTypes.bool, // < Determines if can be deselected all nodes.
  allowReselect: PropTypes.bool, // < Used with preventDeselect allows to fire selected event on selected node.

  // Icons
  showIcon: PropTypes.bool, // < Determines if the icons are showed in nodes.
  showImage: PropTypes.bool, // < Determines if images are preferred to the icons.
  nodeIcon: PropTypes.string, // < Default icon for nodes without it.
  checkedIcon: PropTypes.string, // < The checkbox-checked icon.
  uncheckedIcon: PropTypes.string, // < The checkbox-unchecked icon.
  partiallyCheckedIcon: PropTypes.string, // < The checkbox-partially selected icon.
  collapseIcon: PropTypes.string, // < The icon for collapsing parents.
  expandIcon: PropTypes.string, // < The icon for expanding parents.
  loadingIcon: PropTypes.string, // < The loading icon when loading data with ajax.
  errorIcon: PropTypes.string, // < The icon displayed when lazyLoading went wrong.
  selectedIcon: PropTypes.string, // < The icon for selected nodes.

  // Styling
  changedCheckboxClass: PropTypes.string, // < Extra class for the changed checkbox nodes.
  selectedClass: PropTypes.string, // < Extra class for the selected nodes.

  // Callbacks
  /**
   * All changes made in the tree will be propagated upwards.
   * Every time the tree changes the node's data the callback will be fired.
   */
  onDataChange: PropTypes.func,

  /**
   * The function which will be called when a lazily loadable node is
   * expanded first time.
   */
  lazyLoad: PropTypes.func
};
/* eslint-enable */

export { TreeView };
