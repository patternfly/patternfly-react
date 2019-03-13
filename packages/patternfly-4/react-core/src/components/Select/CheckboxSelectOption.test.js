import React from 'react';
import { mount } from 'enzyme';
import CheckboxSelectOption from './CheckboxSelectOption';

describe('checkbox select options', () => {
  test('renders with value parameter successfully', () => {
    const view = mount(<CheckboxSelectOption value="test" sendRef={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  describe('hover', () => {
    test('renders with checked successfully', () => {
      const view = mount(<CheckboxSelectOption isChecked value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = mount(<CheckboxSelectOption isDisabled value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });
});
