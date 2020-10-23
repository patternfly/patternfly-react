---
id: Page
section: components
cssPrefix: pf-c-page
propComponents:
  [
    'Page',
    'PageHeader',
    'PageHeaderTools',
    'PageHeaderToolsGroup',
    'PageHeaderToolsItem',
    'PageSidebar',
    'PageSection',
    'PageGroup',
    'PageBreadcrumb',
    'PageNavigation',
  ]
---

## Examples

### Vertical nav

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

class VerticalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}
```

### Horizontal nav

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

HorizontalPage = () => {
  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  };
  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      topNav="Navigation"
    />
  );

  return (
    <Page header={Header}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};
```

### Tertiary nav

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

TertiaryPage = () => {
  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  };
  const Header = (
    <PageHeader logo="Logo" logoProps={logoProps} headerTools={<PageHeaderTools>header-tools</PageHeaderTools>} />
  );

  return (
    <Page header={Header} tertiaryNav="Navigation">
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};
```

### Main Section Padding

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

class VerticalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection>Section with default padding</PageSection>
        <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
          Section with no padding
        </PageSection>
        <PageSection padding={{ default: 'noPadding', md: 'padding', lg: 'padding' }}>
          Section with padding only on medium/large
        </PageSection>
        <PageSection variant={PageSectionVariants.light} padding={{ md: 'noPadding' }}>
          Section with no padding on medium
        </PageSection>
      </Page>
    );
  }
}
```

### With or without fill

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

class FillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection style={{ height: '10em' }}>This section is set to the default fill variant</PageSection>
        <PageSection style={{ height: '10em' }} isFilled={true}>
          This section fills the available space.
        </PageSection>
        <PageSection style={{ height: '10em' }} isFilled={false}>
          {' '}
          This section does not fill the available space.
        </PageSection>
      </Page>
    );
  }
}
```

### Uncontrolled nav

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

class UncontrolledNavPage extends React.Component {
  render() {
    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" />;

    return (
      <Page isManagedSidebar header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}
```

### Group section

```js
import React from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageGroup,
  PageBreadcrumb,
  PageNavigation,
  PageSectionVariants,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavList,
  NavItem
} from '@patternfly/react-core';

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageGroup>
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
          <PageBreadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>Section home</BreadcrumbItem>
              <BreadcrumbItem to="#">Section title</BreadcrumbItem>
              <BreadcrumbItem to="#">Section title</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Section landing
              </BreadcrumbItem>
            </Breadcrumb>
          </PageBreadcrumb>
          <PageSection variant={PageSectionVariants.light}>Grouped section</PageSection>
        </PageGroup>
        <PageSection variant={PageSectionVariants.dark}>Section 1</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section 2</PageSection>
      </Page>
    );
  }
}
```
