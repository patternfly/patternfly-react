import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { InternalDropdownItem } from '../InternalDropdownItem';
import { DropdownSeparator } from '../DropdownSeparator';

describe('dropdown items', () => {
  test('a', () => {
    const view = render(<InternalDropdownItem>Something</InternalDropdownItem>);
    expect(view.container).toMatchSnapshot();
  });

  test('button', () => {
    const view = render(<InternalDropdownItem component="button">Something</InternalDropdownItem>);
    expect(view.container).toMatchSnapshot();
  });

  test('separator', () => {
    const view = shallow(<DropdownSeparator />);
    expect(view).toMatchSnapshot();
  });

  describe('hover', () => {
    test('a', () => {
      const view = render(<InternalDropdownItem isHovered>Something</InternalDropdownItem>);
      expect(view.container).toMatchSnapshot();
    });
    test('button', () => {
      const view = render(
        <InternalDropdownItem isHovered component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view.container).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    test('a', () => {
      const view = render(<InternalDropdownItem isDisabled>Something</InternalDropdownItem>);
      expect(view.container).toMatchSnapshot();
    });
    test('button', () => {
      const view = render(
        <InternalDropdownItem isDisabled component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view.container).toMatchSnapshot();
    });
  });

  describe('aria-disabled', () => {
    test('a', () => {
      const view = render(<InternalDropdownItem isAriaDisabled>Something</InternalDropdownItem>);
      expect(view.container).toMatchSnapshot();
    });
    test('button', () => {
      const view = render(
        <InternalDropdownItem isAriaDisabled component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view.container).toMatchSnapshot();
    });
  });

  describe('description', () => {
    test('a', () => {
      const view = render(
        <InternalDropdownItem description="Something's link description">Something</InternalDropdownItem>
      );
      expect(view.container).toMatchSnapshot();
    });
    test('button', () => {
      const view = render(
        <InternalDropdownItem description="Something's button description" component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view.container).toMatchSnapshot();
    });
  });
});
