import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionTypes,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';

export const NavWithSubnav: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState<string | number>(0);
  const [activeSubNavItem, setActiveSubNavItem] = React.useState<string | number>(7);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const onSubNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveSubNavItem(selectedItem.itemId);

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        {/* Preventing default click behavior on each NavItem for demo purposes only */}
        <NavItem preventDefault itemId={0} isActive={activeItem === 0} to="#">
          System Panel
        </NavItem>
        <NavItem preventDefault itemId={1} isActive={activeItem === 1} to="#">
          Policy
        </NavItem>
        <NavItem preventDefault itemId={2} isActive={activeItem === 2} to="#">
          Authentication
        </NavItem>
        <NavItem preventDefault itemId={3} isActive={activeItem === 3} to="#">
          Network Services
        </NavItem>
        <NavItem preventDefault itemId={4} isActive={activeItem === 4} to="#">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

  const SubNav = (
    <Nav onSelect={onSubNavSelect} aria-label="Subnav" variant="horizontal-subnav">
      <NavList>
        <NavItem preventDefault itemId={7} isActive={activeSubNavItem === 7} to="#">
          Horizontal subnav item 1
        </NavItem>
        <NavItem preventDefault itemId={8} isActive={activeSubNavItem === 8} to="#">
          Horizontal subnav item 2
        </NavItem>
        <NavItem preventDefault itemId={9} isActive={activeSubNavItem === 9} to="#">
          Horizontal subnav item 3
        </NavItem>
        <NavItem preventDefault itemId={10} isActive={activeSubNavItem === 10} to="#">
          Horizontal subnav item 4
        </NavItem>
        <NavItem preventDefault itemId={11} isActive={activeSubNavItem === 11} to="#">
          Horizontal subnav item 5
        </NavItem>
        <NavItem preventDefault itemId={12} isActive={activeSubNavItem === 12} to="#">
          Horizontal subnav item 6
        </NavItem>
        <NavItem preventDefault itemId={13} isActive={activeSubNavItem === 13} to="#">
          Horizontal subnav item 7
        </NavItem>
      </NavList>
    </Nav>
  );

  return (
    <React.Fragment>
      <Page
        header={<DashboardHeader />}
        sidebar={Sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
      >
        <PageSection type={PageSectionTypes.subNav} isWidthLimited>
          {SubNav}
        </PageSection>
        <PageSection type={PageSectionTypes.breadcrumb} isWidthLimited>
          {DashboardBreadcrumb}
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Gallery hasGutter>
            {Array.from({ length: 10 }).map((_value, index) => (
              <GalleryItem key={index}>
                <Card>
                  <CardBody>This is a card</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </PageSection>
      </Page>
    </React.Fragment>
  );
};
