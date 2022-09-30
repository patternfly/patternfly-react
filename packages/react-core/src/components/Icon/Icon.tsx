import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import { css } from '@patternfly/react-styles';
import { Spinner } from '../Spinner';

export interface IconComponentProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  /** Icon content when isInProgress is set to false */
  children?: React.ReactNode;
  /** Icon content when isInProgress is set to true  */
  progressIcon?: React.ReactNode;
  /** Additional classes applied to the icon container */
  className?: string;
  /** Size of the icon */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of icon content. Overrides size property. */
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Status color of the icon */
  status?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  isInline?: boolean;
  /** Indicates the icon is in progress. Setting this property to true will swap the icon content to the progressIcon. */
  isInProgress?: boolean;
}

export const Icon: React.FunctionComponent<IconComponentProps> = ({
  children,
  progressIcon = <Spinner size="md" diameter="1em" isSVG aria-label="Loading..." />,
  className,
  size,
  iconSize,
  status,
  isInline = false,
  isInProgress = false,
  ...props
}: IconComponentProps) => (
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
    {progressIcon && <span className={css(styles.iconProgress, className)}>{progressIcon}</span>}
  </span>
);
Icon.displayName = 'Icon';
