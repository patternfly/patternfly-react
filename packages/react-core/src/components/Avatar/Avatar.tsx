import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import { css } from '@patternfly/react-styles';

export interface AvatarProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** Additional classes added to the avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the avatar. */
  src?: string;
  /** Attribute that specifies the alternate text of the image for the avatar. */
  alt: string;
  /** Flag to indicate the avatar should have a border. */
  isBordered?: boolean;
  /** Size variant of avatar. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  className,
  src = '',
  alt,
  isBordered,
  size,
  ...props
}: AvatarProps) => (
  <img
    src={src}
    alt={alt}
    className={css(styles.avatar, styles.modifiers[size], isBordered && styles.modifiers.bordered, className)}
    {...props}
  />
);
Avatar.displayName = 'Avatar';
