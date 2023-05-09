import React from 'react';
import { Page, PageSidebar, PageSidebarBody, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { PageHeader as PageHeaderDeprecated, PageHeaderTools } from '@patternfly/react-core/deprecated';

export const PageVerticalNavUsingPageHeaderComponent: React.FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);

  const onNavToggle = (_event: React.MouseEvent) => {
    setIsNavOpen(!isNavOpen);
  };

  const logoProps = {
    href: 'https://patternfly.org',
    target: '_blank'
  };

  const header = (
    <PageHeaderDeprecated
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
      navToggleId="vertical-pageheader-toggle"
    />
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isNavOpen} id="vertical-pageheader-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};
