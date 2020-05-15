import * as React from 'react';

export interface TabProps extends Omit<React.HTMLProps<HTMLAnchorElement | HTMLButtonElement>, 'title'> {
  /** content rendered inside the Tab content area. */
  children?: React.ReactNode;
  /** additional classes added to the Tab */
  className?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href?: string;
  /** Content rendered in the tab title. Should be <TabTitleText> and/or <TabTitleIcon> for proper styling. */
  title: React.ReactNode;
  /** uniquely identifies the tab */
  eventKey: number | string;
  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId?: string | number;
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: React.RefObject<any>;
  /** whether to render the tab or not */
  isHidden?: boolean;
}

export const Tab: React.FunctionComponent<TabProps> = () => null;
