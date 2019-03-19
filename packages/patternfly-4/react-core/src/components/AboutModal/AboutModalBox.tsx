import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModelBox. */
  children: React.ReactNode;
  /** additional classes added to the AboutModalBox */
  className?: string;
  /** id to use for About Modal Box aria-labelledby attribute */
  'aria-labelledby': string;
  /** id to use for About Modal Box aria-describedby attribute */
  'aria-describedby': string;
};

const AboutModalBox: React.FunctionComponent<AboutModalBoxProps> = ({
  children,
  className = '',
  ...props
}: AboutModalBoxProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} role="dialog" aria-modal="true" className={css(styles.aboutModalBox, className)}>
      {children}
    </div>
  );

export default AboutModalBox;
