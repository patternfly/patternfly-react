import React from 'react';
import { shallow } from 'enzyme';
import { SelectOption } from './SelectOption';

describe('select options', () => {
  test('renders with value parameter successfully', () => {
    const view = shallow(<SelectOption value="test" sendRef={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = shallow(<SelectOption isDisabled value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('is selected', () => {
    test('renders selected successfully', () => {
      const view = shallow(<SelectOption isSelected value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('checked', () => {
    test('renders with checked successfully', () => {
      const view = shallow(<SelectOption isChecked value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });
});
