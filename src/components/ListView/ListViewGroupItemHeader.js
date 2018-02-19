import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewGroupItemHeader is used with expandable ListViewItem, wraps everything
 * that is displayed in non expanded state. Handles the toggling of the expanded
 * state
 */
const ListViewGroupItemHeader = ({ children, toggleExpanded }) => {
  const handleClick = e => {
    // ignore selected child elements click
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'A' &&
      e.target.tagName !== 'INPUT' &&
      !e.target.classList.contains('fa-ellipsis-v')
    ) {
      toggleExpanded();
    }
  };
  return (
    <div className="list-group-item-header" onClick={handleClick}>
      {children}
    </div>
  );
};
ListViewGroupItemHeader.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
};
ListViewGroupItemHeader.defaultProps = {
  children: null
};
export default ListViewGroupItemHeader;
