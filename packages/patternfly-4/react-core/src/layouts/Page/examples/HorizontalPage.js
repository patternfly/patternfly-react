import React from 'react';
import { Page, PageLayouts, PageSection, PageSectionVariants } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class HorizontalPage extends React.Component {
  static title = 'Simple Page';
  static getContainerProps = getContainerProps;

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
  }

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isNavOpen } = this.state;
    const PageLogo = <div>Brand</div>;
    const PageNav = (
      <div>
        <span>Nav Item</span>
        <span>&nbsp;|&nbsp;</span>
        <span>Nav Item</span>
        <span>&nbsp;|&nbsp;</span>
        <span>Nav Item</span>
      </div>
    );
    const PageToolbar = <div>Toolbar</div>;
    const PageAvatar = <div>&nbsp;|&nbsp;Avatar</div>;

    return (
      <Page
        layout={PageLayouts.horizontal}
        logo={PageLogo}
        toolbar={PageToolbar}
        avatar={PageAvatar}
        nav={PageNav}
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      >
        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      </Page>
    );
  }
}

export default HorizontalPage;
