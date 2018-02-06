import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TreeViewNode from './TreeViewNode';

const TreeView = ({
  nodes,
  selectNode,
  highlightOnSelect,
  highlightOnHover
}) => {
  const classes = cx('list-group', {
    'treeview-pf-select': highlightOnSelect,
    'treeview-pf-hover': highlightOnHover
  });

  return (
    <div className="treeview">
      <ul className={classes}>
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
  selectNode: PropTypes.func,
  highlightOnHover: PropTypes.bool,
  highlightOnSelect: PropTypes.bool
};

export default TreeView;
