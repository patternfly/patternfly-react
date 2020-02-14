import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownItemIcon,
  DropdownToggleAction,
  Stack,
  StackItem,
  Title
} from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';

interface DropdownState {
  isOpen: boolean;
  isActionOpen: boolean;
  isCogOpen: boolean;
}

export class DropdownDemo extends React.Component<{}, DropdownState> {
  onToggle: (isOpen: boolean) => void;
  onSelect: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onFocus: () => void;
  onActionToggle: (isOpen: boolean) => void;
  onActionSelect: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onActionClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onActionFocus: () => void;
  onCogToggle: (isOpen: boolean) => void;
  onCogSelect: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onCogClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onCogFocus: () => void;

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      isActionOpen: false,
      isCogOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };

    this.onActionToggle = isActionOpen => {
      this.setState({
        isActionOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onActionSelect = _event => {
      this.setState({
        isActionOpen: !this.state.isActionOpen
      });
      this.onActionFocus();
    };
    this.onActionClick = () => {
      // eslint-disable-next-line no-console
      console.log('Action clicked!');
    };
    this.onActionFocus = () => {
      const element = document.getElementById('action-toggle-id');
      element.focus();
    };

    this.onCogToggle = isCogOpen => {
      this.setState({
        isCogOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onCogSelect = _event => {
      this.setState({
        isCogOpen: !this.state.isCogOpen
      });
      this.onCogFocus();
    };
    this.onCogClick = () => {
      // eslint-disable-next-line no-console
      console.log('Action clicked!');
    };
    this.onCogClick = () => {
      // eslint-disable-next-line no-console
      console.log('Cog clicked!');
    };
    this.onCogFocus = () => {
      const element = document.getElementById('cog-toggle-id');
      element.focus();
    };
  }

  renderDropdown() {
    const { isOpen } = this.state;

    const dropdownItems = [
      <DropdownItem key="link" href="https://patternfly-react.surge.sh/patternfly-4/">
        Link
      </DropdownItem>,
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

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Dropdown</Title>
        <Dropdown
          id="dropdown"
          onSelect={this.onSelect}
          toggle={
            <DropdownToggle id="toggle-id" onToggle={this.onToggle} iconComponent={CaretDownIcon}>
              Dropdown
            </DropdownToggle>
          }
          isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
      </StackItem>
    );
  }

  renderActionDropdown() {
    const { isActionOpen, isCogOpen } = this.state;

    const dropdownItems = [
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" component="button" isDisabled>
        Disabled action
      </DropdownItem>,
      <DropdownItem key="other action" component="button">
        Other action
      </DropdownItem>
    ];
    const dropdownIconItems = [
      <DropdownItem key="action" component="button" variant="icon">
        <DropdownItemIcon>
          <CogIcon />
        </DropdownItemIcon>
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" component="button" variant="icon" isDisabled>
        <DropdownItemIcon>
          <BellIcon />
        </DropdownItemIcon>
        Disabled action
      </DropdownItem>,
      <DropdownItem key="other action" component="button" variant="icon">
        <DropdownItemIcon>
          <CubesIcon />
        </DropdownItemIcon>
        Other action
      </DropdownItem>
    ];

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Action Dropdown</Title>
        <Dropdown
          id="action-dropdown"
          onSelect={this.onActionSelect}
          toggle={
            <DropdownToggle
              id="action-toggle-id"
              splitButtonItems={[
                <DropdownToggleAction id="example-action-text" key="action" onClick={this.onActionClick}>
                  Action
                </DropdownToggleAction>
              ]}
              splitButtonVariant="action"
              onToggle={this.onActionToggle}
            />
          }
          isOpen={isActionOpen}
          dropdownItems={dropdownItems}
        />{' '}
        <Dropdown
          id="cog-dropdown"
          onSelect={this.onCogSelect}
          toggle={
            <DropdownToggle
              id="cog-toggle-id"
              splitButtonItems={[
                <DropdownToggleAction
                  id="example-action-icon"
                  key="cog-action"
                  aria-label="Action"
                  onClick={this.onCogClick}
                >
                  <CogIcon />
                </DropdownToggleAction>
              ]}
              splitButtonVariant="action"
              onToggle={this.onCogToggle}
            />
          }
          isOpen={isCogOpen}
          dropdownItems={dropdownIconItems}
        />
      </StackItem>
    );
  }

  render() {
    return (
      <Stack gutter="md">
        {this.renderDropdown()}
        {this.renderActionDropdown()}
      </Stack>
    );
  }
}
