import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

export class PageManagedSidebarDemo extends React.Component {
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
    const Sidebar = <PageSidebar nav="Navigation" />;

    return (
      <Page id="page-managed-sidebar-demo" header={Header} sidebar={Sidebar} isManagedSidebar>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}
