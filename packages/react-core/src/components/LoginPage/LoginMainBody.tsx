import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Login/login';

export interface LoginMainBodyProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the login main body */
  children?: ReactNode;
  /** Additional classes added to the login main body */
  className?: string;
}

export const LoginMainBody: FunctionComponent<LoginMainBodyProps> = ({
  children = null,
  className = '',
  ...props
}: LoginMainBodyProps) => (
  <div className={css(styles.loginMainBody, className)} {...props}>
    {children}
  </div>
);
LoginMainBody.displayName = 'LoginMainBody';
