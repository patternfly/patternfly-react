import { FunctionComponent, HTMLProps } from 'react';

export interface TabContentProps extends HTMLProps<HTMLDivElement> {
  children?: any;
  child?: React.ReactNode;
  className?: string;
  activeKey?: number;
  eventKey?: number;
  innerRef?: any;
  id: string;
  'aria-label'?: string;
}

declare const TabContent: FunctionComponent<TabContentProps>;

export default TabContent;
