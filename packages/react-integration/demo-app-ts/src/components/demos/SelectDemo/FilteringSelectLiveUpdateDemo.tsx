import { Select, SelectOption, SelectOptionObject, SelectVariant } from '@patternfly/react-core';
import React, { Component } from 'react';

/* eslint-disable no-console */
export interface FilteringSelectLiveUpdateDemoState {
  isOpen: boolean;
  selections: string[];
  options: React.ReactNode[];
}

export class FilteringSelectLiveUpdateDemo extends Component<FilteringSelectLiveUpdateDemoState> {
  state = {
    isOpen: false,
    selections: [''],
    options: [<SelectOption key={0} value="Running" inputId="Running" />]
  };

  extraOptions = [
    <SelectOption key={1} value="Stopped" inputId="Stopped" />,
    <SelectOption key={2} value="Down" inputId="Down" />,
    <SelectOption key={3} value="Degraded" inputId="Degraded" />,
    <SelectOption key={4} value="Needs Maintenence" inputId="Needs-Maintenence" />
  ];

  componentDidMount = () => {
    /* When the component mounts we add more options asynchronously.
     * This emulates the scenario of options being updated with polling or asyncronous API calls.
     */
    for (let i = 0; i < this.extraOptions.length; i++) {
      setTimeout(() => {
        this.setState((prevState: FilteringSelectLiveUpdateDemoState) => ({
          options: [...prevState.options, this.extraOptions[i]]
        }));
      }, 5000 + i * 2000);
    }
  };

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { selections } = this.state;
    if (selections.includes(selection.toString())) {
      this.setState(
        (prevState: FilteringSelectLiveUpdateDemoState) => ({
          selections: prevState.selections.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.selections)
      );
    } else {
      this.setState(
        (prevState: FilteringSelectLiveUpdateDemoState) => ({ selections: [...prevState.selections, selection] }),
        () => console.log('selections: ', this.state.selections)
      );
    }
  };

  onFilter = (_: any, textInput: string) => {
    if (textInput === '') {
      return this.state.options;
    } else {
      return this.state.options.filter(item => item.props.value.toLowerCase().includes(textInput.toLowerCase()));
    }
  };

  render() {
    const { isOpen, selections, options } = this.state;
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
          hasInlineFilter
        >
          {options}
        </Select>
      </div>
    );
  }
}
