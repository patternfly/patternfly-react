import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, KEYS } from '../../common/helpers';

import TreeViewNode from './TreeViewNode';

class TreeView extends React.Component {
  state = {
    focusedNodeId: ''
  };

  onFocus = node => {
    this.setState(() => ({ focusedNodeId: node.dataset.id }));
  };

  onKeyDown = event => {
    const nodes = this.getVisibleNodes([
      ...this.treeRef.current.getElementsByTagName('li')
    ]);
    const currentNodePosition = nodes.findIndex(
      element => element.dataset.id === this.state.focusedNodeId
    );

    if (
      event.key === KEYS.ARROW_DOWN &&
      currentNodePosition !== nodes.length - 1
    ) {
      nodes[currentNodePosition + 1].focus();
    } else if (event.key === KEYS.ARROW_UP && currentNodePosition !== 0) {
      nodes[currentNodePosition - 1].focus();
    }
  };

  onKeyPress = event => {
    const nodes = this.getVisibleNodes([
      ...this.treeRef.current.getElementsByTagName('li')
    ]);
    const currentNodePosition = nodes.findIndex(
      element => element.dataset.id === this.state.focusedNodeId
    );
    const { key } = event;

    if (key.match(/[a-zA-Z]/)) {
      const searchableNodes = nodes.slice(currentNodePosition + 1);
      const firstMatchingNode = searchableNodes.find(node => {
        const nodeText = node.querySelector('.treeitem-row').textContent;
        const [firstLetter] = nodeText;
        return firstLetter === key;
      });
      if (firstMatchingNode) {
        firstMatchingNode.focus();
      } else {
        const [firstNode] = nodes;
        firstNode.focus();
      }
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
      highlightOnSelect,
      accessibleName
    } = this.props;
    const { focusedNodeId } = this.state;
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
          onKeyPress={this.onKeyPress}
          role="tree"
          aria-label={accessibleName}
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
                focusedNodeId={focusedNodeId}
                setSize={nodes.length}
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
  highlightOnSelect: PropTypes.bool,
  /** Identification for assistive devices */
  accessibleName: PropTypes.string
};

TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: noop,
  accessibleName: ''
};

export default TreeView;
