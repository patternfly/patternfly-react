import { Fragment } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Toolbar } from '../Toolbar';
import { ToolbarContent } from '../ToolbarContent';

describe('ToolbarToggleGroup', () => {
  it('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;

    const items = (
      <Fragment>
        <ToolbarToggleGroup breakpoint={undefined as 'xl'} toggleIcon={null}>
          test
        </ToolbarToggleGroup>
      </Fragment>
    );

    render(
      <Toolbar id="toolbar-with-filter" className="pf-m-toggle-group-container" collapseListedFiltersBreakpoint="xl">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(myMock).toHaveBeenCalled();
  });

  it('sets aria-haspopup when expandable content is a popup in a narrow toolbar container', () => {
    const clientWidthMock = jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(600);

    render(
      <Toolbar isContainer>
        <ToolbarContent>
          <ToolbarToggleGroup breakpoint="lg" toggleIcon={<span />}>
            Filter controls
          </ToolbarToggleGroup>
        </ToolbarContent>
      </Toolbar>
    );

    const toggle = screen.getByRole('button', { name: 'Show Filters' });
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-haspopup', 'true');
    clientWidthMock.mockRestore();
  });
});
