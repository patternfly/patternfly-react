import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Omit } from '../../helpers/typeUtils';

export enum IconSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export interface IconProps extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
}

export interface EmptyStateIconProps extends IconProps {
  /** Additional classes added to the EmptyState */
  className?: string;
  /** Icon component to be rendered inside the EmptyState */
  icon: string | React.FunctionComponent<IconProps>;
}

export const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps> = ({
  className = '',
  icon: IconComponent,
  ...props
}: EmptyStateIconProps) => (
  <IconComponent className={css(styles.emptyStateIcon, className)} {...props} aria-hidden="true" />
);
