import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

export const TabsBoxSecondary: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [isTabsBoxSecondary, setIsTabsBoxSecondary] = React.useState<boolean>(true);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  const toggleScheme = (checked: boolean) => {
    setIsTabsBoxSecondary(checked);
  };

  const tooltip = (
    <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
  );
  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        variant={isTabsBoxSecondary ? 'secondary' : 'default'}
        isBox
        aria-label="Tabs in the box light variation example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Box light variation content - users">
          Users
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
          Database
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>
          Disabled
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>
          ARIA Disabled
        </Tab>
        <Tab eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled tooltip={tooltip}>
          ARIA Disabled (Tooltip)
        </Tab>
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="Tabs secondary variant"
          isChecked={isTabsBoxSecondary}
          onChange={(_event, checked) => toggleScheme(checked)}
          id="toggle-tabs-variant"
          name="toggle-tabs-variant"
        />
      </div>
    </div>
  );
};
