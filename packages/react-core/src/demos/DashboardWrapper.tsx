import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageProps,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Text,
  TextContent
} from '../components';
import { DashboardHeader } from './DashboardHeader';

interface DashboardWrapperProps extends Omit<PageProps, 'ref'> {
  /** Programmatically manage if the sidebar nav is shown */
  sidebarNavOpen?: boolean;
  /** Flag to render sample breadcrumb if custom breadcrumb not passed */
  hasDefaultBreadcrumb?: boolean;
  /** Flag to render sample page title if custom title not passed */
  hasPageTemplateTitle?: boolean;
}

export const DashboardBreadcrumb = (
  <Breadcrumb>
    <BreadcrumbItem>Section home</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      Section landing
    </BreadcrumbItem>
  </Breadcrumb>
);

const PageTemplateTitle = (
  <PageSection variant="light">
    <TextContent>
      <Text component="h1">Main title</Text>
      <Text component="p">This is a full page demo.</Text>
    </TextContent>
  </PageSection>
);

export const DashboardWrapper: React.FC<DashboardWrapperProps> = ({
  children,
  mainContainerId,
  breadcrumb,
  header,
  sidebar,
  sidebarNavOpen,
  onPageResize,
  hasDefaultBreadcrumb,
  notificationDrawer,
  isNotificationDrawerExpanded,
  hasPageTemplateTitle,
  ...pageProps
}: DashboardWrapperProps) => {
  const [activeItem, setActiveItem] = useState(1);

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, result: any) => {
    setActiveItem(result.itemId);
  };

  let renderedBreadcrumb;
  if (!hasDefaultBreadcrumb) {
    renderedBreadcrumb = breadcrumb ?? DashboardBreadcrumb;
  }

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const _sidebar = (
    <PageSidebar isSidebarOpen={sidebarNavOpen || false}>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const PageSkipToContent = (
    <SkipToContent href={`#${mainContainerId ?? 'main-content-page-layout-default-nav'}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <Page
      header={header ?? <DashboardHeader />}
      sidebar={sidebar ?? _sidebar}
      isManagedSidebar
      skipToContent={PageSkipToContent}
      breadcrumb={renderedBreadcrumb}
      mainContainerId={mainContainerId ?? 'main-content-page-layout-default-nav'}
      notificationDrawer={notificationDrawer}
      isNotificationDrawerExpanded={isNotificationDrawerExpanded}
      {...(typeof onPageResize === 'function' && {
        onPageResize: (event: MouseEvent | TouchEvent | React.KeyboardEvent<Element>, resizeObject: any) =>
          onPageResize(event, resizeObject)
      })}
      {...pageProps}
    >
      {hasPageTemplateTitle && PageTemplateTitle}
      {children}
    </Page>
  );
};
DashboardWrapper.displayName = 'DashboardWrapper';
