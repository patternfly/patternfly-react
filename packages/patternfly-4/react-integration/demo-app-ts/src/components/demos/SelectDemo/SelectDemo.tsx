import {
  Select,
  SelectOption,
  SelectVariant,
  Stack,
  StackItem,
  Title,
  SelectOptionObject,
  Checkbox,
  SelectDirection
} from '@patternfly/react-core';
import React, { Component } from 'react';
import { CartArrowDownIcon } from '@patternfly/react-icons';
import { State } from '../../../common/State';

export interface SelectDemoState {
  singleIsExpanded: boolean;
  singleSelected: string;
  disabledSingleIsExpanded: boolean;
  disabledSingleSelected: string;
  customSingleIsExpanded: boolean;
  customSingleSelected: string;
  checkIsExpanded: boolean;
  checkSelected: string[];
  typeaheadIsExpanded: boolean;
  typeaheadSelected: string;
  typeaheadMultiIsExpanded: boolean;
  typeaheadMultiSelected: string[];
  cdtypeaheadMultiIsExpanded: false;
  cdtypeaheadMultiSelected: string[];
  plainTypeaheadMultiIsExpanded: boolean;
  plainTypeaheadMultiSelected: string[];
  plainTypeaheadMultiIsPlain: boolean;
  customTypeaheadMultiIsExpanded: boolean;
  customTypeaheadMultiSelected: string[];
  direction: SelectDirection.up | SelectDirection.down;
  typeaheadOptions: any[];
  typeaheadCreateNew: () => void;
  typeaheadNewOptions: boolean;
  customContentIsExpanded: boolean;
}

export class SelectDemo extends Component<SelectDemoState> {
  state = {
    singleIsExpanded: false,
    singleSelected: null,
    disabledSingleIsExpanded: null,
    disabledSingleSelected: false,
    customSingleIsExpanded: false,
    customSingleSelected: null,
    checkIsExpanded: false,
    checkSelected: [],
    typeaheadIsExpanded: false,
    typeaheadSelected: null,
    typeaheadMultiIsExpanded: false,
    typeaheadMultiSelected: [],
    cdtypeaheadMultiIsExpanded: false,
    cdtypeaheadMultiSelected: [],
    plainTypeaheadMultiIsExpanded: false,
    plainTypeaheadMultiSelected: [],
    plainTypeaheadMultiIsPlain: true,
    customTypeaheadMultiIsExpanded: false,
    customTypeaheadMultiSelected: [],
    direction: SelectDirection.down,
    typeaheadOptions: [
      { value: 'Alabama', disabled: false },
      { value: 'Boston', disabled: false },
      { value: 'Florida', disabled: false },
      { value: 'New Jersey', disabled: false },
      { value: 'Texas', disabled: false }
    ],
    typeaheadIsCreatable: false,
    typeaheadNewOptions: false,
    customContentIsExpanded: false
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
    <SelectOption key={1} value={{ numericValue: 0, toString: () => 'Cancelled' } as SelectOptionObject} />,
    <SelectOption key={2} value="Paused" />,
    <SelectOption key={3} value="Warning" />,
    <SelectOption key={4} value="Restarted" />
  ];

  customTypeaheadOptions = [
    { value: new State('Alabama', 'AL', 'Montgomery', 1846) },
    { value: 'Florida', disabled: false },
    { value: 'New Jersey', disabled: false },
    { value: new State('New Mexico', 'NM', 'Santa Fe', 1912), disabled: false },
    { value: new State('New York', 'NY', 'Albany', 1788), disabled: false },
    { value: new State('North Carolina', 'NC', 'Raleigh', 1789), disabled: false }
  ];

