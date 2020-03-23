import { Radio, RadioProps } from '@patternfly/react-core';
import React, { Component } from 'react';
export class RadioDemo extends Component {
  state = {
    value: '4'
  };

  handleChange = (_checked: boolean, event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    this.setState({ value });
  };

  myUncheckedControlledRadioProps: RadioProps = {
    id: 'radio-1',
    label: 'Controlled radio 1',
    name: 'controlled',
    value: '3'
  };
  myCheckedControlledRadioProps: RadioProps = {
    id: 'radio-2',
    label: 'Controlled radio 2',
    name: 'controlled',
    value: '4'
  };
  myFirstUncontrolledRadioProps: RadioProps = {
    id: 'radio-3',
    label: 'Uncontrolled radio 1',
    name: 'uncontrolled'
  };
  mySecondUncontrolledRadioProps: RadioProps = {
    id: 'radio-4',
    label: 'Uncontrolled radio 2',
    name: 'uncontrolled'
  };
  myCheckedDisabledRadioProps: RadioProps = {
    id: 'radio-5',
    defaultChecked: true,
    label: 'Disabled checked radio example',
    isDisabled: true,
    name: 'disabled-1'
  };
  myUncheckedDisabledRadioProps: RadioProps = {
    id: 'radio-6',
    label: 'Disabled unchecked radio example',
    isDisabled: true,
    name: 'disabled-2'
  };
  myUncheckedDescriptionRadioProps: RadioProps = {
    id: 'radio-7',
    label: 'Unchecked radio with description example',
    description: (
      <span>
        This is a radio <strong>description</strong>
      </span>
    ),
    name: 'disabled-2'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Radio
          id={this.myUncheckedControlledRadioProps.id}
          isChecked={this.state.value === '3'}
          label={this.myUncheckedControlledRadioProps.label}
          name={this.myUncheckedControlledRadioProps.name}
          onChange={this.handleChange}
          value={this.myUncheckedControlledRadioProps.value}
        />
        <Radio
          id={this.myCheckedControlledRadioProps.id}
          isChecked={this.state.value === '4'}
          label={this.myCheckedControlledRadioProps.label}
          name={this.myCheckedControlledRadioProps.name}
          onChange={this.handleChange}
          value={this.myCheckedControlledRadioProps.value}
        />
        <Radio
          id={this.myFirstUncontrolledRadioProps.id}
          label={this.myFirstUncontrolledRadioProps.label}
          name={this.myFirstUncontrolledRadioProps.name}
        />
        <Radio
          id={this.mySecondUncontrolledRadioProps.id}
          label={this.mySecondUncontrolledRadioProps.label}
          name={this.mySecondUncontrolledRadioProps.name}
        />
        <Radio
          id={this.myCheckedDisabledRadioProps.id}
          defaultChecked={this.myCheckedDisabledRadioProps.defaultChecked}
          isDisabled={this.myCheckedDisabledRadioProps.isDisabled}
          label={this.myCheckedDisabledRadioProps.label}
          name={this.myCheckedDisabledRadioProps.name}
        />
        <Radio
          id={this.myUncheckedDisabledRadioProps.id}
          isDisabled={this.myUncheckedDisabledRadioProps.isDisabled}
          label={this.myUncheckedDisabledRadioProps.label}
          name={this.myUncheckedDisabledRadioProps.name}
        />
        <Radio
          id={this.myUncheckedDescriptionRadioProps.id}
          label={this.myUncheckedDescriptionRadioProps.label}
          name={this.myUncheckedDescriptionRadioProps.name}
          description={this.myUncheckedDescriptionRadioProps.description}
        />
      </React.Fragment>
    );
  }
}

export default RadioDemo;
