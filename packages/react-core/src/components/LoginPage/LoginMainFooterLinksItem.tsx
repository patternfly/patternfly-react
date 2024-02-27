import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterLinksItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the footer link item */
  children?: React.ReactNode;
  /** Additional classes added to the footer link item  */
  className?: string;
}

export const LoginMainFooterLinksItem: React.FunctionComponent<LoginMainFooterLinksItemProps> = ({
  children = null,
  className = '',
  ...props
}: LoginMainFooterLinksItemProps) => (
  <li className={css(styles.loginMainFooterLinksItem, className)} {...props}>
    {children}
  </li>
);
LoginMainFooterLinksItem.displayName = 'LoginMainFooterLinksItem';
