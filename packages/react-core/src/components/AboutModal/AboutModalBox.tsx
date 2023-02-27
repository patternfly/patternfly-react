import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';

export interface AboutModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the about modal box */
  children: React.ReactNode;
  /** Additional classes added to the about modal box */
  className?: string;
}

export const AboutModalBox: React.FunctionComponent<AboutModalBoxProps> = ({
  children,
  className,
  ...props
}: AboutModalBoxProps) => (
  <div className={css(styles.aboutModalBox, className)} {...props}>
    {children}
  </div>
);
AboutModalBox.displayName = 'AboutModalBox';
