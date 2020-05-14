import React from 'react';
import { shallow } from 'enzyme';
import { TableTextInput } from './TableTextInput';

const props = {
  defaultValue: 'test',
  autoFocus: true,
  onBlur: jest.fn()
};

test('simple table text input', () => {
  const view = shallow(<TableTextInput aria-label="simple text input" />);
  expect(view).toMatchSnapshot();
});

test('focused table text input', () => {
  const view = shallow(<TableTextInput {...props} aria-label="focused text input" />);
  expect(view).toMatchSnapshot();
});
