import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import { css } from '@patternfly/react-styles';

export interface AvatarProps extends React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {
  /** Content rendered inside the avatar, such as custom svgs or icons. */
  children?: React.ReactNode;
  /** Additional classes added to the avatar. */
  className?: string;
  /** Specifies the URL of the image for the avatar. */
  src?: string;
  /** Specifies the alternate text of the image for the avatar. Will instead set the aria-label when using children or initials; to hide the avatar
   * from assistive technologies when passing children or initials, pass an empty string to the alt prop.
   */
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
  const isAltEmptyString = alt === '';

  if (initials || children) {
    return (
      <div
        className={css(avatarClasses, color && styles.modifiers.colorful, color && styles.modifiers[color])}
        role="img"
        aria-hidden={isAltEmptyString || undefined}
        {...(!isAltEmptyString && { 'aria-label': alt })}
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
