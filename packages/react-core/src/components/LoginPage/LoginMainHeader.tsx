import * as React from 'react';
import { Title, TitleSizes } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Login/login';

export interface LoginMainHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the login main header */
  children?: React.ReactNode;
  /** Additional classes added to the login main header */
  className?: string;
  /** Title for the login main header */
  title?: string;
  /** Subtitle that contains the text, URL, and URL text for the login main header */
  subtitle?: string;
  /** Actions that render for the login main header */
  headerUtilities?: React.ReactNode;
}

export const LoginMainHeader: React.FunctionComponent<LoginMainHeaderProps> = ({
  children = null,
  className = '',
  title = '',
  subtitle = '',
  headerUtilities = null,
  ...props
}: LoginMainHeaderProps) => (
  <header className={css(styles.loginMainHeader, className)} {...props}>
    {title && (
      <Title headingLevel="h2" size={TitleSizes['3xl']}>
        {title}
      </Title>
    )}
    {subtitle && <p className={css(styles.loginMainHeaderDesc)}>{subtitle}</p>}
    {headerUtilities && <div className={css(styles.loginMainHeaderUtilities)}>{headerUtilities}</div>}
    {children}
  </header>
);
LoginMainHeader.displayName = 'LoginMainHeader';
