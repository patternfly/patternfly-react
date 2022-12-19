import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

export const TabsBoxLight: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [isTabsLightScheme, setIsTabsLightScheme] = React.useState<boolean>(true);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  const toggleScheme = (checked: boolean) => {
    setIsTabsLightScheme(checked);
  };

  const tooltip = (
    <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
  );
  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        variant={isTabsLightScheme ? 'light300' : 'default'}
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
          label="Tabs light variation"
          isChecked={isTabsLightScheme}
          onChange={toggleScheme}
          aria-label="show light scheme variation checkbox"
          id="toggle-scheme"
          name="toggle-scheme"
        />
      </div>
    </div>
  );
};
