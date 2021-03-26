import React, { Component } from 'react';
import {
  Form,
  FormFieldGroup,
  FormFieldGroupExpandable,
  FormFieldGroupHeader,
  FormGroup,
  FormProps,
  TextInput,
  Button
} from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/js/icons/trash-icon';

export interface FormFieldGroupState {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
}

export class FormFieldGroupDemo extends Component<FormProps, FormFieldGroupState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: ''
    };
  }

  handleTextInputChange = (value: any) => {
    this.setState(value);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { value1, value2, value3, value4, value5, value6 } = this.state;
    return (
      <Form id="form-demo-1">
        <FormFieldGroupExpandable
          id="fieldgroup1"
          isExpanded
          toggleAriaLabel="Details"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Expandable Field group 1', id: 'field-group1-title-text-id' }}
              titleDescription="Expandable field group 1 description text."
              actions={
                <Button variant="plain" aria-label="Remove">
                  <TrashIcon />
                </Button>
              }
            />
          }
        >
          <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-group1-field-label1">
            <TextInput
              isRequired
              id="form-expandable-field-group1-field-label1"
              name="form-expandable-field-group1-field-label1"
              value={value1}
              onChange={value => {
                this.handleTextInputChange({ value1: value });
              }}
            />
          </FormGroup>
          <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-group1-field-label2">
            <TextInput
              isRequired
              id="form-expandable-field-group1-field-label2"
              name="form-expandable-field-group1-field-label2"
              value={value2}
              onChange={value => {
                this.handleTextInputChange({ value2: value });
              }}
            />
          </FormGroup>
        </FormFieldGroupExpandable>
        <FormFieldGroup
          id="fieldgroup2"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Field group 2 (non-expandable)', id: 'field-group1-title-text-id' }}
              titleDescription="Non expandable field group 2 description text."
            />
          }
        >
          <FormGroup label="Label 1" isRequired fieldId="form-field-groups2-label1">
            <TextInput
              isRequired
              id="form-field-groups2-label1"
              name="form-field-groups2-label1"
              value={value3}
              onChange={value => {
                this.handleTextInputChange({ value3: value });
              }}
            />
          </FormGroup>
          <FormGroup label="Label 2" isRequired fieldId="form-field-groups2-label2">
            <TextInput
              isRequired
              id="form-field-groups2-label2"
              name="form-field-groups2-label2"
              value={value4}
              onChange={value => {
                this.handleTextInputChange({ value4: value });
              }}
            />
          </FormGroup>
        </FormFieldGroup>
        <FormFieldGroupExpandable
          id="fieldgroup3"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Expandable Field group 3', id: 'field-group3-title-text-id' }}
              titleDescription="Expandable field group 3 description text."
              actions={
                <Button variant="plain" aria-label="Remove">
                  <TrashIcon />
                </Button>
              }
            />
          }
        >
          <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-group3-field-label1">
            <TextInput
              isRequired
              id="form-expandable-field-group3-field-label1"
              name="form-expandable-field-group3-field-label1"
              value={value5}
              onChange={value => {
                this.handleTextInputChange({ value5: value });
              }}
            />
          </FormGroup>
          <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-group3-field-label2">
            <TextInput
              isRequired
              id="form-expandable-field-group3-field-label2"
              name="form-expandable-field-group3-field-label2"
              value={value6}
              onChange={value => {
                this.handleTextInputChange({ value6: value });
              }}
            />
          </FormGroup>
        </FormFieldGroupExpandable>
      </Form>
    );
  }
}
