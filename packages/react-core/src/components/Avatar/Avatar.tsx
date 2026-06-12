import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import { css } from '@patternfly/react-styles';

export interface AvatarProps extends React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {
  /** Content rendered inside the avatar. */
  children?: React.ReactNode;
  /** Additional classes added to the avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the avatar. */
  src?: string;
  /** Attribute that specifies the alternate text of the image for the avatar. Will set aria-label for children or initials avatars. */
  alt: string;
  /** Flag to indicate the avatar should have a border. */
  isBordered?: boolean;
  /** Size variant of avatar. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Color of the avatar. */
  color?: 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'gray';
  /** Initials of the avatar. */
  initials?: string;
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  children,
  className,
  src = '',
  alt,
  isBordered,
  size,
  color,
  initials,
  ...props
}: AvatarProps) => {
  const avatarClasses = css(styles.avatar, styles.modifiers[size], isBordered && styles.modifiers.bordered, className);

  if (initials || children) {
    return (
      <div
        className={css(avatarClasses, color && styles.modifiers.colorful, color && styles.modifiers[color])}
        role="img"
        aria-label={alt}
        {...props}
      >
        {initials && (
          <span className="pf-v6-c-avatar__initials" aria-hidden="true">
            {initials}
          </span>
        )}
        {children && children}
      </div>
    );
  }

  return <img src={src} alt={alt} className={avatarClasses} {...props} />;
};
Avatar.displayName = 'Avatar';
