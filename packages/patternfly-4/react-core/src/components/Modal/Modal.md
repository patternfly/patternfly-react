---
title: 'Modal'
cssPrefix: 'pf-c-modal-box'
typescript: true
propComponents: ['Modal', 'ModalBox', 'ModalBoxBody', 'ModalBoxCloseButton', 'ModalBoxFooter', 'ModalBoxHeader', 'ModalContent']
---

import { Modal, Button, BaseSizes, TitleLevel } from '@patternfly/react-core';
import { WarningTriangleIcon } from '@patternfly/react-icons';

## Simple modal
```js
import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

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
```

## Modal (small)
```js
import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class SmallModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show Small Modal
        </Button>
        <Modal
          isSmall
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
```

## Modal (large)
```js
import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class LargeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show Large Modal
        </Button>
        <Modal
          isLarge
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
```

## Modal (width)
```js
import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class WidthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show 50% Width Modal
        </Button>
        <Modal
          width={'50%'}
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
```

## Modal (custom header and footer)
```js
import React from 'react';
import { Modal, Button, BaseSizes, TitleLevel } from '@patternfly/react-core';

class CustomHeaderFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    const header = (
      <React.Fragment>
        <Title headingLevel={TitleLevel.h1} size={BaseSizes["2xl"]}>
          Custom Modal Header/Footer
        </Title>
        <p className="pf-u-pt-sm">
          Allows for custom content in the header and/or footer by passing components.
        </p>
      </React.Fragment>
    );

    const footer = (
      <Title headingLevel={TitleLevel.h4} size={BaseSizes.sm}>
        <WarningTriangleIcon />
        <span  className="pf-u-pl-sm">Custom modal footer.</span>
      </Title>
    );

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show Custom Header/Footer Modal
        </Button>
        <Modal
          isLarge
          isOpen={isModalOpen}
          header={header}
          title="custom header example"
          ariaDescribedById="custom-header-example"
          onClose={this.handleModalToggle}
          footer={footer}
        >
          <span id="custom-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      </React.Fragment>
    );
  }
}
```

## Modal (no header)
```js
import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

class NoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show No Header Modal
        </Button>
        <Modal
          isLarge
          isOpen={isModalOpen}
          hideTitle={true}
          title="no header example"
          showClose={false}
          ariaDescribedById="no-header-example"
          onClose={this.handleModalToggle}
          actions={[
            <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
              Close
            </Button>
          ]}
        >
          <span id="no-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      </React.Fragment>
    );
  }
}
```
