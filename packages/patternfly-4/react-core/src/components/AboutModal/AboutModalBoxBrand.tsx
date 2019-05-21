import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxBrandProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Brand  */
  className?: string;
  /** the URL of the image for the Brand.  */
  src?: string;
  /** the alternate text of the Brand image.  */
  alt: string;
};

export const AboutModalBoxBrand: React.SFC<AboutModalBoxBrandProps> = ({
  className = '',
  src = '',
  alt,
  ...props
}: AboutModalBoxBrandProps) => (
  <div className={css(styles.aboutModalBoxBrand, className)} {...props}>
    <img className={css(styles.aboutModalBoxBrandImage)} src={src} alt={alt} />
  </div>
);
