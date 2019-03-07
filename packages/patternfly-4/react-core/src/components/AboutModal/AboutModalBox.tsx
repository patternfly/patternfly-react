import React, { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxProps extends HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModelBox. */
  children: ReactNode;
  /** additional classes added to the AboutModalBox */
  className?: string;
  /** id to use for About Modal Box aria-labelledby attribute */
  ariaLabelledbyId: string;
  /** id to use for About Modal Box aria-describedby attribute */
  ariaDescribedById: string;
};

export const defaultProps = {
  className: ''
};

const AboutModalBox: FunctionComponent<AboutModalBoxProps> = ({ children, className, ...props }: AboutModalBoxProps) => (
  /** Additional props are spread to the container <div> */
  <div {...props} role="dialog" aria-modal="true" className={css(styles.aboutModalBox, className)}>
    {children}
  </div>
);
AboutModalBox.defaultProps = defaultProps;

export default AboutModalBox;
