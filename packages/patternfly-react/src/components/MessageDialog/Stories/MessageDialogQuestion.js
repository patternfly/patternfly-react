import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogQuestion extends Component {
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
    const primaryContent = <p className="lead">Main Dialog Text. Are you sure you want to xxxxx?</p>;
    const secondaryContent = <p>{lorem}</p>;
    const icon = <Icon type="pf" name="warning-triangle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Question Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Yes"
          secondaryActionButtonContent="No"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="questionDialog"
          accessibleDescription="questionDialogContent"
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogQuestion;

export const MessageDialogQuestionSource = `
import React, { Component } from 'react';

import { Button, Icon } from '../../../index';
import lorem from './lorem';
import MessageDialog from '../MessageDialog';

class MessageDialogQuestion extends Component {
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
    const primaryContent = (
      <p className="lead">Main Dialog Text. Are you sure you want to xxxxx?</p>
    );
    const secondaryContent = <p>{lorem}</p>;
    const icon = <Icon type="pf" name="warning-triangle-o" />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Question Dialog Example
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Yes"
          secondaryActionButtonContent="No"
          title="Modal Title Here"
          icon={icon}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          accessibleName="questionDialog"
          accessibleDescription="questionDialogContent"
        />
      </React.Fragment>
    );
  }
}
`;
