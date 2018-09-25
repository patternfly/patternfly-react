import React from 'react';
import { Page, PageSection, PageSectionVariants } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class VerticalPage extends React.Component {
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
      <ul>
        <li>Nav Item</li>
        <li>Nav Item</li>
        <li>Nav Item</li>
      </ul>
    );
    const PageToolbar = <div>Toolbar</div>;
    const PageAvatar = <div>&nbsp;|&nbsp;Avatar</div>;

    return (
      <Page
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

export default VerticalPage;
