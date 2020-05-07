import {
  Select,
  SelectOption,
  SelectVariant,
  Stack,
  StackItem,
  Title,
  SelectOptionObject,
  Checkbox,
  SelectDirection,
  Form
} from '@patternfly/react-core';
import React, { Component } from 'react';
import CartArrowDownIcon from '@patternfly/react-icons/dist/js/icons/cart-arrow-down-icon';
import { State } from '../../../common/State';

/* eslint-disable no-console */
interface TypeAheadOption {
  value?: string;
  disabled?: boolean;
}

export interface SelectDemoState {
  singleisOpen: boolean;
  singleSelected: string;
  disabledSingleisOpen: boolean;
  disabledSingleSelected: string;
  customSingleisOpen: boolean;
  customSingleSelected: string | SelectOptionObject;
  checkisOpen: boolean;
  checkSelected: string[];
  typeaheadisOpen: boolean;
  typeaheadSelected: string | SelectOptionObject;
  typeaheadMultiisOpen: boolean;
  typeaheadMultiSelected: string[];
  cdtypeaheadMultiisOpen: boolean;
  cdtypeaheadMultiSelected: string[];
  plainTypeaheadMultiisOpen: boolean;
  plainTypeaheadMultiSelected: string[];
  plainTypeaheadMultiIsPlain: boolean;
  customTypeaheadMultiisOpen: boolean;
  customTypeaheadMultiSelected: string[];
  direction: SelectDirection.up | SelectDirection.down;
  typeaheadOptions: TypeAheadOption[];
  typeaheadIsCreatable: boolean;
  typeaheadNewOptions: boolean;
  customContentisOpen: boolean;
  noBadgeCheckIsOpen: boolean;
  noBadgeCheckSelected: string[];
}

export class SelectDemo extends Component<SelectDemoState> {
  state = {
    singleisOpen: false,
    singleSelected: '',
    disabledSingleisOpen: false,
    disabledSingleSelected: '',
    customSingleisOpen: false,
    customSingleSelected: '',
    checkisOpen: false,
    checkSelected: [''],
    typeaheadisOpen: false,
    noBadgeCheckIsOpen: false,
    noBadgeCheckSelected: [''],
    typeaheadSelected: '',
    typeaheadMultiisOpen: false,
    typeaheadMultiSelected: [''],
    cdtypeaheadMultiisOpen: false,
    cdtypeaheadMultiSelected: [''],
    plainTypeaheadMultiisOpen: false,
    plainTypeaheadMultiSelected: [''],
    plainTypeaheadMultiIsPlain: true,
    customTypeaheadMultiisOpen: false,
    customTypeaheadMultiSelected: [''],
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
    customContentisOpen: false
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

  toggleCreatable = (checked: boolean) => {
    this.setState({
      typeaheadIsCreatable: checked
    });
  };

  toggleNew = (checked: boolean) => {
    this.setState({
      typeaheadNewOptions: checked
    });
  };

  singleOnToggle = (singleisOpen: boolean) => {
    this.setState({
      singleisOpen
    });
  };

  disabledSingleOnToggle = (disabledSingleisOpen: boolean) => {
    this.setState({
      disabledSingleisOpen
    });
  };

  customSingleOnToggle = (customSingleisOpen: boolean) => {
    this.setState({
      customSingleisOpen
    });
  };

  checkOnToggle = (checkisOpen: boolean) => {
    this.setState({
      checkisOpen
    });
  };

  noBadgeCheckOnToggle = (noBadgeCheckIsOpen: boolean) => {
    this.setState({
      noBadgeCheckIsOpen
    });
  };

  typeaheadOnToggle = (typeaheadisOpen: boolean) => {
    this.setState({
      typeaheadisOpen
    });
  };

  typeaheadMultiOnToggle = (typeaheadMultiisOpen: boolean) => {
    this.setState({
      typeaheadMultiisOpen
    });
  };

  cdtypeaheadMultiOnToggle = (cdtypeaheadMultiisOpen: boolean) => {
    this.setState({
      cdtypeaheadMultiisOpen
    });
  };

  plainTypeaheadMultiOnToggle = (plainTypeaheadMultiisOpen: boolean) => {
    this.setState({
      plainTypeaheadMultiisOpen
    });
  };

  customTypeaheadMultiOnToggle = (customTypeaheadMultiisOpen: boolean) => {
    this.setState({
      customTypeaheadMultiisOpen
    });
  };

  customContentOnToggle = (customContentisOpen: boolean) => {
    this.setState({
      customContentisOpen
    });
  };

  singleOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        singleSelected: selection,
        singleisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  disabledSingleOnSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        disabledSingleSelected: selection,
        disabledSingleisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  customSingleOnSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject | (string | SelectOptionObject)[],
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        customSingleSelected: selection,
        customSingleisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  checkOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { checkSelected } = this.state;
    if (checkSelected.includes(selection.toString())) {
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

  noBadgeCheckOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { noBadgeCheckSelected } = this.state;
    if (noBadgeCheckSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          noBadgeCheckSelected: prevState.noBadgeCheckSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.noBadgeCheckSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({ noBadgeCheckSelected: [...prevState.noBadgeCheckSelected, selection] }),
        () => console.log('selections: ', this.state.noBadgeCheckSelected)
      );
    }
  };

  typeaheadOnSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject | (string | SelectOptionObject)[],
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        typeaheadSelected: selection,
        typeaheadisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  typeaheadMultiOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { typeaheadMultiSelected } = this.state;
    if (typeaheadMultiSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          typeaheadMultiSelected: prevState.typeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          typeaheadMultiSelected: [...prevState.typeaheadMultiSelected, selection.toString()]
        }),
        () => console.log('selections: ', this.state.typeaheadMultiSelected)
      );
    }
  };

  cdtypeaheadMultiOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { cdtypeaheadMultiSelected } = this.state;
    if (cdtypeaheadMultiSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          cdtypeaheadMultiSelected: prevState.cdtypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.cdtypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          cdtypeaheadMultiSelected: [...prevState.cdtypeaheadMultiSelected, selection.toString()]
        }),
        () => console.log('selections: ', this.state.cdtypeaheadMultiSelected)
      );
    }
  };

  plainTypeaheadMultiOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject
  ) => {
    const { plainTypeaheadMultiSelected } = this.state;
    if (plainTypeaheadMultiSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          plainTypeaheadMultiSelected: prevState.plainTypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.plainTypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          plainTypeaheadMultiSelected: [...prevState.plainTypeaheadMultiSelected, selection.toString()]
        }),
        () => console.log('selections: ', this.state.plainTypeaheadMultiSelected)
      );
    }
  };

  customTypeaheadMultiOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject
  ) => {
    const { customTypeaheadMultiSelected } = this.state;
    if (customTypeaheadMultiSelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          customTypeaheadMultiSelected: prevState.customTypeaheadMultiSelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.customTypeaheadMultiSelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          customTypeaheadMultiSelected: [...prevState.customTypeaheadMultiSelected, selection.toString()]
        }),
        () => console.log('selections: ', this.state.customTypeaheadMultiSelected)
      );
    }
  };

  typeaheadCreateNew = (newValue: string) => {
    this.setState({
      typeaheadOptions: [...this.state.typeaheadOptions, { value: newValue, disabled: false }]
    });
  };

  clearSelection = () => {
    this.setState({
      singleSelected: '',
      singleisOpen: false,
      disabledSingleisOpen: false,
      disabledSingleSelected: '',
      customSingleSelected: '',
      customSingleisOpen: false,
      checkSelected: [''],
      checkisOpen: false,
      noBadgeCheckSelected: [''],
      noBadgeCheckIsOpen: false,
      typeaheadSelected: '',
      typeaheadisOpen: false,
      typeaheadMultiSelected: [''],
      typeaheadMultiisOpen: false,
      cdtypeaheadMultiisOpen: false,
      cdtypeaheadMultiSelected: [''],
      plainTypeaheadMultiSelected: [''],
      plainTypeaheadMultiisOpen: false,
      customTypeaheadMultiSelected: [''],
      customTypeaheadMultiisOpen: false
    });
  };

  renderSingleSelect() {
    const { singleisOpen, singleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Single Select
        </Title>
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
            isOpen={singleisOpen}
            aria-labelledby={titleId}
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
    const { disabledSingleisOpen, disabledSingleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Disabled Single Select
        </Title>
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
            isOpen={disabledSingleisOpen}
            aria-labelledby={titleId}
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
    const { customSingleisOpen, customSingleSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Custom Single Select
        </Title>
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
            isOpen={customSingleisOpen}
            aria-labelledby={titleId}
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
    const { checkisOpen, checkSelected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Checkbox Select
        </Title>
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
            selections={checkSelected.filter(string => string)}
            isOpen={checkisOpen}
            placeholderText="Filter by status"
            aria-labelledby={titleId}
          >
            {this.checkboxOptions}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderNoBadgeCheckboxSelect() {
    const { noBadgeCheckIsOpen, noBadgeCheckSelected } = this.state;
    const titleId = 'no-badge-checkbox-select-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Checkbox Select w/ No Selection Badge
        </Title>
        <div>
          <span id={titleId} hidden>
            Checkbox Title
          </span>
          <Select
            toggleId="check-select-no-badge"
            variant={SelectVariant.checkbox}
            aria-label="Select Input"
            onToggle={this.noBadgeCheckOnToggle}
            onSelect={this.noBadgeCheckOnSelect}
            selections={noBadgeCheckSelected}
            isCheckboxSelectionBadgeHidden
            isOpen={noBadgeCheckIsOpen}
            placeholderText="Filter by status"
            aria-labelledby={titleId}
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
      typeaheadisOpen,
      typeaheadSelected,
      typeaheadIsCreatable,
      typeaheadNewOptions
    } = this.state;
    const titleId = 'typeahead-select-id';
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
            toggleId="typeahead-select"
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={this.typeaheadOnToggle}
            onSelect={this.typeaheadOnSelect}
            onClear={this.clearSelection}
            selections={typeaheadSelected}
            isOpen={typeaheadisOpen}
            aria-labelledby={titleId}
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
    const { typeaheadMultiisOpen, typeaheadMultiSelected } = this.state;
    const titleId = 'multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Typeahead Multi Select
        </Title>
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
            isOpen={typeaheadMultiisOpen}
            aria-labelledby={titleId}
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
    const { cdtypeaheadMultiisOpen, cdtypeaheadMultiSelected } = this.state;
    const titleId = 'multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Custom Data Typeahead Multi Select
        </Title>
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
            isOpen={cdtypeaheadMultiisOpen}
            aria-labelledby={titleId}
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
    const { customTypeaheadMultiisOpen, customTypeaheadMultiSelected } = this.state;
    const titleId = 'custom-multi-typeahead-select-id';

    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Custom Typeahead Multi Select
        </Title>
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
            isOpen={customTypeaheadMultiisOpen}
            aria-labelledby={titleId}
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
    const { plainTypeaheadMultiisOpen, plainTypeaheadMultiSelected, plainTypeaheadMultiIsPlain } = this.state;
    const titleId = 'multi-typeahead-plain-id';

    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Custom Typeahead Plain Multi Select
        </Title>
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
            isOpen={plainTypeaheadMultiisOpen}
            isPlain={plainTypeaheadMultiIsPlain}
            aria-labelledby={titleId}
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
    const { customContentisOpen } = this.state;
    const titleId = 'custom-content-title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Custom Content Select
        </Title>
        <div id="custom-content-select-id">
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            customContent="[Panel contents here]"
            toggleId="custom-content-select"
            aria-label="Select Input"
            onToggle={this.customContentOnToggle}
            isOpen={customContentisOpen}
            aria-labelledby={titleId}
            direction={this.state.direction}
            maxHeight={200}
            placeholderText="Custom Content..."
          />
        </div>
      </StackItem>
    );
  }

  renderTypeaheadSelectInForm() {
    const titleId = 'typeahead-select-form-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Typeahead inside a form
        </Title>
        <Form
          onSubmit={e => {
            window.location.href = '/404';
            e.preventDefault();
          }}
        >
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId={'form-typeahead-button'}
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={() => null}
            onSelect={() => null}
            onClear={() => null}
            selections=""
            isOpen={false}
            aria-labelledby={titleId}
            placeholderText="Select a state"
          >
            <SelectOption value={'option1'} />
            <SelectOption value={'option2'} />
          </Select>
        </Form>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack hasGutter>
        {this.renderSingleSelect()}
        {this.renderCustomSingleSelect()}
        {this.renderDisabledSingleSelect()}
        {this.renderCheckboxSelect()}
        {this.renderNoBadgeCheckboxSelect()}
        {this.renderTypeaheadSelect()}
        {this.renderTypeaheadMultiSelect()}
        {this.renderCustomDataTypeaheadMultiSelect()}
        {this.renderCustomTypeaheadMultiSelect()}
        {this.renderPlainTypeaheadMultiSelect()}
        {this.renderSelectCustomContent()}
        {this.renderTypeaheadSelectInForm()}
      </Stack>
    );
  }
}
