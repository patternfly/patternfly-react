import React from 'react';
import {
  Page,
  PageHeader,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  SkipToContent
} from '@patternfly/react-core';

export class PageDemo extends React.Component {
  state = {
    isNavOpen: true
  };
  onNavToggle = () => {
    this.setState({
    	isNavOpen: !this.state.isNavOpen
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
        logo="Logo that's a <div>"
        logoProps={logoProps}
        toolbar="Toolbar"
        avatar=" | Avatar"
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
        logoComponent={'div'}
      />
    );
    const pageId = 'page-demo-page-id';
    const PageSkipToContent = (
      <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>
    );
    const Sidebar = <PageSidebar id="page-demo-sidebar" nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar} mainContainerId={pageId} skipToContent={PageSkipToContent}>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
      </Page>
    );
  }
}

