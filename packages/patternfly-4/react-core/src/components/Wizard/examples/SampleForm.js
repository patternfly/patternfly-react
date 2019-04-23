import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

const propTypes = {
  formValue: PropTypes.string,
  isFormValid: PropTypes.bool,
  goToStep: PropTypes.func,
  currentStep: PropTypes.number
};

const defaultProps = {
  formValue: '',
  isFormValid: false,
  goToStep: null,
  currentStep: null
};

class SampleForm extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    value: this.props.formValue,
    isValid: this.props.isFormValid
  };

  handleTextInputChange = value => {
    const isValid = /^\d+$/.test(value);
    this.setState({ value, isValid });
    this.props.onChange && this.props.onChange(isValid, value);
  };

  render() {
    const { value, isValid } = this.state;
    const { formValue, isFormValid, goToStep, currentStep } = this.props;

    return (
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
    );
  }
}

export default SampleForm;
