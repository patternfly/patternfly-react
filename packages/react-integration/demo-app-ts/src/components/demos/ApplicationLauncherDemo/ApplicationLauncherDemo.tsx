import React from 'react';
import { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';

interface ApplicationLauncherState {
  isOpen: boolean;
}

export class ApplicationLauncherDemo extends React.Component<{}, ApplicationLauncherState> {
  static displayName = 'ApplicationLauncherDemo';
  onToggle: (isOpen: boolean) => void;
  onSelect: (event: any) => void;
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onSelect = _event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <ApplicationLauncherItem
        tooltip={<div>Launch Application 1</div>}
        key="application_1"
        component="a"
        href="https://www.google.com"
      >
        Application 1
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem tooltip={<div>Launch Application 2</div>} key="application_2" component="a">
        Application 2
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem tooltip={<div>Launch Application 3</div>} key="application_3" component="a">
        Application 3
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem
        tooltip={<div>Launch Application 4</div>}
        key="disabled_application_4"
        isDisabled
        component="a"
      >
        Unavailable Application
      </ApplicationLauncherItem>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        toggleId="toggle"
        isOpen={isOpen}
        items={dropdownItems}
      />
    );
  }
}
