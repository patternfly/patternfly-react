import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import { css } from '@patternfly/react-styles';

export interface IconComponentProps extends React.HTMLProps<HTMLSpanElement> {
  /** Icon content */
  children?: React.ReactNode;
  /** Progress icon content */
  progressIcon?: React.ReactNode;
  /** Additional classes applied to the icon container */
  className?: string;
  /** Size of the icon */
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of icon content */
  contentSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Status color of the icon */
  status?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  /** Indicates the icon is inline */
  isInline?: boolean;
  /** Indicates the icon is in progress. Setting this property to true will hide any children, and make the progressIcon property visible. */
  isInProgress?: boolean;
}

export const Icon: React.FunctionComponent<IconComponentProps> = ({
  children,
  progressIcon,
  className,
  containerSize,
  contentSize,
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
      styles.modifiers[containerSize],
      className
    )}
    {...props}
  >
    <span className={css(styles.iconContent, styles.modifiers[contentSize], styles.modifiers[status])}>{children}</span>
    {progressIcon && <span className={css(styles.iconProgress, className)}>{progressIcon}</span>}
  </span>
);
Icon.displayName = 'Icon';
