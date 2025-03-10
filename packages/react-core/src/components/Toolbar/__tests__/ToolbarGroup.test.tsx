import { render, screen } from '@testing-library/react';
import { ToolbarGroup } from '../ToolbarGroup';

describe('ToolbarGroup', () => {
  it('should render with pf-m-overflow-container when isOverflowContainer is set', () => {
    render(
      <ToolbarGroup data-testid="toolbargroup" isOverflowContainer>
        Test
      </ToolbarGroup>
    );
    expect(screen.getByTestId('toolbargroup')).toHaveClass('pf-m-overflow-container');
  });

  describe('ToobarGroup rowWrap', () => {
    const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];

    describe.each(bps)(`rowWrap at various breakpoints`, (bp) => {
      it(`should render with pf-m-wrap when rowWrap is set to wrap at ${bp}`, () => {
        render(
          <ToolbarGroup data-testid="toolbargroup" rowWrap={{ [bp]: 'wrap' }}>
            Test
          </ToolbarGroup>
        );
        const bpWrapClass = bp === 'default' ? 'pf-m-wrap' : `pf-m-wrap-on-${bp}`;

        expect(screen.getByTestId('toolbargroup')).toHaveClass(bpWrapClass);
      });

      it(`should render with pf-m-nowrap when rowWrap is set to nowrap at ${bp}`, () => {
        render(
          <ToolbarGroup data-testid="toolbargroup" rowWrap={{ [bp]: 'nowrap' }}>
            Test
          </ToolbarGroup>
        );
        const bpNoWrapClass = bp === 'default' ? 'pf-m-nowrap' : `pf-m-nowrap-on-${bp}`;
        expect(screen.getByTestId('toolbargroup')).toHaveClass(bpNoWrapClass);
      });
    });
  });
});
