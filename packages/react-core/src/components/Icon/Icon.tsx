import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import { css } from '@patternfly/react-styles';
import { Spinner } from '../Spinner';

export type IconSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'headingXl'
  | 'heading_2xl'
  | 'heading_3xl'
  | 'bodySm'
  | 'bodyDefault'
  | 'bodyLg';

export interface IconComponentProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  /** Icon content */
  children?: React.ReactNode;
  /** Icon when isInProgress is set to true. Defaults to a 1em spinner.  */
  progressIcon?: React.ReactNode;
  /** Additional classes applied to the icon container */
  className?: string;
  /** Size of the icon component container and icon. */
  size?: IconSize;
  /** Size of icon. Overrides the icon size set by the size property. */
  iconSize?: IconSize;
  /** Size of progress icon. Overrides the icon size set by the size property. */
  progressIconSize?: IconSize;
  /** Status color of the icon */
  status?: 'custom' | 'info' | 'success' | 'warning' | 'danger';
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  isInline?: boolean;
  /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
  isInProgress?: boolean;
  /** Aria-label for the default progress icon */
  defaultProgressArialabel?: string;
  /** Flag indicating whether the icon passed as children should be mirrored for
   * right to left (RTL) languages. This will not mirror the icon passed to progressIcon.
   */
  shouldMirrorRTL?: boolean;
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
  shouldMirrorRTL = false,
  ...props
}: IconComponentProps) => {
  const _progressIcon = progressIcon ?? <Spinner diameter="1em" aria-label={defaultProgressArialabel} />;

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
      <span
        className={css(
          styles.iconContent,
          styles.modifiers[iconSize],
          styles.modifiers[status],
          shouldMirrorRTL && 'pf-v6-m-mirror-inline-rtl'
        )}
      >
        {children}
      </span>
      {isInProgress && (
        <span className={css(styles.iconProgress, styles.modifiers[progressIconSize], className)}>{_progressIcon}</span>
      )}
    </span>
  );
};
Icon.displayName = 'Icon';
