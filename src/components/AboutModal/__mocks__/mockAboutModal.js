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
