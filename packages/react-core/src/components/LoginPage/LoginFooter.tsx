import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginFooterProps extends HTMLProps<HTMLElement> {
  /** Content rendered inside the footer of the login layout */
  children?: ReactNode;
  /** Additional props are spread to the container <footer> */
  className?: string;
}

export const LoginFooter: FunctionComponent<LoginFooterProps> = ({
  className = '',
  children = null,
  ...props
}: LoginFooterProps) => (
  <footer className={css(styles.loginFooter, className)} {...props}>
    {children}
  </footer>
);
LoginFooter.displayName = 'LoginFooter';
