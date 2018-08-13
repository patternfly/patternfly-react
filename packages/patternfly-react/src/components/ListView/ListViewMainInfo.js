import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */
const ListViewMainInfo = ({ children }) => <div className="list-view-pf-main-info">{children}</div>;
ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: PropTypes.node
};
ListViewMainInfo.defaultProps = {
  children: null
};
export default ListViewMainInfo;
