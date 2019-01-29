import { SFC, HTMLProps } from 'react';

export interface TabProps extends HTMLProps<HTMLDivElement> {
  title: string;
  eventKey: number;
}

declare const Tab: SFC<TabProps>;

export default Tab;
