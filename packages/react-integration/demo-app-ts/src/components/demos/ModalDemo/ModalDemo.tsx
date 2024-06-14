import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalVariant,
  Title,
  TitleSizes
} from '@patternfly/react-core';
import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

interface ModalDemoState {
  isModalOpen: boolean;
  isModalDescriptionOpen: boolean;
  isHelpModalOpen: boolean;
  isSmallModalOpen: boolean;
  isMediumModalOpen: boolean;
  isLargeModalOpen: boolean;
  isHalfWidthModalOpen: boolean;
  isCustomHeaderFooterModalOpen: boolean;
  isNoHeaderModalOpen: boolean;
  isModalCustomEscapeOpen: boolean;
  isModalAlertVariantOpen: boolean;
  customEscapePressed: boolean;
  isCustomFocusModalOpen: boolean;
}

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export class ModalDemo extends React.Component<React.HTMLProps<HTMLDivElement>, ModalDemoState> {
  static displayName = 'ModalDemo';

  state = {
    isModalOpen: false,
    isModalDescriptionOpen: false,
    isHelpModalOpen: false,
    isSmallModalOpen: false,
    isMediumModalOpen: false,
    isLargeModalOpen: false,
    isHalfWidthModalOpen: false,
    isCustomHeaderFooterModalOpen: false,
    isNoHeaderModalOpen: false,
    isModalCustomEscapeOpen: false,
    isModalAlertVariantOpen: false,
    customEscapePressed: false,
    isCustomFocusModalOpen: false
  };

  handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  handleModalDescriptionToggle = () => {
    this.setState(({ isModalDescriptionOpen }) => ({
      isModalDescriptionOpen: !isModalDescriptionOpen
    }));
  };

  handleSmallModalToggle = () => {
    this.setState(({ isSmallModalOpen }) => ({
      isSmallModalOpen: !isSmallModalOpen
    }));
  };

  handleHelpModalToggle = () => {
    this.setState(({ isHelpModalOpen }) => ({
      isHelpModalOpen: !isHelpModalOpen
    }));
  };

  handleMediumModalToggle = () => {
    this.setState(({ isMediumModalOpen }) => ({
      isMediumModalOpen: !isMediumModalOpen
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

  handleCustomHeaderFooterModalToggle = () => {
    this.setState(({ isCustomHeaderFooterModalOpen }) => ({
      isCustomHeaderFooterModalOpen: !isCustomHeaderFooterModalOpen
    }));
  };

  handleNoHeaderModalToggle = () => {
    this.setState(({ isNoHeaderModalOpen }) => ({
      isNoHeaderModalOpen: !isNoHeaderModalOpen
    }));
  };

  handleModalCustomEscapeToggle = (_event?: any, customEscapePressed?: boolean) => {
    this.setState(({ isModalCustomEscapeOpen }) => ({
      isModalCustomEscapeOpen: !isModalCustomEscapeOpen,
      customEscapePressed: customEscapePressed ?? false
    }));
  };

  handleModalAlertVariantToggle = (_event?: any, customEscapePressed?: boolean) => {
    this.setState(({ isModalAlertVariantOpen }) => ({
      isModalAlertVariantOpen: !isModalAlertVariantOpen,
      customEscapePressed: customEscapePressed ?? false
    }));
  };

  handleCustomFocusModalToggle = () => {
    this.setState(({ isCustomFocusModalOpen }) => ({
      isCustomFocusModalOpen: !isCustomFocusModalOpen
    }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderModal() {
    const { isModalOpen } = this.state;

    return (
      <Modal
        isOpen={isModalOpen}
        onClose={this.handleModalToggle}
        aria-labelledby="basic-modal-title"
        aria-describedby="modal-box-body-basic"
      >
        <ModalHeader title="Modal Header" labelId="basic-modal-title" />
        <ModalBody id="modal-box-body-basic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" data-id="modal-01-confirm-btn" variant="primary" onClick={this.handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" data-id="modal-01-cancel-btn" variant="link" onClick={this.handleModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderModalWithDescription() {
    const { isModalDescriptionOpen } = this.state;

    return (
      <Modal
        isOpen={isModalDescriptionOpen}
        onClose={this.handleModalDescriptionToggle}
        id="test-modal-id"
        aria-labelledby="with-description-modal-title"
        aria-describedby="modal-box-with-description-descriptor"
      >
        <ModalHeader
          title="Modal Header"
          labelId="with-description-modal-title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua."
          descriptorId="modal-box-with-description-descriptor"
        />
        <ModalBody id="modal-box-body-with-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleModalDescriptionToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleModalDescriptionToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderSmallModal() {
    const { isSmallModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.small}
        position="top"
        isOpen={isSmallModalOpen}
        onClose={this.handleSmallModalToggle}
        aria-labelledby="small-modal-title"
        aria-describedby="modal-box-body-small"
      >
        <ModalHeader title="Modal Header" labelId="small-modal-title" />
        <ModalBody id="modal-box-body-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleSmallModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleSmallModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderMediumModal() {
    const { isMediumModalOpen } = this.state;

    return (
      <Modal
        variant={'medium'}
        isOpen={isMediumModalOpen}
        onClose={this.handleMediumModalToggle}
        aria-labelledby="medium-modal-title"
        aria-describedby="modal-box-body-medium"
      >
        <ModalHeader title="Modal Header" labelId="medium-modal-title" />
        <ModalBody id="modal-box-body-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleMediumModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleMediumModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderLargeModal() {
    const { isLargeModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.large}
        isOpen={isLargeModalOpen}
        onClose={this.handleLargeModalToggle}
        aria-labelledby="large-modal-title"
        aria-describedby="modal-box-body-large"
      >
        <ModalHeader title="Modal Header" labelId="large-modal-title" />
        <ModalBody id="modal-box-body-large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleLargeModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleLargeModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderHalfWidthModal() {
    const { isHalfWidthModalOpen } = this.state;

    return (
      <Modal
        width={'50%'}
        isOpen={isHalfWidthModalOpen}
        onClose={this.handleHalfWidthModalToggle}
        aria-labelledby="half-width-modal-title"
        aria-describedby="modal-box-body-half-width"
      >
        <ModalHeader title="Modal Header" labelId="half-width-modal-title" />
        <ModalBody id="modal-box-body-half-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleHalfWidthModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleHalfWidthModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderCustomHeaderFooterModal() {
    const { isCustomHeaderFooterModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.large}
        isOpen={isCustomHeaderFooterModalOpen}
        aria-labelledby="customHeaderTitle"
        aria-describedby="custom-header-example"
      >
        <ModalHeader>
          <Title id="customHeaderTitle" headingLevel="h1" size={TitleSizes['2xl']}>
            Custom Modal Header/Footer
          </Title>
          <p id="customHeaderDescription" className={spacing.ptSm}>
            Allows for custom content in the header and/or footer by passing components.
          </p>
        </ModalHeader>
        <ModalBody>
          <span id="custom-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Title id="customFooterTitle" headingLevel="h4" size={TitleSizes.md}>
            <WarningTriangleIcon />
            <span className={spacing.plSm}>Custom modal footer.</span>
          </Title>
        </ModalFooter>
      </Modal>
    );
  }

  renderNoHeaderModal() {
    const { isNoHeaderModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.large}
        aria-label="Modal Header"
        isOpen={isNoHeaderModalOpen}
        aria-describedby="no-header-example"
        onClose={this.handleNoHeaderModalToggle}
      >
        <ModalBody>
          <span id="no-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>{' '}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleNoHeaderModalToggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderModalWithCustomEscape() {
    const { isModalCustomEscapeOpen } = this.state;

    return (
      <Modal
        isOpen={isModalCustomEscapeOpen}
        onClose={this.handleModalCustomEscapeToggle}
        aria-describedby="custom-escape-example"
        onEscapePress={(event: any) => this.handleModalCustomEscapeToggle(event, true)}
        aria-labelledby="custom-escape-modal-title"
      >
        <ModalHeader title="Modal Header" labelId="custom-escape-modal-title" />
        <ModalBody id="custom-escape-example">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleModalCustomEscapeToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleModalCustomEscapeToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderModalWithAlertVariant() {
    const { isModalAlertVariantOpen } = this.state;

    return (
      <Modal
        isOpen={isModalAlertVariantOpen}
        onClose={this.handleModalAlertVariantToggle}
        aria-describedby="modal-box-body-alert"
        aria-labelledby="alert-modal-title"
      >
        <ModalHeader title="Modal Header" labelId="alert-modal-title" titleIconVariant="warning" />
        <ModalBody id="modal-box-body-alert">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleModalAlertVariantToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleModalAlertVariantToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderHelpModal() {
    const { isHelpModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.small}
        position="top"
        isOpen={isHelpModalOpen}
        onClose={this.handleHelpModalToggle}
        aria-describedby="modal-box-body-help"
        aria-labelledby="help-modal-title"
      >
        <ModalHeader title="Modal Header" labelId="help-modal-title" help={<Button variant="plain">Help</Button>} />
        <ModalBody id="modal-box-body-help">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={this.handleHelpModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={this.handleHelpModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderCustomFocusModal() {
    const { isCustomFocusModalOpen } = this.state;

    return (
      <Modal
        elementToFocus="#modal-custom-focus-confirm-button"
        isOpen={isCustomFocusModalOpen}
        onClose={this.handleCustomFocusModalToggle}
        aria-describedby="modal-box-body-focus"
        aria-labelledby="focus-modal-title"
      >
        <ModalHeader
          title="Modal with custom focus"
          labelId="focus-modal-title"
          help={<Button variant="plain">Help</Button>}
        />
        <ModalBody id="modal-box-body-focus">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button
            id="modal-custom-focus-confirm-button"
            key="confirm"
            variant="primary"
            onClick={this.handleCustomFocusModalToggle}
          >
            Confirm
          </Button>
          <Button
            id="modal-custom-focus-cancel-button"
            key="cancel"
            variant="link"
            onClick={this.handleCustomFocusModalToggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const buttonStyle = {
      marginRight: 20,
      marginBottom: 20
    };

    return (
      <>
        <div id="tabstop-test" tabIndex={0} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button style={buttonStyle} variant="primary" onClick={this.handleModalToggle} id="showDefaultModalButton">
            Show Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleSmallModalToggle} id="showSmallModalButton">
            Show Small Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleMediumModalToggle}
            id="showMediumModalButton"
          >
            Show Medium Modal
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleLargeModalToggle} id="showLargeModalButton">
            Show Large Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleHalfWidthModalToggle}
            id="showHalfWidthModalButton"
          >
            Show 50% Width Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleCustomHeaderFooterModalToggle}
            id="showCustomHeaderFooterModalButton"
          >
            Show Custom Header/Footer Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleNoHeaderModalToggle}
            id="showNoHeaderModalButton"
          >
            Show No Header Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleModalDescriptionToggle}
            id="showDescriptionModalButton"
          >
            Show Modal with Description
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleModalCustomEscapeToggle}
            id="showCustomEscapeModalButton"
            className={this.state.customEscapePressed ? 'customEscapePressed' : ''}
          >
            Show Modal with custom escape button behavior
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleModalAlertVariantToggle}
            id="showCustomEscapeModalButton"
            className={this.state.customEscapePressed ? 'customEscapePressed' : ''}
          >
            Show Modal with alert variant
          </Button>
          <Button style={buttonStyle} variant="primary" onClick={this.handleHelpModalToggle} id="showHelpModalButton">
            Show Help Modal
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={this.handleCustomFocusModalToggle}
            id="showCustomFocusModalButton"
          >
            Show Custom Focus Modal
          </Button>
        </div>
        {this.renderModal()}
        {this.renderSmallModal()}
        {this.renderMediumModal()}
        {this.renderLargeModal()}
        {this.renderHalfWidthModal()}
        {this.renderCustomHeaderFooterModal()}
        {this.renderNoHeaderModal()}
        {this.renderModalWithDescription()}
        {this.renderModalWithCustomEscape()}
        {this.renderModalWithAlertVariant()}
        {this.renderHelpModal()}
        {this.renderCustomFocusModal()}
      </>
    );
  }
}
