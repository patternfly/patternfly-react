import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface TabProps extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
  children?: ReactNode;
  className?: string;
  href?: string;
  eventKey: number;
  id?: string;
  tabContentId?: string | number;
  tabContentRef?: HTMLElement;
  title: string;
}

declare const Tab: FunctionComponent<TabProps>;

export default Tab;
