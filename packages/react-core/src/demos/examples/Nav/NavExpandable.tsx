import React from 'react';
import {
  Card,
  CardBody,
  Content,
  Gallery,
  GalleryItem,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';

export const NavExpandableDemo: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState<string | number>('grp-1');
  const [activeItem, setActiveItem] = React.useState<string | number>('grp-1_itm-1');

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => {
    setActiveItem(selectedItem.itemId);
    setActiveGroup(selectedItem.groupId);
  };

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        <NavExpandable title="System Panel" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
          {/* Preventing default click behavior on each NavItem for demo purposes only */}
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'} to="#">
            Overview
          </NavItem>
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'} to="#">
            Resource usage
          </NavItem>
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'} to="#">
            Hypervisors
          </NavItem>
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'} to="#">
            Instances
          </NavItem>
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'} to="#">
            Volumes
          </NavItem>
          <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'} to="#">
            Network
          </NavItem>
        </NavExpandable>
        <NavExpandable title="Policy" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
          <NavItem preventDefault groupId="grp-2" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'} to="#">
            Subnav link 1
          </NavItem>
          <NavItem preventDefault groupId="grp-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'} to="#">
            Subnav link 2
          </NavItem>
        </NavExpandable>
        <NavExpandable title="Authentication" groupId="grp-3" isActive={activeGroup === 'grp-3'}>
          <NavItem preventDefault groupId="grp-3" itemId="grp-3_itm-1" isActive={activeItem === 'grp-3_itm-1'} to="#">
            Subnav link 1
          </NavItem>
          <NavItem preventDefault groupId="grp-3" itemId="grp-3_itm-2" isActive={activeItem === 'grp-3_itm-2'} to="#">
            Subnav link 2
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-expandable-nav';

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
    <React.Fragment>
      <Page
        masthead={<DashboardHeader />}
        sidebar={Sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        breadcrumb={DashboardBreadcrumb}
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
