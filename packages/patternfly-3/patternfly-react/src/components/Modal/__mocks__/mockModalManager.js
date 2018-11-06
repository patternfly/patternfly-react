import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Modal } from '../index';

export class MockModalManager extends React.Component {
  propTypes = {
    children: PropTypes.node,
    rightSide: PropTypes.bool
  };

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
    const { children, rightSide } = this.props;
    const defaultBody = (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput">
            Field One
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput2">
            Field Two
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput2" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput3">
            Field Three
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput4">
            Field Four
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput5">
            Field Five
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput6">
            Field Six
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
      </form>
    );

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} className={rightSide ? 'right-side-modal-pf' : ''}>
          <Modal.Header>
            <Modal.CloseButton onClick={this.close} />
            <Modal.Title>Modal Overlay Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children || defaultBody}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={this.close}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export const basicExampleSource = `
  <Button bsStyle="primary" bsSize="large" onClick={this.open}>
  Launch basic modal
  </Button>

  <Modal show={this.state.showModal} onHide={this.close}>
    <Modal.Header>
      <button
        className="close"
        onClick={this.close}
        aria-hidden="true"
        aria-label="Close"
      >
        <Icon type="pf" name="close" />
      </button>
      <Modal.Title>Modal Overlay Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput">
            Field One
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput2">
            Field Two
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput2" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput3">
            Field Three
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsStyle="default"
        className="btn-cancel"
        onClick={this.close}
      >
        Cancel
      </Button>
      <Button bsStyle="primary" onClick={this.close}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
`;
