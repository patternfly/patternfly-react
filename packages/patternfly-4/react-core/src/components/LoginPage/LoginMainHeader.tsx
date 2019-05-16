import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Login/login.css';

const propTypes = {
  /** Content rendered inside the Login Main Header */
  children: PropTypes.node,
  /** Additional classes added to the Login Main Header */
  className: PropTypes.string,
  /** Title for the Login Main Header */
  title: PropTypes.string,
  /** Subtitle that contains the Text, URL, and URL Text for the Login Main Header */
  subtitle: PropTypes.node,
  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  title: '',
  subtitle: ''
};

const LoginMainHeader = ({ children, className, title, subtitle, ...props }) => (
  <header className={css(styles.loginMainHeader, className)} {...props}>
    {title && <Title headingLevel="h2" size="3xl">{title}</Title>}
    {subtitle && <p className={css(styles.loginMainHeaderDesc)}>{subtitle}</p>}
    {children}
  </header>
);

LoginMainHeader.propTypes = propTypes;
LoginMainHeader.defaultProps = defaultProps;

export default LoginMainHeader;
