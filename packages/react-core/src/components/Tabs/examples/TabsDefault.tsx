import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

export const TabsDefault: React.FunctionComponent = () => {
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

  const tooltip = (
    <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
  );
  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox={isBox}
        aria-label="Tabs in the default example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Default content - users">
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
        <Tab tooltip={tooltip} eventKey={5} title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>} isAriaDisabled>
          ARIA Disabled (Tooltip)
        </Tab>
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="isBox"
          isChecked={isBox}
          onChange={toggleBox}
          aria-label="show box variation checkbox"
          id="toggle-box-default"
          name="toggle-box-default"
        />
      </div>
    </div>
  );
};
