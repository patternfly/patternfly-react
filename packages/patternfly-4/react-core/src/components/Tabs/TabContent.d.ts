import { FunctionComponent, HTMLProps } from 'react';

export interface TabContentProps extends HTMLProps<HTMLDivElement> {
  'aria-label'?: string;
  children?: any;
  className?: string;
  eventKey?: number;
  id: string;
}

declare const TabContent: FunctionComponent<TabContentProps>;

export default TabContent;
