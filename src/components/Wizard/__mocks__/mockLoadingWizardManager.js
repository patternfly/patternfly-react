import React from 'react';
import { bindMethods } from '../../../common/helpers';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Modal } from '../../Modal';
import { Wizard } from '../index';

import { mockLoadingContents } from './mockWizardItems';

export class MockLoadingWizardManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    bindMethods(this, ['open', 'close']);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch loading wizard
        </Button>

        <Modal
          show={showModal}
          onHide={this.close}
          dialogClassName="modal-lg wizard-pf"
        >
          <Wizard>
            <Modal.Header>
              <button
                className="close"
                onClick={this.close}
                aria-hidden="true"
                aria-label="Close"
              >
                <Icon type="pf" name="close" />
              </button>
              <Modal.Title>Wizard Title</Modal.Title>
            </Modal.Header>
            <Modal.Body className="wizard-pf-body clearfix">
              <Wizard.Row>
                <Wizard.Main>{mockLoadingContents()}</Wizard.Main>
              </Wizard.Row>
            </Modal.Body>
            <Modal.Footer className="wizard-pf-footer">
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
            </Modal.Footer>
          </Wizard>
        </Modal>
      </div>
    );
  }
}

export const mockLoadingWizardSource = `
  <div>
    <Button bsStyle="primary" bsSize="large" onClick={this.open}>
      Launch loading wizard
    </Button>

    <Modal
      show={showModal}
      onHide={this.close}
      dialogClassName="modal-lg wizard-pf"
    >
      <Wizard>
        <Modal.Header>
          <button
            className="close"
            onClick={this.close}
            aria-hidden="true"
            aria-label="Close"
          >
            <Icon type="pf" name="close" />
          </button>
          <Modal.Title>Wizard Title</Modal.Title>
        </Modal.Header>
        <Modal.Body className="wizard-pf-body clearfix">
          <Wizard.Row>
            <Wizard.Main>{mockLoadingContents()}</Wizard.Main>
          </Wizard.Row>
        </Modal.Body>
        <Modal.Footer className="wizard-pf-footer">
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
        </Modal.Footer>
      </Wizard>
    </Modal>
  </div>
`;
