import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './pf_mini_logo_white.svg';
import logoImg from './pf_logo.svg';

class SimpleAboutModal extends React.Component {
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
          brandImageAlt="Patternfly Logo"
          logoImageSrc={logoImg}
          logoImageAlt="Patternfly Logo"
        >
          <TextContent>
            <TextList component="dl">
              <TextListItem component="dt">CFME Version</TextListItem>
              <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
              <TextListItem component="dt">Cloudforms Version</TextListItem>
              <TextListItem component="dd">4.1</TextListItem>
              <TextListItem component="dt">Server Name</TextListItem>
              <TextListItem component="dd">40DemoMaster</TextListItem>
              <TextListItem component="dt">User Name</TextListItem>
              <TextListItem component="dd">Administrator</TextListItem>
              <TextListItem component="dt">User Role</TextListItem>
              <TextListItem component="dd">EvmRole-super_administrator</TextListItem>
              <TextListItem component="dt">Browser Version</TextListItem>
              <TextListItem component="dd">601.2</TextListItem>
              <TextListItem component="dt">Browser OS</TextListItem>
              <TextListItem component="dd">Mac</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}

export default SimpleAboutModal;
