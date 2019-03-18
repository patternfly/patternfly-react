import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

export interface AboutModalBoxBrandProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the About Modal Brand */
  className?: string;
  /** the URL of the image for the Brand. */
  src: string;
  /** the alternate text of the Brand image. */
  alt: string;
};

const AboutModalBoxBrand: React.FunctionComponent<AboutModalBoxBrandProps> = ({
  className = '',
  src = '',
  alt,
  ...props
}: AboutModalBoxBrandProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} className={css(styles.aboutModalBoxBrand, className)}>
      <img className={css(styles.aboutModalBoxBrandImage)} src={src} alt={alt} />
    </div>
  );

export default AboutModalBoxBrand;
