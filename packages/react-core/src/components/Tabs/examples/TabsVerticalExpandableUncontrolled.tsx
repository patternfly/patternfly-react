import {
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useState,
  type FunctionComponent
} from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

export const TabsVerticalExpandableUncontrolled: FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (event: ReactMouseEvent<any> | ReactKeyboardEvent | MouseEvent, tabIndex: string | number) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      isVertical
      expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}
      defaultIsExpanded={false}
      toggleText="Containers"
      aria-label="Tabs in the vertical expandable uncontrolled example"
      role="region"
    >
      <Tab
        eventKey={0}
        title={<TabTitleText>Users</TabTitleText>}
        aria-label="Vertical expandable uncontrolled content users"
      >
        Users
      </Tab>
      <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
        Containers
      </Tab>
      <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
        Database
      </Tab>
      <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>
        Server
      </Tab>
      <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>
        System
      </Tab>
      <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>
        Network
      </Tab>
    </Tabs>
  );
};