  customSelectValueOptions = [
    <SelectOption key={6} value={new State('Alabama', 'AL', 'Montgomery', 1846)} />,
    <SelectOption key={7} value={new State('Florida', 'FL', 'Tailahassee', 1845)} />,
    <SelectOption key={8} value={new State('New Jersey', 'NJ', 'Trenton', 1787)} />,
    <SelectOption key={9} value={new State('New Mexico', 'NM', 'Santa Fe', 1912)} />,
    <SelectOption key={10} value={new State('New York', 'NY', 'Albany', 1788)} />,
    <SelectOption key={11} value={new State('North Carolina', 'NC', 'Raleigh', 1789)} />
  ];

  toggleDirection = () => {
    if (this.state.direction === SelectDirection.up) {
      this.setState({
        direction: SelectDirection.down
      });
    } else {
      this.setState({
        direction: SelectDirection.up
      });
    }
  };

  toggleCreatable = checked => {
    this.setState({
      typeaheadIsCreatable: checked
    });
  };

  toggleNew = checked => {
    this.setState({
      typeaheadNewOptions: checked
    });
  };

  singleOnToggle = (singleIsExpanded: boolean) => {
    this.setState({
      singleIsExpanded
    });
  };

  disabledSingleOnToggle = (disabledSingleIsExpanded: boolean) => {
    this.setState({
      disabledSingleIsExpanded
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
    });
  };

  cdtypeaheadMultiOnToggle = (cdtypeaheadMultiIsExpanded: boolean) => {
    this.setState({
      cdtypeaheadMultiIsExpanded
    });
  };

  plainTypeaheadMultiOnToggle = (plainTypeaheadMultiIsExpanded: boolean) => {
    this.setState({
      plainTypeaheadMultiIsExpanded
    });
  };

  customTypeaheadMultiOnToggle = (customTypeaheadMultiIsExpanded: boolean) => {
    this.setState({
      customTypeaheadMultiIsExpanded
    });
  };

  customContentOnToggle = (customContentIsExpanded: boolean) => {
    this.setState({
      customContentIsExpanded
    });
  };

