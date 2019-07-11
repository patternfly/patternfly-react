import { Select, SelectOption, SelectVariant, Stack, StackItem, Title } from '@patternfly/react-core';
import React, { Component } from 'react';

export interface SelectDemoState {
  singleIsExpanded: boolean,
  singleSelected: string,
  customSingleIsExpanded: boolean,
  customSingleSelected: string,
  checkIsExpanded: boolean,
  checkSelected: string[],
  typeaheadIsExpanded: boolean,
  typeaheadSelected: string,
  typeaheadMultiIsExpanded: boolean,
  typeaheadMultiSelected: string[]
}

export class SelectDemo extends Component<SelectDemoState> {
  state = {
    singleIsExpanded: false,
    singleSelected: null,
    customSingleIsExpanded: false,
    customSingleSelected: null,
    checkIsExpanded: false,
    checkSelected: [],
    typeaheadIsExpanded: false,
    typeaheadSelected: null,
    typeaheadMultiIsExpanded: false,
    typeaheadMultiSelected: []
  };

  singleOptions = [
    { value: 'Choose...', disabled: false, isPlaceholder: true },
    { value: 'Mr', disabled: false },
    { value: 'Miss', disabled: false },
    { value: 'Mrs', disabled: false },
    { value: 'Ms', disabled: false },
    { value: 'Dr', disabled: false },
    { value: 'Other', disabled: false }
  ];

  checkboxOptions = [
    <SelectOption key={0} value="Active" />,
    <SelectOption key={1} value="Cancelled" />,
    <SelectOption key={2} value="Paused" />,
    <SelectOption key={3} value="Warning" />,
    <SelectOption key={4} value="Restarted" />
  ];

  typeaheadOptions = [
    { value: 'Alabama', disabled: false },
    { value: 'Florida', disabled: false },
    { value: 'New Jersey', disabled: false },
    { value: 'New Mexico', disabled: false },
    { value: 'New York', disabled: false },
    { value: 'North Carolina', disabled: false }
  ];

  singleOnToggle = (singleIsExpanded: boolean) => {
    this.setState({
      singleIsExpanded
    });
  };

  customSingleOnToggle = (customSingleIsExpanded: boolean) => {
    this.setState({
      customSingleIsExpanded
    });
  };

  checkOnToggle = (checkIsExpanded: boolean) => {
    this.setState({
      checkIsExpanded
    });
  };

  typeaheadOnToggle = (typeaheadIsExpanded: boolean) => {
    this.setState({
      typeaheadIsExpanded
    });
  };

  typeaheadMultiOnToggle = (typeaheadMultiIsExpanded: boolean) => {
    this.setState({
      typeaheadMultiIsExpanded
    })
  }

  singleOnSelect = (event: any, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) this.clearSelection();
    else {
      this.setState({
        singleSelected: selection,
        singleIsExpanded: false
      });
      console.log('selected:', selection);
    }
  };

  customSingleOnSelect = (event: any, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) this.clearSelection();
    else {
      this.setState({
        customSingleSelected: selection,
        customSingleIsExpanded: false
      });
      console.log('selected:', selection);
    }
  };

  checkOnSelect = (event: any, selection: string) => {
    const { checkSelected } = this.state;
    if (checkSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({ checkSelected: prevState.checkSelected.filter(item => item !== selection) }),
        () => console.log('selections: ', this.state.checkSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({ checkSelected: [...prevState.checkSelected, selection] }),
        () => console.log('selections: ', this.state.checkSelected)
      );
    }
  };

  typeaheadOnSelect = (event: any, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) this.clearSelection();
    else {
      this.setState({
        typeaheadSelected: selection,
        typeaheadIsExpanded: false
      });
      console.log('selected:', selection);
    }
  };

  typeaheadMultiOnSelect = (event: any, selection: string) => {
    const { typeaheadMultiSelected } = this.state;
    if (typeaheadMultiSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({ typeaheadMultiSelected: prevState.typeaheadMultiSelected.filter(item => item !== selection) }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({ typeaheadMultiSelected: [...prevState.typeaheadMultiSelected, selection] }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    }
  };

  clearSelection = () => {
    this.setState({
      singleSelected: null,
      singleIsExpanded: false,
      customSingleSelected: null,
      customSingleIsExpanded: false,
      checkSelected: [], 
      checkIsExpanded: false,
      typeaheadSelected: null,
      typeaheadIsExpanded: false,
      typeaheadMultiSelected: [],
      typeaheadMultiIsExpanded: false
    });
  };

  renderSingleSelect() {
    const { singleIsExpanded, singleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Single Select</Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="single-select"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.singleOnToggle}
            onSelect={this.singleOnSelect}
            selections={singleSelected}
            isExpanded={singleIsExpanded}
            ariaLabelledBy={titleId}
          >
            {this.singleOptions.map((option, index) => (
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                isPlaceholder={option.isPlaceholder}
              />
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderCustomSingleSelect() {
    const { customSingleIsExpanded, customSingleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Custom Single Select</Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="custom-select"
            variant={SelectVariant.single}
            aria-label="CUstomSelect Input"
            onToggle={this.customSingleOnToggle}
            onSelect={this.customSingleOnSelect}
            selections={customSingleSelected}
            isExpanded={customSingleIsExpanded}
            ariaLabelledBy={titleId}
          >
            {this.singleOptions.map((option, index) => (
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                isPlaceholder={option.isPlaceholder}
              >
                <div>test-{option.value}</div>
              </SelectOption>
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderCheckboxSelect() {
    const { checkIsExpanded, checkSelected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Checkbox Select</Title>
        <div>
          <span id={titleId} hidden>
            Checkbox Title
          </span>
          <Select
            toggleId="check-select"
            variant={SelectVariant.checkbox}
            aria-label="Select Input"
            onToggle={this.checkOnToggle}
            onSelect={this.checkOnSelect}
            selections={checkSelected}
            isExpanded={checkIsExpanded}
            placeholderText="Filter by status"
            ariaLabelledBy={titleId}
          >
            {this.checkboxOptions}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderTypeaheadSelect() {
    const { typeaheadIsExpanded, typeaheadSelected } = this.state;
    const titleId = 'typeahead-select-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Typeahead Select</Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="typeahead-select"
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={this.typeaheadOnToggle}
            onSelect={this.typeaheadOnSelect}
            onClear={this.clearSelection}
            selections={typeaheadSelected}
            isExpanded={typeaheadIsExpanded}
            ariaLabelledBy={titleId}
            placeholderText="Select a state"
          >
            {this.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderTypeaheadMultiSelect() {
    const { typeaheadMultiIsExpanded, typeaheadMultiSelected } = this.state;
    const titleId = 'multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Typeahead Multi Select</Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="typeahead-multi-select"
            variant={SelectVariant.typeaheadMulti}
            aria-label="Select a state"
            onToggle={this.typeaheadMultiOnToggle}
            onSelect={this.typeaheadMultiOnSelect}
            onClear={this.clearSelection}
            selections={typeaheadMultiSelected}
            isExpanded={typeaheadMultiIsExpanded}
            ariaLabelledBy={titleId}
            placeholderText="Select a state"
          >
            {this.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  render() {
    return <Stack gutter="md">
      {this.renderSingleSelect()}
      {this.renderCustomSingleSelect()}
      {this.renderCheckboxSelect()}
      {this.renderTypeaheadSelect()}
      {this.renderTypeaheadMultiSelect()}
    </Stack>
  }
}
