import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tabs } from '../Tabs';
import { Tab } from '../Tab';
import { TabTitleText } from '../TabTitleText';
import { TabTitleIcon } from '../TabTitleIcon';
import { TabContent } from '../TabContent';
import { TabContentBody } from '../TabContentBody';

jest.mock('../../../helpers/GenerateId/GenerateId');

test('should render simple tabs', () => {
  const { asFragment } = render(
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should render closeable tabs', () => {
  render(
    <Tabs onClose={jest.fn()}>
      <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>} closeButtonAriaLabel="close-label">
        Tab 1 section
      </Tab>
    </Tabs>
  );
  expect(screen.getByLabelText('close-label')).toBeTruthy();
});

test('should render add button', () => {
  render(
    <Tabs onAdd={jest.fn()} addButtonAriaLabel="add-label">
      <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>} closeButtonAriaLabel="close-label">
        Tab 1 section
      </Tab>
    </Tabs>
  );
  expect(screen.getByLabelText('add-label')).toBeTruthy();
});

test('should render uncontrolled tabs', () => {
  const { asFragment } = render(
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should render vertical tabs', () => {
  const { asFragment } = render(
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should render expandable vertical tabs', () => {
  const { asFragment } = render(
    <Tabs id="verticalTabs" isVertical toggleText="toggle" expandable={{ default: 'expandable' }}>
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should log error when there is no aria-label or toggleText for expandable vertical tabs', () => {
  const consoleErrorMock = jest.fn();
  global.console = { error: consoleErrorMock } as any;
  render(
    <Tabs id="verticalTabs" isVertical expandable={{ default: 'expandable' }}>
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(consoleErrorMock).toHaveBeenCalled();
});

test('should render box tabs', () => {
  const { asFragment } = render(
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
        title={
          <>
            <TabTitleIcon>
              <i>4</i>
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
      >
        Tab 4 section
      </Tab>
    </Tabs>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should render accessible tabs', () => {
  const { asFragment } = render(
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render filled tabs', () => {
  const { asFragment } = render(
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render subtabs', () => {
  const { asFragment } = render(
    <Tabs id="primarieTabs">
      <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
        <Tabs isSubtab id="subtabs">
          <Tab id="subtab1" eventKey={10} title={<TabTitleText>"Subtab item 1"</TabTitleText>}>
            Subtab 1 section
          </Tab>
          <Tab id="subtab2" eventKey={11} title={<TabTitleText>"Subtab item 2"</TabTitleText>}>
            Subtab 2 section
          </Tab>
          <Tab id="subtab3" eventKey={12} title={<TabTitleText>"Subtab item 3"</TabTitleText>}>
            Subtab 3 section
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render tabs with eventKey Strings', () => {
  const { asFragment } = render(
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render tabs with separate content', () => {
  const contentRef1: React.RefObject<any> = null;
  const contentRef2: React.RefObject<any> = null;
  const contentRef3: React.RefObject<any> = null;

  const { asFragment } = render(
    <>
      <Tabs id="separateTabs">
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
        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Tab item 1">
          Tab 1 section
        </TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Tab item 2" hidden>
          <TabContentBody>Tab 2 section</TabContentBody>
        </TabContent>
        <TabContent eventKey={2} id="refTab3Section" ref={contentRef3} aria-label="Tab item 3" hidden>
          <TabContentBody hasPadding>Tab 3 section with padding </TabContentBody>
        </TabContent>
      </div>
    </>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should render box tabs of secondary variant', () => {
  const { asFragment } = render(
    <Tabs id="boxSecondaryVariantTabs" isBox variant="secondary">
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render tabs with no bottom border', () => {
  const { asFragment } = render(
    <Tabs id="noBottomBorderTabs" hasNoBorderBottom>
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
  expect(asFragment()).toMatchSnapshot();
});

test('should render subtabs with no bottom border when passed hasNoBorderBottom', () => {
  render(
    <Tabs isSubtab hasNoBorderBottom id="noBottomBorderTabs" aria-label="Subtab bottom border">
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

  const tabsContainer = screen.queryByLabelText('Subtab bottom border');

  expect(tabsContainer).toHaveClass('pf-m-no-border-bottom');
});

test('should render subtabs with border bottom', () => {
  render(
    <Tabs isSubtab id="bottomBorderTabs" aria-label="Subtab bottom border">
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

  const tabsContainer = screen.queryByLabelText('Subtab bottom border');

  expect(tabsContainer).not.toHaveClass('pf-m-no-border-bottom');
});

test('should not render scroll buttons by default', () => {
  render(
    <Tabs>
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

  expect(screen.queryByLabelText('Scroll left')).not.toBeInTheDocument();
  expect(screen.queryByLabelText('Scroll right')).not.toBeInTheDocument();
});

test('should not render scroll buttons when isVertical is true', () => {
  render(
    <Tabs isVertical>
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

  expect(screen.queryByLabelText('Scroll left')).not.toBeInTheDocument();
  expect(screen.queryByLabelText('Scroll right')).not.toBeInTheDocument();
});
