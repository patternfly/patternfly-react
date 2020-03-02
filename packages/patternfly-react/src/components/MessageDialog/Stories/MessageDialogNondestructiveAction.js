import React, { Component } from 'react';

import { Button } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogNondestructiveAction extends Component {
  state = {
    show: false
  };

  primaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  secondaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  render() {
    const primaryContent = <p className="lead">Main Dialog Text</p>;
    const secondaryContent = <p>{lorem}</p>;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Nondestructive Action Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Action"
          secondaryActionButtonContent="Cancel"
          title="Modal Title Here"
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="nondestructiveActionDialog"
          accessibleDescription="nondestructiveActionDialogContent"
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogNondestructiveAction;

export const MessageDialogNondestructiveActionSource = `
import React, { Component } from 'react';

import { Button } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogNondestructiveAction extends Component {
  state = {
    show: false
  };

  primaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  secondaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  render() {
    const primaryContent = <p className="lead">Main Dialog Text</p>;
    const secondaryContent = <p>{lorem}</p>;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Nondestructive Action Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Action"
          secondaryActionButtonContent="Cancel"
          title="Modal Title Here"
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="nondestructiveActionDialog"
          accessibleDescription="nondestructiveActionDialogContent"
        />
      </React.Fragment>
    );
  }
}
`;
