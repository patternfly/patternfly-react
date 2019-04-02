import { FunctionComponent, HTMLProps } from 'react';

export interface TabProps extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
  children?: node;
  className?: string;
  eventKey: number;
  id?: string;
  tabContentId?: string|number;
  tabContentRef?: elementType;
  title: string;
}

declare const Tab: FunctionComponent<TabProps>;

export default Tab;
