import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Spinner } from '../Spinner';

export interface IconProps extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  /** Changes the color of the icon.  */
  color?: string;
}

export interface EmptyStateIconProps extends IconProps {
  /** Additional classes added to the EmptyStateIcon */
  className?: string;
  /** Icon component to be rendered inside the EmptyState on icon variant
   * Usually a CheckCircleIcon, ExclamationCircleIcon, LockIcon, PlusCircleIcon, RocketIcon
   * SearchIcon, or WrenchIcon. Can be a Spinner component too.*/
  icon: React.ComponentType<any>;
}

const isSpinner = (icon: React.ReactElement<any>) => icon.type === Spinner;

export const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps> = ({
  className = '',
  icon: IconComponent,
  ...props
}: EmptyStateIconProps) => (
    <div className={css(styles.emptyStateIcon, className)}>
      {isSpinner(<IconComponent />) ? <IconComponent /> : <IconComponent {...props} aria-hidden="true" />}
    </div>
  );
EmptyStateIcon.displayName = 'EmptyStateIcon';
