import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class NoHeader extends React.Component {
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
          Show No Header Modal
        </Button>
        <Modal
          isLarge
          title="Modal Header"
          isOpen={isModalOpen}
          hideTitle={true}
          ariaDescribedById="no-header-example"
          onClose={this.handleModalToggle}
          actions={[
            <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
              Close
            </Button>
          ]}
        >
          <span id="no-header-example">When static text describing the modal is available, it can be wrapped with
          an ID referring to the modal's aria-describedby value.</span> Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      </React.Fragment>
    );
  }
}

export default NoHeader;