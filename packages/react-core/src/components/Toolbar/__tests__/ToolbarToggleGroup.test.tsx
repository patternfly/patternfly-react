import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Toolbar } from '../Toolbar';
import { ToolbarItem } from '../ToolbarItem';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarFilter } from '../ToolbarFilter';
import { ToolbarGroup } from '../ToolbarGroup';
import { Select, SelectVariant, SelectOption } from '../../Select';
import { Button } from '../../Button';

describe('ToolbarToggleGroup', () => {
  it('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;
    shallow(<ToolbarToggleGroup breakpoint={undefined as 'xl'} toggleIcon={null} />);
    expect(myMock).toBeCalled();
  });
});

describe('Toolbar', () => {
  it('should render inset', () => {
    const items = (
      <React.Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </React.Fragment>
    );

    const view = render(
      <Toolbar
        id="toolbar"
        inset={{
          default: 'insetNone',
          md: 'insetSm',
          xl: 'inset2xl',
          '2xl': 'insetLg'
        }}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    expect(view.container).toMatchSnapshot();
  });

  it('should render with page inset flag', () => {
    const items = (
      <React.Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </React.Fragment>
    );

    const view = render(
      <Toolbar id="toolbar" usePageInsets>
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    expect(view.container).toMatchSnapshot();
  });

  it('should render with custom chip content', () => {
    const statusMenuItems = [
      <SelectOption key="statusNew" value="New" />,
      <SelectOption key="statusPending" value="Pending" />,
      <SelectOption key="statusRunning" value="Running" />,
      <SelectOption key="statusCancelled" value="Cancelled" />
    ];

    const items = (
      <React.Fragment>
        <ToolbarToggleGroup toggleIcon={<React.Fragment />} breakpoint="xl">
          <ToolbarGroup variant="filter-group">
            <ToolbarFilter
              chips={['New', 'Pending']}
              deleteChip={(category, chip) => {}}
              deleteChipGroup={category => {}}
              categoryName="Status"
            >
              <Select
                variant={SelectVariant.checkbox}
                aria-label="Status"
                onToggle={(isExpanded: boolean) => {}}
                onSelect={(event, selection) => {}}
                selections={['New', 'Pending']}
                isOpen={true}
                placeholderText="Status"
              >
                {statusMenuItems}
              </Select>
            </ToolbarFilter>
          </ToolbarGroup>
        </ToolbarToggleGroup>
      </React.Fragment>
    );

    const customChipGroupContent = (
      <React.Fragment>
        <ToolbarItem>
          <Button id="save-button" variant="link" onClick={() => {}} isInline>
            Save filters
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button id="clear-button" variant="link" onClick={() => {}} isInline>
            Clear all filters
          </Button>
        </ToolbarItem>
      </React.Fragment>
    );

    const view = mount(
      <Toolbar
        id="toolbar-with-filter"
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="xl"
        customChipGroupContent={customChipGroupContent}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );
    expect(view.find('#save-button').exists());
    expect(view.find('#clear-button').exists());
    expect(view).toMatchSnapshot();
  });
});

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

    const view = render(<ToolbarItem widths={widths}>Test</ToolbarItem>);
    expect(view.container).toMatchSnapshot();
  });
});
