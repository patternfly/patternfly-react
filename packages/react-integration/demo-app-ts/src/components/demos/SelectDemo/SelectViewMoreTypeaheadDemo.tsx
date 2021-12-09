import React from 'react';
import { Select, SelectOption, SelectVariant, Checkbox, StackItem, Title } from '@patternfly/react-core';

/* eslint-disable no-console */
interface TypeAheadOption {
  value?: string;
  disabled?: boolean;
}

/* eslint-disable no-console */
export interface SelectViewMoreTypeaheadDemoState {
  isOpen: boolean;
  selected: string[];
  numOptions: number;
  isLoading: boolean;
  isCreatable: boolean;
  newOptions: boolean;
  inputValuePersisted: boolean;
  options: TypeAheadOption[];
}

export class SelectViewMoreTypeaheadDemo extends React.Component<SelectViewMoreTypeaheadDemoState> {
  static displayName = 'SelectViewMoreTypeaheadDemo';
  state = {
    isOpen: false,
    selected: [] as string[],
    numOptions: 3,
    isLoading: false,
    isCreatable: false,
    newOptions: false,
    inputValuePersisted: false,
    options: [
      { value: 'Alabama', disabled: false, itemCount: 3 },
      { value: 'Boston', disabled: false, itemCount: 10 },
      { value: 'Florida', disabled: false, itemCount: 7 },
      { value: 'New Jersey', disabled: false, itemCount: 1 },
      { value: 'Texas', disabled: false, itemCount: 20 }
    ]
  };

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
      typeaheadOptions: [...this.state.options, { value: newValue, disabled: false }]
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
        this.state.numOptions + 3 < this.state.options.length ? this.state.numOptions + 3 : this.state.options.length;
      this.setState({ numOptions: newLength, isLoading: false });
    });
  };

  render() {
    const titleId = 'view-more-typeahead-select-id';
    const {
      options,
      isOpen,
      selected,
      isCreatable,
      newOptions,
      inputValuePersisted,
      isLoading,
      numOptions
    } = this.state;
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
              numOptions < options.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
              })}
            {...(isLoading && { loadingVariant: 'spinner' })}
          >
            {options.slice(0, numOptions).map((option, index) => (
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                id={option.value}
                itemCount={option.itemCount}
              />
            ))}
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
