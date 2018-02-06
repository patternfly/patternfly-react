import React from 'react';
import PropTypes from 'prop-types';

import TreeViewNode from './TreeViewNode';

const TreeView = ({ nodes, selectNode }) => {
  return (
    <div className="treeview">
      <ul className="list-group">
        {nodes &&
          nodes.map((node, index) => (
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
};

TreeView.propTypes = {
  nodes: PropTypes.array,
  selectNode: PropTypes.func
};

export default TreeView;
