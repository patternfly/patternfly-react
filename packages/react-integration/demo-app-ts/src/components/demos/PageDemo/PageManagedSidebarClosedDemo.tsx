import React from 'react';
import {
  Page,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

import {
  PageHeader,
  PageHeaderTools,
} from '@patternfly/react-core/deprecated';

export class PageManagedSidebarClosedDemo extends React.Component {
  static displayName = 'PageManagedSidebarClosedDemo';
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
      <Page
        id="page-managed-sidebar-closed-demo"
        header={Header}
        sidebar={Sidebar}
        isManagedSidebar
        defaultManagedSidebarIsOpen={false}
      >
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}
