import React from 'react';
import { render } from 'enzyme';
import { Tabs } from '../Tabs';
import { Tab } from '../Tab';
import { TabTitleText } from '../TabTitleText';
import { TabTitleIcon } from '../TabTitleIcon';
import { TabContent } from '../TabContent';
import { TabContentBody } from '../TabContentBody';

test('should render simple tabs', () => {
  const view = render(
    <Tabs id="simpleTabs">
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render uncontrolled tabs', () => {
  const view = render(
    <Tabs defaultActiveKey={0}>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render vertical tabs', () => {
  const view = render(
    <Tabs id="verticalTabs" isVertical>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render expandable vertical tabs', () => {
  const view = render(
    <Tabs id="verticalTabs" isVertical toggleText='toggle' expandable={{default: 'expandable'}}>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should log error when there is no aria-label or toggleText for expandable vertical tabs', () => {
  const consoleErrorMock = jest.fn();
  global.console = { error: consoleErrorMock } as any;
  const view = render(
    <Tabs id="verticalTabs" isVertical expandable={{default: 'expandable'}}>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(consoleErrorMock).toBeCalled();
});

test('should render box tabs', () => {
  const view = render(
    <Tabs id="boxTabs" isBox>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
      <Tab
        id="tab4"
        eventKey={3}
        title={<><TabTitleIcon><i>4</i></TabTitleIcon> <TabTitleText>Users</TabTitleText>  </>}
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render accessible tabs', () => {
  const view = render(
    <Tabs id="accessibleTabs" aria-label="accessible Tabs example" component="nav">
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>} href="#/items/1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>} href="#/items/2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>} href="#/items/3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render filled tabs', () => {
  const view = render(
    <Tabs id="filledTabs" isFilled>
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render secondary tabs', () => {
  const view = render(
    <Tabs id="primarieTabs">
      <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        <Tabs isSecondary id="secondaryTabs">
          <Tab id="secondary tab1" eventKey={10} title={<TabTitleText>"Secondary Tab item 1"</TabTitleText>}>
            Secondary Tab 1 section
          </Tab>
          <Tab id="secondary tab2" eventKey={11} title={<TabTitleText>"Secondary Tab item 2"</TabTitleText>}>
            Secondary Tab 2 section
          </Tab>
          <Tab id="secondary tab3" eventKey={12} title={<TabTitleText>"Secondary Tab item 3"</TabTitleText>}>
            Secondary Tab 3 section
          </Tab>
        </Tabs>
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render tabs with eventKey Strings', () => {
  const view = render(
    <Tabs id="eventKeyTabs">
      <Tab id="tab1" eventKey={'one'} title={<TabTitleText>"Secondary Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={'two'} title={<TabTitleText>"Secondary Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={'three'} title={<TabTitleText>"Secondary Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render tabs with separate content', () => {
  const contentRef1 = null
  const contentRef2 = null
  const contentRef3 = null

  const view = render(
    <>
      <Tabs id="separateTabs">
        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>} tabContentId="refTab1Section" tabContentRef={contentRef1} />
        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}tabContentId="refTab2Section" tabContentRef={contentRef2} />
        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}  tabContentId="refTab3Section" tabContentRef={contentRef3} />
      </Tabs>
      <div>
        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Tab item 1">
          Tab 1 section
        </TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Tab item 2" hidden>
        <TabContentBody>Tab 2 section</TabContentBody>
        </TabContent>
        <TabContent  eventKey={2} id="refTab3Section" ref={contentRef3} aria-label="Tab item 3" hidden>
          <TabContentBody hasPadding>Tab 3 section with padding </TabContentBody>
        </TabContent>
      </div>
    </>
  );
  expect(view).toMatchSnapshot();
});

test('should render box tabs of light variant', () => {
  const view = render(
    <Tabs id="boxLightVariantTabs" isBox variant="light300">
      <Tab id="tab1" eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>}>
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title={<TabTitleText>"Tab item 3"</TabTitleText>}>
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

