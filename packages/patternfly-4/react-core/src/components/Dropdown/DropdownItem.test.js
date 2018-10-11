import React from 'react';
import { shallow } from 'enzyme';
import DropdownItem from './DropdownItem';
import DropdownSeparator from './Separator';

describe('dropdown items', () => {
  test('a', () => {
    const view = shallow(<DropdownItem>Something</DropdownItem>);
    expect(view).toMatchSnapshot();
  });

  test('button', () => {
    const view = shallow(<DropdownItem component="button">Something</DropdownItem>);
    expect(view).toMatchSnapshot();
  });

  test('separator', () => {
    const view = shallow(<DropdownSeparator />);
    expect(view).toMatchSnapshot();
  });

  test('sets focusedItemRef on focus', () => {
    const setFocusedItemRef = jest.fn();
    const stopPropagation = jest.fn();
    const view = shallow(<DropdownItem setFocusedItemRef={setFocusedItemRef}>Something</DropdownItem>);

    view.find('a').simulate('focus', { stopPropagation });

    expect(stopPropagation).toHaveBeenCalled();
    expect(setFocusedItemRef).toHaveBeenCalled();
  });

  describe('hover', () => {
    test('a', () => {
      const view = shallow(<DropdownItem isHovered>Something</DropdownItem>);
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(
        <DropdownItem isHovered component="button">
          Something
        </DropdownItem>
      );
      expect(view).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    test('a', () => {
      const view = shallow(<DropdownItem isDisabled>Something</DropdownItem>);
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(
        <DropdownItem isDisabled component="button">
          Something
        </DropdownItem>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
