import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewLeft renders nodes positioned on the left side of ListViewItem row
 */
const ListViewLeft = ({ children }) => <div className="list-view-pf-left">{children}</div>;
ListViewLeft.propTypes = {
  /** Child nodes - usually ListViewIcon instance */
  children: PropTypes.node
};
ListViewLeft.defaultProps = {
  children: null
};
export default ListViewLeft;
