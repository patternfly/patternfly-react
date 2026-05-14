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

  const bps = ['default', 'md', 'lg', 'xl', '2xl'] as const;
  describe.each(bps)(`ToolbarItem visibilityAtHeight`, (bp) => {
    it(`Applies correct visible class at ${bp}`, () => {
      render(
        <ToolbarItem data-testid="toolbaritem" visibilityAtHeight={{ [bp]: 'visible' }}>
          Test
        </ToolbarItem>
      );

      if (bp !== 'default') {
        expect(screen.getByTestId('toolbaritem')).toHaveClass(`pf-m-visible-on-${bp}-height`);
      }
    });

    it(`Applies correct hidden class at ${bp}`, () => {
      render(
        <ToolbarItem data-testid="toolbaritem" visibilityAtHeight={{ [bp]: 'hidden' }}>
          Test
        </ToolbarItem>
      );

      const expectedClass = bp === 'default' ? 'pf-m-hidden' : `pf-m-hidden-on-${bp}-height`;
      expect(screen.getByTestId('toolbaritem')).toHaveClass(expectedClass);
    });
  });
});
