import React from 'react';
import { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';

export const TabsNav: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };
  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      component={TabsComponent.nav}
      aria-label="Tabs in the nav element example"
    >
      <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href="#users" aria-label="Nav element content users">
        Users
      </Tab>
      <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href="#containers">
        Containers
      </Tab>
      <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href="#database">
        Database
      </Tab>
      <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href="#disabled">
        Disabled
      </Tab>
      <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href="#aria-disabled">
        ARIA Disabled
      </Tab>
      <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href="#network">
        Network
      </Tab>
    </Tabs>
  );
};
