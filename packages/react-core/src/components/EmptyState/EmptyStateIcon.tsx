import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Spinner } from '../Spinner';

export interface IconProps extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  /** Changes the color of the icon.  */
  color?: string;
}

export interface EmptyStateIconProps extends IconProps {
  /** Additional classes added to the empty state icon */
  className?: string;
  /** Icon component to be rendered inside the empty state on icon variant
   * Usually a CheckCircleIcon, ExclamationCircleIcon, LockIcon, PlusCircleIcon, RocketIcon
   * SearchIcon, or WrenchIcon. Can be a spinner component too.*/
  icon: React.ComponentType<any>;
}

const isSpinner = (icon: React.ReactElement<any>) => icon.type === Spinner;

export const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps> = ({
  className,
  icon: IconComponent,
  color,
  ...props
}: EmptyStateIconProps) => (
  isSpinner(<IconComponent />) ? (
    <div className={css(styles.emptyStateIcon, className)}>
      <IconComponent
        aria-hidden="true"
        {...props}
      />
    </div>
  ) : (
    <IconComponent
      className={css(className)}
      {...(color && { style: { ['--pf-c-empty-state__icon--Color']: color } as React.CSSProperties })}
      {...props}
    />
  )
);
EmptyStateIcon.displayName = 'EmptyStateIcon';
