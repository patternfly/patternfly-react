// Generated with OpenCode (GPT-6.1).
import { forwardRef, useState } from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';

// This custom link stands in for a router link without requiring a router in the example.
const CustomTabLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ onClick, ...props }, ref) => (
    <a
      {...props}
      ref={ref}
      onClick={(event) => {
        onClick?.(event);
        event.preventDefault();
      }}
    />
  )
);
CustomTabLink.displayName = 'CustomTabLink';

export const TabsCustomComponent: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={(_event, eventKey) => setActiveTabKey(eventKey)}
      isNav
      aria-label="Tabs with custom links example"
    >
      <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} component={CustomTabLink} href="#custom-users">
        Users
      </Tab>
      <Tab
        eventKey={1}
        title={<TabTitleText>Containers</TabTitleText>}
        component={CustomTabLink}
        href="#custom-containers"
      >
        Containers
      </Tab>
      <Tab
        eventKey={2}
        title={<TabTitleText>Disabled</TabTitleText>}
        component={CustomTabLink}
        href="#custom-disabled"
        isDisabled
      />
      <Tab
        eventKey={3}
        title={<TabTitleText>ARIA disabled</TabTitleText>}
        component={CustomTabLink}
        href="#custom-aria-disabled"
        isAriaDisabled
      />
    </Tabs>
  );
};
