import * as React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';

export interface LoginHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the header of the login layout */
  children?: React.ReactNode;
  /** Additional classes added to the login header */
  className?: string;
  /** Header Brand component (e.g. <LoginHeader />) */
  headerBrand?: React.ReactNode;
}

export const LoginHeader: React.FunctionComponent<LoginHeaderProps> = ({
  className = '',
  children = null,
  headerBrand = null,
  ...props
}) => (
  <header className={css(styles.loginHeader, className)} {...props}>
    {headerBrand}
    {children}
  </header>
);

export default LoginHeader;
