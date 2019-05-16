import * as React from 'react';
import styles from '@patternfly/patternfly/components/Login/login.css';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterBandItemProps extends React.HTMLProps<HTMLParagraphElement> {
  /** Content rendered inside the footer Link Item */
  children?: React.ReactNode;
  /** Additional classes added to the Footer Link Item  */
  className?: string;
}

export const LoginMainFooterBandItem: React.FunctionComponent<LoginMainFooterBandItemProps> = ({
  children = null,
  className = '',
  ...props
}) => (
  <p className={css(`${styles.loginMainFooterBand}-item`, className)} {...props}>
    {children}
  </p>
);

export default LoginMainFooterBandItem;
