import React from 'react';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Wizard } from '../index';

import { mockLoadingContents } from './mockWizardItems';

export class LoadingWizardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  close = () => {
    this.setState({ showModal: false });
  };
  open = () => {
    this.setState({ showModal: true });
  };
  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch loading wizard
        </Button>

        <Wizard show={showModal} onHide={this.close}>
          <Wizard.Header onClose={this.close} title="Wizard Title" />
          <Wizard.Body>
            <Wizard.Row>
              <Wizard.Main>{mockLoadingContents()}</Wizard.Main>
            </Wizard.Row>
          </Wizard.Body>
          <Wizard.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
              Cancel
            </Button>
            <Button bsStyle="default" disabled>
              <Icon type="fa" name="angle-left" />
              Back
            </Button>
            <Button bsStyle="primary" disabled>
              Next
              <Icon type="fa" name="angle-right" />
            </Button>
          </Wizard.Footer>
        </Wizard>
      </div>
    );
  }
}

export const loadingWizardExampleSource = `
<div>
  <Button bsStyle="primary" bsSize="large" onClick={this.open}>
    Launch loading wizard
  </Button>

  <Wizard show={showModal} onHide={this.close}>
    <Wizard.Header onClose={this.close} title="Wizard Title" />
    <Wizard.Body>
      <Wizard.Row>
        <Wizard.Main>{mockLoadingContents()}</Wizard.Main>
      </Wizard.Row>
    </Wizard.Body>
    <Wizard.Footer>
      <Button
        bsStyle="default"
        className="btn-cancel"
        onClick={this.close}
      >
        Cancel
      </Button>
      <Button bsStyle="default" disabled>
        <Icon type="fa" name="angle-left" />Back
      </Button>
      <Button bsStyle="primary" disabled>
        Next<Icon type="fa" name="angle-right" />
      </Button>
    </Wizard.Footer>
  </Wizard>
</div>
`;
