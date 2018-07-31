import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';

const LoginFormError = ({ children, show, className, ...props }) => (
  <div className={`login-form-error ${className}`}>
    <Collapse {...props} isOpened={show}>
      {children}
    </Collapse>
  </div>
);

LoginFormError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  show: PropTypes.bool
};

LoginFormError.defaultProps = {
  className: '',
  children: null,
  show: false
};

export default LoginFormError;
