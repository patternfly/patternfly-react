import { IconProps } from '../Icon';
import { SFC } from 'react';

export type ListViewIconSize = 'sm' | 'md' | 'lg';

export interface ListViewIconProps extends IconProps {
  /** Icon size (sm, md, lg), defaults to 'sm' */
  size?: ListViewIconSize;
}

declare const ListViewIcon: SFC<ListViewIconProps>;

export default ListViewIcon;
