import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import { css } from '@patternfly/react-styles';
import { Spinner } from '../Spinner';

export interface IconComponentProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  /** Icon content */
  children?: React.ReactNode;
  /** Icon when isInProgress is set to true. Defaults to a 1em spinner.  */
  progressIcon?: React.ReactNode;
  /** Additional classes applied to the icon container */
  className?: string;
  /** Size of the icon component container and icon. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of icon. Overrides the icon size set by the size property. */
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of progress icon. Overrides the icon size set by the size property. */
  progressIconSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Status color of the icon */
  status?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  isInline?: boolean;
  /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
  isInProgress?: boolean;
  /** Aria-label for the default progress icon */
  defaultProgressArialabel?: string;
}

export const Icon: React.FunctionComponent<IconComponentProps> = ({
  children,
  className,
  progressIcon,
  size,
  iconSize,
  progressIconSize,
  status,
  isInline = false,
  isInProgress = false,
  defaultProgressArialabel = 'Loading...',
  ...props
}: IconComponentProps) => {
  const _progressIcon = progressIcon ? (
    progressIcon
  ) : (
    <Spinner diameter="1em" isSVG aria-label={defaultProgressArialabel} />
  );

  return (
    <span
      className={css(
        styles.icon,
        isInline && styles.modifiers.inline,
        isInProgress && styles.modifiers.inProgress,
        styles.modifiers[size],
        className
      )}
      {...props}
    >
      <span className={css(styles.iconContent, styles.modifiers[iconSize], styles.modifiers[status])}>{children}</span>
      {isInProgress && (
        <span className={css(styles.iconProgress, styles.modifiers[progressIconSize], className)}>{_progressIcon}</span>
      )}
    </span>
  );
};
Icon.displayName = 'Icon';
