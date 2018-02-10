import React from 'react';
import logo from 'patternfly/dist/img/logo-alt.svg';
import productTitle from 'patternfly/dist/img/brand-alt.svg';
import { Button } from '../../Button';
import { AboutModal } from '../index';

export class MockAboutModal extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch About Modal
        </Button>

        <AboutModal
          show={this.state.showModal}
          onHide={this.close}
          productTitle={<img src={productTitle} alt="Product Title" />}
          logo={logo}
          altLogo="Patternfly Logo"
          trademarkText="Trademark and Copyright Information"
        >
          <AboutModal.Versions>
            <AboutModal.VersionItem label="Label" versionText="Version" />
            <AboutModal.VersionItem label="Label" versionText="Version" />
            <AboutModal.VersionItem label="Label" versionText="Version" />
            <AboutModal.VersionItem label="Label" versionText="Version" />
          </AboutModal.Versions>
        </AboutModal>
      </div>
    );
  }
}

export const MockAboutModalSource = `
import React from 'react';
import { Button } from '../../Button';
import { AboutModal } from '../index';
import logo from 'patternfly/dist/img/logo-alt.svg';

export class MockAboutModal extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({ showModal: true });
  }
  close() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch About Modal
        </Button>

        <AboutModal
          show={this.state.showModal}
          onHide={this.close}
          productTitle="Product Title"
          logo={logo}
          altLogo="Patternfly Logo"
          trademarkText="Trademark and Copyright Information"
        >
          <AboutModal.Versions>
            <AboutModal.VersionItem label="Label" versionText="Version" />
          </AboutModal.Versions>
        </AboutModal>
      </div>
    );
  }
}
`;
