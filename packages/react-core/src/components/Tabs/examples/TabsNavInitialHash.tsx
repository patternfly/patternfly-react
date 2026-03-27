import { useState } from 'react';
import { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';

const tabs = [
  {
    eventKey: 0,
    title: 'Users',
    href: '#users',
    ariaLabel: 'Nav element content users'
  },
  {
    eventKey: 1,
    title: 'Containers',
    href: '#containers'
  },
  {
    eventKey: 2,
    title: 'Database',
    href: '#database'
  },
  {
    eventKey: 3,
    title: 'Disabled',
    href: '#disabled',
    isDisabled: true
  },
  {
    eventKey: 4,
    title: 'ARIA Disabled',
    href: '#aria-disabled',
    isAriaDisabled: true
  },
  {
    eventKey: 6,
    title: 'Network',
    href: '#network'
  }
];

export const TabsNavInitialHash: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(tabs[0].eventKey);

  const handleTabClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      component={TabsComponent.nav}
      aria-label="Tabs in the nav element example"
    >
      {tabs.map(({ eventKey, title, href, ariaLabel, ...tabProps }) => (
        <Tab
          key={eventKey}
          eventKey={eventKey}
          title={<TabTitleText>{title}</TabTitleText>}
          href={href}
          aria-label={ariaLabel}
          {...tabProps}
        >
          {title}
        </Tab>
      ))}
    </Tabs>
  );
};
