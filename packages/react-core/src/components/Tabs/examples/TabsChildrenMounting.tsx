import {
  useState,
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent
} from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

export const TabsChildrenMounting: FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (event: ReactMouseEvent<any> | ReactKeyboardEvent | MouseEvent, tabIndex: string | number) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <Tabs
      mountOnEnter
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      aria-label="Tabs in the children mounting on click example"
      role="region"
    >
      <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} aria-label="Tab 1">
        Tab 1 section
      </Tab>
      <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>} aria-label="Tab 2">
        Tab 2 section
      </Tab>
      <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>} aria-label="Tab 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
};
