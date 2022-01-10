import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup, Checkbox, StackItem, Title } from '@patternfly/react-core';

/* eslint-disable no-console */
interface TypeAheadOption {
  value?: string;
  disabled?: boolean;
}

/* eslint-disable no-console */
export interface SelectViewMoreTypeaheadGroupedDemoState {
  isOpen: boolean;
  selected: string[];
  numOptions: number;
  isLoading: boolean;
  isCreatable: boolean;
  newOptions: boolean;
  inputValuePersisted: boolean;
  options: TypeAheadOption[];
}

export class SelectViewMoreTypeaheadGroupedDemo extends React.Component<SelectViewMoreTypeaheadGroupedDemoState> {
  static displayName = 'SelectViewMoreTypeaheadGroupedDemo';
  state = {
    isOpen: false,
    selected: [] as string[],
    numOptions: 1,
    isLoading: false,
    isCreatable: false,
    newOptions: false,
    inputValuePersisted: false
  };

  options = [
    <SelectGroup label="Status" key="group1">
      <SelectOption id={'option-grouped-1'} key={0} value="Running" />
      <SelectOption id={'option-grouped-2'} key={1} value="Stopped" />
      <SelectOption id={'option-grouped-3'} key={2} value="Down" />
      <SelectOption id={'option-grouped-4'} key={3} value="Degraded" />
      <SelectOption id={'option-grouped-5'} key={4} value="Needs Maintenance" />
    </SelectGroup>,
    <SelectGroup label="Vendor Names" key="group2">
      <SelectOption id={'option-grouped-6'} key={5} value="Dell" />
      <SelectOption id={'option-grouped-7'} key={6} value="Samsung" isDisabled />
      <SelectOption id={'option-grouped-8'} key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  toggleCreatable = (checked: boolean) => {
    this.setState({
      isCreatable: checked
    });
  };

  toggleInputValuePersisted = (checked: boolean) => {
    this.setState({
      inputValuePersisted: checked
    });
  };

  toggleNew = (checked: boolean) => {
    this.setState({
      newOptions: checked
    });
  };

  createNew = (newValue: string) => {
    this.setState({
      typeaheadOptions: [...this.options, { value: newValue, disabled: false }]
    });
  };

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  clearSelection = () => {
    this.setState({
      selected: null,
      isOpen: false
    });
  };

  onSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        selected: selection,
        isOpen: false
      });
      console.log('selected:', selection);
    }
  };

  simulateNetworkCall = (callback: any) => {
    setTimeout(callback, 1200);
  };

  onViewMoreClick = () => {
    // Set select loadingVariant to spinner then simulate network call before loading more options
    this.setState({ isLoading: true });
    this.simulateNetworkCall(() => {
      const newLength =
        this.state.numOptions + 3 < this.options.length ? this.state.numOptions + 3 : this.options.length;
      this.setState({ numOptions: newLength, isLoading: false });
    });
  };

  render() {
    const titleId = 'view-more-typeahead-select-id';
    const { isOpen, selected, isCreatable, newOptions, inputValuePersisted, isLoading, numOptions } = this.state;
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Typeahead Select
        </Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="view-more-typeahead-select"
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            onClear={this.clearSelection}
            selections={selected}
            isOpen={isOpen}
            aria-labelledby={titleId}
            placeholderText="Select a state"
            isCreatable={isCreatable}
            onCreateOption={(newOptions && this.createNew) || undefined}
            isInputValuePersisted={inputValuePersisted}
            createText="Create item"
            noResultsFoundText="Item not found"
            {...(!isLoading &&
              numOptions < this.options.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
              })}
            {...(isLoading && { loadingVariant: 'spinner' })}
          >
            {this.options.slice(0, numOptions)}
          </Select>
        </div>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead"
          name="toggle-creatable-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.newOptions}
          onChange={this.toggleNew}
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead"
          name="toggle-new-typeahead"
        />
        <Checkbox
          label="isInputValuePersisted"
          isChecked={this.state.inputValuePersisted}
          onChange={this.toggleInputValuePersisted}
          aria-label="toggle input value persisted"
          id="toggle-input-value-persisted"
          name="toggle-input-value-persisted"
        />
      </StackItem>
    );
  }
}
