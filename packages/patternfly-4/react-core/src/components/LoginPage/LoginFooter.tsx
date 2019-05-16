import * as React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';

export interface LoginFooterProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the footer of the login layout */
  children?: React.ReactNode;
  /** Additional props are spread to the container <footer> */
  className?: string;
}

export const LoginFooter: React.FunctionComponent<LoginFooterProps> = ({
  className = '',
  children = null,
  ...props
}) => (
  <footer className={css(styles.loginFooter, className)} {...props}>
    {children}
  </footer>
);

export default LoginFooter;
