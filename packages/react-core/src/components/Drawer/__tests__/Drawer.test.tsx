import { createContext, createRef } from 'react';
import {
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  DrawerPanelDescription,
  DrawerSection,
  DrawerColorVariant
} from '../';
import { DrawerMain } from '../DrawerMain';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KeyTypes } from '../../../helpers';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

jest.mock('../../../helpers/GenerateId/GenerateId');

Object.values([
  { isExpanded: true, isInline: false, isStatic: false },
  { isExpanded: false, isInline: false, isStatic: false },
  { isExpanded: true, isInline: true, isStatic: false },
  { isExpanded: false, isInline: true, isStatic: false },
  { isExpanded: true, isInline: false, isStatic: true }
]).forEach(({ isExpanded, isInline, isStatic }) => {
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );
  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
  test(`Drawer isExpanded = ${isExpanded} and isInline = ${isInline} and isStatic = ${isStatic}`, () => {
    const { asFragment } = render(
      <Drawer isExpanded={isExpanded}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>{drawerContent}</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test(`Drawer expands from bottom`, () => {
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );
  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  const { asFragment } = render(
    <Drawer isExpanded={true} position="bottom">
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>{drawerContent}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Drawer has resizable css and color variants`, () => {
  const panelContent = (
    <DrawerPanelContent
      isResizable
      minSize={'200px'}
      defaultSize={'300px'}
      maxSize={'400px'}
      colorVariant={DrawerColorVariant.secondary}
    >
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );
  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  const { asFragment } = render(
    <Drawer isExpanded={true} position="left">
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>{drawerContent}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Drawer has resizable callback and id`, () => {
  const panelContent = (
    <DrawerPanelContent isResizable onResize={jest.fn()} id="test-id">
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );
  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  const { asFragment } = render(
    <Drawer isExpanded={true} position="left">
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>{drawerContent}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Resizeable DrawerPanelContent can be wrapped in a context without causing an error', async () => {
  const TestContext = createContext({});

  const consoleError = jest.spyOn(console, 'error').mockImplementation();

  const panelContent = (
    <TestContext.Provider value={{}}>
      <DrawerPanelContent isResizable>
        <DrawerHead>
          <span>drawer-panel</span>
          <DrawerActions>
            <DrawerCloseButton />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    </TestContext.Provider>
  );

  const user = userEvent.setup();

  render(
    <Drawer isExpanded={true} position="left">
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>Drawer content text</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );

  await user.tab();
  await user.keyboard(`{${KeyTypes.ArrowLeft}}`);

  expect(consoleError).not.toHaveBeenCalled();
});

test(`Renders with ${styles.modifiers.pill} class when specified`, () => {
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>drawer-panel</span>
        <DrawerActions>
          <DrawerCloseButton />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
    </DrawerPanelContent>
  );

  render(
    <Drawer data-testid="drawer" isExpanded={true} position="left" isPill>
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>Drawer content text</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );

  expect(screen.getByTestId('drawer')).toHaveClass(styles.modifiers.pill);
});

test('Drawer and its sub-components forward refs to their underlying div elements', () => {
  const drawerRef = createRef<HTMLDivElement>();
  const sectionRef = createRef<HTMLDivElement>();
  const contentRef = createRef<HTMLDivElement>();
  const contentBodyRef = createRef<HTMLDivElement>();
  const panelContentRef = createRef<HTMLDivElement>();
  const headRef = createRef<HTMLDivElement>();
  const actionsRef = createRef<HTMLDivElement>();
  const closeButtonRef = createRef<HTMLDivElement>();
  const panelDescriptionRef = createRef<HTMLDivElement>();
  const panelBodyRef = createRef<HTMLDivElement>();
  const mainRef = createRef<HTMLDivElement>();

  const panelContent = (
    <DrawerPanelContent ref={panelContentRef} data-testid="panel-content">
      <DrawerHead ref={headRef} data-testid="head">
        <DrawerActions ref={actionsRef} data-testid="actions">
          <DrawerCloseButton ref={closeButtonRef} data-testid="close-button" />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription ref={panelDescriptionRef} data-testid="panel-description">
        Description
      </DrawerPanelDescription>
      <DrawerPanelBody ref={panelBodyRef} data-testid="panel-body">
        Panel body
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  render(
    <>
      <Drawer ref={drawerRef} isExpanded data-testid="drawer">
        <DrawerSection ref={sectionRef} data-testid="section">
          Section
        </DrawerSection>
        <DrawerContent ref={contentRef} panelContent={panelContent} data-testid="content">
          <DrawerContentBody ref={contentBodyRef} data-testid="content-body">
            Content body
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
      <DrawerMain ref={mainRef} data-testid="main" />
    </>
  );

  expect(drawerRef.current).toBe(screen.getByTestId('drawer'));
  expect(sectionRef.current).toBe(screen.getByTestId('section'));
  expect(contentRef.current).toBe(screen.getByTestId('content'));
  expect(contentBodyRef.current).toBe(screen.getByTestId('content-body'));
  expect(panelContentRef.current).toBe(screen.getByTestId('panel-content'));
  expect(headRef.current).toBe(screen.getByTestId('head'));
  expect(actionsRef.current).toBe(screen.getByTestId('actions'));
  expect(closeButtonRef.current).toBe(screen.getByTestId('close-button'));
  expect(panelDescriptionRef.current).toBe(screen.getByTestId('panel-description'));
  expect(panelBodyRef.current).toBe(screen.getByTestId('panel-body'));
  expect(mainRef.current).toBe(screen.getByTestId('main'));
});
