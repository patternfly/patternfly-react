import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { OverflowTab } from '../OverflowTab';
import { TabsContext } from '../TabsContext';

jest.mock('../../../helpers', () => ({
  Popper: ({ trigger, popper, isVisible, popperMatchesTriggerWidth, appendTo }) => (
    <div data-testid="popper-mock">
      <div data-testid="trigger">{trigger}</div>
      <div data-testid="popper">{isVisible && popper}</div>
      <p>Popper matches trigger width: {`${popperMatchesTriggerWidth}`}</p>
      <p>Append to class name: {appendTo && `${appendTo.className}`}</p>
    </div>
  )
}));

jest.mock('../../Menu', () => {
  const { forwardRef } = jest.requireActual('react');
  return {
    Menu: forwardRef((props: { children; onSelect }, ref) => (
      <div data-testid="menu-mock" ref={ref}>
        {props.children}
        <button onClick={() => props.onSelect('mouseEvent', 1, 'fakeRef')}>Select</button>
      </div>
    )),
    MenuContent: ({ children }) => <div data-testid="menu-content-mock">{children}</div>,
    MenuList: ({ children }) => <ul data-testid="menu-list-mock">{children}</ul>,
    MenuItem: ({ children, itemId, isSelected }) => (
      <>
        <li id={`${itemId}-menu-item-mock`}>
          {children}
          <p>Selected: {`${isSelected}`}</p>
        </li>
      </>
    )
  };
});

const tabsContextDefaultProps = {
  variant: 'default' as 'default',
  mountOnEnter: false,
  unmountOnExit: false,
  localActiveKey: '',
  uniqueId: '',
  handleTabClick: () => null,
  handleTabClose: undefined
};

test('Renders', () => {
  render(
    <div data-testid="overflow-tab-container">
      <OverflowTab />
    </div>
  );

  expect(screen.getByTestId('overflow-tab-container').firstChild).toBeVisible();
});

test('Renders with the passed aria label', () => {
  render(<OverflowTab aria-label="Overflow tab label test" />);

  expect(screen.getByRole('presentation')).toHaveAccessibleName('Overflow tab label test');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <OverflowTab aria-labelledby="labelling-id" />
      <p id="labelling-id">Label</p>
    </>
  );

  expect(screen.getByRole('presentation')).toHaveAccessibleName('Label');
});

test('Renders with class names pf-m-overflow and pf-c-tabs__item on the presentation element', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('presentation')).toHaveClass('pf-m-overflow');
  expect(screen.getByRole('presentation')).toHaveClass('pf-c-tabs__item');
});

test('Renders with class pf-c-tabs__link on the tab element', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).toHaveClass('pf-c-tabs__link');
});

test("Renders with class pf-c-tabs__link-toggle-icon on the img element's container", () => {
  render(<OverflowTab />);

  expect(screen.getByRole('img', { hidden: true }).parentElement).toHaveClass('pf-c-tabs__link-toggle-icon');
});

test('Renders with custom class names provided via prop', () => {
  render(<OverflowTab className="test-class" />);

  expect(screen.getByRole('presentation')).toHaveClass('test-class');
});

test('Renders without pf-m-expanded on the tab element by default', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).not.toHaveClass('pf-m-expanded');
});

test('Renders with pf-m-expanded on the tab element once clicked', async () => {
  const user = userEvent.setup();

  render(<OverflowTab />);

  const overflowTab = screen.getByRole('tab');

  await user.click(overflowTab);

  expect(overflowTab).toHaveClass('pf-m-expanded');
});

test('Renders without pf-m-current on the presentation element by default', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('presentation')).not.toHaveClass('pf-m-current');
});

test('Renders without pf-m-current when the overflowingTabs does not include the tab indicated by localActiveKey via a context', () => {
  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 0 }}>
      <OverflowTab overflowingTabs={[{ title: 'tabTitle', eventKey: 1 }]} />
    </TabsContext.Provider>
  );

  expect(screen.getByRole('presentation')).not.toHaveClass('pf-m-current');
});

