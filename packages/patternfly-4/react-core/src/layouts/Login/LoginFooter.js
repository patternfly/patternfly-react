import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the footer of the login layout */
  children: PropTypes.node,
  /** Additional classes added to the login header */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginFooter = ({ className, children, ...props }) => (
  <footer className={css(styles.loginFooter, className)} {...props}>
    {children}
  </footer>
);

LoginFooter.propTypes = propTypes;
LoginFooter.defaultProps = defaultProps;

export default LoginFooter;
