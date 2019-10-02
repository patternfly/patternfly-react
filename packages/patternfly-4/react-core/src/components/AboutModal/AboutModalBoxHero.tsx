import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import { c_about_modal_box__hero_sm_BackgroundImage } from '@patternfly/react-tokens';

export interface AboutModalBoxHeroProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Hero  */
  className?: string;
  /** background image data or file path  */
  backgroundImageSrc?: string;
}

export const AboutModalBoxHero: React.SFC<AboutModalBoxHeroProps> = ({
  className,
  backgroundImageSrc,
  ...props
}: AboutModalBoxHeroProps) => (
  <div
    style={
      backgroundImageSrc !== ''
        ? { [c_about_modal_box__hero_sm_BackgroundImage.name as string]: `url(${backgroundImageSrc})` }
        : {}
    }
    className={css(styles.aboutModalBoxHero, className)}
    {...props}
  />
);
