import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Spinner } from '../Spinner';
import cssIconColor from '@patternfly/react-tokens/dist/esm/c_empty_state__icon_Color';

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
}: EmptyStateIconProps) => {
  const iconIsSpinner = isSpinner(<IconComponent />);
  return (
    <div
      className={css(styles.emptyStateIcon)}
      {...(color && !iconIsSpinner && { style: { [cssIconColor.name]: color } as React.CSSProperties })}
    >
      <IconComponent className={className} aria-hidden={!iconIsSpinner} {...props} />
    </div>
  );
};
EmptyStateIcon.displayName = 'EmptyStateIcon';
