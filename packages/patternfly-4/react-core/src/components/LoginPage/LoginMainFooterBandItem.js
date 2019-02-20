import React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,
  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,
  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginMainFooterBandItem = ({ className, children, ...props }) => (
  <p className={css(`${styles.loginMainFooterBand}-item`, className)} {...props}>
    {children}
  </p>
);

LoginMainFooterBandItem.propTypes = propTypes;
LoginMainFooterBandItem.defaultProps = defaultProps;

export default LoginMainFooterBandItem;
