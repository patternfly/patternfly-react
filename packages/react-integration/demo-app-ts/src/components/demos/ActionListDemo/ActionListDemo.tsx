import {
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import React from 'react';

interface ActionListDemoState {
  kebabOpen: boolean;
}

export class ActionListDemo extends React.Component<{}, ActionListDemoState> {
  static displayName = 'ActionListDemo';
  state = { kebabOpen: false };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = (kebabOpen: boolean) => {
    this.setState({
      kebabOpen
    });
  };

  onSelect = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    this.setState({
      kebabOpen: !this.state.kebabOpen
    });
  };

  render() {
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

    return (
      <React.Fragment>
        <ActionList id="kebab-action-list">
          <ActionListGroup>
            <ActionListItem>
              <Button variant="primary">Next</Button>
            </ActionListItem>
            <ActionListItem>
              <Button variant="secondary">Back</Button>
            </ActionListItem>
            <ActionListItem>
              <Dropdown
                onSelect={this.onSelect}
                toggle={<KebabToggle onToggle={this.onToggle} />}
                isOpen={this.state.kebabOpen}
                isPlain
                dropdownItems={dropdownItems}
                position="right"
              />
            </ActionListItem>
          </ActionListGroup>
          <ActionListGroup>
            <ActionListItem>
              <Button variant="primary">Submit</Button>
            </ActionListItem>
            <ActionListItem>
              <Button variant="link">Cancel</Button>
            </ActionListItem>
          </ActionListGroup>
        </ActionList>
        <ActionList isIconList id="icon-action-list">
          <ActionListItem>
            <Button variant="plain" id="times-icon-button">
              <TimesIcon />
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" id="check-icon-button">
              <CheckIcon />
            </Button>
          </ActionListItem>
        </ActionList>
      </React.Fragment>
    );
  }
}
