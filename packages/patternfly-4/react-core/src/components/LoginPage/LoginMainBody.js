import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Login/login.css';

const propTypes = {
  /** Content rendered inside the Login Main Body */
  children: PropTypes.node,
  /** Additional classes added to the Login Main Body */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginMainBody = ({ children, className, ...props }) => (
  <div className={css(styles.loginMainBody, className)} {...props}>
    {children}
  </div>
);

LoginMainBody.propTypes = propTypes;
LoginMainBody.defaultProps = defaultProps;

export default LoginMainBody;
