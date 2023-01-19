import React from 'react';
import { Tabs, Tab, TabTitleText, TabContent } from '@patternfly/react-core';

export const TabsSeparateContent: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  const contentRef1 = React.createRef<HTMLElement>();
  const contentRef2 = React.createRef<HTMLElement>();
  const contentRef3 = React.createRef<HTMLElement>();

  return (
    <React.Fragment>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Tabs in the seperate content example"
        role="region"
      >
        <Tab
          eventKey={0}
          title={<TabTitleText>Tab item 1</TabTitleText>}
          tabContentId="refTab1Section"
          tabContentRef={contentRef1}
        />
        <Tab
          eventKey={1}
          title={<TabTitleText>Tab item 2</TabTitleText>}
          tabContentId="refTab2Section"
          tabContentRef={contentRef2}
        />
        <Tab
          eventKey={2}
          title={<TabTitleText>Tab item 3</TabTitleText>}
          tabContentId="refTab3Section"
          tabContentRef={contentRef3}
        />
      </Tabs>
      <div>
        <TabContent
          eventKey={0}
          id="refTab1Section"
          ref={contentRef1}
          aria-label="This is content for the first separate content tab"
        >
          Tab 1 section
        </TabContent>
        <TabContent
          eventKey={1}
          id="refTab2Section"
          ref={contentRef2}
          aria-label="This is content for the second separate content tab"
          hidden
        >
          Tab 2 section
        </TabContent>
        <TabContent
          eventKey={2}
          id="refTab3Section"
          ref={contentRef3}
          aria-label="This is content for the third separate content tab"
          hidden
        >
          Tab 3 section
        </TabContent>
      </div>
    </React.Fragment>
  );
};
