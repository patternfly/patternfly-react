import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

export const TabsPageInsets: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [isBox, setIsBox] = React.useState<boolean>(false);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  const toggleBox = (checked: boolean) => {
    setIsBox(checked);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        usePageInsets
        isBox={isBox}
        aria-label="Tabs in the page insets example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Page insets example content users">
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
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="isBox"
          isChecked={isBox}
          onChange={toggleBox}
          aria-label="show box variation checkbox with inset"
          id="toggle-box-page-inset"
          name="toggle-box-page-inset"
        />
      </div>
    </div>
  );
};
