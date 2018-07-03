import { SFC } from 'react';
import { IconProps as BaseIconProps } from './common';
import { IconMapKey } from './icons';

export interface IconProps extends BaseIconProps {
  name?: IconMapKey;
}

declare const Icon: SFC<IconProps>;

export default Icon;
