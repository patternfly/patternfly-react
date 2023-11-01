import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import cssBackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';

export interface BackgroundImageProps extends React.HTMLProps<HTMLDivElement> {
  /** The URL or file path of the image for the background */
  src: string;
  /** Additional classes added to the background image. */
  className?: string;
}

export const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({
  className,
  src,
  ...props
}: BackgroundImageProps) => (
  <div
    className={css(styles.backgroundImage, className)}
    style={
      {
        [cssBackgroundImage.name]: `url(${src})`
      } as React.CSSProperties
    }
    {...props}
  />
);

BackgroundImage.displayName = 'BackgroundImage';
