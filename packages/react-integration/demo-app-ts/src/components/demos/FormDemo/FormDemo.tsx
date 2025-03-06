import { Component, createRef } from 'react';
import {
  Button,
  Divider,
  Form,
  FormGroup,
  FormGroupLabelHelp,
  FormProps,
  FormSection,
  Checkbox,
  Popover,
  ValidatedOptions,
  HelperText,
  HelperTextItem,
  FormHelperText,
  Select,
  SelectList,
  SelectOption,
  SelectOptionProps,
  TextInput,
  TextInputGroup,
  TextInputGroupUtilities,
  TextInputGroupMain,
  Label,
  LabelGroup,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

const initialSelectOptions = [
  { value: 'Alabama', children: 'Alabama' },
  { value: 'Florida', children: 'Florida' },
  { value: 'New Jersey', children: 'New Jersey' },
  { value: 'New Mexico', children: 'New Mexico' },
  { value: 'New York', children: 'New York' },
  { value: 'North Carolina', children: 'North Carolina' }
];

const NO_RESULTS = 'no results';
export interface FormState {
  value: string;
  isValid: boolean;
  isOpen: boolean;
  selected: string[];
  selectOptions: SelectOptionProps[];
  validatedValue: string;
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.warning | ValidatedOptions.success;
  checkboxChecked: boolean;
  inputValue: string;
  focusedItemIndex: number | null;
  activeItemId: string | null;
}

export class FormDemo extends Component<FormProps, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'Five',
      isValid: false,
      isOpen: false,
      selected: [],
      selectOptions: initialSelectOptions,
      validatedValue: '',
      validated: ValidatedOptions.default,
      checkboxChecked: false,
      inputValue: '',
      focusedItemIndex: null,
      activeItemId: null
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  labelHelpRef: React.RefObject<HTMLSpanElement | null> = createRef();
  textInputRef: React.RefObject<HTMLInputElement | null> = createRef();

  handleTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    this.setState({ value, isValid: /^\d+$/.test(value) });
  };

  handleValidatedTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    let validated = ValidatedOptions.default;
    if (value.length === 0) {
      validated = ValidatedOptions.warning;
    } else {
      validated = /^\d+$/.test(value) ? ValidatedOptions.success : ValidatedOptions.error;
    }
    this.setState({ validatedValue: value, validated });
  };

  createItemId = (value: any) => `select-multi-typeahead-${value.replace(' ', '-')}`;

  setActiveAndFocusedItem = (itemIndex: number) => {
    this.setState({
      focusedItemIndex: itemIndex
    });
    const focusedItem = this.state.selectOptions[itemIndex];
    this.setState({
      activeItemId: this.createItemId(focusedItem.value)
    });
  };

  resetActiveAndFocusedItem = () => {
    this.setState({
      focusedItemIndex: null
    });
    this.setState({
      activeItemId: null
    });
  };

  onSelect = (_ev: any, selection: string | number | undefined) => {
    const { selected } = this.state;
    if (selection) {
      if (selected.includes(selection.toString())) {
        this.setState(
          (prevState) => ({ selected: prevState.selected.filter((item) => item !== selection) }),
          // eslint-disable-next-line no-console
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          (prevState) => ({ selected: [...prevState.selected, selection.toString()] }),
          // eslint-disable-next-line no-console
          () => console.log('selections: ', this.state.selected)
        );
      }
    }
    this.textInputRef.current?.focus();
  };

  handleMenuArrowKeys = (key: string) => {
    const { selectOptions, isOpen, focusedItemIndex } = this.state;
    let indexToFocus = 0;

    if (!isOpen) {
      this.setState({
        isOpen: true
      });
    }

    if (selectOptions.every((option) => option.isDisabled)) {
      return;
    }

    if (key === 'ArrowUp') {
      // When no index is set or at the first index, focus to the last, otherwise decrement focus index
      if (focusedItemIndex === null || focusedItemIndex === 0) {
        indexToFocus = selectOptions.length - 1;
      } else {
        indexToFocus = focusedItemIndex - 1;
      }

      // Skip disabled options
      while (selectOptions[indexToFocus].isDisabled) {
        indexToFocus--;
        if (indexToFocus === -1) {
          indexToFocus = selectOptions.length - 1;
        }
      }
    }

    if (key === 'ArrowDown') {
      // When no index is set or at the last index, focus to the first, otherwise increment focus index
      if (focusedItemIndex === null || focusedItemIndex === selectOptions.length - 1) {
        indexToFocus = 0;
      } else {
        indexToFocus = focusedItemIndex + 1;
      }

      // Skip disabled options
      while (selectOptions[indexToFocus].isDisabled) {
        indexToFocus++;
        if (indexToFocus === selectOptions.length) {
          indexToFocus = 0;
        }
      }
    }

    this.setActiveAndFocusedItem(indexToFocus);
  };

  onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { selectOptions, isOpen, focusedItemIndex } = this.state;
    const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;

    switch (event.key) {
      case 'Enter':
        if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
          this.onSelect(event, focusedItem.value);
        }

        if (!isOpen) {
          this.setState({
            isOpen: true
          });
        }

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        this.handleMenuArrowKeys(event.key);
        break;
    }
  };

  onToggle = (_event: any) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.textInputRef?.current?.focus();
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
    this.resetActiveAndFocusedItem();
  };

  onInputClick = () => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    } else if (!this.state.inputValue) {
      this.closeMenu();
    }
  };

  onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    let newSelectOptions: SelectOptionProps[] = initialSelectOptions;
    if (value) {
      newSelectOptions = initialSelectOptions.filter((menuItem) =>
        String(menuItem.children).toLowerCase().includes(value.toLowerCase())
      );
      if (!newSelectOptions.length) {
        newSelectOptions = [{ isAriaDisabled: true, children: `No results found for "${value}"`, value: NO_RESULTS }];
      }
      if (!this.state.isOpen) {
        this.setState({ isOpen: true });
      }
    }
    this.setState({ inputValue: value });
    this.setState({ selectOptions: newSelectOptions });
    this.resetActiveAndFocusedItem();
  };
  onClearButtonClick = () => {
    this.setState({ selected: [] });
    this.setState({ inputValue: '' });
    this.resetActiveAndFocusedItem();
    this.textInputRef?.current?.focus();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCheckboxChange(event: any, _checked: boolean) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ ['checkboxChecked']: value });
  }

  render() {
    const {
      value,
      isValid,
      isOpen,
      selectOptions,
      selected,
      validatedValue,
      validated,
      checkboxChecked,
      inputValue,
      activeItemId
    } = this.state;
    const titleId = 'multi-typeahead-select-id';

    const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
      <MenuToggle
        variant="typeahead"
        aria-label="Multi typeahead menu toggle"
        onClick={this.onToggle}
        innerRef={toggleRef}
        isExpanded={isOpen}
        isFullWidth
      >
        <TextInputGroup isPlain>
          <TextInputGroupMain
            value={inputValue}
            onClick={this.onInputClick}
            onChange={this.onTextInputChange}
            onKeyDown={this.onInputKeyDown}
            id="multi-typeahead-select-input"
            autoComplete="off"
            innerRef={this.textInputRef}
            placeholder="Select a state"
            {...(activeItemId && { 'aria-activedescendant': activeItemId })}
            role="combobox"
            isExpanded={isOpen}
            aria-controls="select-multi-typeahead-listbox"
          >
            <LabelGroup aria-label="Current selections">
              {selected.map((selection, index) => (
                <Label
                  key={index}
                  variant="outline"
                  onClose={(ev: any) => {
                    ev.stopPropagation();
                    this.onSelect(ev, selection);
                  }}
                >
                  {selection}
                </Label>
              ))}
            </LabelGroup>
          </TextInputGroupMain>
          <TextInputGroupUtilities {...(selected.length === 0 ? { style: { display: 'none' } } : {})}>
            <Button
              variant="plain"
              onClick={this.onClearButtonClick}
              aria-label="Clear input value"
              icon={<TimesIcon />}
            />
          </TextInputGroupUtilities>
        </TextInputGroup>
      </MenuToggle>
    );

    return (
      <>
        <Form id="form-demo-1">
          <FormGroup
            id="form-group-age"
            label="Age"
            labelInfo="Age info"
            labelHelp={
              <Popover
                triggerRef={this.labelHelpRef}
                headerContent="The age of a person"
                bodyContent="Age is typically measured in years. It is also common to measure age in months for newborns, e.g. 18months."
              >
                <FormGroupLabelHelp ref={this.labelHelpRef} aria-label="More info for name field" />
              </Popover>
            }
            type="number"
            fieldId="age"
          >
            <TextInput
              validated={isValid ? ValidatedOptions.default : ValidatedOptions.error}
              value={value}
              id="age"
              aria-describedby="age-helper"
              onChange={this.handleTextInputChange}
            />
            <HelperText id="age-helper">
              <HelperTextItem
                icon={<ExclamationCircleIcon />}
                variant={isValid ? ValidatedOptions.default : ValidatedOptions.error}
              >
                {isValid ? 'Please write your age' : 'Age has to be a number'}
              </HelperTextItem>
            </HelperText>
          </FormGroup>
        </Form>

        <Divider className={spacing.myXl} />

        <Form id="form-demo-2">
          <FormGroup fieldId="select-state-typeahead">
            <>
              <span id={titleId} hidden>
                Select a state
              </span>
              <Select
                aria-label="Select a state"
                onSelect={this.onSelect}
                selected={selected}
                isOpen={isOpen}
                aria-labelledby={titleId}
                toggle={toggle}
                shouldFocusFirstItemOnOpen={false}
                onOpenChange={(isOpen: any) => {
                  !isOpen && this.closeMenu();
                }}
              >
                <SelectList>
                  {selectOptions.map((option, index) => (
                    <SelectOption key={index} {...option} />
                  ))}
                </SelectList>
              </Select>
            </>
          </FormGroup>
          <FormSection title="Title" titleElement="h4">
            <FormGroup id="formgroup-validated" label="Validated Age" type="number" fieldId="age2">
              <TextInput
                validated={validated}
                value={validatedValue}
                id="age-validated"
                aria-describedby="age-helper-validated"
                onChange={this.handleValidatedTextInputChange}
              />
              <FormHelperText>
                <HelperText id="age2-helper">
                  <HelperTextItem variant={validated}>
                    {validated === 'error' ? 'Age must be a number' : 'Enter age'}
                  </HelperTextItem>
                </HelperText>
              </FormHelperText>
            </FormGroup>
          </FormSection>
          <FormSection>
            <FormGroup hasNoPaddingTop id="formgroup-checkbox" label="Subscribe" fieldId="subscribe">
              <Checkbox
                id="subscribe"
                name="subscribe"
                label="Mailing list"
                isChecked={checkboxChecked}
                onChange={this.handleCheckboxChange}
              />
            </FormGroup>
          </FormSection>
        </Form>
      </>
    );
  }
}
