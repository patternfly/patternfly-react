import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToolbarItem } from '../ToolbarItem';

describe('ToolbarItem', () => {
  it('should render with pf-m-overflow-container when isOverflowContainer is set', () => {
    render(
      <ToolbarItem data-testid="toolbaritem" isOverflowContainer>
        Test
      </ToolbarItem>
    );
    expect(screen.getByTestId('toolbaritem')).toHaveClass('pf-m-overflow-container');
  });
});
