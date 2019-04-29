import React from 'react';
import { mount } from 'enzyme';
import Page from './Page';
import PageHeader from './PageHeader';
import PageSidebar from './PageSidebar';
import PageSection from './PageSection';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { SkipToContent } from '../SkipToContent';

const props = {
  'aria-label': 'Page layout',
  id: 'PageId',
  className: 'my-page-class'
};

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={() => undefined} />;
  const Sidebar = <PageSidebar nav="Navigation" isNavOpen />;
  const view = mount(
    <Page {...props} header={Header} sidebar={Sidebar}>
      <PageSection variant="default">Section with default background</PageSection>
      <PageSection variant="light">Section with light background</PageSection>
      <PageSection variant="dark">Section with dark background</PageSection>
      <PageSection variant="darker">Section with darker background</PageSection>
    </Page>
  );
  expect(view).toMatchSnapshot();
});

test('Check page horizontal layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" nav="Navigation" />;
  const Sidebar = <PageSidebar isNavOpen />;
  const view = mount(
    <Page {...props} layout="horizontal" header={Header} sidebar={Sidebar}>
      <PageSection variant="default">Section with default background</PageSection>
      <PageSection variant="light">Section with light background</PageSection>
      <PageSection variant="dark">Section with dark background</PageSection>
      <PageSection variant="darker">Section with darker background</PageSection>
    </Page>
  );
  expect(view).toMatchSnapshot();
});

test('Check page to verify breadcrumb is created', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" nav="Navigation" />;
  const Sidebar = <PageSidebar isNavOpen />;
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
  const view = mount(
    <Page {...props} layout="horizontal" header={Header} sidebar={Sidebar} breadcrumb={PageBreadcrumb}>
      <PageSection variant="default">Section with default background</PageSection>
      <PageSection variant="light">Section with light background</PageSection>
      <PageSection variant="dark">Section with dark background</PageSection>
      <PageSection variant="darker">Section with darker background</PageSection>
    </Page>
  );
  expect(view).toMatchSnapshot();
});

test('Check page to verify skip to content is created', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" nav="Navigation" />;
  const Sidebar = <PageSidebar isNavOpen />;
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
  const PageSkipToContent = <SkipToContent href="#main-content-page-layout-default-nav">Skip to Content</SkipToContent>;
  const view = mount(
    <Page
      {...props}
      layout="horizontal"
      header={Header}
      sidebar={Sidebar}
      breadcrumb={PageBreadcrumb}
      skipToContent={PageSkipToContent}
    >
      <PageSection variant="default">Section with default background</PageSection>
      <PageSection variant="light">Section with light background</PageSection>
      <PageSection variant="dark">Section with dark background</PageSection>
      <PageSection variant="darker">Section with darker background</PageSection>
    </Page>
  );
  expect(view).toMatchSnapshot();
});
