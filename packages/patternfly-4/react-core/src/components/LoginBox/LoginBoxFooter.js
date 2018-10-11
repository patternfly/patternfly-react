import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';

const propTypes = {
  /** Content rendered inside the LoginBox Footer */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox Footer */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginBoxFooter = ({ children, className, ...props }) => (
  <div className={css(styles.loginBoxFooter, className)} {...props}>
    {children}
  </div>
);

LoginBoxFooter.propTypes = propTypes;
LoginBoxFooter.defaultProps = defaultProps;

export default LoginBoxFooter;
