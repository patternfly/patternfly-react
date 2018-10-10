import React from 'react';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the LoginBox */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginBox = ({ className, children, ...props }) => (
  <div {...props} className={css(styles.loginBox, className)}>
    {children}
  </div>
);

LoginBox.propTypes = propTypes;
LoginBox.defaultProps = defaultProps;

export default LoginBox;
