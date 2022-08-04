import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

export const PageVerticalNavUsingPageHeaderComponent: React.FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logoProps = {
    href: 'https://patternfly.org',
    target: '_blank'
  };

  const header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
      navToggleId="vertical-pageheader-toggle"
    />
  );

  const sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} id="vertical-pageheader-sidebar" />;

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};
