import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
const ListViewExpand = ({ children, expanded, toggleExpanded }) => {
  const classes = classNames({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  });
  return (
    <div
      className={classNames('list-view-pf-expand', { active: expanded })}
      onClick={e => {
        e.stopPropagation();
        toggleExpanded();
      }}
    >
      <span className={classes} />
      {children}
    </div>
  );
};
ListViewExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: PropTypes.node,
  /** Expanded state toggle */
  expanded: PropTypes.bool,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
};
ListViewExpand.defaultProps = {
  children: null,
  expanded: false
};
export default ListViewExpand;
