import { FunctionComponent, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface TabContentProps extends Omit<HTMLProps<HTMLDivElement>, 'onSelect'> {
  activeKey?: number;
  child: any;
  id?: string;
}

declare const TabContent: FunctionComponent<TabContentProps>;

export default TabContent;
