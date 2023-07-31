import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavGroup,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Text,
  TextContent
} from '@patternfly/react-core';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

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

export const PageTemplateTitle = (
  <PageSection variant="light">
    <TextContent>
      <Text component="h3">Penta Hackathon Demo Page</Text>
      <Text component="p">A showcase of our new tokens being applied to create a new theme</Text>
    </TextContent>
  </PageSection>
);

export default class DashboardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    const {
      children,
      mainContainerId,
      breadcrumb,
      header,
      sidebar,
      sidebarNavOpen,
      onPageResize = () => {},
      hasNoBreadcrumb,
      notificationDrawer,
      isNotificationDrawerExpanded,
      hasPageTemplateTitle,
      ...pageProps
    } = this.props;

    let renderedBreadcrumb;
    if (!hasNoBreadcrumb) {
      renderedBreadcrumb = breadcrumb !== undefined ? breadcrumb : DashboardBreadcrumb;
    }

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavGroup title="Cluster">
            <NavItem itemId={0} isActive={activeItem === 0} to="#dashboard">
              Dashboard
            </NavItem>
            <NavItem itemId={1} isActive={activeItem === 1} to="#builds">
              Builds
            </NavItem>
            <NavItem itemId={2} isActive={activeItem === 2} to="#compute">
              Compute
            </NavItem>
            <NavItem itemId={3} isActive={activeItem === 3} to="#networking">
              Networking
            </NavItem>
            <NavItem itemId={4} isActive={activeItem === 4} to="#observe">
              Observe
            </NavItem>
            <NavItem itemId={5} isActive={activeItem === 5} to="#operators">
              Operators
            </NavItem>
            <NavItem itemId={6} isActive={activeItem === 6} to="#applications">
              Applications
            </NavItem>
            <NavItem itemId={7} isActive={activeItem === 7} to="#workloads">
              Workloads
            </NavItem>
          </NavGroup>
          <NavGroup title="Settings">
            <NavItem itemId={0} isActive={activeItem === 0} to="#user-management">
              User Management
            </NavItem>
            <NavItem itemId={1} isActive={activeItem === 1} to="#administration">
              Administration
            </NavItem>
            <NavItem itemId={2} isActive={activeItem === 2} to="#import-yaml">
              Import YAML
            </NavItem>
            <NavItem itemId={3} isActive={activeItem === 3} to="#help-and-support">
              Help and Support
            </NavItem>
          </NavGroup>
        </NavList>
      </Nav>
    );

    const SidebarHeader = (
      <h2 className="pf-v5-c-page__sidebar-title">
        PatternFly Navigation
        <br />
        Product Name
      </h2>
    );

    const _sidebar = (
      <PageSidebar isSidebarOpen={sidebarNavOpen || false}>
        <div className="pf-v5-c-page__sidebar-header">{SidebarHeader}</div>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const PageSkipToContent = (
      <SkipToContent href={`#${mainContainerId ? mainContainerId : 'main-content-page-layout-default-nav'}`}>
        Skip to content
      </SkipToContent>
    );

    return (
      <Page
        header={header !== undefined ? header : <DashboardHeader />}
        sidebar={sidebar !== undefined ? sidebar : _sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        breadcrumb={renderedBreadcrumb}
        mainContainerId={mainContainerId ? mainContainerId : 'main-content-page-layout-default-nav'}
        notificationDrawer={notificationDrawer}
        isNotificationDrawerExpanded={isNotificationDrawerExpanded}
        {...(typeof onPageResize === 'function' && { onPageResize: (event) => onPageResize(event) })}
        {...pageProps}
      >
        {hasPageTemplateTitle && PageTemplateTitle}
        {children}
      </Page>
    );
  }
}
