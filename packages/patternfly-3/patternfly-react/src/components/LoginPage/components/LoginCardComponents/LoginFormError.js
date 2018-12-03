import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import { default as cx } from 'classnames';

const LoginFormError = ({ children, show, className, ...props }) =>
  children && (
    <Collapse {...props} isOpened={show} className={cx('login-form-error', className)}>
      {children}
    </Collapse>
  );

LoginFormError.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** children nodes or text */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controlls the collapse to open/close */
  show: PropTypes.bool
};

LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false
};

export default LoginFormError;
