import { HTMLProps, ComponentType, ReactElement, FunctionComponent, CSSProperties } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { Spinner } from '../Spinner';
import cssIconColor from '@patternfly/react-tokens/dist/esm/c_empty_state__icon_Color';

export interface IconProps extends Omit<HTMLProps<SVGElement>, 'size'> {
  /** Changes the color of the icon.  */
  color?: string;
}

export interface EmptyStateIconProps extends IconProps {
  /** Additional classes added to the empty state icon */
  className?: string;
  /** Icon component to be rendered. Can also be a spinner component */
  icon: ComponentType<any>;
}

const isSpinner = (icon: ReactElement<any>) => icon.type === Spinner;

export const EmptyStateIcon: FunctionComponent<EmptyStateIconProps> = ({
  className,
  icon: IconComponent,
  color,
  ...props
}: EmptyStateIconProps) => {
  const iconIsSpinner = isSpinner(<IconComponent />);
  return (
    <div
      className={css(styles.emptyStateIcon)}
      {...(color && !iconIsSpinner && { style: { [cssIconColor.name]: color } as CSSProperties })}
    >
      <IconComponent className={className} aria-hidden={!iconIsSpinner} {...props} />
    </div>
  );
};
EmptyStateIcon.displayName = 'EmptyStateIcon';
