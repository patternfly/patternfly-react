import React from 'react';
import { Tabs, Tab, TabTitleText, TabAction, Popover } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

export const TabsHelp: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<number>(0);

  const tabs = ['Users', 'Containers', 'Database', 'Disabled', 'ARIA disabled', 'Help disabled'];

  const helpPopover = (header: string, popoverRef: React.RefObject<any>) => (
    <Popover
      headerContent={<div>{header}</div>}
      bodyContent={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
      footerContent="Popover footer"
      reference={popoverRef}
    />
  );

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={(event: any, tabIndex: string | number) => setActiveTabKey(tabIndex as number)}
      aria-label="Tabs in the help action example"
      role="region"
    >
      {tabs.map((tab, index) => {
        const ref = React.createRef<HTMLElement>();

        return (
          <Tab
            key={index}
            eventKey={index}
            aria-label={`Help action content - ${tab}`}
            title={<TabTitleText>{tab}</TabTitleText>}
            {...(tab === 'Disabled' && { isDisabled: true })}
            {...(tab === 'ARIA disabled' && { isAriaDisabled: true })}
            actions={
              <>
                <TabAction
                  aria-label={`Help action for ${tab}`}
                  ref={ref}
                  {...(tab === 'Help disabled' && { isDisabled: true })}
                >
                  <HelpIcon />
                </TabAction>
                {helpPopover(`Help popover for ${tab}`, ref)}
              </>
            }
          >
            {tab}
          </Tab>
        );
      })}
    </Tabs>
  );
};
