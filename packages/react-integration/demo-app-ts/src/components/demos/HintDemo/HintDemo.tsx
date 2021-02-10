import React from 'react';
import {
  Hint,
  HintBody,
  HintTitle,
  HintFooter,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Button
} from '@patternfly/react-core';

export class HintDemo extends React.Component {
  static displayName = 'HintDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    isOpen: false
  };
  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };
  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    const actions = (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<KebabToggle onToggle={this.onToggle} id="hint-notitle-kebab-toggle" />}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        position="right"
        isPlain
      />
    );
    return (
      <React.Fragment>
        <Hint>
          <HintTitle>Do more with Find it Fix it capabilities</HintTitle>
          <HintBody>
            Welcome to the new documentation experience.
            <Button variant="link" isInline>
              Learn more about the improved features.
            </Button>
          </HintBody>
        </Hint>
        <br />
        <Hint actions={actions}>
          <HintBody>
            Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
          </HintBody>
          <HintFooter>
            <Button variant="link" isInline>
              Try it for 90 days
            </Button>
          </HintFooter>
        </Hint>
      </React.Fragment>
    );
  }
}
