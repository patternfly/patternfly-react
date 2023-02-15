import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';

export interface AboutModalBoxBrandProps extends React.HTMLProps<HTMLDivElement> {
  /** The URL of the image for the brand.  */
  src: string;
  /** The alternate text of the brand image.  */
  alt: string;
}

export const AboutModalBoxBrand: React.FunctionComponent<AboutModalBoxBrandProps> = ({
  src,
  alt,
  ...props
}: AboutModalBoxBrandProps) => (
  <div className={css(styles.aboutModalBoxBrand)} {...props}>
    <img className={css(styles.aboutModalBoxBrandImage)} src={src} alt={alt} />
  </div>
);
AboutModalBoxBrand.displayName = 'AboutModalBoxBrand';
