import React from 'react';
import {
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';

export const NavGrouped: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState<number | string>('grp-1_itm-1');

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavGroup title="System Panel">
        {/* Preventing default click behavior on each NavItem for demo purposes only */}
        <NavItem preventDefault itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'} to="#">
          Overview
        </NavItem>
        <NavItem preventDefault itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'} to="#">
          Resource Usage
        </NavItem>
        <NavItem preventDefault itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'} to="#">
          Hypervisors
        </NavItem>
        <NavItem preventDefault itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'} to="#">
          Instances
        </NavItem>
        <NavItem preventDefault itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'} to="#">
          Volumes
        </NavItem>
        <NavItem preventDefault itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'} to="#">
          Network
        </NavItem>
      </NavGroup>
      <NavGroup title="Policy">
        <NavItem preventDefault itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'} to="#">
          Hosts
        </NavItem>
        <NavItem preventDefault itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'} to="#">
          Virtual Machines
        </NavItem>
        <NavItem preventDefault itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'} to="#">
          Storage
        </NavItem>
      </NavGroup>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-group-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

  return (
    <>
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
        <PageSection variant={PageSectionVariants.light}>Light</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Dark</PageSection>
        <PageSection variant={PageSectionVariants.darker}>Darker</PageSection>
        <PageSection>Content</PageSection>
      </Page>
    </>
  );
};
