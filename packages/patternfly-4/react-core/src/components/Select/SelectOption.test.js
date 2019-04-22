import React from 'react';
import { shallow } from 'enzyme';
import SelectOption from './SelectOption';

describe('select options', () => {
  test('renders with value parameter successfully', () => {
    const view = shallow(<SelectOption value="test" sendRef={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  describe('hover', () => {
    test('renders with hover successfully', () => {
      const view = shallow(<SelectOption isHovered value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
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
});
