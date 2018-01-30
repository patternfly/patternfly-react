import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewIndents from './TreeViewIndents';

class TreeViewNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  // Collapse the current node if any of its parents is collapsed. This should
  // only fire for nodes that are level 2 or greater
  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      this.setState(() => ({ expanded: false }));
    }
  }

  toggleExpand() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const { node, level, visible } = this.props;
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
          <TreeViewIcon icon={node.icon} />
          {node.text}
        </li>
        {node.nodes &&
          node.nodes.map((node, index) => (
            <TreeViewNode
              node={node}
              key={index}
              level={level + 1}
              visible={expanded}
            />
          ))}
      </React.Fragment>
    );
  }
}

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number,
  visible: PropTypes.bool
};

export default TreeViewNode;
