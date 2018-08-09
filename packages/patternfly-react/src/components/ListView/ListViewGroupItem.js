import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItem is a root node of each ListViewItem
 */
const ListViewGroupItem = ({ children, className, stacked, expanded, ...props }) => {
  const classes = classNames(
    'list-group-item',
    {
      'list-view-pf-expand-active': expanded,
      'list-view-pf-stacked': stacked
    },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
ListViewGroupItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggles the item expanded */
  expanded: PropTypes.bool,
  /** Toggles the item stacked */
  stacked: PropTypes.bool
};
ListViewGroupItem.defaultProps = {
  children: null,
  expanded: false,
  stacked: false,
  className: ''
};
export default ListViewGroupItem;
