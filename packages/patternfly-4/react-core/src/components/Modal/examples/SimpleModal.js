import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class SimpleModal extends React.Component {
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
          Show Modal
        </Button>
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
      </React.Fragment>
    );
  }
}

export default SimpleModal;
