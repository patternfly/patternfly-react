import React from 'react';
import { Tabs, Tab, TabTitleText, Tooltip } from '@patternfly/react-core';

export const TabsUncontrolled: React.FunctionComponent = () => {
  const tooltip = (
    <Tooltip content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support." />
  );

  return (
    <>
      <Tabs defaultActiveKey={0} aria-label="Tabs in the uncontrolled example" role="region">
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Uncontrolled ref content - users">
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
    </>
  );
};
