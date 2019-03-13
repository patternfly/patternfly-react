import React from 'react';
import PropTypes from 'prop-types';
import { boolean } from '@storybook/addon-knobs';
import { Button, Spinner, Modal } from '../../../index';

export class ModalPatternExample extends React.Component {
  state = {
    showModal: false,
    loading: false
  };

  open = () => {
    this.setState({ showModal: true, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  close = () => {
    this.setState({ showModal: false, loading: false });
  };

  renderStateless = () => {
    // We need knobs on the stateless example, because we must drive its state ourselves.
    const { loading } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Stateless Modal
        </Button>

        <Modal.Pattern
          show={this.state.showModal}
          title="Stateless Modal Pattern Example"
          onClose={this.close}
          footer={
            <Button bsStyle="primary" onClick={this.close}>
              Close
            </Button>
          }
        >
          <Spinner loading={boolean('Loading', loading)}>(Modal Contents Here)</Spinner>
        </Modal.Pattern>
      </div>
    );
  };

  renderStateful = () => (
    // No knobs for the stateful example, we want to let it control its own state.
    <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>
        Launch Stateful Modal
      </Button>

      <Modal.Pattern.Stateful
        show={this.state.showModal}
        title="Stateful Modal Pattern Example"
        onClose={this.close}
        footer={
          <Button bsStyle="primary" onClick={this.close}>
            Close
          </Button>
        }
      >
        <Spinner loading={this.state.loading}>(Modal Contents Here)</Spinner>
      </Modal.Pattern.Stateful>
    </div>
  );

  render() {
    return this.props.stateful ? this.renderStateful() : this.renderStateless();
  }
}

ModalPatternExample.propTypes = {
  stateful: PropTypes.bool
};

ModalPatternExample.defaultProps = {
  stateful: false
};

export const modalPatternExampleSource = `
export class ModalPatternExample extends React.Component {
  state = {
    showModal: false,
    loading: false
  };

  open = () => {
    this.setState({ showModal: true, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  close = () => {
    this.setState({ showModal: false, loading: false });
  };

  renderStateless = () => {
    // We need knobs on the stateless example, because we must drive its state ourselves.
    const { loading } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Stateless Modal
        </Button>

        <Modal.Pattern
          show={this.state.showModal}
          title="Stateless Modal Pattern Example"
          onClose={this.close}
          footer={
            <Button bsStyle="primary" onClick={this.close}>
              Close
            </Button>
          }
        >
          <Spinner loading={boolean('Loading', loading)}>(Modal Contents Here)</Spinner>
        </Modal.Pattern>
      </div>
    );
  };

  renderStateful = () => (
    // No knobs for the stateful example, we want to let it control its own state.
    <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>
        Launch Stateful Modal
      </Button>

      <Modal.Pattern.Stateful
        show={this.state.showModal}
        title="Stateful Modal Pattern Example"
        onClose={this.close}
        footer={
          <Button bsStyle="primary" onClick={this.close}>
            Close
          </Button>
        }
      >
        <Spinner loading={this.state.loading}>(Modal Contents Here)</Spinner>
      </Modal.Pattern.Stateful>
    </div>
  );

  render() {
    return this.props.stateful ? this.renderStateful() : this.renderStateless();
  }
}
`;
