import React from 'react';
import { ApplicationLauncher, DropdownItem, Tooltip } from '@patternfly/react-core';

interface ApplicationLauncherState {
  isOpen: boolean; 
}


export class ApplicationLauncherDemo extends React.Component<null, ApplicationLauncherState> {
  onToggle: (isOpen: boolean) => void; 
  onSelect: (event: any) => void; 
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      console.log("This works")
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <Tooltip content={<div>Launch Application 1</div>}>
        <DropdownItem key="application_1" component="a" href="http://patternfly-react.surge.sh/">
          Application 1
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Launch Application 2</div>} position="right">
        <DropdownItem key="application_2" component="a">
          Application 2
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Launch Application 3</div>} position="right">
        <DropdownItem key="application_3" component="a">
          Application 3
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Application Unavailable At This Time</div>} position="bottom">
        <DropdownItem key="disabled_application_4" isDisabled component="a">
          Unavailable Application
        </DropdownItem>
      </Tooltip>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
