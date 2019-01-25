import { FunctionComponent, HTMLProps } from 'react';

export interface TabProps extends HTMLProps<HTMLDivElement> {
  title: string;
  eventKey: number;
}

declare const Tab: FunctionComponent<TabProps>;

export default Tab;
