import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the header brand of the login layout */
  children: PropTypes.node,
  /** Additional classes added to the login header brand */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginHeaderBrand = ({ className, children, ...props }) => (
  <div className={css(styles.loginHeaderBrand, className)} {...props}>
    {children}
  </div>
);

LoginHeaderBrand.propTypes = propTypes;
LoginHeaderBrand.defaultProps = defaultProps;

export default LoginHeaderBrand;
