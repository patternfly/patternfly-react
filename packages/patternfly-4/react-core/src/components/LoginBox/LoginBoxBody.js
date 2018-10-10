import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';

const propTypes = {
  /** Content rendered inside the LoginBox Body */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox Body */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginBoxBody = ({ children, className, ...props }) => (
  <div className={css(styles.loginBoxBody, className)} {...props}>
    {children}
  </div>
);

LoginBoxBody.propTypes = propTypes;
LoginBoxBody.defaultProps = defaultProps;

export default LoginBoxBody;
