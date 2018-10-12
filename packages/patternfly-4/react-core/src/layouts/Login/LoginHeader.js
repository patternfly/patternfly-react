import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the header of the login layout */
  children: PropTypes.node,
  /** Additional classes added to the login header */
  className: PropTypes.string,
  /** Header Brand component (e.g. <LoginHeader />) */
  headerBrand: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  headerBrand: null
};

const LoginHeader = ({ className, children, headerBrand, ...props }) => (
  <header className={css(styles.loginHeader, className)} {...props}>
    {headerBrand}
    {children}
  </header>
);

LoginHeader.propTypes = propTypes;
LoginHeader.defaultProps = defaultProps;

export default LoginHeader;
