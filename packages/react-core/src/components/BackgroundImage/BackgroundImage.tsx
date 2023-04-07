import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
// eslint-disable-next-line camelcase
import c_background_image_BackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';

export interface BackgroundImageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'src'> {
  /** Additional classes added to the background image. */
  className?: string;
  /** The URL or file path of the image for the background */
  src: string;
}

export const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({
  className,
  src,
  ...props
}: BackgroundImageProps) => (
  <div
    className={css(styles.backgroundImage, className)}
    /* eslint-disable camelcase */
    style={{
      [c_background_image_BackgroundImage.name as string]: `url(${src})`
    }}
    /* eslint-enable camelcase */
    {...props}
  ></div>
);

BackgroundImage.displayName = 'BackgroundImage';
