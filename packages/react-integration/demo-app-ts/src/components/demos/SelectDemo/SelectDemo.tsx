import {
  Button,
  Select,
  SelectOption,
  SelectVariant,
  Stack,
  StackItem,
  Title,
  SelectOptionObject,
  Checkbox,
  SelectDirection,
  Form,
  Divider,
  SelectGroup
} from '@patternfly/react-core';
import React, { Component } from 'react';
import CartArrowDownIcon from '@patternfly/react-icons/dist/esm/icons/cart-arrow-down-icon';
import { State } from '../../../common/State';

/* eslint-disable no-console */
interface TypeAheadOption {
  value?: string;
  disabled?: boolean;
}

export interface SelectDemoState {
  optionisDisabled?: boolean;
  singleisOpen: boolean;
  singleSelected: string;
  singleAppendisOpen: boolean;
  singleAppendSelected: boolean;
  singleDescisOpen: boolean;
  singleDescSelected: string;
  disabledSingleisOpen: boolean;
  disabledSingleSelected: string;
  customSingleisOpen: boolean;
  customSingleSelected: string | SelectOptionObject;
  dividerisOpen: boolean;
  dividerSelected: string;
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
  typeaheadInputValuePersisted: boolean;
  customContentisOpen: boolean;
  noBadgeCheckIsOpen: boolean;
  noBadgeCheckSelected: string[];
  menuDocumentBodyisOpen: boolean;
  menuDocumentBodySelected: string[];
  lbltypeaheadSelected: string;
  lbltypeaheadisOpen: boolean;
  disabledFirstItemIsOpen: boolean;
  disabledFirstItemSelected: string;
}

export class SelectDemo extends Component<SelectDemoState> {
  state = {
    optionisDisabled: false,
    singleisOpen: false,
    singleSelected: '',
    singleAppendisOpen: false,
    singleAppendSelected: '',
    singleDescisOpen: false,
    singleDescSelected: '',
    disabledSingleisOpen: false,
    disabledSingleSelected: '',
    customSingleisOpen: false,
    customSingleSelected: '',
    dividerisOpen: false,
    dividerSelected: '',
    checkisOpen: false,
    checkSelected: [''],
    typeaheadisOpen: false,
    noBadgeCheckIsOpen: false,
    noBadgeCheckSelected: [''],
    typeaheadSelected: '',
    typeaheadMultiisOpen: false,
    typeaheadMultiSelected: [''],
    cdtypeaheadMultiisOpen: false,
    cdtypeaheadMultiSelected: [] as string[],
    lbltypeaheadSelected: '',
    lbltypeaheadisOpen: false,
    plainTypeaheadMultiisOpen: false,
    plainTypeaheadMultiSelected: [''],
    plainTypeaheadMultiIsPlain: true,
    customTypeaheadMultiisOpen: false,
    customTypeaheadMultiSelected: [''],
    direction: SelectDirection.down,
    typeaheadOptions: [
      { value: 'Alabama', disabled: false, itemCount: 3 },
      { value: 'Boston', disabled: false, itemCount: 10 },
      { value: 'Florida', disabled: false, itemCount: 7 },
      { value: 'New Jersey', disabled: false, itemCount: 1 },
      { value: 'Texas', disabled: false, itemCount: 20 }
    ],
    typeaheadLabelOptions: [
      { label: 'Alabama', value: 'AL', disabled: false },
      { label: 'New York', value: 'NY', disabled: false },
      { label: 'Florida', value: 'FL', disabled: false },
      { label: 'New Jersey', value: 'NJ', disabled: false },
      { label: 'North Carolina', value: 'NC', disabled: false }
    ],
    typeaheadIsCreatable: false,
    typeaheadNewOptions: false,
    typeaheadInputValuePersisted: false,
    customContentisOpen: false,
    menuDocumentBodyisOpen: false,
    menuDocumentBodySelected: [''],
    disabledFirstItemIsOpen: false,
    disabledFirstItemSelected: ''
  };

