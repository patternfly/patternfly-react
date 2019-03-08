import { FunctionComponent, HTMLProps } from 'react';
import { OneOf, Omit } from '../../helpers/typeUtils';

export const IconSize: {
  sm: 'sm';
  md: 'md';
  lg: 'lg';
  xl: 'xl';
};

export interface IconProps extends Omit<HTMLProps<SVGElement>, 'size'> {
  color?: string;
  size?: OneOf<typeof IconSize, keyof typeof IconSize>;
  title?: string;
}

export interface EmptyStateIconProps extends IconProps {
  icon: string | FunctionComponent<IconProps>,
}

declare const EmptyStateIcon: FunctionComponent<EmptyStateIconProps>;

export default EmptyStateIcon;
