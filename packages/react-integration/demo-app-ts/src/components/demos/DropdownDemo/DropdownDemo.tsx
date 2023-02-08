import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownToggleAction,
  Stack,
  StackItem,
  BadgeToggle,
  Title
} from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

interface DropdownState {
  isOpen: boolean;
  isBadgeOpen: boolean;
  isActionOpen: boolean;
  isCogOpen: boolean;
  isMenuOnDocumentBodyOpen: boolean;
  counter: number;
}

export class DropdownDemo extends React.Component<{}, DropdownState> {
  static displayName = 'DropdownDemo';
  onToggle: (event: any, isOpen: boolean) => void;
  onBadgeToggle: (event: any, isBadgeOpen: boolean) => void;
  onSelect: (event?: React.SyntheticEvent<HTMLDivElement>) => void;
  onFocus: () => void;
  onActionToggle: (event: any, isOpen: boolean) => void;
  onActionSelect: (event?: React.SyntheticEvent<HTMLDivElement>) => void;
  onActionClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onActionFocus: () => void;
  onCogToggle: (event: any, isOpen: boolean) => void;
  onCogSelect: (event?: React.SyntheticEvent<HTMLDivElement>) => void;
  onCogClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onCogFocus: () => void;
  onMenuDocumentBodyToggle: (event: any, isOpen: boolean) => void;
  onMenuDocumentBodySelect: (event?: React.SyntheticEvent<HTMLDivElement>) => void;
  onMenuDocumentBodyFocus: () => void;
  incrementCounter: () => void;

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      isBadgeOpen: false,
      isActionOpen: false,
      isCogOpen: false,
      isMenuOnDocumentBodyOpen: false,
      counter: 0
    };
    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onSelect = _event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      if (element) {
        element.focus();
      }
    };

    this.onBadgeToggle = (_event, isBadgeOpen) => {
      this.setState({
        isBadgeOpen
      });
    };

    this.onActionToggle = (_event, isActionOpen) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onActionClick = _event => {
      // eslint-disable-next-line no-console
      console.log('Action clicked!');
    };
    this.onActionFocus = () => {
      const element = document.getElementById('action-toggle-id');
      if (element) {
        element.focus();
      }
    };

    this.onCogToggle = (_event, isCogOpen) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onCogClick = _event => {
      // eslint-disable-next-line no-console
      console.log('Cog clicked!');
    };
    this.onCogFocus = () => {
      const element = document.getElementById('cog-toggle-id');
      if (element) {
        element.focus();
      }
    };

    this.onMenuDocumentBodyToggle = (_event, isMenuOnDocumentBodyOpen) => {
      this.setState({
        isMenuOnDocumentBodyOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onMenuDocumentBodySelect = _event => {
      this.setState({
        isMenuOnDocumentBodyOpen: !this.state.isMenuOnDocumentBodyOpen
      });
      this.onMenuDocumentBodyFocus();
    };
    this.onMenuDocumentBodyFocus = () => {
      const element = document.getElementById('toggle-id-document-body');
      if (element) {
        element.focus();
      }
    };
    this.incrementCounter = () => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    };
  }

  renderDropdown() {
    const { isOpen } = this.state;

    const dropdownItems = [
      <DropdownItem key="link" href="https://www.google.com">
        Link
      </DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled href="www.google.com" id="disabled-link">
        Disabled Link
      </DropdownItem>,
      <DropdownItem
        key="disabled action"
        isAriaDisabled
        component="button"
        onClick={this.incrementCounter}
        onKeyPress={this.incrementCounter}
        id="disabled-button"
        tooltip="Tooltip for disabled item"
        tooltipProps={{ position: 'top' }}
      >
        Disabled Action
        {this.state.counter}
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link" description="Separated Link's description">
        Separated Link
      </DropdownItem>,
      <DropdownItem key="separated action" component="button" description="Separated action's description">
        Separated Action
      </DropdownItem>
    ];

    return (
      <StackItem isFilled={false}>
        <Title size="2xl" headingLevel="h2">
          Dropdown
        </Title>
        <Dropdown
          id="dropdown"
          onSelect={this.onSelect}
          toggle={
            <DropdownToggle id="toggle-id" onToggle={this.onToggle} toggleIndicator={CaretDownIcon} icon={<UserIcon />}>
              Dropdown
            </DropdownToggle>
          }
          alignments={{
            sm: 'left',
            md: 'right',
            lg: 'left',
            xl: 'right',
            '2xl': 'left'
          }}
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
      <DropdownItem key="action" component="button" icon={<CogIcon />}>
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" component="button" icon={<BellIcon />} isDisabled>
        Disabled action
      </DropdownItem>,
      <DropdownItem key="other action" component="button" icon={<CubesIcon />}>
        Other action
      </DropdownItem>
    ];

    return (
      <StackItem isFilled={false}>
        <Title size="2xl" headingLevel="h2">
          Action Dropdown
        </Title>
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

  renderMenuOnDocumentBodyDropdown() {
    const { isMenuOnDocumentBodyOpen } = this.state;

    const dropdownItems = [
      <DropdownItem key="link" href="https://www.google.com">
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
        <Title size="2xl" headingLevel="h2">
          Dropdown with menu on document body
        </Title>
        <Dropdown
          id="dropdown-document-body"
          onSelect={this.onMenuDocumentBodySelect}
          toggle={
            <DropdownToggle
              id="toggle-id-document-body"
              onToggle={this.onMenuDocumentBodyToggle}
              toggleIndicator={CaretDownIcon}
              icon={<UserIcon />}
            >
              Dropdown
            </DropdownToggle>
          }
          isOpen={isMenuOnDocumentBodyOpen}
          dropdownItems={dropdownItems}
          menuAppendTo={() => document.body}
        />
      </StackItem>
    );
  }

  renderBadgeDropdown() {
    const { isBadgeOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="edit" component="button" icon={<AngleLeftIcon />}>
        Edit
      </DropdownItem>,
      <DropdownItem key="action" component="button" icon={<AngleLeftIcon />}>
        Deployment
      </DropdownItem>,
      <DropdownItem key="apps" component="button" icon={<AngleLeftIcon />}>
        Applications
      </DropdownItem>
    ];
    return (
      <Dropdown
        id="badge-dropdown"
        toggle={
          <BadgeToggle id="toggle-id" onToggle={this.onBadgeToggle}>
            {dropdownItems.length}
          </BadgeToggle>
        }
        isOpen={isBadgeOpen}
        dropdownItems={dropdownItems}
      />
    );
  }

  render() {
    return (
      <Stack hasGutter>
        {this.renderDropdown()}
        {this.renderActionDropdown()}
        {this.renderMenuOnDocumentBodyDropdown()}
        {this.renderBadgeDropdown()}
      </Stack>
    );
  }
}