  singleOnSelect = (event: any, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        singleSelected: selection,
        singleIsExpanded: false
      });
      console.log('selected:', selection.toString());
    }
  };

  disabledSingleOnSelect = (event: any, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        disabledSingleSelected: selection,
        disabledSingleIsExpanded: false
      });
      console.log('selected:', selection.toString());
    }
  };

  customSingleOnSelect = (event: any, selection: string | object, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        customSingleSelected: selection,
        customSingleIsExpanded: false
      });
      console.log('selected:', selection.toString());
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

  typeaheadOnSelect = (event: any, selection: string | object, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        typeaheadSelected: selection,
        typeaheadIsExpanded: false
      });
      console.log('selected:', selection.toString());
    }
  };

  typeaheadMultiOnSelect = (event: any, selection: string | object) => {
    const { typeaheadMultiSelected } = this.state;
    if (typeaheadMultiSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({
          typeaheadMultiSelected: prevState.typeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({ typeaheadMultiSelected: [...prevState.typeaheadMultiSelected, selection] }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    }
  };

  cdtypeaheadMultiOnSelect = (event: any, selection: string | object) => {
    const { cdtypeaheadMultiSelected } = this.state;
    if (cdtypeaheadMultiSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({
          cdtypeaheadMultiSelected: prevState.cdtypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.cdtypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          cdtypeaheadMultiSelected: [...prevState.cdtypeaheadMultiSelected, selection]
        }),
        () => console.log('selections: ', this.state.cdtypeaheadMultiSelected)
      );
    }
  };

  plainTypeaheadMultiOnSelect = (event: any, selection: string) => {
    const { plainTypeaheadMultiSelected } = this.state;
    if (plainTypeaheadMultiSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({
          plainTypeaheadMultiSelected: prevState.plainTypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.plainTypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          plainTypeaheadMultiSelected: [...prevState.plainTypeaheadMultiSelected, selection]
        }),
        () => console.log('selections: ', this.state.plainTypeaheadMultiSelected)
      );
    }
  };

  customTypeaheadMultiOnSelect = (event: any, selection: string) => {
    const { customTypeaheadMultiSelected } = this.state;
    if (customTypeaheadMultiSelected.includes(selection)) {
      this.setState(
        (prevState: SelectDemoState) => ({
          customTypeaheadMultiSelected: prevState.customTypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.customTypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          customTypeaheadMultiSelected: [...prevState.customTypeaheadMultiSelected, selection]
        }),
        () => console.log('selections: ', this.state.customTypeaheadMultiSelected)
      );
    }
  };

  typeaheadCreateNew = (newValue: string) => {
    this.setState({
      typeaheadOptions: [...this.state.typeaheadOptions, { value: newValue }]
    });
  };

  clearSelection = () => {
    this.setState({
      singleSelected: null,
      singleIsExpanded: false,
      disabledSingleIsExpanded: null,
      disabledSingleSelected: false,
      customSingleSelected: null,
      customSingleIsExpanded: false,
      checkSelected: [],
      checkIsExpanded: false,
      typeaheadSelected: null,
      typeaheadIsExpanded: false,
      typeaheadMultiSelected: [],
      typeaheadMultiIsExpanded: false,
      cdtypeaheadMultiIsExpanded: false,
      cdtypeaheadMultiSelected: [],
      plainTypeaheadMultiSelected: [],
      plainTypeaheadMultiIsExpanded: false,
      customTypeaheadMultiSelected: [],
      customTypeaheadMultiIsExpanded: false
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
            direction={this.state.direction}
            maxHeight={200}
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
        <Checkbox
          label="Expands up"
          isChecked={this.state.direction === SelectDirection.up}
          onChange={this.toggleDirection}
          aria-label="direction checkbox"
          id="toggle-direction"
          name="toggle-direction"
        />
      </StackItem>
    );
  }

  renderDisabledSingleSelect() {
    const { disabledSingleIsExpanded, disabledSingleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Disabled Single Select</Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="disabled-single-select"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.disabledSingleOnToggle}
            onSelect={this.disabledSingleOnSelect}
            selections={disabledSingleSelected}
            isExpanded={disabledSingleIsExpanded}
            ariaLabelledBy={titleId}
            isDisabled
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
            aria-label="CustomSelect Input"
            onToggle={this.customSingleOnToggle}
            onSelect={this.customSingleOnSelect}
            selections={customSingleSelected}
            isExpanded={customSingleIsExpanded}
            ariaLabelledBy={titleId}
          >
            <SelectOption key={0} value="Choose..." isPlaceholder>
              Choose...
            </SelectOption>
            <SelectOption key={1} value="Mr">
              <div>div-Mr</div>
              <CartArrowDownIcon />
            </SelectOption>
            <SelectOption key={2} value="Miss">
              text-Miss
            </SelectOption>
            <SelectOption key={3} value="Mrs">
              <div>div-Mrs</div>
              <CartArrowDownIcon />
            </SelectOption>
            <SelectOption key={4} value="Ms">
              <div>
                <span>nested-Ms</span>
              </div>
            </SelectOption>
            <SelectOption key={5} value="Dr">
              <div>one</div>
              <div>
                two<div>nested-three-dr</div>
              </div>
            </SelectOption>
            <SelectOption key={6} value="Other">
              <div>single-Other</div>
            </SelectOption>
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
    const {
      typeaheadOptions,
      typeaheadIsExpanded,
      typeaheadSelected,
      typeaheadIsCreatable,
      typeaheadNewOptions
    } = this.state;
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
            isCreatable={typeaheadIsCreatable}
            onCreateOption={(typeaheadNewOptions && this.typeaheadCreateNew) || undefined}
            createText="Create item"
            noResultsFoundText="Item not found"
          >
            {typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </div>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.typeaheadIsCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead"
          name="toggle-creatable-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.typeaheadNewOptions}
          onChange={this.toggleNew}
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead"
          name="toggle-new-typeahead"
        />
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
            {this.state.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderCustomDataTypeaheadMultiSelect() {
    const { cdtypeaheadMultiIsExpanded, cdtypeaheadMultiSelected } = this.state;
    const titleId = 'multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Custom Data Typeahead Multi Select</Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="custom-data-typeahead-multi-select"
            variant={SelectVariant.typeaheadMulti}
            aria-label="Select a state"
            onToggle={this.cdtypeaheadMultiOnToggle}
            onSelect={this.cdtypeaheadMultiOnSelect}
            onClear={this.clearSelection}
            selections={cdtypeaheadMultiSelected}
            isExpanded={cdtypeaheadMultiIsExpanded}
            ariaLabelledBy={titleId}
            placeholderText="Select a state"
          >
            {this.customTypeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderCustomTypeaheadMultiSelect() {
    const { customTypeaheadMultiIsExpanded, customTypeaheadMultiSelected } = this.state;
    const titleId = 'custom-multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Custom Typeahead Multi Select</Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="custom-typeahead-multi-select"
            variant={SelectVariant.typeaheadMulti}
            aria-label="Select a state"
            onToggle={this.customTypeaheadMultiOnToggle}
            onSelect={this.customTypeaheadMultiOnSelect}
            onClear={this.clearSelection}
            selections={customTypeaheadMultiSelected}
            isExpanded={customTypeaheadMultiIsExpanded}
            ariaLabelledBy={titleId}
            placeholderText="Select a state"
          >
            {this.state.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value}>
                <div>
                  div-{option.value.toString()}
                  <span>-test_span</span>
                  <CartArrowDownIcon />
                </div>
              </SelectOption>
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderPlainTypeaheadMultiSelect() {
    const { plainTypeaheadMultiIsExpanded, plainTypeaheadMultiSelected, plainTypeaheadMultiIsPlain } = this.state;
    const titleId = 'multi-typeahead-plain-id';

    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Custom Typeahead Plain Multi Select</Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="custom-typeahead-plain-multi-select"
            variant={SelectVariant.typeaheadMulti}
            aria-label="Select a state"
            onToggle={this.plainTypeaheadMultiOnToggle}
            onSelect={this.plainTypeaheadMultiOnSelect}
            onClear={this.clearSelection}
            selections={plainTypeaheadMultiSelected}
            isExpanded={plainTypeaheadMultiIsExpanded}
            isPlain={plainTypeaheadMultiIsPlain}
            ariaLabelledBy={titleId}
            placeholderText="Select a state"
          >
            {this.state.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value}>
                <div>
                  div-{option.value.toString()}
                  <span>-test_span</span>
                  <CartArrowDownIcon />
                </div>
              </SelectOption>
            ))}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderSelectCustomContent() {
    const { customContentIsExpanded } = this.state;
    const titleId = 'custom-content-title-id';
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Custom Content Select</Title>
        <div id="custom-content-select-id">
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            customContent="[Panel contents here]"
            toggleId="custom-content-select"
            aria-label="Select Input"
            onToggle={this.customContentOnToggle}
            isExpanded={customContentIsExpanded}
            ariaLabelledBy={titleId}
            direction={this.state.direction}
            maxHeight={200}
            placeholderText="Custom Content..."
          />
        </div>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack gutter="md">
        {this.renderSingleSelect()}
        {this.renderCustomSingleSelect()}
        {this.renderDisabledSingleSelect()}
        {this.renderCheckboxSelect()}
        {this.renderTypeaheadSelect()}
        {this.renderTypeaheadMultiSelect()}
        {this.renderCustomDataTypeaheadMultiSelect()}
        {this.renderCustomTypeaheadMultiSelect()}
        {this.renderPlainTypeaheadMultiSelect()}
        {this.renderSelectCustomContent()}
      </Stack>
    );
  }
}
