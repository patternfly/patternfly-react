import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Login/login.css';

const propTypes = {
  /** Content rendered inside the Login Main Footer */
  children: PropTypes.node,
  /** Content rendered inside the Login Main Footer as Social Media Links* */
  socialMediaLoginContent: PropTypes.node,
  /** Content rendered inside of Login Main Footer Band to display a sign up for account message */
  signUpForAccountMessage: PropTypes.node,
  /** Content rendered inside of Login Main Footer Band do display a forgot credentials link* */
  forgotCredentials: PropTypes.node,
  /** Additional classes added to the Login Main Footer */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  socialMediaLoginContent: null,
  signUpForAccountMessage: null,
  forgotCredentials: null,
  className: ''
};

const LoginMainFooter = ({
  children,
  socialMediaLoginContent,
  signUpForAccountMessage,
  forgotCredentials,
  className,
  ...props
}) => (
  <div className={css(styles.loginMainFooter, className)} {...props}>
    {children}
    {socialMediaLoginContent && <ul className={css(styles.loginMainFooterLinks)}>{socialMediaLoginContent}</ul>}
    {(signUpForAccountMessage || forgotCredentials) && (
      <div className={css(styles.loginMainFooterBand)}>
        {signUpForAccountMessage}
        {forgotCredentials}
      </div>
    )}
  </div>
);

LoginMainFooter.propTypes = propTypes;
LoginMainFooter.defaultProps = defaultProps;

export default LoginMainFooter;
