import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormProps,
  TextInput,
  Checkbox,
  Popover,
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
  ValidatedOptions
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

export interface FormState {
  value: string;
  isValid: boolean;
  isOpen: boolean;
  selected: string[];
  validatedValue: string;
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.success;
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
      validated: ValidatedOptions.default
    };
  }
  handleTextInputChange = (value: string) => {
    this.setState({ value, isValid: /^\d+$/.test(value) });
  };
  handleValidatedTextInputChange = (value: string) => {
    const validated = /^\d+$/.test(value) ? ValidatedOptions.success : ValidatedOptions.error;
    this.setState({ validatedValue: value, validated });
  };
  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };
  onSelect = (event: React.SyntheticEvent, selection: string | SelectOptionObject) => {
    const { selected } = this.state;
    if (selected.includes(selection.toString())) {
      this.setState(
        prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
        // eslint-disable-next-line no-console
        () => console.log('selections: ', this.state.selected)
      );
    } else {
      this.setState(
        prevState => ({ selected: [...prevState.selected, selection.toString()] }),
        // eslint-disable-next-line no-console
        () => console.log('selections: ', this.state.selected)
      );
    }
  };
  clearSelection = () => {
    this.setState({
      selected: [],
      isOpen: false
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { value, isValid, isOpen, selected, validatedValue, validated } = this.state;
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
      <React.Fragment>
        <Form>
          <FormGroup
            label="Age"
            labelIcon={
              <Popover
                headerContent={<div>The age of a person</div>}
                bodyContent={<div>Age is typically measured in years.</div>}
              >
                <button
                  id="helper-text-target"
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
            type="number"
            helperText="Please write your age"
            helperTextInvalid="Age has to be a number"
            helperTextInvalidIcon={<ExclamationCircleIcon />}
            fieldId="age"
            validated={isValid ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <TextInput
              validated={isValid ? ValidatedOptions.default : ValidatedOptions.error}
              value={value}
              id="age"
              aria-describedby="age-helper"
              onChange={this.handleTextInputChange}
            />
          </FormGroup>
        </Form>
        <div>
          <div>
            <Form>
              <span id={titleId} hidden>
                Select a state
              </span>
              <Select
                id={this.props.id}
                variant={SelectVariant.typeaheadMulti}
                aria-label="Select a state"
                onToggle={this.onToggle}
                onSelect={this.onSelect}
                onClear={this.clearSelection}
                selections={selected}
                isOpen={isOpen}
                aria-labelledby={titleId}
                placeholderText="Select a state"
              >
                {options.map((option, index) => (
                  <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                ))}
              </Select>
              <FormGroup
                id="formgroup-validated"
                label="Validated Age"
                type="number"
                helperText="Enter age"
                helperTextInvalid="Age must be a number"
                fieldId="age2"
                validated={validated}
              >
                <TextInput
                  validated={validated}
                  value={validatedValue}
                  id="age-validated"
                  aria-describedby="age-helper-validated"
                  onChange={this.handleValidatedTextInputChange}
                />
              </FormGroup>
              <FormGroup hasNoPaddingTop id="formgroup-checkbox" label="Subscribe" fieldId="subscribe">
                <Checkbox id="subscribe" label="Mailing list" />
              </FormGroup>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
