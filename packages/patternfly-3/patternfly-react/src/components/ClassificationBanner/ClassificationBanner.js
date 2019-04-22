import React from 'react';
import PropTypes from 'prop-types';

/**
 * ClassificationBanner Component for PatternFly React
 */
const ClassificationBanner = ({ children, ...props }) => <div {...props}>{children}</div>;

ClassificationBanner.propTypes = {
  children: PropTypes.node
};

ClassificationBanner.defaultProps = {
  children: null
};

export default ClassificationBanner;
