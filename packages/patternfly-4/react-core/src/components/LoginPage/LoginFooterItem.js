import React from 'react';
import styles from '@patternfly/patternfly-next/components/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,
  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,
  /** The URL of the Footer Link Item */
  href: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  href: '#'
};

const LoginFooterItem = ({ className, children, ...props }) => (
  <a className={css(styles.loginFooterLink, className)} {...props}>
    {children}
  </a>
);

LoginFooterItem.propTypes = propTypes;
LoginFooterItem.defaultProps = defaultProps;

export default LoginFooterItem;
