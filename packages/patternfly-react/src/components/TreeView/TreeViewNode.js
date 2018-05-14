import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';
import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewIndents from './TreeViewIndents';

class TreeViewNode extends Component {
  static getDerivedStateFromProps(nextProps) {
    // Collapse the current node if any of its parents is collapsed. This should
    // only fire for nodes that are level 2 or greater
    if (!nextProps.visible && nextProps.level > 1) {
      return { expanded: false };
    }
    return null;
  }

  // A node can be set to be expanded by default
  state = {
    expanded:
      (this.props.node.hasOwnProperty('state') &&
        this.props.node.state.expanded) ||
      false
  };

  onKeyPress = e => {
    e.stopPropagation();
    if (e.key === ' ') {
      this.toggleExpandedState();
    } else if (e.key === 'Enter') {
      this.handleSelect();
    }
  };

  toggleExpandedState = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  toggleExpand = e => {
    e.stopPropagation();
    this.toggleExpandedState();
  };

  handleSelect = () => {
    const { node, selectNode } = this.props;
    if (node.selectable) {
      this.nodeRef.current.focus();
      selectNode(node);
    }
  };

  nodeRef = React.createRef();

  render() {
    const { node, level, visible, selectNode, index, onFocus } = this.props;
    const { expanded } = this.state;
    const classes = classNames('list-group-item', {
      'node-hidden': level > 1 ? !visible : false,
      'node-selected': node.selected
    });
    const tabIndex = index === 0 && level === 1 ? 0 : -1;

    return (
      <React.Fragment>
        <li
          className={classes}
          onClick={this.handleSelect}
          onFocus={() => onFocus(this.nodeRef.current)}
          onKeyPress={this.onKeyPress}
          ref={this.nodeRef}
          tabIndex={tabIndex}
          id={`${level}-${index}`}
          role={node.nodes ? 'group' : 'treeitem'}
          aria-expanded={node.nodes && expanded}
        >
          <TreeViewIndents level={level} />
          <TreeViewExpand
            nodes={node.nodes}
            expanded={expanded}
            toggleExpand={this.toggleExpand}
          />
          <TreeViewIcon icon={node.icon} />
          {node.text}
        </li>
        {node.nodes &&
          node.nodes.map((childNode, idx) => (
            <TreeViewNode
              node={childNode}
              key={idx}
              index={idx}
              level={level + 1}
              visible={expanded}
              selectNode={selectNode}
              onFocus={onFocus}
            />
          ))}
      </React.Fragment>
    );
  }
}

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number.isRequired,
  visible: PropTypes.bool,
  selectNode: PropTypes.func,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func
};

TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: noop,
  onFocus: noop
};

export default TreeViewNode;
