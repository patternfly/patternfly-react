import { Radio, RadioProps, Tooltip } from '@patternfly/react-core';
import React, { Component } from 'react';
export class RadioDemo extends Component {
  state = {
    value: '4'
  };

  handleChange = (_, event) => {
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
  interactiveEventHandler = () => {
    window.location.href = 'https://github.com/patternfly/patternfly-react';
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

        <Radio
          id="inoperable-radio-1"
          name="inoperable-1"
          description="A basic inoperable radio input"
          isInoperable
          label="Inoperable radio example 1"
          onChange={this.interactiveEventHandler}
          onClick={this.interactiveEventHandler}
          onKeyPress={this.interactiveEventHandler}
        />

        <Tooltip content="This tooltip content wraps the entire component">
          <Radio
            id="inoperable-radio-2"
            name="inoperable-2"
            isInoperable
            label="Inoperable radio example 2"
            description="This radio is inoperable and is encased within a Tooltip component"
            onChange={this.interactiveEventHandler}
            onClick={this.interactiveEventHandler}
            onKeyPress={this.interactiveEventHandler}
          />
        </Tooltip>

        <Radio
          id="inoperable-radio-3"
          name="inoperable-3"
          isInoperable
          label="Inoperable radio example 3"
          onChange={this.interactiveEventHandler}
          onClick={this.interactiveEventHandler}
          onKeyPress={this.interactiveEventHandler}
          description="This radio is inoperable and label wrapped"
          isLabelWrapped
        />

        <Tooltip content="This tooltip content wraps the entire component">
          <Radio
            id="inoperable-radio-4"
            name="inoperable-4"
            isInoperable
            isLabelWrapped
            label="Inoperable radio example 4"
            description="This radio is inoperable and label wrapped and is encased within a Tooltip component"
            onChange={this.interactiveEventHandler}
            onClick={this.interactiveEventHandler}
            onKeyPress={this.interactiveEventHandler}
          />
        </Tooltip>

        <Radio
          id="inoperable-radio-5"
          name="inoperable-5"
          isLabelWrapped
          isInoperable
          tooltip={{
            component: Tooltip,
            props: {
              children: null,
              content: 'This tooltip content wraps only the radio input element',
              position: 'left'
            }
          }}
          label="Inoperable radio example 5"
          description="This Radio is inoperable and label wrapped with a nested tooltip"
        />

        <Radio
          id="inoperable-radio-6"
          name="inoperable-6"
          isInoperable
          tooltip={{
            component: Tooltip,
            props: {
              children: null,
              content: 'This tooltip content wraps only the radio input element',
              position: 'left'
            }
          }}
          label="Inoperable radio example 6"
          description="This Radio is inoperable with a nested tooltip"
        />

        <Radio
          id="inoperable-radio-7"
          name="inoperable-7"
          isInoperable
          isLabelWrapped
          tabIndex={6}
          tooltip={{
            component: Tooltip,
            props: {
              children: null,
              content:
                'This tooltip content wraps only the radio input element and is explicitly focused as the second element of the page',
              position: 'left'
            }
          }}
          label="Inoperable radio example 7"
          description="This Radio is inoperable and label wrapped with positive tabindex"
        />

        <Tooltip content="This tooltip content wraps the entire Radio component and is explicitly focused as the first element of the page">
          <Radio
            id="inoperable-radio-8"
            name="inoperable-8"
            isInoperable
            tabIndex={3}
            label="Inoperable radio example 8"
            description="This Radio is inoperable with positive tabindex"
          />
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default RadioDemo;
