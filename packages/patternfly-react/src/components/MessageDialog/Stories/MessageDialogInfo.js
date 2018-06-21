import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogInfo extends Component {
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
    const icon = <Icon type="pf" name="info" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Info Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.primaryAction}
          primaryAction={this.primaryAction}
          primaryActionButtonContent="Close"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="infoDialog"
          accessibleDescription="infoDialogContent"
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogInfo;

export const MessageDialogInfoSource = `
import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogInfo extends Component {
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
    const icon = <Icon type="pf" name="info" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Info Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.primaryAction}
          primaryAction={this.primaryAction}
          primaryActionButtonContent="Close"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="infoDialog"
          accessibleDescription="infoDialogContent"
        />
      </React.Fragment>
    );
  }
}
`;
