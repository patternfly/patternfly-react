import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';
import SelectOption from './SelectOption';
import SelectOptionGroup from './SelectOptionGroup';

const props = {
  options: [
    { value: 'please choose', label: 'Please Choose', disabled: true },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: true }
  ],
  value: 'mrs'
};

const groupedProps = {
  groups: [
    {
      groupLabel: 'Group1',
      disabled: false,
      options: [
        { value: '1', label: 'The First Option', disabled: false },
        { value: '2', label: 'Second option is selected by default', disabled: false }
      ]
    },
    {
      groupLabel: 'Group2',
      disabled: false,
      options: [
        { value: '3', label: 'The Third Option', disabled: false },
        { value: '4', label: 'The Fourth option', disabled: false }
      ]
    },
    {
      groupLabel: 'Group3',
      disabled: true,
      options: [
        { value: '5', label: 'The Fifth Option', disabled: false },
        { value: '6', label: 'The Sixth option', disabled: false }
      ]
    }
  ],
  value: '2'
};

test('Simple Select input', () => {
  const view = shallow(
    <Select value={props.value} aria-label="simple Select">
      {props.options.map((option, index) => (
        <SelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
      ))}
    </Select>
  );
  expect(view).toMatchSnapshot();
});

test('Grouped Select input', () => {
  const view = shallow(
    <Select value={groupedProps.value} aria-label=" grouped Select">
      {groupedProps.groups.map((group, index) => (
        <SelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>
          {group.options.map((option, i) => (
            <SelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label} />
          ))}
        </SelectOptionGroup>
      ))}
    </Select>
  );
  expect(view).toMatchSnapshot();
});

test('Disabled Select input ', () => {
  const view = shallow(
    <Select isDisabled aria-label="disabled  Select">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
});

test('Select input with aria-label does not generate console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(
    <Select aria-label="Select with aria-label">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});

test('Select input with id does not generate console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(
    <Select id="id">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});

test('Select input with no aria-label or id generates console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(
    <Select>
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});

test('invalid Select input', () => {
  const view = shallow(
    <Select isValid={false} aria-label="invalid Select">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
});

test('required Select input', () => {
  const view = shallow(
    <Select required aria-label="required Select">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  expect(view).toMatchSnapshot();
});

test('Select passes value and event to onChange handler', () => {
  const myMock = jest.fn();
  const newValue = 1;
  const event = {
    currentTarget: { value: newValue }
  };
  const view = shallow(
    <Select onChange={myMock} aria-label="onchange Select">
      <SelectOption key={1} value={props.options[1].value} label={props.options[1].label} />
    </Select>
  );
  view.find('select').simulate('change', event);
  expect(myMock).toBeCalledWith(newValue, event);
});
