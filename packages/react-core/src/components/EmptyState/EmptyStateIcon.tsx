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
  /** Icon component to be rendered. Can also be a spinner component */
  icon: React.ComponentType<any>;
}

const isSpinner = (icon: React.ReactElement<any>) => icon.type === Spinner;

export const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps> = ({
  className,
  icon: IconComponent,
  color,
  ...props
}: EmptyStateIconProps) => (
  <div className={css(styles.emptyStateIcon)}>
    {isSpinner(<IconComponent />) ? (
      <IconComponent className={className} {...props} />
    ) : (
      <IconComponent
        className={className}
        aria-hidden="true"
        {...(color && { style: { ['--pf-c-empty-state__icon--Color']: color } as React.CSSProperties })}
        {...props}
      />
    )}
  </div>
);
EmptyStateIcon.displayName = 'EmptyStateIcon';
