import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import { default as cx } from 'classnames';

const LoginFormError = ({ children, show, topErrorOnly, className, ...props }) => (
  <div className={cx('login-form-error', className)} style={topErrorOnly ? { minHeight: '20px' } : null}>
    <Collapse {...props} isOpened={children !== null && show}>
      {children}
    </Collapse>
  </div>
);

LoginFormError.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** children nodes or text */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controlls the collapse to open/close */
  show: PropTypes.bool,
  /** if it`s a login page with topErrorOnly, add a fixed space for the form error */
  topErrorOnly: PropTypes.bool
};

LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false,
  topErrorOnly: false
};

export default LoginFormError;
