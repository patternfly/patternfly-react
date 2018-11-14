import React from 'react';
import { Form, FormGroup, TextInput, Badge } from '@patternfly/react-core';

class VariousLabelsForm extends React.Component {
  state = {
    value1: '',
    value2: ''
  };

  handleTextInputChange1 = value1 => {
    this.setState({ value1 });
  };

  handleTextInputChange2 = value2 => {
    this.setState({ value2 });
  };

  render() {
    const d = new Date();
    const renderHelperText = () => `This is a function from ${String(d.getSeconds())}th second of this minute!`;
    const { value1, value2 } = this.state;

    return (
      <Form>
        <FormGroup label={renderHelperText()} helperText="This is a helper text" fieldId="label-function">
          <TextInput value={value1} onChange={this.handleTextInputChange1} id="label-function" />
        </FormGroup>
        <FormGroup label={<h1>This is a just header</h1>} helperText={<Badge>Badge here!</Badge>} fieldId="object-id">
          <TextInput value={value2} onChange={this.handleTextInputChange2} aria-label="Object" id="object-id" />
        </FormGroup>
      </Form>
    );
  }
}

export default VariousLabelsForm;
