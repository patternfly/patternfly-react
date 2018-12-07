import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Login/login.css';

const propTypes = {
  /** Content rendered inside the Login Main Footer */
  children: PropTypes.node,
  /** Additional classes added to the Login Main Footer */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginMainFooter = ({ children, className, ...props }) => (
  <div className={css(styles.loginMainFooter, className)} {...props}>
    {children}
  </div>
);

LoginMainFooter.propTypes = propTypes;
LoginMainFooter.defaultProps = defaultProps;

export default LoginMainFooter;
