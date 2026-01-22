import { render, screen } from '@testing-library/react';
import { ToolbarItem } from '../ToolbarItem';
import toolbarItemWidth from '@patternfly/react-tokens/dist/esm/c_toolbar__item_Width';

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

  describe('ToolbarItem widths', () => {
    const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];
    const widths = ['100px', '3rem', '50%', '200px'];

    describe.each(bps)('widths at various breakpoints', (bp) => {
      it.each(widths)(`applies width CSS var when widths is set to %s at ${bp}`, (width) => {
        render(
          <ToolbarItem data-testid="toolbaritem" widths={{ [bp]: width }}>
            Test
          </ToolbarItem>
        );
        const styleAttr = screen.getByTestId('toolbaritem').getAttribute('style') || '';
        const cssVarName = `${toolbarItemWidth.name}${bp === 'default' ? '' : `-on-${bp}`}`;
        expect(styleAttr).toContain(cssVarName);
      });
    });
  });

  describe('ToolbarItem flexGrow', () => {
    const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];

    describe.each(bps)('flexGrow at various breakpoints', (bp) => {
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
});
