import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';

export interface AboutModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModelBox. */
  children: React.ReactNode;
}

export const AboutModalBox: React.FunctionComponent<AboutModalBoxProps> = ({
  children,
  ...props
}: AboutModalBoxProps) => (
  <div className={css(styles.aboutModalBox)} {...props}>
    {children}
  </div>
);
AboutModalBox.displayName = 'AboutModalBox';
