import {
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useState,
  type FunctionComponent
} from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

export const TabsVerticalExpandable: FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // Toggle currently active tab
  const handleTabClick = (event: ReactMouseEvent<any> | ReactKeyboardEvent | MouseEvent, tabIndex: string | number) => {
    setActiveTabKey(tabIndex);
  };

  const onToggle = (_event: ReactMouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      isVertical
      expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}
      isExpanded={isExpanded}
      onToggle={onToggle}
      toggleText="Containers"
      aria-label="Tabs in the vertical expandable example"
      role="region"
    >
      <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Vertical expandable content users">
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
