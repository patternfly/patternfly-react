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
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import DashboardHeader from '../../DashboardHeader';

export const NavLight: React.FunctionComponent = () => {
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
    <Nav onSelect={onNavSelect} aria-label="Nav" theme="light">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#">
          System Panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#">
          Network Services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar theme="light">
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-simple-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

  return (
    <React.Fragment>
      <Page
        header={<DashboardHeader />}
        sidebar={Sidebar}
        isManagedSidebar
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
            {Array.apply(0, Array(10)).map((_x: any, i: React.Key | null | undefined) => (
              <GalleryItem key={i}>
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
