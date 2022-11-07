import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

export const TabsSubtabs: React.FunctionComponent = () => {
  const [activeTabKey1, setActiveTabKey1] = React.useState<string | number>(0);
  const [activeTabKey2, setActiveTabKey2] = React.useState<string | number>(0);
  const [isBox, setIsBox] = React.useState<boolean>(false);

  // Toggle currently active primary tab
  const handleTabClickFirst = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey1(tabIndex);
  };

  // Toggle currently active secondary tab
  const handleTabClickSecond = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey2(tabIndex);
  };

  const toggleBox = (checked: boolean) => {
    setIsBox(checked);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTabKey1}
        onSelect={handleTabClickFirst}
        isBox={isBox}
        aria-label="Tabs in the tabs with subtabs example"
        role="region"
      >
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} aria-label="Tabs with subtabs content users">
          <Tabs
            aria-label="secondary tabs for users"
            role="region"
            activeKey={activeTabKey2}
            isSecondary
            onSelect={handleTabClickSecond}
          >
            <Tab eventKey={20} title={<TabTitleText>Secondary tab item 1</TabTitleText>}>
              Secondary tab item 1 item section
            </Tab>
            <Tab eventKey={21} title={<TabTitleText>Secondary tab item 2</TabTitleText>}>
              Secondary tab item 2 section
            </Tab>
            <Tab eventKey={22} title={<TabTitleText>Secondary tab item 3</TabTitleText>}>
              Secondary tab item 3 section
            </Tab>
            <Tab eventKey={23} title={<TabTitleText>Secondary tab item 4</TabTitleText>}>
              Secondary tab item 4 section
            </Tab>
            <Tab eventKey={24} title={<TabTitleText>Secondary tab item 5</TabTitleText>}>
              Secondary tab item 5 section
            </Tab>
            <Tab eventKey={25} title={<TabTitleText>Secondary tab item 6</TabTitleText>}>
              Secondary tab item 6 section
            </Tab>
            <Tab eventKey={26} title={<TabTitleText>Secondary tab item 7</TabTitleText>}>
              Secondary tab item 7 section
            </Tab>
            <Tab eventKey={27} title={<TabTitleText>Secondary tab item 8</TabTitleText>}>
              Secondary tab item 8 section
            </Tab>
          </Tabs>
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
          aria-label="show box variation checkbox with sub tabs"
          id="toggle-box-secondary"
          name="toggle-box-secondary"
        />
      </div>
    </div>
  );
};
