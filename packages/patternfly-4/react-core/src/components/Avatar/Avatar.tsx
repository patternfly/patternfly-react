import styles from '@patternfly/patternfly/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';
import * as React from 'react';

const defaultProps = {
  className: '',
  src: ''
};

/**
 * Column properties.
 */
export interface AvatarProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** Additional classes added to the Avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the Avatar. */
  src?: string;
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: string;
}

const Avatar: React.FunctionComponent<AvatarProps> = props => (
  <img {...props} className={css(styles.avatar, props.className)} />
);

Avatar.defaultProps = defaultProps;

export default Avatar;
