import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogWarning extends Component {
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
    const primaryText = <p className="lead">Main Dialog Text</p>;
    const secondaryText = <p>{lorem}</p>;
    const icon = <Icon type="pf" name="warning-triangle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Warning Dialog Example
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
          primaryText={primaryText}
          secondaryText={secondaryText}
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogWarning;

export const MessageDialogWarningSource = `
import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogWarning extends Component {
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
    const primaryText = <p className="lead">Main Dialog Text</p>;
    const secondaryText = <p>{lorem}</p>;
    const icon = <Icon type="pf" name="warning-triangle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Warning Dialog Example
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
          primaryText={primaryText}
          secondaryText={secondaryText}
        />
      </React.Fragment>
    );
  }
}
`;
