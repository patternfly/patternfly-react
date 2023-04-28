import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { Page } from '../Page';
import { PageHeader } from '../../../deprecated/components/PageHeader';
import { PageSidebar } from '../PageSidebar';
import { PageSidebarBody } from '../PageSidebarBody';
import { PageSection } from '../PageSection';
import { Breadcrumb, BreadcrumbItem } from '../../Breadcrumb';
import { Nav, NavList, NavItem } from '../../Nav';
import { SkipToContent } from '../../SkipToContent';
import { PageBreadcrumb } from '../PageBreadcrumb';
import { PageNavigation } from '../PageNavigation';
import { PageGroup } from '../PageGroup';

const props = {
  'aria-label': 'Page layout',
  id: 'PageId',
  className: 'my-page-class'
};

describe('Page', () => {
  test('Check page vertical layout example against snapshot', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />;
    const Sidebar = (
      <PageSidebar isSidebarOpen>
        <PageSidebarBody>Navigation</PageSidebarBody>
      </PageSidebar>
    );

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Check dark page against snapshot', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />;
    const Sidebar = (
      <PageSidebar isSidebarOpen theme="dark">
        <PageSidebarBody>Navigation</PageSidebarBody>
      </PageSidebar>
    );

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page horizontal layout example against snapshot', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify breadcrumb is created', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;
    const PageBreadcrumb = () => (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar} breadcrumb={<PageBreadcrumb />}>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify sticky top breadcrumb on all height breakpoints', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;
    const PageBreadcrumb = () => (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const { asFragment } = render(
      <Page
        {...props}
        header={Header}
        sidebar={Sidebar}
        breadcrumb={<PageBreadcrumb />}
        breadcrumbProps={{ stickyOnBreakpoint: { sm: 'top', md: 'top', lg: 'top', xl: 'top', '2xl': 'top' } }}
      >
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify sticky bottom breadcrumb on all height breakpoints', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;
    const PageBreadcrumb = () => (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const { asFragment } = render(
      <Page
        {...props}
        header={Header}
        sidebar={Sidebar}
        breadcrumb={<PageBreadcrumb />}
        breadcrumbProps={{
          stickyOnBreakpoint: { sm: 'bottom', md: 'bottom', lg: 'bottom', xl: 'bottom', '2xl': 'bottom' }
        }}
      >
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify breadcrumb is created - PageBreadcrumb syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageBreadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>Section Home</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#" isActive>
              Section Landing
            </BreadcrumbItem>
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify sticky top breadcrumb on all height breakpoints - PageBreadcrumb syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageBreadcrumb stickyOnBreakpoint={{ sm: 'top', md: 'top', lg: 'top', xl: 'top', '2xl': 'top' }}>
          <Breadcrumb>
            <BreadcrumbItem>Section Home</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#" isActive>
              Section Landing
            </BreadcrumbItem>
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Sticky bottom breadcrumb on all height breakpoints - PageBreadcrumb syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageBreadcrumb
          stickyOnBreakpoint={{ sm: 'bottom', md: 'bottom', lg: 'bottom', xl: 'bottom', '2xl': 'bottom' }}
        >
          <Breadcrumb>
            <BreadcrumbItem>Section Home</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
            <BreadcrumbItem to="#" isActive>
              Section Landing
            </BreadcrumbItem>
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify nav is created - PageNavigation syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageNavigation>
          <Nav aria-label="Nav" variant="tertiary">
            <NavList>
              <NavItem itemId={0} isActive>
                System Panel
              </NavItem>
              <NavItem itemId={1}>Policy</NavItem>
              <NavItem itemId={2}>Authentication</NavItem>
              <NavItem itemId={3}>Network Services</NavItem>
              <NavItem itemId={4}>Server</NavItem>
            </NavList>
          </Nav>
        </PageNavigation>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify grouped nav and breadcrumb - new components syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;

    const { asFragment } = render(
      <Page {...props} header={Header} sidebar={Sidebar}>
        <PageGroup stickyOnBreakpoint={{ default: 'bottom' }}>
          <PageBreadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>Section Home</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Section Landing
              </BreadcrumbItem>
            </Breadcrumb>
          </PageBreadcrumb>
          <PageNavigation>
            <Nav aria-label="Nav" variant="tertiary">
              <NavList>
                <NavItem itemId={0} isActive>
                  System Panel
                </NavItem>
                <NavItem itemId={1}>Policy</NavItem>
                <NavItem itemId={2}>Authentication</NavItem>
                <NavItem itemId={3}>Network Services</NavItem>
                <NavItem itemId={4}>Server</NavItem>
              </NavList>
            </Nav>
          </PageNavigation>
        </PageGroup>
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify grouped nav and breadcrumb - old / props syntax', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;
    const crumb = (
      <PageBreadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>Section Home</BreadcrumbItem>
          <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
          <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
          <BreadcrumbItem to="#" isActive>
            Section Landing
          </BreadcrumbItem>
        </Breadcrumb>
      </PageBreadcrumb>
    );
    const nav = (
      <Nav aria-label="Nav" variant="tertiary">
        <NavList>
          <NavItem itemId={0} isActive>
            System Panel
          </NavItem>
          <NavItem itemId={1}>Policy</NavItem>
          <NavItem itemId={2}>Authentication</NavItem>
          <NavItem itemId={3}>Network Services</NavItem>
          <NavItem itemId={4}>Server</NavItem>
        </NavList>
      </Nav>
    );

    const { asFragment } = render(
      <Page
        {...props}
        header={Header}
        sidebar={Sidebar}
        breadcrumb={crumb}
        tertiaryNav={nav}
        isBreadcrumbGrouped
        isTertiaryNavGrouped
        groupProps={{
          stickyOnBreakpoint: { default: 'bottom' },
          hasShadowTop: true,
          hasOverflowScroll: true,
          'aria-label': 'test'
        }}
      >
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).not.toHaveAttribute('id');
    expect(screen.getByLabelText('test')).toHaveClass('pf-m-shadow-top');
    expect(asFragment()).toMatchSnapshot();
  });

  test('Check page to verify skip to content points to main content region', () => {
    const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" topNav="Navigation" />;
    const Sidebar = <PageSidebar isSidebarOpen />;
    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );
    const mainId = 'main-content-page-layout-test-nav';
    const PageSkipToContent = <SkipToContent href={`#${mainId}`}>Skip to Content</SkipToContent>;

    const { asFragment } = render(
      <Page
        {...props}
        header={Header}
        sidebar={Sidebar}
        breadcrumb={PageBreadcrumb}
        skipToContent={PageSkipToContent}
        mainContainerId={mainId}
        data-testid="page-test-id"
      >
        <PageSection variant="default">Section with default background</PageSection>
        <PageSection variant="light">Section with light background</PageSection>
        <PageSection variant="dark">Section with dark background</PageSection>
        <PageSection variant="darker">Section with darker background</PageSection>
      </Page>
    );

    expect(screen.getByRole('main')).toHaveAttribute('id', mainId);
    expect(screen.getByTestId('page-test-id')).toHaveAttribute('id', props.id);
    expect(asFragment()).toMatchSnapshot();
  });
});
