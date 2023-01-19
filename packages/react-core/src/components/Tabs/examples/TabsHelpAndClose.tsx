import React from 'react';
import { Tabs, Tab, TabTitleText, Popover, TabAction } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const TabsHelpAndClose: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<number>(0);
  const [tabs, setTabs] = React.useState<string[]>(['Terminal 1', 'Terminal 2', 'Terminal 3']);
  const tabComponentRef = React.useRef<any>();
  const firstMount = React.useRef(true);

  const onClose = (event: any, tabIndex: string | number) => {
    const tabIndexNum = tabIndex as number;
    let nextTabIndex = activeTabKey;
    if (tabIndexNum < activeTabKey) {
      // if a preceding tab is closing, keep focus on the new index of the current tab
      nextTabIndex = activeTabKey - 1 > 0 ? activeTabKey - 1 : 0;
    } else if (activeTabKey === tabs.length - 1) {
      // if the closing tab is the last tab, focus the preceding tab
      nextTabIndex = tabs.length - 2 > 0 ? tabs.length - 2 : 0;
    }
    setActiveTabKey(nextTabIndex);
    setTabs(tabs.filter((tab, index) => index !== tabIndex));
  };

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

  React.useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    } else {
      const first = tabComponentRef.current.tabList.current.childNodes[activeTabKey];
      first && first.firstChild.focus();
    }
  }, [tabs]);

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={(event: any, tabIndex: string | number) => setActiveTabKey(tabIndex as number)}
      aria-label="Tabs in the help enabled and closeable example"
      role="region"
      ref={tabComponentRef}
    >
      {tabs.map((tab, index) => {
        const ref = React.createRef<HTMLElement>();

        return (
          <Tab
            key={index}
            eventKey={index}
            aria-label={`Help action and closable content - ${tab}`}
            title={<TabTitleText>{tab}</TabTitleText>}
            actions={
              <>
                <TabAction aria-label={`Help for ${tab}`} ref={ref}>
                  <HelpIcon />
                </TabAction>
                <TabAction aria-label={`Close ${tab}`} onClick={e => onClose(e, index)} isDisabled={tabs.length === 1}>
                  <TimesIcon />
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
