import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

/**
 * ListViewGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
const ListViewGroupItemContainer = ({ children, expanded, onClose }) => {
  const classes = classNames({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  });
  return (
    <div className={classes}>
      {onClose !== noop && (
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
  expanded: PropTypes.bool,
  /** Function to call when 'close icon' is clicked */
  onClose: PropTypes.func
};
ListViewGroupItemContainer.defaultProps = {
  children: null,
  onClose: noop,
  expanded: false
};
export default ListViewGroupItemContainer;