test("Renders with pf-m-current when TabContext's localActiveKey matches an overflowingTabs' eventKey", () => {
  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 1 }}>
      <OverflowTab overflowingTabs={[{ title: 'Tab one', eventKey: 1 }]} />
    </TabsContext.Provider>
  );

  expect(screen.getByRole('presentation')).toHaveClass('pf-m-current');
});

test('Does not render tabs passed via overflowingTabs when not expanded', () => {
  render(
    <OverflowTab
      overflowingTabs={[
        { title: 'Tab one', eventKey: 1 },
        { title: 'Tab two', eventKey: 2 }
      ]}
    />
  );

  expect(screen.queryByText('Tab one')).not.toBeInTheDocument();
  expect(screen.queryByText('Tab two')).not.toBeInTheDocument();
});

test('Renders tabs passed via overflowingTabs when expanded', async () => {
  const user = userEvent.setup();

  render(
    <OverflowTab
      overflowingTabs={[
        { title: 'Tab one', eventKey: 1 },
        { title: 'Tab two', eventKey: 2 }
      ]}
    />
  );

  await user.click(screen.getByRole('tab', { name: 'More' }));

  expect(screen.getByText('Tab one')).toBeVisible();
  expect(screen.getByText('Tab two')).toBeVisible();
});

test('Renders tabs passed via overflowingTabs when expanded in strict mode', async () => {
  const user = userEvent.setup();

  const consoleError = jest.spyOn(console, 'error');
  const { asFragment } = render(
    <React.StrictMode>
      <OverflowTab
        removeFindDomNode
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1 },
          { title: 'Tab two', eventKey: 2 }
        ]}
      />
    </React.StrictMode>
  );

  await user.click(screen.getByRole('tab', { name: 'More' }));

  expect(consoleError).not.toHaveBeenCalled();
  expect(screen.getByText('Tab one')).toBeVisible();
  expect(screen.getByText('Tab two')).toBeVisible();
  expect(asFragment()).toMatchSnapshot();
});

test('Closes the overflowing tabs menu when a tab is selected', async () => {
  const user = userEvent.setup();

  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 0 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> },
          { title: 'Tab two', eventKey: 2, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab', { name: 'More' }));

  // rather than actually clicking a menu item here we click the Select button provided via our Menu mock to keep the mocks simpler
  await user.click(screen.getByRole('button', { name: 'Select' }));

  expect(screen.queryByText('Tab two')).not.toBeInTheDocument();
});

test('Closes the overflowing tabs menu when the user clicks outside of the menu', async () => {
  const user = userEvent.setup();

  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 0 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> },
          { title: 'Tab two', eventKey: 2, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab', { name: 'More' }));

  await user.click(document.body);

  expect(screen.queryByText('Tab two')).not.toBeInTheDocument();
});

test('Calls the onTabClick callback provided via context when a tab is clicked', async () => {
  const user = userEvent.setup();
  const mockHandleTabClick = jest.fn();

  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, handleTabClick: mockHandleTabClick }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab', { name: 'More' }));

  // rather than actually clicking a menu item here we click the Select button provided via our Menu mock to keep the mocks simpler
  await user.click(screen.getByRole('button', { name: 'Select' }));

  expect(mockHandleTabClick).toHaveBeenCalledTimes(1);
  expect(mockHandleTabClick).toHaveBeenCalledWith('mouseEvent', 1, 'fakeRef');
});

test('Does not show the overflowing tab count by default', () => {
  render(
    <OverflowTab
      overflowingTabs={[
        { title: 'Tab one', eventKey: 1 },
        { title: 'Tab two', eventKey: 2 }
      ]}
    />
  );

  expect(screen.queryByRole('tab', { name: 'More (2)' })).not.toBeInTheDocument();
});

