import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogError extends Component {
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
    const icon = <Icon type="pf" name="error-circle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Error Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Action"
          secondaryActionButtonContent="Cancel"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="errorDialog"
          accessibleDescription="errorDialogContent"
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogError;

export const MessageDialogErrorSource = `
import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogError extends Component {
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
    const icon = <Icon type="pf" name="error-circle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Error Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Action"
          secondaryActionButtonContent="Cancel"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="errorDialog"
          accessibleDescription="errorDialogContent"
        />
      </React.Fragment>
    );
  }
}
`;
