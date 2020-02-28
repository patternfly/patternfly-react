import React, { Component } from 'react';

import { select, boolean } from '@storybook/addon-knobs';

import { Button, Icon } from '../../../index';
import MessageDialog from '../MessageDialog';

class MessageDialogToggleableOptions extends Component {
  state = {
    show: false
  };

  primaryAction = () => {
    // Do some stuff
    this.setState(() => ({ show: false }));
  };

  secondaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  render() {
    // StoryBook Knobs Config
    // *************************************************************************
    const value = select('Icon', ['info', 'error-circle-o', 'warning-triangle-o'], 'info');
    const title = boolean('With Title', true) ? 'Modal Title' : '';
    const primaryContent = boolean('With Primary Content', true) ? <p className="lead">Main Dialog Text</p> : null;
    const secondaryActionButtonContent = boolean('With Secondary Button', true) ? 'Cancel' : null;
    // *************************************************************************

    const secondaryContent = (
      <React.Fragment>
        <p>You are about to do something</p>
        <ul>
          <li>Here are some possible</li>
          <li>consequences of continuing</li>
          <li>with your action</li>
        </ul>
      </React.Fragment>
    );

    const customFooter = (
      <React.Fragment>
        <Button bsStyle="danger" onClick={() => {}}>
          Danger Button
        </Button>
        <Button bsStyle="default" onClick={this.onCancel}>
          Cancel
        </Button>
        <Button autoFocus bsStyle="primary" onClick={this.onConfirm}>
          Confirm
        </Button>
      </React.Fragment>
    );

    const icon = <Icon type="pf" name={value} />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Message Dialog
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Confirm"
          secondaryActionButtonContent={secondaryActionButtonContent}
          title={title}
          icon={boolean('With Icon', true) ? icon : null}
          primaryContent={primaryContent}
          secondaryContent={boolean('With Secondary Content', true) ? secondaryContent : null}
          footer={boolean('Custom Footer', false) ? customFooter : null}
          accessibleName="toggleableDialog"
          accessibleDescription="toggleableDialogContent"
        />
      </React.Fragment>
    );
  }
}

export default MessageDialogToggleableOptions;

export const MessageDialogToggleableOptionsSource = `
import React, { Component } from 'react';

import { select, boolean } from '@storybook/addon-knobs';

import { Button, Icon } from 'patternfly-react';
import MessageDialog from '../MessageDialog';

class MessageDialogToggleableOptions extends Component {
  state = {
    show: false
  };

  primaryAction = () => {
    // Do some stuff
    this.setState(() => ({ show: false }));
  };

  secondaryAction = () => {
    this.setState(() => ({ show: false }));
  };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  render() {
    // StoryBook Knobs Config
    // *************************************************************************
    const value = select(
      'Icon',
      ['info', 'error-circle-o', 'warning-triangle-o'],
      'info'
    );
    const title = boolean('With Title', true) ? 'Modal Title' : '';
    const primaryContent = boolean('With Primary Content', true) ? (
      <p className="lead">Main Dialog Text</p>
    ) : null;
    const secondaryActionButtonContent = boolean('With Secondary Button', true)
      ? 'Cancel'
      : null;
    // *************************************************************************

    const secondaryContent = (
      <React.Fragment>
        <p>You are about to do something</p>
        <ul>
          <li>Here are some possible</li>
          <li>consequences of continuing</li>
          <li>with your action</li>
        </ul>
      </React.Fragment>
    );

    const customFooter = (
      <React.Fragment>
        <Button bsStyle="danger" onClick={() => {}}>
          Danger Button
        </Button>
        <Button bsStyle="default" onClick={this.onCancel}>
          Cancel
        </Button>
        <Button autoFocus bsStyle="primary" onClick={this.onConfirm}>
          Confirm
        </Button>
      </React.Fragment>
    );

    const icon = <Icon type="pf" name={value} />;

    return (
      <React.Fragment>
        <Button onClick={this.showModal} bsStyle="primary">
          Launch Message Dialog
        </Button>
        <MessageDialog
          show={this.state.show}
          onHide={this.secondaryAction}
          primaryAction={this.primaryAction}
          secondaryAction={this.secondaryAction}
          primaryActionButtonContent="Confirm"
          secondaryActionButtonContent={secondaryActionButtonContent}
          title={title}
          icon={boolean('With Icon', true) ? icon : null}
          primaryContent={primaryContent}
          secondaryContent={
            boolean('With Secondary Content', true) ? secondaryContent : null
          }
          footer={boolean('Custom Footer', false) ? customFooter : null}
          accessibleName="toggleableDialog"
          accessibleDescription="toggleableDialogContent"
        />
      </React.Fragment>
    );
  }
}
`;
