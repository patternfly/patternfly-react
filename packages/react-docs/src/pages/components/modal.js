import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Modal, Button } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

class ModalDocs extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showLargeModal: false
    };
  }

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };

  showLargeModal = () => {
    this.setState({
      showLargeModal: true
    });
  };

  hideLargeModal = () => {
    this.setState({
      showLargeModal: false
    });
  };

  render() {
    const { data } = this.props;

    const actionButtons = (
      <Button variant="primary" onClick={this.hideModal}>
        Close
      </Button>
    );

    const actionButtonsLargeModal = (
      <Button variant="primary" onClick={this.hideLargeModal}>
        OK
      </Button>
    );

    return (
      <ComponentDocs data={data}>
        <Example title="Simple Modal Box">
          <Button variant="primary" onClick={this.showModal}>
            Show Modal
          </Button>
          <Modal isOpen={this.state.showModal} actions={actionButtons} onClose={this.hideModal} title="Modal Header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Modal>
        </Example>
        <Example title="Large Modal Box">
          <Button variant="primary" onClick={this.showLargeModal}>
            Show Large Modal
          </Button>
          <Modal
            isOpen={this.state.showLargeModal}
            actions={actionButtonsLargeModal}
            onClose={this.hideLargeModal}
            isLarge
            title="Modal Header"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Modal>
        </Example>
      </ComponentDocs>
    );
  }
}

export const query = graphql`
  query ModalDocsQuery {
    componentMetadata(displayName: { eq: "Modal" }) {
      ...ComponentDocs
    }
  }
`;

export default ModalDocs;
