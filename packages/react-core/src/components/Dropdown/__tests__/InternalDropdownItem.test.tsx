import React from 'react';
import { render, screen } from '@testing-library/react';
import { InternalDropdownItem } from '../InternalDropdownItem';

describe('InternalDropdownItem', () => {
  describe('dropdown items', () => {
    test('a', () => {
      render(<InternalDropdownItem>Something</InternalDropdownItem>);
      expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
    });

    test('button', () => {
      render(<InternalDropdownItem component="button">Something</InternalDropdownItem>);
      expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
    });

    describe('hover', () => {
      test('a', () => {
        render(<InternalDropdownItem isHovered>Something</InternalDropdownItem>);
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });

      test('button', () => {
        render(
          <InternalDropdownItem isHovered component="button">
            Something
          </InternalDropdownItem>
        );
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });
    });

    describe('disabled', () => {
      test('a', () => {
        render(<InternalDropdownItem isDisabled>Something</InternalDropdownItem>);
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });

      test('button', () => {
        render(
          <InternalDropdownItem isDisabled component="button">
            Something
          </InternalDropdownItem>
        );
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });
    });

    describe('aria-disabled', () => {
      test('a', () => {
        render(<InternalDropdownItem isAriaDisabled>Something</InternalDropdownItem>);
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });

      test('button', () => {
        render(
          <InternalDropdownItem isAriaDisabled component="button">
            Something
          </InternalDropdownItem>
        );
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });
    });

    describe('description', () => {
      test('a', () => {
        render(<InternalDropdownItem description="Something's link description">Something</InternalDropdownItem>);
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });

      test('button', () => {
        render(
          <InternalDropdownItem description="Something's button description" component="button">
            Something
          </InternalDropdownItem>
        );
        expect(screen.getByText('Something').outerHTML).toMatchSnapshot();
      });
    });
  });
});