  singleOptions = [
    { value: 'Choose...', disabled: false, isPlaceholder: true, id: 'single-select-opt-1' },
    { value: 'Mr', disabled: false, id: 'single-select-opt-2' },
    { value: 'Miss', disabled: false, id: 'single-select-opt-3' },
    { value: 'Mrs', disabled: false, id: 'single-select-opt-4' },
    { value: 'Ms', disabled: false, id: 'single-select-opt-5' },
    { value: 'Dr', disabled: false, id: 'single-select-opt-6' },
    { value: 'Other', disabled: false, id: 'single-select-opt-7' }
  ];

  checkboxOptions = [
    <SelectOption key={0} value="Active" inputId="Active" id="Active" />,
    <SelectOption
      key={1}
      value={{ numericValue: 0, toString: () => 'Cancelled' } as SelectOptionObject}
      inputId="Cancelled"
      id="Cancelled"
    />,
    <SelectOption key={2} value="Paused" inputId="Paused" id="Paused" />,
    <Divider key={3} />,
    <SelectOption key={4} value="Warning" inputId="Warning" id="Warning" />,
    <SelectOption key={5} value="Restarted" inputId="Restarted" id="Restarted" />
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

  disabledFirstItemOptions = [
    { value: 'Choose', disabled: true, isPlaceholder: true, id: 'first-item-disabled-select-opt-1' },
    { value: 'Mr', disabled: false, id: 'first-item-disabled-select-opt-2' },
    { value: 'Miss', disabled: false, id: 'first-item-disabled-select-opt-3' },
    { value: 'Mrs', disabled: false, id: 'first-item-disabled-select-opt-4' },
    { value: 'Ms', disabled: false, id: 'first-item-disabled-select-opt-5' },
    { value: 'Dr', disabled: false, id: 'first-item-disabled-select-opt-6' },
    { value: 'Other', disabled: false, id: 'first-item-disabled-select-opt-7' }
  ];

  toggleDisabled = () => {
    this.setState({ optionisDisabled: !this.state.optionisDisabled });
  };

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

  toggleInputValuePersisted = (checked: boolean) => {
    this.setState({
      typeaheadInputValuePersisted: checked
    });
  };

  singleOnToggle = (singleisOpen: boolean) => {
    this.setState({
      singleisOpen
    });
  };

  singleAppendOnToggle = (singleAppendisOpen: boolean) => {
    this.setState({
      singleAppendisOpen
    });
  };

  singleDescOnToggle = (singleDescisOpen: boolean) => {
    this.setState({
      singleDescisOpen
    });
  };

  dividerOnToggle = (dividerisOpen: boolean) => {
    this.setState({
      dividerisOpen
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

  documentBodyOnToggle = (menuDocumentBodyisOpen: boolean) => {
    this.setState({
      menuDocumentBodyisOpen
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

  lbtypaheadToggle = (lbltypeaheadisOpen: boolean) => {
    this.setState({ lbltypeaheadisOpen });
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

  disabledFirstItemOnToggle = (disabledFirstItemIsOpen: boolean) => {
    this.setState({
      disabledFirstItemIsOpen
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

  singleAppendOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        singleAppendSelected: selection,
        singleAppendisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  singleDescOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        singleDescSelected: selection,
        singleDescisOpen: false
      });
      console.log('selected:', selection.toString());
    }
  };

  dividerOnSelect = (
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        dividerSelected: selection,
        dividerisOpen: false
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

  documentBodyOnSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { menuDocumentBodySelected } = this.state;
    if (menuDocumentBodySelected.includes(selection.toString())) {
      this.setState(
        (prevState: SelectDemoState) => ({
          menuDocumentBodySelected: prevState.menuDocumentBodySelected.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.menuDocumentBodySelected)
      );
    } else {
      this.setState(
        (prevState: SelectDemoState) => ({
          menuDocumentBodySelected: [...prevState.menuDocumentBodySelected, selection]
        }),
        () => console.log('selections: ', this.state.menuDocumentBodySelected)
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

  lbltypeaheadSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
      return;
    }
    this.setState(
      {
        lbltypeaheadSelected: selection,
        lbltypeaheadisOpen: false
      },
      () => console.log('selections: ', this.state.lbltypeaheadSelected)
    );
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

  disabledFirstItemOnSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        disabledFirstItemSelected: selection,
        disabledFirstItemIsOpen: false
      });
      console.log('selected:', selection.toString());
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
      cdtypeaheadMultiSelected: [],
      lbltypeaheadSelected: '',
      lbltypeaheadisOpen: false,
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
            id="single-select-component"
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
                id={option.value}
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

  renderSingleSelectMenuAppendTo() {
    const { singleAppendisOpen, singleAppendSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Single Select - menu append to
        </Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            id="menuappend-select-component"
            toggleId="menuappend-toggle"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.singleAppendOnToggle}
            onSelect={this.singleAppendOnSelect}
            selections={singleAppendSelected}
            isOpen={singleAppendisOpen}
            aria-labelledby={titleId}
            maxHeight={200}
            menuAppendTo={() => document.body}
            footer={
              <Button tabIndex={1} variant="link" isInline id="footer-btn">
                Action
              </Button>
            }
          >
            {this.singleOptions.map((option, index) => (
              <SelectOption
                id={option.value}
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

  renderSelectWithDivider() {
    const { dividerisOpen, dividerSelected } = this.state;
    const titleId = 'select-with-divider-title-id';
    const options = this.singleOptions.reduce((acc, option, index) => {
      const selectOpt = (
        <SelectOption id={option.value} isDisabled={option.disabled} key={index} value={option.value} />
      );
      if (index === 2) {
        return [...acc, <Divider component="li" key={`divider-${index}`} />, selectOpt];
      }
      return [...acc, selectOpt];
    }, []);
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Single Select with a divider
        </Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="single-select-with-divider"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.dividerOnToggle}
            onSelect={this.dividerOnSelect}
            selections={dividerSelected}
            isOpen={dividerisOpen}
            aria-labelledby={titleId}
            placeholderText="Select with divider"
            maxHeight={200}
          >
            {options}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderDescriptionSelect() {
    const { singleDescisOpen, singleDescSelected } = this.state;
    const titleId = 'title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Single Select with descriptions
        </Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="single-select-with-descriptions"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.singleDescOnToggle}
            onSelect={this.singleDescOnSelect}
            selections={singleDescSelected}
            isOpen={singleDescisOpen}
            aria-labelledby={titleId}
            placeholderText="Select with descriptions"
            maxHeight={200}
            footer={
              <Button variant="link" isInline>
                Action
              </Button>
            }
          >
            {this.singleOptions.map((option, index) => (
              <SelectOption
                id={option.value}
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                description="This is a description"
              />
            ))}
          </Select>
        </div>
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
                id={option.value}
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
            <SelectOption key={0} value="Choose..." isPlaceholder id="Choose...">
              Choose...
            </SelectOption>
            <SelectOption key={1} value="Mr" id="Mr">
              <div>div-Mr</div>
              <CartArrowDownIcon />
            </SelectOption>
            <SelectOption key={2} value="Miss" id="Miss">
              text-Miss
            </SelectOption>
            <SelectOption key={3} value="Mrs" id="Mrs">
              <div>div-Mrs</div>
              <CartArrowDownIcon />
            </SelectOption>
            <SelectOption key={4} value="Ms" id="Ms">
              <div>
                <span>nested-Ms</span>
              </div>
            </SelectOption>
            <SelectOption key={5} value="Dr" id="Dr">
              <div>one</div>
              <div>
                two<div>nested-three-dr</div>
              </div>
            </SelectOption>
            <SelectOption key={6} value="Other" id="Other">
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
      typeaheadNewOptions,
      typeaheadInputValuePersisted
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
            isInputValuePersisted={typeaheadInputValuePersisted}
            createText="Create item"
            noResultsFoundText="Item not found"
            isGrouped
          >
            {[
              <SelectGroup key={0}>
                {typeaheadOptions.map((option, index) => (
                  <SelectOption
                    isDisabled={index === 0 ? this.state.optionisDisabled : option.disabled}
                    key={index}
                    value={option.value}
                    id={option.value}
                    itemCount={option.itemCount}
                  />
                ))}
              </SelectGroup>
            ]}
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
        <Checkbox
          label="isInputValuePersisted"
          isChecked={this.state.typeaheadInputValuePersisted}
          onChange={this.toggleInputValuePersisted}
          aria-label="toggle input value persisted"
          id="toggle-input-value-persisted"
          name="toggle-input-value-persisted"
        />
        <Button tabIndex={1} isInline id="disabled-toggle-btn" onClick={this.toggleDisabled}>
          Toggle disabled state
        </Button>
      </StackItem>
    );
  }

  renderLabelTypeaheadSelect() {
    const { typeaheadLabelOptions, lbltypeaheadisOpen, lbltypeaheadSelected } = this.state;
    const titleId = 'typeahead-select-labels-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Typeahead Select with labelled options
        </Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="typeahead-select-label"
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={this.lbtypaheadToggle}
            onSelect={this.lbltypeaheadSelect}
            onClear={this.clearSelection}
            selections={lbltypeaheadSelected}
            isOpen={lbltypeaheadisOpen}
            aria-labelledby={titleId}
            placeholderText="Select a state"
          >
            {typeaheadLabelOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} id={option.value}>
                {option.label}
              </SelectOption>
            ))}
          </Select>
          <Button
            id="button-typeahead-labels"
            onClick={() => this.lbltypeaheadSelect(null, typeaheadLabelOptions[1].value)}
          >
            Select {typeaheadLabelOptions[1].label}
          </Button>
        </div>
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
            shouldResetOnSelect={false}
          >
            {this.state.typeaheadOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} id={option.value} />
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
            chipGroupProps={{ numChips: 1 }}
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
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                id={option.value.toString()}
              />
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
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} id={option.value}>
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
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} id={option.value}>
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
            <SelectOption value={'option1'} id="option1" />
            <SelectOption value={'option2'} id="option1" />
          </Select>
        </Form>
      </StackItem>
    );
  }

  renderMenuOnDocumentBodySelect() {
    const { menuDocumentBodyisOpen, menuDocumentBodySelected } = this.state;
    const titleId = 'select-document-body-title';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Checkbox Select with menu on document body
        </Title>
        <div>
          <span id={titleId} hidden>
            Checkbox Title
          </span>
          <Select
            direction="up"
            toggleId="select-document-body-toggle"
            variant={SelectVariant.checkbox}
            aria-label="Select Input"
            onToggle={this.documentBodyOnToggle}
            onSelect={this.documentBodyOnSelect}
            selections={menuDocumentBodySelected.filter(string => string)}
            isOpen={menuDocumentBodyisOpen}
            placeholderText="Filter by status"
            aria-labelledby={titleId}
            menuAppendTo={() => document.body}
          >
            {this.checkboxOptions}
          </Select>
        </div>
      </StackItem>
    );
  }

  renderDisabledFirstItemSelect() {
    const { disabledFirstItemIsOpen, disabledFirstItemSelected } = this.state;
    const titleId = 'disabled-first-item-title-id';
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          First Item Disabled Select
        </Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <Select
            toggleId="disabled-first-item-single-select"
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={this.disabledFirstItemOnToggle}
            onSelect={this.disabledFirstItemOnSelect}
            selections={disabledFirstItemSelected}
            isOpen={disabledFirstItemIsOpen}
            aria-labelledby={titleId}
          >
            {this.disabledFirstItemOptions.map((option, index) => (
              <SelectOption
                id={option.id}
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
        {this.renderMenuOnDocumentBodySelect()}
        {this.renderDescriptionSelect()}
        {this.renderSelectWithDivider()}
        {this.renderLabelTypeaheadSelect()}
        {this.renderSingleSelectMenuAppendTo()}
        {this.renderDisabledFirstItemSelect()}
      </Stack>
    );
  }
}
