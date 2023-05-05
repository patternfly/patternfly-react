import React from 'react';
import { Modal, ModalVariant, Button, Title, TitleSizes } from '@patternfly/react-core';
import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';

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
}

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
    customEscapePressed: false
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

  handleModalCustomEscapeToggle = (event?: any, customEscapePressed?: boolean) => {
    this.setState(({ isModalCustomEscapeOpen }) => ({
      isModalCustomEscapeOpen: !isModalCustomEscapeOpen,
      customEscapePressed
    }));
  };

  handleModalAlertVariantToggle = (event?: any, customEscapePressed?: boolean) => {
    this.setState(({ isModalAlertVariantOpen }) => ({
      isModalAlertVariantOpen: !isModalAlertVariantOpen,
      customEscapePressed
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
          <Button key="cancel" data-id="modal-01-cancel-btn" variant="secondary" onClick={this.handleModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" data-id="modal-01-confirm-btn" variant="primary" onClick={this.handleModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderModalWithDescription() {
    const { isModalDescriptionOpen } = this.state;

    return (
      <Modal
        title="Modal Header"
        isOpen={isModalDescriptionOpen}
        onClose={this.handleModalDescriptionToggle}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua."
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleModalDescriptionToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleModalDescriptionToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderSmallModal() {
    const { isSmallModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.small}
        position="top"
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
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderMediumModal() {
    const { isMediumModalOpen } = this.state;

    return (
      <Modal
        variant={'medium'}
        title="Modal Header"
        isOpen={isMediumModalOpen}
        onClose={this.handleMediumModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleMediumModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleMediumModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderLargeModal() {
    const { isLargeModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.large}
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
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderHalfWidthModal() {
    const { isHalfWidthModalOpen } = this.state;

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
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderCustomHeaderFooterModal() {
    const { isCustomHeaderFooterModalOpen } = this.state;

    const header = (
      <React.Fragment>
        <Title id="customHeaderTitle" headingLevel="h1" size={TitleSizes['2xl']}>
          Custom Modal Header/Footer
        </Title>
        <p id="customHeaderDescription" className="pf-v5-u-pt-sm">
          Allows for custom content in the header and/or footer by passing components.
        </p>
      </React.Fragment>
    );

    const footer = (
      <Title id="customFooterTitle" headingLevel="h4" size={TitleSizes.md}>
        <WarningTriangleIcon />
        <span className="pf-v5-u-pl-sm">Custom modal footer.</span>
      </Title>
    );

    return (
      <Modal
        variant={ModalVariant.large}
        isOpen={isCustomHeaderFooterModalOpen}
        header={header}
        title="custom header example"
        aria-labelledby="customHeaderTitle"
        aria-describedby="custom-header-example"
        onClose={this.handleCustomHeaderFooterModalToggle}
        footer={footer}
      >
        <span id="custom-header-example">
          When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
          aria-describedby value.
        </span>
        <br />
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Modal>
    );
  }

  renderModalWithCustomEscape() {
    const { isModalCustomEscapeOpen } = this.state;

    return (
      <Modal
        title="Modal Header"
        isOpen={isModalCustomEscapeOpen}
        onClose={this.handleModalCustomEscapeToggle}
        aria-describedby="custom-escape-example"
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleModalCustomEscapeToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleModalCustomEscapeToggle}>
            Confirm
          </Button>
        ]}
        onEscapePress={(event: any) => this.handleModalCustomEscapeToggle(event, true)}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderModalWithAlertVariant() {
    const { isModalAlertVariantOpen } = this.state;

    return (
      <Modal
        title="Modal Header"
        titleIconVariant="warning"
        isOpen={isModalAlertVariantOpen}
        onClose={this.handleModalAlertVariantToggle}
        aria-describedby="custom-escape-example"
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleModalAlertVariantToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleModalAlertVariantToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    );
  }

  renderHelpModal() {
    const { isHelpModalOpen } = this.state;

    return (
      <Modal
        variant={ModalVariant.small}
        help={<Button variant="plain">Help</Button>}
        position="top"
        title="Modal Header"
        isOpen={isHelpModalOpen}
        onClose={this.handleHelpModalToggle}
        actions={[
          <Button key="cancel" variant="secondary" onClick={this.handleHelpModalToggle}>
            Cancel
          </Button>,
          <Button key="confirm" variant="primary" onClick={this.handleHelpModalToggle}>
            Confirm
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
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
      </React.Fragment>
    );
  }
}
