import React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,
  /** HREF for Footer Link Item */
  href: PropTypes.string,
  /** Target for Footer Link Item */
  target: PropTypes.string,
  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,
  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  href: '',
  target: '',
  className: ''
};

const LoginMainFooterLinksItem = ({ className, children, href, target, ...props }) => (
  <li className={css(styles.loginMainFooterLinksItem, className)} {...props}>
    <a className={css(styles.loginMainFooterLinksItemLink)} href={href} target={target}>
      {children}
    </a>
  </li>
);

LoginMainFooterLinksItem.propTypes = propTypes;
LoginMainFooterLinksItem.defaultProps = defaultProps;

export default LoginMainFooterLinksItem;
