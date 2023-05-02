import React from 'react';
import {
  Button,
  ButtonVariant,
  DualListSelector,
  DualListSelectorProps,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import PficonSortCommonDescIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-desc-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  chosenOptions: React.ReactNode[];
  isAvailableKebabOpen: boolean;
  isChosenKebabOpen: boolean;
  availableDescending: boolean;
  chosenDescending: boolean;
}

export class DualListSelectorWithActionsDemo extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelectorDemo';
  onSort: (panel: string) => void;
  onListChange: (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: React.ReactNode[],
    newChosenOptions: React.ReactNode[]
  ) => void;
  onToggle: (pane: string) => void;
  filterOption: (option: React.ReactNode, input: string) => boolean;
  onOptionSelect: (e: React.MouseEvent | React.ChangeEvent) => void;

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
      chosenDescending: false
    };

    this.onSort = (panel: string) => {
      if (panel === 'available') {
        this.setState((prevState) => {
          const available = prevState.availableOptions.sort((a: any, b: any) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) {
              returnValue = 1;
            }
            if (a.props.children < b.props.children) {
              returnValue = -1;
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
        this.setState((prevState) => {
          const chosen = prevState.chosenOptions.sort((a: any, b: any) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) {
              returnValue = 1;
            }
            if (a.props.children < b.props.children) {
              returnValue = -1;
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

    this.onListChange = (_event, newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };

    this.onToggle = (pane) => {
      this.setState((prevState: DualListSelectorState) => ({
        isAvailableKebabOpen: pane === 'available' ? !prevState.isAvailableKebabOpen : prevState.isAvailableKebabOpen,
        isChosenKebabOpen: pane === 'chosen' ? !prevState.isChosenKebabOpen : prevState.isChosenKebabOpen
      }));
    };

    this.filterOption = (option: any, input: string) => option.props.children.includes(input);

    this.onOptionSelect = (e: React.MouseEvent | React.ChangeEvent) => {
      // eslint-disable-next-line no-console
      console.log(e.currentTarget.children.toString());
    };
  }

  render() {
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <DropdownItem key="second action">Second Action</DropdownItem>
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
        key="availableDropdown"
        isOpen={this.state.isAvailableKebabOpen}
        onOpenChange={(isOpen) => this.setState({ isAvailableKebabOpen: isOpen })}
        toggle={(toggleRef) => (
          <MenuToggle
            variant="plain"
            id="available-dropdown-toggle"
            ref={toggleRef}
            isExpanded={this.state.isAvailableKebabOpen}
            onClick={() => this.onToggle('available')}
          >
            <EllipsisVIcon />
          </MenuToggle>
        )}
      >
        <DropdownList>{dropdownItems}</DropdownList>
      </Dropdown>
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
        isOpen={this.state.isChosenKebabOpen}
        onOpenChange={(isOpen) => this.setState({ isChosenKebabOpen: isOpen })}
        key="chosenDropdown"
        toggle={(toggleRef) => (
          <MenuToggle
            variant="plain"
            id="chosen-dropdown-toggle"
            ref={toggleRef}
            isExpanded={this.state.isChosenKebabOpen}
            onClick={() => this.onToggle('chosen')}
          >
            <EllipsisVIcon />
          </MenuToggle>
        )}
      >
        <DropdownList>{dropdownItems}</DropdownList>
      </Dropdown>
    ];

    return (
      <DualListSelector
        className="demo"
        id="dual-list-selector-demo"
        isSearchable
        availableOptions={this.state.availableOptions}
        availableOptionsTitle="Demo available options"
        availableOptionsStatus={`${this.state.availableOptions.length} available`}
        availableOptionsActions={availableOptionsActions}
        availableOptionsSearchAriaLabel="Demo available options search"
        chosenOptions={this.state.chosenOptions}
        chosenOptionsTitle="Demo chosen options"
        chosenOptionsStatus={`${this.state.chosenOptions.length} chosen`}
        chosenOptionsActions={chosenOptionsActions}
        chosenOptionsSearchAriaLabel="Demo chosen options search"
        controlsAriaLabel="Demo action controls"
        addAll={(newAvailableOptions, newChosenOptions) =>
          this.onListChange(undefined, newAvailableOptions, newChosenOptions)
        }
        addAllAriaLabel="Demo add all"
        removeAll={(newAvailableOptions, newChosenOptions) =>
          this.onListChange(undefined, newAvailableOptions, newChosenOptions)
        }
        removeAllAriaLabel="Demo remove all"
        addSelected={(newAvailableOptions, newChosenOptions) =>
          this.onListChange(undefined, newAvailableOptions, newChosenOptions)
        }
        addSelectedAriaLabel="Demo add selected"
        removeSelected={(newAvailableOptions, newChosenOptions) =>
          this.onListChange(undefined, newAvailableOptions, newChosenOptions)
        }
        removeSelectedAriaLabel="Demo remove selected"
        onListChange={this.onListChange}
        filterOption={this.filterOption}
        onOptionSelect={this.onOptionSelect}
      />
    );
  }
}
