import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginCardHeader = ({ children, className, ...props }) => (
  <header {...props} className={classNames('login-pf-header', className)}>
    {children}
  </header>
);

LoginCardHeader.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** Children nodes. */
  children: PropTypes.node
};

LoginCardHeader.defaultProps = {
  className: '',
  children: null
};

export default LoginCardHeader;
