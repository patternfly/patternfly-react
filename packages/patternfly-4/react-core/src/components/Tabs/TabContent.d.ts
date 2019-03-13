import { FunctionComponent, HTMLProps } from 'react';

export interface TabContentProps extends HTMLProps<HTMLDivElement> {
  id: string;
}

declare const TabContent: FunctionComponent<TabContentProps>;

export default TabContent;
