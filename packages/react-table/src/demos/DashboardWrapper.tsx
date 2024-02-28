import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Text,
  TextContent
} from '@patternfly/react-core';
import { DashboardHeader } from './DashboardHeader';

interface DashboardWrapperProps {
  /** Programmatically manage if the sidebar nav is shown */
  sidebarNavOpen?: boolean;
  /** Flag to render sample breadcrumb if custom breadcrumb not passed */
  hasDefaultBreadcrumb?: boolean;
  /** Flag to render sample page title if custom title not passed */
  hasPageTemplateTitle?: boolean;
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children?: React.ReactNode;
  /** Additional classes added to the page layout */
  className?: string;
  /** Header component (e.g. <Masthead />) */
  header?: React.ReactNode;
  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar?: React.ReactNode;
  /** Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />) */
  notificationDrawer?: React.ReactNode;
  /** Flag indicating Notification drawer in expanded */
  isNotificationDrawerExpanded?: boolean;
  /** Flag indicating if breadcrumb width should be limited */
  isBreadcrumbWidthLimited?: boolean;
  /** Callback when notification drawer panel is finished expanding. */
  onNotificationDrawerExpand?: (event: KeyboardEvent | React.MouseEvent | React.TransitionEvent) => void;
  /** Skip to content component for the page */
  skipToContent?: React.ReactElement;
  /** Sets the value for role on the <main> element */
  role?: string;
  /** an id to use for the [role="main"] element */
  mainContainerId?: string;
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex?: number | null;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
   * the sidebar component or add a callback onSidebarToggle function into the Masthead component
   */
  isManagedSidebar?: boolean;
  /** Flag indicating if tertiary nav width should be limited */
  isTertiaryNavWidthLimited?: boolean;
  /**
   * If true, the managed sidebar is initially open for desktop view
   */
  defaultManagedSidebarIsOpen?: boolean;
  /**
   * Can add callback to be notified when resize occurs, for example to set the sidebar isSidebarOpen prop to false for a width < 768px
   * Returns object { mobileView: boolean, windowSize: number }
   */
  onPageResize?: ((event: MouseEvent | TouchEvent | React.KeyboardEvent, object: any) => void) | null;
  /**
   * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
   * You can override the default getBreakpoint function to return breakpoints at different sizes than the default
   * You can view the default getBreakpoint function here:
   * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
   */
  getBreakpoint?: (width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
   * You can override the default getVerticalBreakpoint function to return breakpoints at different sizes than the default
   * You can view the default getVerticalBreakpoint function here:
   * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
   */
  getVerticalBreakpoint?: (height: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Breadcrumb component for the page */
  breadcrumb?: React.ReactNode;
  /** Tertiary nav component for the page */
  tertiaryNav?: React.ReactNode;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
  /** Flag indicating if the tertiaryNav should be in a group */
  isTertiaryNavGrouped?: boolean;
  /** Flag indicating if the breadcrumb should be in a group */
  isBreadcrumbGrouped?: boolean;
  /** Additional content of the group */
  additionalGroupedContent?: React.ReactNode;
  /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
  mainComponent?: 'main' | 'div';
  /** Additional props of the group */
  groupProps?: any;
  /** Additional props of the breadcrumb */
  breadcrumbProps?: any;
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
