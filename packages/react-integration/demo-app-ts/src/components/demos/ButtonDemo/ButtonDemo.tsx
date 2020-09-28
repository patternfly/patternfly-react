import React from 'react';
import { Button, ButtonProps, Tooltip } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';

const href = 'https://www.google.com';

interface ButtonDemoState {
  counter: number;
}
export class ButtonDemo extends React.Component<ButtonProps, ButtonDemoState> {
  static displayName = 'ButtonDemo';
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  normalButton: ButtonProps = {
    className: 'pf-u-m-sm',
    component: 'button',
    onClick: () => {
      window.location.href = 'https://github.com/patternfly/patternfly-react';
    }
  };

  linkButton: ButtonProps = {
    className: 'pf-u-m-sm',
    component: 'button',
    icon: <PlusCircleIcon />,
    onKeyPress: () => {
      window.location.href = 'https://github.com/patternfly/patternfly-react';
    },
    variant: 'link'
  };

  linkAsButton: ButtonProps = {
    className: 'pf-u-m-sm',
    component: 'a',
    href: 'https://github.com/patternfly/patternfly-react',
    icon: <ExternalLinkAltIcon />,
    target: '_blank'
  };

  myButtonProps: ButtonProps = {
    component: 'button',
    href,
    target: '_blank'
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="btn-demo-area">
        <Button {...this.normalButton} id="normal-btn-1" variant="primary">
          Primary
        </Button>
        <Button {...this.normalButton} id="normal-btn-2" variant="secondary">
          Secondary
        </Button>
        <Button {...this.normalButton} id="normal-btn-3" variant="tertiary">
          Tertiary
        </Button>
        <Button {...this.normalButton} id="normal-btn-4" variant="danger">
          Danger
        </Button>
        <Button {...this.normalButton} id="normal-btn-5" variant="link">
          Link
        </Button>
        <Button {...this.normalButton} id="normal-btn-6" variant="plain">
          Plain
        </Button>
        <Button {...this.normalButton} id="normal-btn-7" variant="control">
          Control
        </Button>
        <Button {...this.normalButton} id="normal-btn-8" isDisabled>
          Disabled button
        </Button>
        <Button {...this.normalButton} id="normal-btn-9" isAriaDisabled>
          Aria-disabled button
        </Button>
        <Button {...this.normalButton} id="normal-btn-10" tabIndex={2}>
          Button with tabindex set to 2
        </Button>
        <Tooltip id="button-with-tooltip-1" content="This tooltip content is available to the aria-disabled button">
          <Button
            {...this.normalButton}
            id="normal-btn-11"
            isAriaDisabled
            onKeyPress={() => {
              window.location.href = 'https://github.com/patternfly/patternfly-react';
            }}
          >
            Aria-disabled with tooltip
          </Button>
        </Tooltip>
        <Button {...this.normalButton} id="normal-btn-12" isSmall>
          Small button
        </Button>
        <Button {...this.normalButton} id="normal-btn-13" isLarge>
          Large button
        </Button>
        <Button {...this.normalButton} id="normal-btn-14" variant="warning">
          Warning
        </Button>
        <Button {...this.normalButton} id="normal-btn-15" isLoading>
          Loading button
        </Button>
        <Button {...this.normalButton} id="normal-btn-16" isLoading={false}>
          Loader button
        </Button>

        <Button
          id="aria-disabled-btn-1"
          onBlur={this.decrementCounter}
          onFocus={this.decrementCounter}
          onClick={this.incrementCounter}
          onKeyPress={this.incrementCounter}
          isAriaDisabled
          inoperableEvents={['onFocus']}
        >
          Aria-disabled link button with custom list of prevented events {this.state.counter}
        </Button>

        <hr className="pf-u-m-md" />
        <Button {...this.linkButton} id="link-btn-1">
          Link button
        </Button>
        <Button {...this.linkButton} id="link-btn-2" isInline>
          Inline Link Button
        </Button>
        <Button {...this.linkButton} id="link-btn-3" isDisabled>
          Disabled link button
        </Button>
        <Button {...this.linkButton} id="link-btn-4" isAriaDisabled>
          Aria-disabled link button
        </Button>
        <Button {...this.linkButton} id="link-btn-5" tabIndex={-1}>
          Button with tabindex set to -1
        </Button>

        <hr className="pf-u-m-md" />
        <Button {...this.linkAsButton} id="link-as-btn-1">
          Link as button
        </Button>
        <Button {...this.linkAsButton} id="link-as-btn-2" isDisabled>
          Disabled link as button
        </Button>
        <Button {...this.linkAsButton} id="link-as-btn-3" isAriaDisabled>
          Aria-disabled link as button
        </Button>
        <Button {...this.linkAsButton} id="link-as-btn-4" tabIndex={4}>
          Link as button with tabindex set to 4
        </Button>
        <Tooltip
          id="button-with-tooltip-2"
          content="This tooltip content is available to the aria-disabled link as button"
        >
          <Button {...this.linkAsButton} id="link-as-btn-5" isAriaDisabled>
            Aria-disabled link as button with tooltip
          </Button>
        </Tooltip>
      </div>
    );
  }
}
