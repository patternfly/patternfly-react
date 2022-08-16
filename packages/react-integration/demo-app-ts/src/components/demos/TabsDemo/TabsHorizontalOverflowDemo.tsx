import React from 'react';
import { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';

export const TabsHorizontalOverflowDemo: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [showTabCount, setShowTabCount] = React.useState(false);
  const [defaultTitleText, setDefaultTitleText] = React.useState(undefined);
  const [toggleAriaLabel, setToggleAriaLabel] = React.useState(undefined);

  const handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: string | number) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Tabs in the horizontal overflow example"
        role="region"
        isOverflowHorizontal={{ showTabCount, defaultTitleText, toggleAriaLabel }}
      >
        <Tab
          eventKey={0}
          title={<TabTitleText>Tab item 1</TabTitleText>}
          aria-label="Horizontal overflow content Tab item 1"
        >
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}>
          Tab 3 section
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Tab item 4</TabTitleText>}>
          Tab 4 section
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>Tab item 5</TabTitleText>}>
          Tab 5 section
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Tab item 6</TabTitleText>}>
          Tab 6 section
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
      <Checkbox
        isChecked={showTabCount}
        onChange={() => setShowTabCount(!showTabCount)}
        id="toggle-show-count-overflow"
      />
      <Checkbox
        isChecked={defaultTitleText}
        onChange={() => setDefaultTitleText(defaultTitleText ? undefined : 'Overflow')}
        id="toggle-change-toggle-text"
      />
      <Checkbox
        isChecked={toggleAriaLabel}
        onChange={() => setToggleAriaLabel(toggleAriaLabel ? undefined : 'Overflow aria label')}
        id="toggle-add-aria-label"
      />
    </div>
  );
};

TabsHorizontalOverflowDemo.displayName = 'TabsHorizontalOverflowDemo';
