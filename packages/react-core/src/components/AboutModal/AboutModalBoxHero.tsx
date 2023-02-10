import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
// eslint-disable-next-line camelcase
import c_about_modal_box__hero_sm_BackgroundImage from '@patternfly/react-tokens/dist/esm/c_about_modal_box__hero_sm_BackgroundImage';

export interface AboutModalBoxHeroProps extends React.HTMLProps<HTMLDivElement> {
  /** Background image data or file path  */
  backgroundImageSrc?: string;
}

export const AboutModalBoxHero: React.FunctionComponent<AboutModalBoxHeroProps> = ({
  backgroundImageSrc,
  ...props
}: AboutModalBoxHeroProps) => (
  <div
    style={
      /* eslint-disable camelcase */
      backgroundImageSrc !== ''
        ? { [c_about_modal_box__hero_sm_BackgroundImage.name as string]: `url(${backgroundImageSrc})` }
        : {}
      /* eslint-enable camelcase */
    }
    className={css(styles.aboutModalBoxHero)}
    {...props}
  />
);
AboutModalBoxHero.displayName = 'AboutModalBoxHero';
