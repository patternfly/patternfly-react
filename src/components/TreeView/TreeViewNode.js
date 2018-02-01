import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewTextAndIconWrapper from './TreeViewTextAndIconWrapper';
import TreeViewIndents from './TreeViewIndents';

class TreeViewNode extends Component {
  constructor(props) {
    super(props);

    // A node can be set to be expanded by default
    this.state = {
      expanded:
        (props.node.hasOwnProperty('state') && props.node.state.expanded) ||
        false
    };

    this.toggleExpand = this.toggleExpand.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  // Collapse the current node if any of its parents is collapsed. This should
  // only fire for nodes that are level 2 or greater
  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible && nextProps.level > 1) {
      this.setState(() => ({ expanded: false }));
    }
  }

  toggleExpand() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  handleSelect() {
    const { node, selectNode } = this.props;
    if (node.selectable) {
      selectNode(node);
    }
  }

  render() {
    const { node, level, visible, selectNode } = this.props;
    const { expanded } = this.state;
    const classes = cx('list-group-item', {
      'node-hidden': level > 1 ? !visible : false
    });
    return (
      <React.Fragment>
        <li className={classes}>
          <TreeViewIndents level={level} />
          <TreeViewExpand
            nodes={node.nodes}
            expanded={expanded}
            toggleExpand={this.toggleExpand}
          />
          <TreeViewTextAndIconWrapper handleSelect={this.handleSelect}>
            <TreeViewIcon icon={node.icon} />
            {node.text}
          </TreeViewTextAndIconWrapper>
        </li>
        {node.nodes &&
          node.nodes.map((node, index) => (
            <TreeViewNode
              node={node}
              key={index}
              level={level + 1}
              visible={expanded}
              selectNode={selectNode}
            />
          ))}
      </React.Fragment>
    );
  }
}

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number,
  visible: PropTypes.bool,
  selectNode: PropTypes.func
};

export default TreeViewNode;
