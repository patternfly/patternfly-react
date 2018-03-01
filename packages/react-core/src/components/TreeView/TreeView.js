import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

import TreeViewNode from './TreeViewNode';

const TreeView = ({
  nodes,
  selectNode,
  highlightOnSelect,
  highlightOnHover
}) => {
  const classes = classNames('list-group', {
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
  /** Array of node objects */
  nodes: PropTypes.array,
  /** Function that will be triggered when a selectable node is clicked */
  selectNode: PropTypes.func,
  /** Highlight node row on hover */
  highlightOnHover: PropTypes.bool,
  /** Highlight node row when clicked */
  highlightOnSelect: PropTypes.bool
};

TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: noop
};

export default TreeView;
