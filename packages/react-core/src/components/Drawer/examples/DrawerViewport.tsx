import { Fragment, useRef, useState } from 'react';
import {
  Backdrop,
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerHead,
  DrawerPanelContent,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

export const DrawerViewport: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerRef = useRef<HTMLSpanElement>(null);

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const onResize = (_event: MouseEvent | TouchEvent | React.KeyboardEvent, newWidth: number, id: string) => {
    // eslint-disable-next-line no-console
    console.log(`${id} has new width of: ${newWidth}`);
  };

  const headerToolbar = (
    <Toolbar id="viewport-drawer-toolbar">
      <ToolbarContent>
        <ToolbarItem>
          <Button aria-expanded={isExpanded} onClick={onClick}>
            Toggle drawer
          </Button>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton isHamburgerButton aria-label="Global navigation" id="viewport-drawer-nav-toggle" />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar id="viewport-drawer-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  const panelContent = (
    <DrawerPanelContent isResizable onResize={onResize} id="viewport-resize-panel" minSize="150px">
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          Drawer panel header
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  return (
    <Fragment>
      <Page isManagedSidebar masthead={masthead} sidebar={sidebar}>
        <PageSection aria-labelledby="viewport-drawer-section">
          <h2 id="viewport-drawer-section">Viewport drawer example</h2>
          <p>
            The viewport drawer is a sibling of Page. DrawerContent is left empty so the panel overlays the page without
            affecting page layout or scrolling.
          </p>
        </PageSection>
      </Page>
      {isExpanded && <Backdrop onClick={onCloseClick}></Backdrop>}
      <Drawer isExpanded={isExpanded} isViewport onExpand={onExpand}>
        <DrawerContent panelContent={panelContent} />
      </Drawer>
    </Fragment>
  );
};
