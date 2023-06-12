import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';

export interface ApplicationLauncherTextProps extends React.HTMLProps<HTMLSpanElement> {
  /** content rendered inside the text container */
  children: React.ReactNode;
  /** Additional classes added to the text container */
  className?: string;
}

export const ApplicationLauncherText: React.FunctionComponent<ApplicationLauncherTextProps> = ({
  className = '',
  children,
  ...props
}: ApplicationLauncherTextProps) => (
  <span className={css(`${styles.appLauncherMenuItem}-text`, className)} {...props}>
    {children}
  </span>
);
ApplicationLauncherText.displayName = 'ApplicationLauncherText';
