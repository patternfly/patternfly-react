import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TreeViewNode from './TreeViewNode';

class TreeView extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="treeview">
        <ul className="list-group">
          {data &&
            data.map((node, index) => (
              <TreeViewNode node={node} key={index} level={1} />
            ))}
        </ul>
      </div>
    );
  }
}

TreeView.propTypes = {
  data: PropTypes.array
};

export default TreeView;
