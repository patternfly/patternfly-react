import React from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

export const TabsDynamic: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<number>(0);
  const [tabs, setTabs] = React.useState<string[]>([
    'Terminal 1',
    'Terminal 2',
    'Terminal 3',
    'Terminal 4',
    'Terminal 5',
    'Terminal 6',
    'Terminal 7',
    'Terminal 8'
  ]);

  const onClose = (event: any, tabIndex: string | number) => {
    if (tabIndex === activeTabKey) {
      setActiveTabKey(0);
    }
    setTabs(tabs.filter((tab, index) => index !== tabIndex));
  };

  const onAdd = () => {
    setTabs([...tabs, `Terminal ${tabs.length + 1}`]);
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={(event: any, tabIndex: string | number) => setActiveTabKey(tabIndex as number)}
      onClose={onClose}
      onAdd={onAdd}
      aria-label="Tabs in the addable/closeable example"
      addAriaLabel="Add tab"
    >
      {tabs.map((tab, index) => (
        <Tab key={index} eventKey={index} title={<TabTitleText>{tab}</TabTitleText>} closeAriaLabel={`Close ${tab}`}>
          {tab}
        </Tab>
      ))}
    </Tabs>
  );
};
