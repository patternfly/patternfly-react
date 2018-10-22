import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the main section of the login layout */
  children: PropTypes.node,
  /** Additional classes added to the login layout */
  className: PropTypes.string,
  /** Footer component (e.g. <LoginFooter />) */
  footer: PropTypes.node,
  /** Header component (e.g. <LoginHeader />) */
  header: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  footer: null,
  header: null
};

const Login = ({ className, children, footer, header, ...props }) => (
  <div {...props} className={css(styles.login, className)}>
    <div className={css(styles.loginContainer)}>
      {header}
      <main className={css(styles.loginMain)}>{children}</main>
      {footer}
    </div>
  </div>
);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
