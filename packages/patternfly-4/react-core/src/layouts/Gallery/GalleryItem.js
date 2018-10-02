import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Gallery Item */
  children: PropTypes.any
};

const defaultProps = {
  children: null
};

const GalleryItem = ({ children, ...props }) => <div {...props}>{children}</div>;

GalleryItem.propTypes = propTypes;
GalleryItem.defaultProps = defaultProps;

export default GalleryItem;
