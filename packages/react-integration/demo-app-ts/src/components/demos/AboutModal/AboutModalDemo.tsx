import { Component } from 'react';
import { AboutModal, Button, Content } from '@patternfly/react-core';
const brandImg = '../../../assets/images/brandImg.svg';

interface AboutModalState {
  isModalOpen: boolean;
}

export class AboutModalDemo extends Component<{}, AboutModalState> {
  static displayName = 'AboutModalDemo';
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  handleModalToggle = (_event: React.MouseEvent) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <Button id="modal-button" variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={(event: any) => this.handleModalToggle(event)}
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Patternfly Logo"
          productName="Product Name"
        >
          <Content>
            <dl>
              <dt>CFME Version</dt>
              <dd>5.5.3.4.20102789036450</dd>
              <dt>Cloudforms Version</dt>
              <dd>4.1</dd>
              <dt>Server Name</dt>
              <dd>40DemoMaster</dd>
              <dt>User Name</dt>
              <dd>Administrator</dd>
              <dt>User Role</dt>
              <dd>EvmRole-super_administrator</dd>
              <dt>Browser Version</dt>
              <dd>601.2</dd>
              <dt>Browser OS</dt>
              <dd>Mac</dd>
            </dl>
          </Content>
        </AboutModal>
      </>
    );
  }
}
