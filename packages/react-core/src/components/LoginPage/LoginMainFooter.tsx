import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Login/login';

export interface LoginMainFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the login main footer */
  className?: string;
  /** Content rendered inside the login main footer */
  children?: React.ReactNode;
  /** Content rendered inside the login main footer as social media links* */
  socialMediaLoginContent?: React.ReactNode;
  /** Content rendered inside of login main footer band to display a sign up for account message */
  signUpForAccountMessage?: React.ReactNode;
  /** Content rendered inside of login main footer band do display a forgot credentials link* */
  forgotCredentials?: React.ReactNode;
}

export const LoginMainFooter: React.FunctionComponent<LoginMainFooterProps> = ({
  children = null,
  socialMediaLoginContent = null,
  signUpForAccountMessage = null,
  forgotCredentials = null,
  className = '',
  ...props
}: LoginMainFooterProps) => (
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
LoginMainFooter.displayName = 'LoginMainFooter';
