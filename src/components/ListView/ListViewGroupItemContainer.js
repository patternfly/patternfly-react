import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
const ListViewGroupItemContainer = ({ children, expanded, onClose }) => {
  const classes = cx({
    'list-group-item-container container-fluid': true,
    hidden: !expanded,
  });
  return (
    <div className={classes}>
      {onClose && (
        <div className="close">
          <span className="pficon pficon-close" onClick={onClose} />
        </div>
      )}
      {expanded && children}
    </div>
  );
};
ListViewGroupItemContainer.propTypes = {
  /** Children nodes - the content visible in expanded state */
  children: PropTypes.node,
  /** Boolean indicating whether expandable content is visible */
  expanded: PropTypes.bool.isRequired,
  /** Function to call when 'close icon' is clicked */
  onClose: PropTypes.func,
};
ListViewGroupItemContainer.defaultProps = {
  expanded: false,
};
export default ListViewGroupItemContainer;
