import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginHeaderProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the header of the login layout */
  children?: ReactNode;
  /** Additional classes added to the login header */
  className?: string;
  /** Header brand component (e.g. <LoginHeader />) */
  headerBrand?: ReactNode;
}

export const LoginHeader: FunctionComponent<LoginHeaderProps> = ({
  className = '',
  children = null,
  headerBrand = null,
  ...props
}: LoginHeaderProps) => (
  <header className={css(styles.loginHeader, className)} {...props}>
    {headerBrand}
    {children}
  </header>
);
LoginHeader.displayName = 'LoginHeader';
