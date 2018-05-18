import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

import TreeViewNode from './TreeViewNode';

class TreeView extends React.Component {
  state = {
    focusedNodeId: ''
  };

  onFocus = node => {
    this.setState(() => ({ focusedNodeId: node.id }));
  };

  onKeyDown = event => {
    const nodes = this.getVisibleNodes([
      ...this.treeRef.current.getElementsByTagName('li')
    ]);
    const currentNodePosition = nodes.findIndex(
      element => element.id === this.state.focusedNodeId
    );

    if (event.key === 'ArrowDown' && currentNodePosition !== nodes.length - 1) {
      nodes[currentNodePosition + 1].focus();
    } else if (event.key === 'ArrowUp' && currentNodePosition !== 0) {
      nodes[currentNodePosition - 1].focus();
    }
  };

  getVisibleNodes = nodes =>
    nodes.filter(node => !node.className.match(/node-hidden/));

  treeRef = React.createRef();

  render() {
    const {
      nodes,
      selectNode,
      highlightOnHover,
      highlightOnSelect
    } = this.props;
    const classes = classNames('list-group', {
      'treeview-select': highlightOnSelect,
      'treeview-hover': highlightOnHover
    });

    return (
      <div className="treeview">
        <ul
          className={classes}
          ref={this.treeRef}
          onKeyDown={this.onKeyDown}
          role="tree"
        >
          {nodes &&
            nodes.map((node, index) => (
              <TreeViewNode
                node={node}
                key={index}
                index={index}
                level={1}
                selectNode={selectNode}
                onFocus={this.onFocus}
              />
            ))}
        </ul>
      </div>
    );
  }
}

TreeView.propTypes = {
  /** Array of node objects */
  nodes: PropTypes.array,
  /** Function that will be triggered when a selectable node is clicked */
  selectNode: PropTypes.func,
  /** Highlight node row on hover */
  highlightOnHover: PropTypes.bool,
  /** Highlight node row when clicked */
  highlightOnSelect: PropTypes.bool
};

TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: noop
};

export default TreeView;
