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
  it('should render with pf-m-wrap when rowWrap is set to wrap', () => {
    render(
      <ToolbarItem data-testid="toolbaritem" rowWrap={{ default: 'wrap' }}>
        Test
      </ToolbarItem>
    );
    expect(screen.getByTestId('toolbaritem')).toHaveClass('pf-m-wrap');
  });
  it('should render with pf-m-nowrap when rowWrap is set to nowrap', () => {
    render(
      <ToolbarItem data-testid="toolbaritem" rowWrap={{ default: 'nowrap' }}>
        Test
      </ToolbarItem>
    );
    expect(screen.getByTestId('toolbaritem')).toHaveClass('pf-m-nowrap');
  });
});
