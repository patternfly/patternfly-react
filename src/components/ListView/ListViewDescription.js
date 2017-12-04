import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewDescription wraps Heading and Text
 */
const ListViewDescription = ({ children }) => (
  <div className="list-view-pf-description">{children}</div>
);
ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: PropTypes.node,
};
export default ListViewDescription;
