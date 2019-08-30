import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormProps,
  TextInput,
  Select,
  SelectOption,
  SelectVariant
} from '@patternfly/react-core';

export interface FormState {
  value: string;
  isValid: boolean;
  isExpanded: boolean;
  selected: string[];
}

export class FormDemo extends Component<FormProps, FormState> {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Five',
      isValid: false,
      isExpanded: false,
      selected: []
    };
  }
  handleTextInputChange = (value: string) => {
    this.setState({ value, isValid: /^\d+$/.test(value) });
  }
  onToggle = (isExpanded) => {
    this.setState({
      isExpanded
    });
  }
  onSelect = (event, selection) => {
    const { selected } = this.state;
    if (selected.includes(selection)) {
      this.setState(
        (prevState) => ({ selected: prevState.selected.filter((item) => item !== selection) }),
        () => console.log('selections: ', this.state.selected)
      );
    } else {
      this.setState(
        (prevState) => ({ selected: [...prevState.selected, selection] }),
        () => console.log('selections: ', this.state.selected)
      );
    }
  }
  clearSelection = () => {
    this.setState({
      selected: [],
      isExpanded: false,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { value, isValid, isExpanded, selected } = this.state;
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
            label="Age:"
            type="number"
            helperText="Please write your age"
            helperTextInvalid="Age has to be a number"
            fieldId="age"
            isValid={isValid}
          >
            <TextInput
              isValid={isValid}
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
                  isExpanded={isExpanded}
                  ariaLabelledBy={titleId}
                  placeholderText="Select a state"
              >
                  {options.map((option, index) => (
                      <SelectOption
                          isDisabled={option.disabled}
                          key={index}
                          value={option.value}
                      />
                  ))}
              </Select>
              </Form>
          </div>
      </div>
    </React.Fragment>
    );
  }
}
