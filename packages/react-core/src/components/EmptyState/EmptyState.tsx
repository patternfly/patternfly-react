import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { EmptyStateHeader, EmptyStateHeadingLevel } from './EmptyStateHeader';
import { EmptyStateIconProps } from './EmptyStateIcon';
import { statusIcons } from '../../helpers';

export enum EmptyStateVariant {
  'xs' = 'xs',
  sm = 'sm',
  lg = 'lg',
  'xl' = 'xl',
  full = 'full'
}

export type EmptyStateStatus = 'danger' | 'warning' | 'success' | 'info' | 'custom';
export type EmptyStateVariantType = 'xs' | 'sm' | 'lg' | 'xl' | 'full';

export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the empty state */
  className?: string;
  /** Content rendered inside the empty state */
  children?: React.ReactNode;
  /** Modifies empty state max-width and sizes of icon, title and body */
  variant?: EmptyStateVariantType;
  /** Cause component to consume the available height of its container */
  isFullHeight?: boolean;
  /** Status of the empty state, will set a default status icon and color. Icon can be overwritten using the icon prop */
  status?: EmptyStateStatus;
  /** Additional class names to apply to the empty state header */
  headerClassName?: string;
  /** Additional props passed to the empty state header container */
  headerProps?: React.HTMLProps<HTMLDivElement>;
  /** Additional classes added to the title inside empty state header */
  titleClassName?: string;
  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  titleText: React.ReactNode;
  /** Empty state icon element to be rendered. Can also be a spinner component */
  icon?: React.ComponentType<any>;
  /** Additional props passed to the icon element */
  iconProps?: EmptyStateIconProps;
  /** The heading level to use, default is h1 */
  headingLevel?: EmptyStateHeadingLevel;
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className,
  variant = 'full',
  isFullHeight,
  status,
  icon: customIcon,
  titleText,
  titleClassName,
  headerClassName,
  headingLevel,
  headerProps,
  ...props
}: EmptyStateProps) => {
  const statusIcon = status && statusIcons[status];
  const icon = customIcon || statusIcon;

  return (
    <div
      className={css(
        styles.emptyState,
        variant === 'xs' && styles.modifiers.xs,
        variant === 'sm' && styles.modifiers.sm,
        variant === 'lg' && styles.modifiers.lg,
        variant === 'xl' && styles.modifiers.xl,
        isFullHeight && styles.modifiers.fullHeight,
        status && styles.modifiers[status],
        className
      )}
      {...props}
    >
      <div className={css(styles.emptyStateContent)}>
        <EmptyStateHeader
          icon={icon}
          titleText={titleText}
          titleClassName={titleClassName}
          className={headerClassName}
          headingLevel={headingLevel}
          {...headerProps}
        />
        {children}
      </div>
    </div>
  );
};
EmptyState.displayName = 'EmptyState';
