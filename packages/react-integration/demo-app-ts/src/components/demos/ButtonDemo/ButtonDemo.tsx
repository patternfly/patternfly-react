import React from 'react';
import { Button, ButtonProps } from '@patternfly/react-core';

export class ButtonDemo extends React.Component {
  myButtonProps: ButtonProps = {
    component: 'a',
    href: 'https://github.com/patternfly/patternfly-next',
    target: '_blank'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          component={this.myButtonProps.component}
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="primary"
          id="primary-button"
        >
          Link to Core Docs
        </Button>{' '}
        <Button
          component={this.myButtonProps.component}
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="secondary"
          id="secondary-button"
        >
          Secondary Link to Core Docs
        </Button>{' '}
        <Button
          component={this.myButtonProps.component}
          isDisabled
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="tertiary"
          id="tertiary-button"
        >
          Tertiary Link to Core Docs
        </Button>
        <Button
          component={this.myButtonProps.component}
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="control"
          id="control-button"
        >
          Control Button
        </Button>
        <Button variant="link" tabIndex={-1}>
          Button with tab index set to zero
        </Button>
      </React.Fragment>
    );
  }
}
