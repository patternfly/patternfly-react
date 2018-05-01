import { SFC, HTMLAttributes } from 'react';
import { IconProps } from '../Icon';

export interface EmptyStateIconProps extends IconProps {
  /** Additional element css classes */
  className: string;
}

declare const EmptyStateIcon: SFC<EmptyStateIconProps>;

export default EmptyStateIcon;
