import React from 'react';
import {
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DualListSelector,
  DualListSelectorProps,
  KebabToggle
} from '@patternfly/react-core';
import PficonSortCommonDescIcon from '@patternfly/react-icons/dist/js/icons/pficon-sort-common-desc-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/js/icons/pficon-sort-common-asc-icon';

interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  chosenOptions: React.ReactNode[];
  isAvailableKebabOpen: boolean;
  isChosenKebabOpen: boolean;
  availableDescending: boolean;
  chosenDescending: boolean;
}

export class DualListSelectorDemo extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelectorDemo';
  onSort: (panel: string) => void;
  onListChange: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
  onToggle: (isOpen: boolean, pane: string) => void;
  filterOption: (option: React.ReactNode, input: string) => boolean;

  constructor(props: DualListSelectorProps) {
    super(props);
    this.state = {
      availableOptions: [
        <span key={1}>Option 1</span>,
        <span key={2}>Option 2</span>,
        <span key={3}>Option 3</span>,
        <span key={4}>Option 4</span>
      ],
      chosenOptions: [],
      isAvailableKebabOpen: false,
      availableDescending: true,
      isChosenKebabOpen: false,
      chosenDescending: true
    };

    this.onSort = (panel: string) => {
      if (panel === 'available') {
        this.setState(prevState => {
          const available = prevState.availableOptions.sort((a: any, b: any) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) {
              returnValue = -1;
            }
            if (a.props.children < b.props.children) {
              returnValue = 1;
            }
            if (prevState.availableDescending) {
              returnValue = returnValue * -1;
            }
            return returnValue;
          });
          return {
            availableOptions: available,
            availableDescending: !prevState.availableDescending
          };
        });
      }

      if (panel === 'chosen') {
        this.setState(prevState => {
          const chosen = prevState.chosenOptions.sort((a: any, b: any) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) {
              returnValue = -1;
            }
            if (a.props.children < b.props.children) {
              returnValue = 1;
            }
            if (prevState.chosenDescending) {
              returnValue = returnValue * -1;
            }
            return returnValue;
          });
          return {
            chosenOptions: chosen,
            chosenDescending: !prevState.chosenDescending
          };
        });
      }
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };

    this.onToggle = (isOpen, pane) => {
      this.setState((prevState: DualListSelectorState) => ({
        isAvailableKebabOpen: pane === 'available' ? isOpen : prevState.isAvailableKebabOpen,
        isChosenKebabOpen: pane === 'chosen' ? isOpen : prevState.isChosenKebabOpen
      }));
    };

    this.filterOption = (option: any, input: string) => option.props.children.includes(input);
  }

  render() {
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="second action" component="button">
        Second Action
      </DropdownItem>
    ];

    const availableOptionsActions = [
      <Button
        variant={ButtonVariant.plain}
        onClick={() => this.onSort('available')}
        aria-label="Sort"
        key="availableSortButton"
      >
        {this.state.availableDescending ? <PficonSortCommonDescIcon /> : <PficonSortCommonAscIcon />}
      </Button>,
      <Dropdown
        toggle={<KebabToggle onToggle={isOpen => this.onToggle(isOpen, 'available')} id="toggle-id-6" />}
        isOpen={this.state.isAvailableKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        key="availableDropdown"
      />
    ];

    const chosenOptionsActions = [
      <Button
        variant={ButtonVariant.plain}
        onClick={() => this.onSort('chosen')}
        aria-label="Sort"
        key="chosenSortButton"
      >
        {this.state.chosenDescending ? <PficonSortCommonDescIcon /> : <PficonSortCommonAscIcon />}
      </Button>,
      <Dropdown
        toggle={<KebabToggle onToggle={isOpen => this.onToggle(isOpen, 'chosen')} id="toggle-id-6" />}
        isOpen={this.state.isChosenKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        key="chosenDropdown"
      />
    ];

    return (
      <DualListSelector
        isSearchable
        availableOptions={this.state.availableOptions}
        availableOptionsStatus={`${this.state.availableOptions.length} available`}
        availableOptionsActions={availableOptionsActions}
        chosenOptions={this.state.chosenOptions}
        chosenOptionsStatus={`${this.state.availableOptions.length} chosen`}
        chosenOptionsActions={chosenOptionsActions}
        addAll={this.onListChange}
        removeAll={this.onListChange}
        addSelected={this.onListChange}
        removeSelected={this.onListChange}
        filterOption={this.filterOption}
      />
    );
  }
}
