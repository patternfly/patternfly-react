import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TreeView2Container = ({
  children,
  highlightSelected,
  highlightOnHover,
  ...props
}) => {
  const classes = classNames('list-group', {
    'treeview-pf-select': highlightSelected,
    'treeview-pf-hover': highlightOnHover
  });

  return (
    <div className="treeview treeview2" {...props}>
      <ul className={classes}>{children}</ul>
    </div>
  );
};

TreeView2Container.propTypes = {
  children: PropTypes.node,
  /** Highlight node row on hover */
  highlightOnHover: PropTypes.bool,
  /** Highlight node row when clicked */
  highlightSelected: PropTypes.bool
};

TreeView2Container.defaultProps = {
  children: null,
  highlightOnHover: false,
  highlightSelected: false
};

export default TreeView2Container;
