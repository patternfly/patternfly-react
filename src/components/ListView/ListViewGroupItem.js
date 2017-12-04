import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItem is a root node of each ListViewItem
 */
const ListViewGroupItem = ({
  children,
  className,
  stacked,
  expanded,
  ...rest
}) => {
  const classes = cx(
    'list-group-item',
    {
      'list-view-pf-expand-active': expanded,
      'list-view-pf-stacked': stacked,
    },
    className,
  );
  return (
    <div className={classes} {...rest}>
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
  expanded: PropTypes.bool.isRequired,
  /** Toggles the item stacked */
  stacked: PropTypes.bool.isRequired,
};
ListViewGroupItem.defaultProps = {
  expanded: false,
  stacked: false,
};
export default ListViewGroupItem;
