import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Login/login.css';

const propTypes = {
  /** Content rendered inside the Login Main Header */
  children: PropTypes.node,
  /** Additional classes added to the Login Main Header */
  className: PropTypes.string,
  /** Dropdown component for the Login Main Header */
  dropdown: PropTypes.node,
  /** Title for the Login Main Header */
  title: PropTypes.string,
  /** Subtitle that contains the Text, URL, and URL Text for the Login Main Header */
  subtitle: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  dropdown: null,
  title: '',
  subtitle: ''
};

const LoginMainHeader = ({ children, className, dropdown, title, subtitle, ...props }) => (
  <header className={css(styles.loginMainHeader, className)} {...props}>
    {title && <Title size="3xl">{title}</Title>}
    {dropdown}
    {subtitle && <p>{subtitle}</p>}
    {children}
  </header>
);

LoginMainHeader.propTypes = propTypes;
LoginMainHeader.defaultProps = defaultProps;

export default LoginMainHeader;
