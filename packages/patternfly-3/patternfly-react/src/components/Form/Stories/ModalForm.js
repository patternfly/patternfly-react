import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { Icon } from '../../Icon';
import { Form } from '../index';

class ModalForm extends React.Component {
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
          Launch Modal Form
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <button className="close" onClick={this.close} aria-hidden="true" aria-label="Close">
              <Icon type="pf" name="close" />
            </button>
            <Modal.Title>Basic Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>{this.props.formFields}</Form>
          </Modal.Body>
          <Modal.Footer>
            {this.props.formButtons}
            {this.props.showLoading && this.props.formSpinner}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ModalForm.propTypes = {
  showLoading: PropTypes.bool.isRequired,
  formFields: PropTypes.array.isRequired,
  formButtons: PropTypes.array.isRequired,
  formSpinner: PropTypes.node.isRequired
};

export { ModalForm };
