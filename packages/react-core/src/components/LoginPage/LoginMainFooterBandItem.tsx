import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterBandItemProps extends HTMLProps<HTMLParagraphElement> {
  /** Content rendered inside the footer link item */
  children?: ReactNode;
  /** Additional classes added to the footer link item  */
  className?: string;
}

export const LoginMainFooterBandItem: FunctionComponent<LoginMainFooterBandItemProps> = ({
  children = null,
  className = '',
  ...props
}: LoginMainFooterBandItemProps) => (
  <p className={css(`${styles.loginMainFooterBand}-item`, className)} {...props}>
    {children}
  </p>
);
LoginMainFooterBandItem.displayName = 'LoginMainFooterBandItem';
