import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';

export interface ApplicationLauncherTextProps extends HTMLProps<HTMLSpanElement> {
  /** content rendered inside the text container */
  children: ReactNode;
  /** Additional classes added to the text container */
  className?: string;
}

export const ApplicationLauncherText: FunctionComponent<ApplicationLauncherTextProps> = ({
  className = '',
  children,
  ...props
}: ApplicationLauncherTextProps) => (
  <span className={css(`${styles.appLauncherMenuItem}-text`, className)} {...props}>
    {children}
  </span>
);
ApplicationLauncherText.displayName = 'ApplicationLauncherText';
