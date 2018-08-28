import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewDescriptionHeading renders ListViewItem heading
 */
const ListViewDescriptionHeading = ({ children }) => <div className="list-group-item-heading">{children}</div>;
ListViewDescriptionHeading.propTypes = {
  /** Child node - content rendered as heading */
  children: PropTypes.node
};
ListViewDescriptionHeading.defaultProps = {
  children: null
};
export default ListViewDescriptionHeading;
