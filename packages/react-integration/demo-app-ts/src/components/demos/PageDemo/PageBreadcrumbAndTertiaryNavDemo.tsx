import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

export class PageBreadcrumbAndTertiaryNavDemo extends React.Component {
  static displayName = 'PageBreadcrumbAndTertiaryNavDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const logoProps = {
      href: 'https://patternfly.org',
      // eslint-disable-next-line no-console
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo that's a <div>"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>PageHeaderTools | Avatar</PageHeaderTools>}
        showNavToggle
        logoComponent={'div'}
      />
    );

    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const PageNav = (
      <Nav variant="tertiary" aria-label="Nav">
        <NavList>
          <NavItem itemId={0}>System Panel</NavItem>
          <NavItem itemId={1}>Policy</NavItem>
          <NavItem itemId={2}>Authentication</NavItem>
          <NavItem itemId={3}>Network Services</NavItem>
          <NavItem itemId={4}>Server</NavItem>
        </NavList>
      </Nav>
    );

    return (
      <Page
        id="page-breadcrumb-and-tertiary-nav-demo"
        header={Header}
        breadcrumb={PageBreadcrumb}
        tertiaryNav={PageNav}
        isTertiaryNavWidthLimited
        isTertiaryNavGrouped
        isBreadcrumbGrouped
        isManagedSidebar
      >
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}
