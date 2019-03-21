import { FunctionComponent, HTMLProps } from 'react';

export interface TabContentProps extends HTMLProps<HTMLDivElement> {
  activeKey?: number;
  child?: node;
  children?: any;
  className?: string;
  eventKey?: number;
  'aria-label'?: string;
}

declare const TabContent: FunctionComponent<TabContentProps>;

export default TabContent;
