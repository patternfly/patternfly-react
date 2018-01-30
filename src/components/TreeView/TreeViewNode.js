import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  toggleExpand() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const { node, level } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        <li className="list-group-item">
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
          expanded &&
          node.nodes.map((node, index) => (
            <TreeViewNode node={node} key={index} level={level + 1} />
          ))}
      </React.Fragment>
    );
  }
}

TreeViewNode.propTypes = {
  node: PropTypes.object,
  level: PropTypes.number
};

export default TreeViewNode;
