import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Spinner } from '../Spinner';
export interface EmptyStateIconProps {
  /** Additional classes added to the empty state icon */
  className?: string;
  /** Icon component to be rendered. Can also be a spinner component */
  icon: React.ComponentType<any>;
}

const isSpinner = (icon: React.ReactElement<any>) => icon.type === Spinner;

export const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps> = ({
  className,
  icon: IconComponent,
  ...props
}: EmptyStateIconProps) => {
  const iconIsSpinner = isSpinner(<IconComponent />);

  return (
    <div className={css(styles.emptyStateIcon)}>
      <IconComponent className={className} aria-hidden={!iconIsSpinner} {...props} />
    </div>
  );
};
EmptyStateIcon.displayName = 'EmptyStateIcon';
