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
import DashboardHeader from './DashboardHeader';

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
export default class DashboardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };

    this.onNavSelect = result => {
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
      onPageResize,
      hasNoBreadcrumb
    } = this.props;

    let renderedBreadcrumb;
    if (!hasNoBreadcrumb) {
      renderedBreadcrumb = breadcrumb !== undefined ? breadcrumb : DashboardBreadcrumb;
    }

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
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
        header={header !== undefined ? header : <DashboardHeader />}
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
  }
}
