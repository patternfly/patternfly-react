import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './pf_mini_logo_white.svg';
import logoImg from './pf_logo.svg';
import heroImg from './pfbg_992.jpg';

class SimpleAboutModal extends React.Component {
  static title = 'Simple AboutModal';

  state = {
    isModalOpen: false
  };

  handleModalToggle = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={this.handleModalToggle}
          productName="Product Name"
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Brand Image"
          logoImageSrc={logoImg}
          logoImageAlt="AboutModal Logo"
          heroImageSrc={heroImg}
        >
          <TextContent>
            <TextList variant="dl">
              <TextListItem variant="dt">CFME Version</TextListItem>
              <TextListItem variant="dd">5.5.3.4.20102789036450</TextListItem>
              <TextListItem variant="dt">Cloudforms Version</TextListItem>
              <TextListItem variant="dd">4.1</TextListItem>
              <TextListItem variant="dt">Server Name</TextListItem>
              <TextListItem variant="dd">40DemoMaster</TextListItem>
              <TextListItem variant="dt">User Name</TextListItem>
              <TextListItem variant="dd">Administrator</TextListItem>
              <TextListItem variant="dt">User Role</TextListItem>
              <TextListItem variant="dd">EvmRole-super_administrator</TextListItem>
              <TextListItem variant="dt">Browser Version</TextListItem>
              <TextListItem variant="dd">601.2</TextListItem>
              <TextListItem variant="dt">Browser OS</TextListItem>
              <TextListItem variant="dd">Mac</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}

export default SimpleAboutModal;
