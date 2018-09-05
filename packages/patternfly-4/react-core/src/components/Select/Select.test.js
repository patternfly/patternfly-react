import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

const props = {
  options: [
    { value: 'please choose', label: 'Please Choose', disabled: true },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false }
  ],
  value: 'mrs',
  getLabel: jest.fn(),
  getValue: jest.fn(),
  getOptionDisabled: jest.fn()
};

const groupedProps = {
  options: [
    {
      groupLabel: 'Group1',
      options: [
        { value: '1', label: 'The First Option' },
        { value: '2', label: 'Second option is selected by default' }
      ]
    },
    {
      groupLabel: 'Group2',
      options: [{ value: '3', label: 'The Third Option' }, { value: '4', label: 'The Fourth option' }]
    }
  ],
  value: '2',
  isGrouped: true,
  getGroupLabel: jest.fn(),
  getGroupOptions: jest.fn(),
  getLabel: jest.fn(),
  getValue: jest.fn(),
  getOptionDisabled: jest.fn()
};

test('Simple Select input', () => {
  const view = shallow(<Select {...props} aria-label="simple Select" />);
  expect(view).toMatchSnapshot();
  expect(props.getLabel).toBeCalled();
  expect(props.getValue).toBeCalled();
  expect(props.getOptionDisabled).toBeCalled();
});

test('Grouped Select input', () => {
  const view = shallow(<Select {...groupedProps} aria-label=" grouped Select" />);
  expect(view).toMatchSnapshot();
  expect(groupedProps.getGroupLabel).toBeCalled();
  expect(groupedProps.getGroupOptions).toBeCalled();
});

test('Disabled Select input ', () => {
  const view = shallow(<Select {...props} isDisabled aria-label="disabled  Select" />);
  expect(view).toMatchSnapshot();
  expect(props.getLabel).toBeCalled();
  expect(props.getOptionDisabled).toBeCalled();
});

test('Select input with only aria-label does not generate console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(<Select aria-label="no props Select" />);
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});

test('Select input with only id does not generate console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(<Select id="id" />);
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});

test('Select input with no aria-label or id generates console error', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  const view = shallow(<Select />);
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});

test('invalid Select input', () => {
  const view = shallow(<Select {...props} isValid={false} aria-label="invalid select" />);
  expect(view).toMatchSnapshot();
});

test('required Select input', () => {
  const view = shallow(<Select {...props} required aria-label="invalid select" />);
  expect(view).toMatchSnapshot();
});

test('Select passes value and event to onChange handler', () => {
  const myMock = jest.fn();
  const newValue = 1;
  const event = {
    currentTarget: { value: newValue }
  };
  const view = shallow(<Select {...props} onChange={myMock} />);
  view.find('select').simulate('change', event);
  expect(myMock).toBeCalledWith(newValue, event);
});
