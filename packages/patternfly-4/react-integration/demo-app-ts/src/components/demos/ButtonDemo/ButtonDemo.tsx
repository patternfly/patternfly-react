import React from 'react';
import { Button, ButtonProps } from '@patternfly/react-core';

export class ButtonDemo extends React.Component {
  myButtonProps: ButtonProps = {
    component: 'button',
    href: 'https://github.com/patternfly/patternfly-next',
    target: '_blank'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <a href="https://github.com/patternfly/patternfly-next">
          <Button
            component={this.myButtonProps.component}
            href={this.myButtonProps.href}
            target={this.myButtonProps.target}
            variant="primary"
          >
            Link to Core Docs
          </Button>{' '}
        </a>
        <a href="https://github.com/patternfly/patternfly-next">
          <Button
            component={this.myButtonProps.component}
            href={this.myButtonProps.href}
            target={this.myButtonProps.target}
            variant="secondary"
          >
            Secondary Link to Core Docs
          </Button>{' '}
        </a>
        <Button
          component={this.myButtonProps.component}
          isDisabled
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="tertiary"
        >
          Tertiary Link to Core Docs
        </Button>
        <Button
          component={this.myButtonProps.component}
          href={this.myButtonProps.href}
          target={this.myButtonProps.target}
          variant="control"
        >
          Control Button
        </Button>
      </React.Fragment>
    );
  }
}
