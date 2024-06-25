import React, { Component } from 'react';
import {
  Divider,
  Form,
  FormGroup,
  FormGroupLabelHelp,
  FormProps,
  FormSection,
  TextInput,
  Checkbox,
  Popover,
  ValidatedOptions,
  HelperText,
  HelperTextItem,
  FormHelperText,
  Select,
  SelectList,
  SelectOption,
  MenuToggle
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export interface FormState {
  value: string;
  isValid: boolean;
  isOpen: boolean;
  selected: string[];
  validatedValue: string;
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.warning | ValidatedOptions.success;
  checkboxChecked: boolean;
}

export class FormDemo extends Component<FormProps, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'Five',
      isValid: false,
      isOpen: false,
      selected: [],
      validatedValue: '',
      validated: ValidatedOptions.default,
      checkboxChecked: false
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  labelHelpRef: React.RefObject<HTMLSpanElement> = React.createRef();

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
  onToggle = (_event: any) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string | number | undefined) => {
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
    const { value, isValid, isOpen, selected, validatedValue, validated, checkboxChecked } = this.state;
    const titleId = 'multi-typeahead-select-id';
    const options = [
      { value: 'Alabama', disabled: false },
      { value: 'Florida', disabled: false },
      { value: 'New Jersey', disabled: false },
      { value: 'New Mexico', disabled: false },
      { value: 'New York', disabled: false },
      { value: 'North Carolina', disabled: false }
    ];

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
                headerContent={<div>The age of a person</div>}
                bodyContent={
                  <div>
                    Age is typically measured in years. It is also common to measure age in months for newborns, e.g. 18
                    months.
                  </div>
                }
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
            <span id={titleId} hidden>
              Select a state
            </span>
            <Select
              aria-label="Select a state"
              onSelect={this.onSelect}
              selected={selected}
              isOpen={isOpen}
              aria-labelledby={titleId}
              toggle={(toggleRef: any) => (
                <MenuToggle ref={toggleRef} onClick={this.onToggle} isExpanded={isOpen}>
                  {isOpen ? 'Expanded' : 'Collapsed'}
                </MenuToggle>
              )}
            >
              <SelectList>
                {options.map((option, index) => (
                  <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                ))}
              </SelectList>
            </Select>
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
