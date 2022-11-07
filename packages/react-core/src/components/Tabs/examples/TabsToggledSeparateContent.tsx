import React from 'react';
import { Tabs, Tab, TabContent, Button, Divider } from '@patternfly/react-core';

export const TabsToggledSeparateContent: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [isTab2Hidden, setisTab2Hidden] = React.useState<boolean>(false);
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
      <Button onClick={() => setisTab2Hidden(!isTab2Hidden)}>{isTab2Hidden ? 'Show' : 'Hide'} tab 2</Button>
      <Divider style={{ paddingTop: '1rem', paddingBottom: '1rem' }} />
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Tabs in the toggled separate content example"
        role="region"
      >
        <Tab eventKey={0} title="Tab item 1" tabContentId="tab1SectionSeparateContent" tabContentRef={contentRef1} />
        {!isTab2Hidden && (
          <Tab eventKey={1} title="Tab item 2" tabContentId="tab2SectionSeparateContent" tabContentRef={contentRef2} />
        )}
        <Tab eventKey={2} title="Tab item 3" tabContentId="tab3SectionSeparateContent" tabContentRef={contentRef3} />
      </Tabs>
      <div>
        <TabContent
          eventKey={0}
          id="tab1SectionSeparateContent"
          ref={contentRef1}
          aria-label="This is content for the first toggled separate content tab"
        >
          Tab 1 section
        </TabContent>
        {!isTab2Hidden && (
          <TabContent
            eventKey={1}
            id="tab2SectionSeparateContent"
            ref={contentRef2}
            aria-label="This is content for the second toggled separate content tab"
            hidden
          >
            Tab 2 section
          </TabContent>
        )}
        <TabContent
          eventKey={2}
          id="tab3SectionSeparateContent"
          ref={contentRef3}
          aria-label="This is content for the third toggled separate content tab"
          hidden
        >
          Tab 3 section
        </TabContent>
      </div>
    </React.Fragment>
  );
};
