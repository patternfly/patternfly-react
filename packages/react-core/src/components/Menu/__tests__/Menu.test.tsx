import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Menu', () => {
  test('should render Menu successfully', () => {
    render(
      <Menu activeItemId={0} onSelect={jest.fn()}>
        content
      </Menu>
    );
    expect(screen.getByText('content').outerHTML).toMatchSnapshot();
  });

  describe('with isPlain', () => {
    test('should render Menu with plain styles applied', () => {
      render(
        <Menu activeItemId={0} onSelect={jest.fn()} isPlain>
          content
        </Menu>
      );
      expect(screen.getByText('content').className).toContain('pf-m-plain');
    });
  });

  describe('with isScrollable', () => {
    test('should render Menu with scrollable styles applied', () => {
      render(
        <Menu activeItemId={0} onSelect={jest.fn()} isScrollable>
          content
        </Menu>
      );
      expect(screen.getByText('content').className).toContain('pf-m-scrollable');
    });
  });

  describe('with isNavFlyout', () => {
    test('should render Menu with nav flyout styles applied', () => {
      render(
        <Menu activeItemId={0} onSelect={jest.fn()} isNavFlyout>
          content
        </Menu>
      );
      expect(screen.getByText('content').className).toContain('pf-m-nav');
    });
  });
});
