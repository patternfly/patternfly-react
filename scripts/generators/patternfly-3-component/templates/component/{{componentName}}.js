import React from 'react';
import PropTypes from 'prop-types';

/**
 * {{componentName}} Component for PatternFly React
 */
const {{componentName}} = ({ children, ...props }) => <div {...props}>{children}</div>;

{{componentName}}.propTypes = {
  children: PropTypes.node
};

{{componentName}}.defaultProps = {
  children: null
};

export default {{componentName}};
