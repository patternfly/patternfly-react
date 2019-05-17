import * as React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterLinksItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the footer Link Item */
  children?: React.ReactNode;
  /** HREF for Footer Link Item */
  href?: string;
  /** Target for Footer Link Item */
  target?: string;
  /** Additional classes added to the Footer Link Item  */
  className?: string;
}

export const LoginMainFooterLinksItem: React.FunctionComponent<LoginMainFooterLinksItemProps> = ({
  children = null,
  href = '',
  target = '',
  className = '',
  ...props
}: LoginMainFooterLinksItemProps) => (
  <li className={css(styles.loginMainFooterLinksItem, className)} {...props}>
    <a className={css(styles.loginMainFooterLinksItemLink)} href={href} target={target}>
      {children}
    </a>
  </li>
);
