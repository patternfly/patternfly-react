import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';

export const TabsTooltipReactRef: React.FunctionComponent = () => {
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

  const tooltipRef = React.createRef<HTMLElement>();

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox={isBox}
        aria-label="Tabs in the example with a tooltip ref"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Tooltip ref content - users">
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
        <Tab
          eventKey={5}
          title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
          isAriaDisabled
          ref={tooltipRef}
          aria-describedby="tooltip-ref1"
        >
          ARIA Disabled (Tooltip)
        </Tab>
      </Tabs>
      <Tooltip
        id="tooltip-ref1"
        content="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
        reference={tooltipRef}
      />
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="isBox"
          isChecked={isBox}
          onChange={toggleBox}
          aria-label="show box variation checkbox"
          id="toggle-box-tooltip-ref"
          name="toggle-box-tooltip-ref"
        />
      </div>
    </div>
  );
};
