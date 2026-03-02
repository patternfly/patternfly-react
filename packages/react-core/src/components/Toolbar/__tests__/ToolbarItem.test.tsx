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

  describe('ToobarItem rowWrap', () => {
    const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];

    describe.each(bps)(`rowWrap at various breakpoints`, (bp) => {
      it(`should render with pf-m-wrap when rowWrap is set to wrap at ${bp}`, () => {
        render(
          <ToolbarItem data-testid="toolbaritem" rowWrap={{ [bp]: 'wrap' }}>
            Test
          </ToolbarItem>
        );
        const bpWrapClass = bp === 'default' ? 'pf-m-wrap' : `pf-m-wrap-on-${bp}`;

        expect(screen.getByTestId('toolbaritem')).toHaveClass(bpWrapClass);
      });

      it(`should render with pf-m-nowrap when rowWrap is set to nowrap at ${bp}`, () => {
        render(
          <ToolbarItem data-testid="toolbaritem" rowWrap={{ [bp]: 'nowrap' }}>
            Test
          </ToolbarItem>
        );
        const bpNoWrapClass = bp === 'default' ? 'pf-m-nowrap' : `pf-m-nowrap-on-${bp}`;
        expect(screen.getByTestId('toolbaritem')).toHaveClass(bpNoWrapClass);
      });
    });
  });

  describe('ToolbarItem flexGrow', () => {
    const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];

    describe.each(bps)(`flexGrow at various breakpoints`, (bp) => {
      it(`should render with pf-m-flex-grow when flexGrow is set at ${bp}`, () => {
        render(
          <ToolbarItem data-testid="toolbaritem" flexGrow={{ [bp]: 'flexGrow' }}>
            Test
          </ToolbarItem>
        );
        const bpFlexGrowClass = bp === 'default' ? 'pf-m-flex-grow' : `pf-m-flex-grow-on-${bp}`;
        expect(screen.getByTestId('toolbaritem')).toHaveClass(bpFlexGrowClass);
      });
    });
  });

  describe('ToolbarItem widths', () => {
    it('should apply width CSS variable when widths prop is set', () => {
      render(
        <ToolbarItem data-testid="toolbaritem" widths={{ default: '200px' }}>
          Test
        </ToolbarItem>
      );
      const item = screen.getByTestId('toolbaritem');
      expect(item).toHaveStyle('--pf-v6-c-toolbar__item--Width: 200px');
    });

    it('should apply responsive width CSS variables when widths prop has breakpoint values', () => {
      render(
        <ToolbarItem data-testid="toolbaritem" widths={{ default: '100px', md: '200px', xl: '300px' }}>
          Test
        </ToolbarItem>
      );
      const item = screen.getByTestId('toolbaritem');
      expect(item).toHaveStyle({
        '--pf-v6-c-toolbar__item--Width': '100px',
        '--pf-v6-c-toolbar__item--Width-on-md': '200px',
        '--pf-v6-c-toolbar__item--Width-on-xl': '300px'
      });
    });
  });
});
