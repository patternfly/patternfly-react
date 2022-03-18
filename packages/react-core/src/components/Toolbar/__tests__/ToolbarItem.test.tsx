import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToolbarItem } from '../ToolbarItem';

describe('ToolbarItem', () => {
  it('should map width breakpoints', () => {
    const widths = {
      default: '100px',
      sm: '80px',
      md: '150px',
      lg: '200px',
      xl: '250px',
      '2xl': '300px'
    };

    render(<ToolbarItem widths={widths}>Test</ToolbarItem>);
    expect(screen.getByText('Test').outerHTML).toMatchSnapshot();
  });
});
