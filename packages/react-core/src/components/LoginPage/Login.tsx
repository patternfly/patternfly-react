import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the main section of the login layout */
  children?: ReactNode;
  /** Additional classes added to the login layout */
  className?: string;
  /** Footer component (e.g. <LoginFooter />) */
  footer?: ReactNode;
  /** Header component (e.g. <LoginHeader />) */
  header?: ReactNode;
}

export const Login: FunctionComponent<LoginProps> = ({
  className = '',
  children = null,
  footer = null,
  header = null,
  ...props
}: LoginProps) => (
  <div {...props} className={css(styles.login, className)}>
    <div className={css(styles.loginContainer)}>
      {header}
      <main className={css(styles.loginMain)}>{children}</main>
      {footer}
    </div>
  </div>
);
Login.displayName = 'Login';