test('Shows the overflowing tab count when showTabCount is true', () => {
  render(
    <OverflowTab
      overflowingTabs={[
        { title: 'Tab one', eventKey: 1 },
        { title: 'Tab two', eventKey: 2 }
      ]}
      showTabCount
    />
  );

  expect(screen.getByRole('tab', { name: 'More (2)' })).toBeVisible();
});

test('Uses "More" as the default overflow tab title', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).toHaveTextContent('More');
});

test('Uses the selected tab title as the overflow tab title rather than the default title when a tab is selected', () => {
  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 1 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  expect(screen.getByRole('tab')).toHaveTextContent('Tab one');
});

test('Uses custom overflow tab title text provided via defaultTitleText', () => {
  render(<OverflowTab defaultTitleText="Test" />);

  expect(screen.getByRole('tab')).toHaveTextContent('Test');
});

test('Uses the selected tab title as the overflow tab title rather than the defaultTitleText when a tab is selected', () => {
  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 1 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
        defaultTitleText="Test"
      />
    </TabsContext.Provider>
  );

  expect(screen.getByRole('tab')).toHaveTextContent('Tab one');
});

test('Does not have an aria label on the tab by default', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).not.toHaveAttribute('aria-label');
});

test('Renders with the toggleAriaLabel as an aria label on the tab', () => {
  render(<OverflowTab toggleAriaLabel="Test aria label" />);

  expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Test aria label');
});

test('Renders the tab with aria-haspopup=menu', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).toHaveAttribute('aria-haspopup', 'menu');
});

test('Renders the tab with aria-expanded set to false by default', () => {
  render(<OverflowTab />);

  expect(screen.getByRole('tab')).toHaveAttribute('aria-expanded', 'false');
});

test('Renders the tab with aria-expanded set to true when the menu is opened', async () => {
  const user = userEvent.setup();

  render(<OverflowTab />);

  const overflowTab = screen.getByRole('tab');

  await user.click(overflowTab);

  expect(overflowTab).toHaveAttribute('aria-expanded', 'true');
});

test('Passes Popper popperMatchesTriggerWidth set to false', () => {
  render(<OverflowTab />);

  // This assertion relies on the structure of the Popper mock to verify the correct props are being sent to Popper
  expect(screen.getByText('Popper matches trigger width: false')).toBeVisible();
});

test('Passes Popper an appendTo value of the presentation element', async () => {
  const user = userEvent.setup();

  render(<OverflowTab />);

  await user.click(screen.getByRole('tab'));

  // This assertion relies on the structure of the Popper mock to verify the correct props are being sent to Popper
  expect(screen.getByText('Append to class name: pf-c-tabs__item pf-m-overflow')).toBeVisible();
});

test('Does not render an overflowing tab as a selected menu item by default', async () => {
  const user = userEvent.setup();

  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 0 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab'));

  // This assertion relies on the structure of the Popper mock to verify the correct props are being sent to Popper
  expect(screen.queryByText('Selected: true')).not.toBeInTheDocument();
});

test('Renders an overflowing tab as a selected menu item when its key matches the localActiveKey provided via context', async () => {
  const user = userEvent.setup();

  render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 1 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab'));

  // This assertion relies on the structure of the Popper mock to verify the correct props are being sent to Popper
  expect(screen.getByText('Selected: true')).toBeVisible();
});

test('Matches snapshot when expanded', async () => {
  const user = userEvent.setup();

  const { asFragment } = render(
    <TabsContext.Provider value={{ ...tabsContextDefaultProps, localActiveKey: 1 }}>
      <OverflowTab
        overflowingTabs={[
          { title: 'Tab one', eventKey: 1, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> },
          { title: 'Tab two', eventKey: 2, tabContentRef: ('fakeRef' as unknown) as React.RefObject<any> }
        ]}
      />
    </TabsContext.Provider>
  );

  await user.click(screen.getByRole('tab'));

  expect(asFragment()).toMatchSnapshot();
});
