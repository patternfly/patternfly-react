import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewDescriptionText renders text content of ListViewItem
 */
const ListViewDescriptionText = ({ children }) => <div className="list-group-item-text">{children}</div>;
ListViewDescriptionText.propTypes = {
  /** Child node - content rendered in text section of ListViewItem */
  children: PropTypes.node
};
ListViewDescriptionText.defaultProps = {
  children: null
};
export default ListViewDescriptionText;
