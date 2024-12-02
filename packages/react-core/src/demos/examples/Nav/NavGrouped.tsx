import React from 'react';
import {
  Content,
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent
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

  const handleClick = (event) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(pageId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const PageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${pageId}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <>
      <Page
        masthead={<DashboardHeader />}
        sidebar={Sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
      >
        <PageSection>
          <Content>
            <h1>Main title</h1>
            <p>
              Body text should be Red Hat Text at 1rem(16px). It should have leading of 1.5rem(24px) because <br />
              of its relative line height of 1.5.
            </p>
          </Content>
        </PageSection>
        <PageSection>Section 1</PageSection>
        <PageSection>Section 2</PageSection>
        <PageSection>Section 3</PageSection>
        <PageSection>Content</PageSection>
      </Page>
    </>
  );
};
