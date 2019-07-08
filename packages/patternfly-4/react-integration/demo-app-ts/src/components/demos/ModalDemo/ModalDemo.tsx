import React from 'react';
import { Modal, Button, Grid, GridItem } from '@patternfly/react-core';

type ModalDemoState = {
  isModalOpen: boolean;
  isSmallModalOpen: boolean;
  isLargeModalOpen: boolean;
  isHalfWidthModalOpen: boolean;
  isNoHeaderModalOpen: boolean;
};

export class ModalDemo extends React.Component<React.HTMLProps<HTMLDivElement>, ModalDemoState> {

  state = {
    isModalOpen: false,
    isSmallModalOpen: false,
    isLargeModalOpen: false,
    isHalfWidthModalOpen: false,
    isNoHeaderModalOpen: false
  };

  handleModalToggle = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  handleSmallModalToggle = () => {
    this.setState(({ isSmallModalOpen }) => ({
      isSmallModalOpen: !isSmallModalOpen
    }));
  };

  handleLargeModalToggle = () => {
    this.setState(({ isLargeModalOpen }) => ({
      isLargeModalOpen: !isLargeModalOpen
    }));
  };

  handleHalfWidthModalToggle = () => {
    this.setState(({ isHalfWidthModalOpen }) => ({
      isHalfWidthModalOpen: !isHalfWidthModalOpen
    }));
  };

  handleNoHeaderModalToggle = () => {
    this.setState(({ isNoHeaderModalOpen }) => ({
      isNoHeaderModalOpen: !isNoHeaderModalOpen
    }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderModal() {
    const { isModalOpen } = this.state;

    return (
      <Modal
        title="Modal Header"
        isOpen={isModalOpen}
        onClose={this.handleModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </Modal>
    );
  }

  renderSmallModal() {
    const {isSmallModalOpen} = this.state;

    return (
      <Modal
        isSmall
        title="Modal Header"
        isOpen={isSmallModalOpen}
        onClose={this.handleSmallModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleSmallModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleSmallModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </Modal>
    );
  }

  renderLargeModal() {
    const {isLargeModalOpen} = this.state;

    return (
      <Modal
        isLarge
        title="Modal Header"
        isOpen={isLargeModalOpen}
        onClose={this.handleLargeModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleLargeModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleLargeModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </Modal>
    );
  }

  renderHalfWidthModal() {
    const {isHalfWidthModalOpen} = this.state;

    return (
      <Modal
        width={'50%'}
        title="Modal Header"
        isOpen={isHalfWidthModalOpen}
        onClose={this.handleHalfWidthModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleHalfWidthModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleHalfWidthModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </Modal>
    );
  }

  renderNoHeaderModal() {
    const {isNoHeaderModalOpen} = this.state;

    return (
      <Modal
        isLarge
        title="Modal Header"
        isOpen={isNoHeaderModalOpen}
        hideTitle={true}
        ariaDescribedById="no-header-example"
        onClose={this.handleNoHeaderModalToggle}
        actions={[
          <Button key="confirm" variant="primary" onClick={this.handleNoHeaderModalToggle}>
            Close
          </Button>
        ]}
      >
          <span id="no-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>{' '}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Modal>
    );
  }

  render() {

    const buttonStyle = {
      marginRight: 20,
      marginBottom: 20
    };

    return (
      <React.Fragment>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button style={buttonStyle} variant="primary" onClick={this.handleModalToggle} id="showDefaultModalButton">
           Show Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleSmallModalToggle} id="showSmallModalButton">
            Show Small Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleLargeModalToggle} id="showLargeModalButton">
            Show Large Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleHalfWidthModalToggle} id="showHalfWidthModalButton">
            Show 50% Width Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleNoHeaderModalToggle} id="showNoHeaderModalButton">
            Show No Header Modal
          </Button>
        </div>
        {this.renderModal()}
        {this.renderSmallModal()}
        {this.renderLargeModal()}
        {this.renderHalfWidthModal()}
        {this.renderNoHeaderModal()}
      </React.Fragment>
    );
  }
}
