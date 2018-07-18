import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Modal, Button } from '@patternfly/react-core';
import Example from '../../components/example';

class ModalDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showLargeModal: false
    };

    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideLargeModal = this.hideLargeModal.bind(this);
    this.showLargeModal = this.showLargeModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  showLargeModal() {
    this.setState({
      showLargeModal: true
    });
  }

  hideLargeModal() {
    this.setState({
      showLargeModal: false
    });
  }

  render() {
    const { data } = this.props;
    return (
      <ComponentDocs data={data}>
        <Example title="Simple Modal Box">
          <Button
            variant="primary"
            label="Simple Modal Example"
            onClick={this.showModal}
          >
            Show Modal
          </Button>
          <Modal
            show={this.state.showModal}
            header="Modal Header"
            footer="Modal Footer"
            onClose={this.hideModal}
            label="Modal Header"
          >
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
          </Modal>
        </Example>
        <Example title="Large Modal Box">
          <Button
            variant="primary"
            label="Large Modal Example"
            onClick={this.showLargeModal}
          >
            Show Large Modal
          </Button>
          <Modal
            show={this.state.showLargeModal}
            header="Modal Header"
            footer="Modal Footer"
            onClose={this.hideLargeModal}
            isLarge
            label="Modal Header"
          >
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
            Modal Body Modal Body Modal Body Modal Body Modal Body Modal Body
          </Modal>
        </Example>
      </ComponentDocs>
    );
  }
}

const propTypes = {
  data: PropTypes.any.isRequired
};

ModalDocs.propTypes = propTypes;

export const query = graphql`
  query ModalDocsQuery {
    componentMetadata(displayName: { eq: "Modal" }) {
      ...ComponentDocs
    }
  }
`;

export default ModalDocs;
