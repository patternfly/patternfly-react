import { Select, SelectOption, SelectOptionObject, SelectGroup, SelectVariant } from '@patternfly/react-core';
import React, { Component } from 'react';

/* eslint-disable no-console */
export interface FilteringSelectDemoState {
  isOpen: boolean;
  selections: string[];
}

export class FilteringSelectDemo extends Component<FilteringSelectDemoState> {
  state = {
    isOpen: false,
    selections: ['']
  };

  options = [
    <SelectGroup label="Status" key="group1">
      <SelectOption key={0} value="Running" />
      <SelectOption key={1} value="Stopped" />
      <SelectOption key={2} value="Down" />
      <SelectOption key={3} value="Degraded" />
      <SelectOption key={4} value="Needs Maintenence" />
    </SelectGroup>,
    <SelectGroup label="Vendor Names" key="group2">
      <SelectOption key={5} value="Dell" />
      <SelectOption key={6} value="Samsung" isDisabled />
      <SelectOption key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { selections } = this.state;
    if (selections.includes(selection.toString())) {
      this.setState(
        (prevState: FilteringSelectDemoState) => ({
          selections: prevState.selections.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.selections)
      );
    } else {
      this.setState(
        (prevState: FilteringSelectDemoState) => ({ selections: [...prevState.selections, selection] }),
        () => console.log('selections: ', this.state.selections)
      );
    }
  };

  onFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = evt.target.value;
    if (textInput === '') {
      return this.options;
    } else {
      return this.options
        .map((group: React.ReactElement) => {
          const filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter((item: React.ReactElement) =>
              item.props.value.toLowerCase().includes(textInput.toLowerCase())
            )
          });
          if (filteredGroup.props.children.length > 0) {
            return filteredGroup;
          } else {
            return <></>;
          }
        })
        .filter(newGroup => newGroup.props.children);
    }
  };

  clearSelection = () => {
    this.setState({
      selections: []
    });
  };

  render() {
    const { isOpen, selections } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Filtering Checkbox Title
        </span>
        <Select
          toggleId="filter-select"
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selections.filter(string => string)}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          isGrouped
          hasInlineFilter
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
