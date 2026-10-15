// Generated with OpenCode (GPT-6.1).
import { forwardRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Tabs, Tab, TabTitleText, Tooltip } from '@patternfly/react-core';

const RouterTabLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ href = '?tab=users', ...props }, ref) => <Link {...props} to={href} ref={ref} />
);
RouterTabLink.displayName = 'RouterTabLink';

export const TabsRouterDemo: React.FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const activeTabKey = searchParams.get('tab') || 'users';
  const [selectionCount, setSelectionCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const onTabClick = () => setClickCount((count) => count + 1);

  return (
    <>
      <p id="router-selection-count">Selections: {selectionCount}</p>
      <p id="router-click-count">Clicks: {clickCount}</p>
      <Tabs
        id="router-tabs"
        component="nav"
        aria-label="Router navigation tabs"
        activeKey={activeTabKey}
        onSelect={() => setSelectionCount((count) => count + 1)}
      >
        <Tab
          eventKey="users"
          title={<TabTitleText>Users</TabTitleText>}
          component={RouterTabLink}
          href="?tab=users"
          onClick={onTabClick}
        >
          Users route content
        </Tab>
        <Tab
          eventKey="containers"
          title={<TabTitleText>Containers</TabTitleText>}
          component={RouterTabLink}
          href="?tab=containers"
          onClick={onTabClick}
        >
          Containers route content
        </Tab>
        <Tab
          eventKey="disabled"
          title={<TabTitleText>Disabled</TabTitleText>}
          component={RouterTabLink}
          href="?tab=disabled"
          onClick={onTabClick}
          isDisabled
        />
        <Tab
          eventKey="aria-disabled"
          title={<TabTitleText>ARIA disabled</TabTitleText>}
          component={RouterTabLink}
          href="?tab=aria-disabled"
          onClick={onTabClick}
          isAriaDisabled
          tooltip={<Tooltip content="This route is unavailable." />}
        />
      </Tabs>
    </>
  );
};
