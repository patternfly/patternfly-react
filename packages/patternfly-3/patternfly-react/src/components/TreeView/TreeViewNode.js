import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, KEYS } from '../../common/helpers';
import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewIndents from './TreeViewIndents';

class TreeViewNode extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // Collapse the current node if any of its parents is collapsed. This should
    // only fire for nodes that are level 2 or greater
    if (!nextProps.visible && nextProps.level > 1) {
      return { expanded: false };
    }

    // Roving tab index
    // When a treeview is first rendered and not interacted with, the first
    // node should have a tabindex of 0, while the rest of the nodes have a
    // tabindex of -1. Subsequently, the tabindex "roves" to whatever node has
    // gained focus
    const tabIndex =
      nextProps.focusedNodeId === prevState.nodeId || (!nextProps.focusedNodeId && prevState.nodeId === '0') ? 0 : -1;

    if (tabIndex !== prevState.tabIndex) {
      return { tabIndex };
    }

    // * keyboard action
    if (nextProps.expandSiblings) {
      const siblingsLevel = nextProps.expandSiblings.split('-').length;
      if (parseInt(siblingsLevel, 10) === nextProps.level) {
        nextProps.clearExpandSiblings();
        return { expanded: true };
      }
    }

    return null;
  }

  // A node can be set to be expanded by default
  state = {
    expanded: (this.props.node.hasOwnProperty('state') && this.props.node.state.expanded) || false,
    focused: false,
    tabIndex: -1,
    nodeId: this.props.nodeId
  };

  onKeyDown = e => {
    const { nodeId } = this.state;
    const { node, focusedNodeId } = this.props;
    const { key } = e;

    if (node.nodes && focusedNodeId === nodeId && (key === KEYS.ARROW_RIGHT || key === KEYS.ARROW_LEFT)) {
      e.stopPropagation();
      if (key === KEYS.ARROW_RIGHT) {
        this.setState(() => ({ expanded: true }));
      } else {
        this.setState(() => ({ expanded: false }));
      }
    }

    if (key === KEYS.SPACE || key === KEYS.ENTER) {
      e.stopPropagation();
      this.handleSelect(e);
    }
  };

  onFocus = e => {
    e.stopPropagation();
    this.props.onFocus(this.nodeRef.current);
    this.setState(() => ({ focused: true }));
  };

  onBlur = () => {
    this.setState(() => ({ focused: false }));
  };

  handleSelect = e => {
    const { node, selectNode } = this.props;

    e.stopPropagation();

    if (node.selectable) {
      this.nodeRef.current.focus();
      selectNode(node);
    }
  };

  toggleExpand = e => {
    e.stopPropagation();
    this.toggleExpandedState();
  };

  toggleExpandedState = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  nodeRef = React.createRef();

  render() {
    const {
      node,
      level,
      visible,
      selectNode,
      index,
      onFocus,
      focusedNodeId,
      setSize,
      expandSiblings,
      clearExpandSiblings
    } = this.props;
    const { expanded, focused, tabIndex, nodeId } = this.state;
    const treeitemClasses = classNames('list-group-item', {
      'node-hidden': level > 1 ? !visible : false,
      'node-selected': node.selected
    });
    const treeitemRowClasses = classNames('treeitem-row', {
      focus: focused
    });

    return (
      <li
        className={treeitemClasses}
        onClick={this.handleSelect}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        ref={this.nodeRef}
        tabIndex={tabIndex}
        data-id={nodeId}
        role="treeitem"
        aria-expanded={node.nodes && expanded}
        aria-level={level}
        aria-posinset={index + 1}
        aria-setsize={setSize}
      >
        <span className={treeitemRowClasses}>
          <TreeViewIndents level={level} />
          <TreeViewExpand nodes={node.nodes} expanded={expanded} toggleExpand={this.toggleExpand} />
          <TreeViewIcon icon={node.icon} />
          {node.text}
        </span>
        {node.nodes && (
          <ul className="list-group" role="group">
            {node.nodes.map((childNode, idx) => (
              <TreeViewNode
                node={childNode}
                key={idx}
                index={idx}
                level={level + 1}
                visible={expanded}
                selectNode={selectNode}
                onFocus={onFocus}
                focusedNodeId={focusedNodeId}
                setSize={node.nodes.length}
                expandSiblings={expandSiblings}
                clearExpandSiblings={clearExpandSiblings}
                nodeId={`${nodeId}-${idx}`}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
}

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number.isRequired,
  visible: PropTypes.bool,
  selectNode: PropTypes.func,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func,
  focusedNodeId: PropTypes.string.isRequired,
  setSize: PropTypes.number.isRequired,
  expandSiblings: PropTypes.string,
  clearExpandSiblings: PropTypes.func,
  nodeId: PropTypes.string
};

TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: noop,
  onFocus: noop,
  expandSiblings: '',
  clearExpandSiblings: noop,
  nodeId: ''
};

export default TreeViewNode;
