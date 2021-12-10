import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  SkipToContent
} from '@patternfly/react-core';
import { NewDashboardHeader } from './NewDashboardHeader';

const DashboardBreadcrumbTs = (
  <Breadcrumb>
    <BreadcrumbItem>Section home</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      Section landing
    </BreadcrumbItem>
  </Breadcrumb>
);

interface NewDashboardWrapperProps extends React.HTMLProps<HTMLElement> {
  mainContainerId?: string;
  breadcrumb: any;
  header?: React.ReactNode;
  sidebar: React.ReactNode;
  sidebarNavOpen?: boolean;
  onPageResize?: React.FunctionComponent;
  hasNoBreadcrumb?: boolean;
}

export const NewDashboardWrapper: React.FunctionComponent<NewDashboardWrapperProps> = ({
  children,
  mainContainerId,
  breadcrumb,
  header,
  sidebar,
  sidebarNavOpen,
  onPageResize,
  hasNoBreadcrumb
}: NewDashboardWrapperProps) => {
  const [activeItem, setActiveItem] = React.useState<number>(0);

  let renderedBreadcrumb: any;
  if (!hasNoBreadcrumb) {
    renderedBreadcrumb = breadcrumb !== undefined ? breadcrumb : DashboardBreadcrumbTs;
  }

  const PageNav = (
    <Nav onSelect={result => setActiveItem(Number(result.itemId))} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System Panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network Services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const _sidebar = <PageSidebar nav={PageNav} isNavOpen={sidebarNavOpen || false} />;
  const PageSkipToContent = (
    <SkipToContent href={`#${mainContainerId ? mainContainerId : 'main-content-page-layout-default-nav'}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <Page
      header={header !== undefined ? header : <NewDashboardHeader />}
      sidebar={sidebar !== undefined ? sidebar : _sidebar}
      isManagedSidebar
      skipToContent={PageSkipToContent}
      breadcrumb={renderedBreadcrumb}
      mainContainerId={mainContainerId ? mainContainerId : 'main-content-page-layout-default-nav'}
      onPageResize={onPageResize}
    >
      {children}
    </Page>
  );
};

NewDashboardWrapper.displayName = 'NewDashboardWrapper';
