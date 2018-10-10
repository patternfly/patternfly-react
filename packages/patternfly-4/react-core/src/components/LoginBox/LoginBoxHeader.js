import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';

const propTypes = {
  /** Content rendered inside the LoginBox Header */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox Header */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginBoxHeader = ({ children, className, ...props }) => (
  <div className={css(styles.loginBoxHeader, className)} {...props}>
    {children}
  </div>
);

LoginBoxHeader.propTypes = propTypes;
LoginBoxHeader.defaultProps = defaultProps;

export default LoginBoxHeader;
