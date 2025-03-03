import { Fragment } from 'react';
import { render } from '@testing-library/react';
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
});
