import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModelBox.  */
  children: React.ReactNode;
  /** additional classes added to the AboutModalBox  */
  className?: string;
};

export const AboutModalBox: React.SFC<AboutModalBoxProps> = ({
  children,
  className = '',
  ...props
}: AboutModalBoxProps) => (
  <div role="dialog" aria-modal="true" className={css(styles.aboutModalBox, className)} {...props}>
    {children}
  </div>
);
