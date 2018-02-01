import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TreeViewNode from './TreeViewNode';

class TreeView extends Component {
  render() {
    const { data, selectNode } = this.props;
    return (
      <div className="treeview">
        <ul className="list-group">
          {data &&
            data.map((node, index) => (
              <TreeViewNode
                node={node}
                key={index}
                level={1}
                selectNode={selectNode}
              />
            ))}
        </ul>
      </div>
    );
  }
}

TreeView.propTypes = {
  data: PropTypes.array,
  selectNode: PropTypes.func
};

export default TreeView;
