import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

export const TabsDefaultOverflow: React.FunctionComponent = () => {
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
        isBox={isBox}
        aria-label="Tabs in the default overflow example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Default overflow content users">
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
        <Tab eventKey={7} title={<TabTitleText>Tab item 7</TabTitleText>}>
          Tab 7 section
        </Tab>
        <Tab eventKey={8} title={<TabTitleText>Tab item 8</TabTitleText>}>
          Tab 8 section
        </Tab>
        <Tab eventKey={9} title={<TabTitleText>Tab item 9</TabTitleText>}>
          Tab 9 section
        </Tab>
        <Tab eventKey={10} title={<TabTitleText>Tab item 10</TabTitleText>}>
          Tab 10 section
        </Tab>
        <Tab eventKey={11} title={<TabTitleText>Tab item 11</TabTitleText>}>
          Tab 11 section
        </Tab>
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="isBox"
          isChecked={isBox}
          onChange={toggleBox}
          aria-label="show box variation checkbox on overflow"
          id="toggle-box-overflow"
          name="toggle-box-overflow"
        />
      </div>
    </div>
  );
};
