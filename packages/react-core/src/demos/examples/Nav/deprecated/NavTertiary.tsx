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
  PageSectionVariants,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';

export const NavTertiary: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState<string | number>(0);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const PageNav = (
    <Nav variant="tertiary" onSelect={onNavSelect} aria-label="Nav">
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

  const pageId = 'main-content-page-layout-tertiary-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

  return (
    <React.Fragment>
      <Page
        header={<DashboardHeader />}
        breadcrumb={DashboardBreadcrumb}
        tertiaryNav={PageNav}
        isManagedSidebar
        isTertiaryNavWidthLimited
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
      >
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of its relative line height of 1.5.
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
