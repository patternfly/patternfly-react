import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxHeroProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Hero */
  className?: string;
};

const AboutModalBoxHero: React.FunctionComponent<AboutModalBoxHeroProps> = ({
  className = '',
  ...props
}: AboutModalBoxHeroProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} className={css(styles.aboutModalBoxHero, className)} />
  );

export default AboutModalBoxHero;
