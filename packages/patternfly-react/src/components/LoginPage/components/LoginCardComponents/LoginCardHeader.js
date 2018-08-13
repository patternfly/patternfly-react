import React from 'react';
import PropTypes from 'prop-types';

const LoginCardHeader = ({ children, className, ...props }) => (
  <header {...props} className={`login-pf-header ${className}`}>
    {children}
  </header>
);

LoginCardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

LoginCardHeader.defaultProps = {
  className: '',
  children: null
};

export default LoginCardHeader;
