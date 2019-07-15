import * as React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

interface DropdownState {
  isOpen: boolean; 
}

export class DropdownDemo extends React.Component<{}, DropdownState> {
  onToggle: (isOpen: boolean) => void; 
  onSelect: (event:  React.SyntheticEvent<HTMLDivElement>) => void; 
  constructor(props: any) {
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
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Expanded Dropdown</DropdownToggle>}
        isOpen={isOpen}
      >
        <ul className="pf-c-dropdown__menu">
          <DropdownItem key="link" href="https://patternfly-react.surge.sh/patternfly-4/">Link</DropdownItem>
          <DropdownItem key="action" component="button" autoFocus>
            Action
          </DropdownItem>
          <DropdownItem key="disabled link" isDisabled>
            Disabled Link
          </DropdownItem>
          <DropdownItem key="disabled action" isDisabled component="button">
            Disabled Action
          </DropdownItem>
          <DropdownSeparator key="separator" />
          <DropdownItem key="separated link">Separated Link</DropdownItem>
          <DropdownItem key="separated action" component="button">
            Separated Action
          </DropdownItem>
        </ul>
      </Dropdown>
    );
  }
}