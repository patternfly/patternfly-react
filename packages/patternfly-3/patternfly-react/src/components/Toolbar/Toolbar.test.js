import React from 'react';
import { mount } from 'enzyme';
import { Button, DropdownKebab, Filter, FormControl, Icon, MenuItem, Sort, Toolbar } from '../../index';

import { mockFilterExampleFields } from '../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../Sort/__mocks__/mockSortExample';

test('Toolbar renders properly', () => {
  const component = mount(
    <Toolbar>
      <Filter>
        <Filter.TypeSelector filterTypes={mockFilterExampleFields} currentFilterType={mockFilterExampleFields[0]} />
        <FormControl type={mockFilterExampleFields[0].filterType} id="filterInput" placeholder="Filter by Name" />
      </Filter>
      <Sort>
        <Sort.TypeSelector sortTypes={mockSortFields} currentSortType={mockSortFields[0]} />
        <Sort.DirectionSelector isNumeric={mockSortFields[0].isNumeric} isAscending />
      </Sort>
      <div className="form-group">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <DropdownKebab id="toolbarActionKebab">
          <MenuItem>Action</MenuItem>
          <MenuItem>Another Action</MenuItem>
          <MenuItem>Something Else Here</MenuItem>
          <MenuItem role="separator" className="divider" />
          <MenuItem>Separated Link</MenuItem>
        </DropdownKebab>
      </div>
      <Toolbar.RightContent>
        <Toolbar.Find placeholder="Find By Keyword..." currentIndex={1} totalCount={3} />
        <Toolbar.ViewSelector>
          <Button title="List View" bsStyle="link" className="active">
            <Icon type="fa" name="th-list" />
          </Button>
          <Button title="Card View" bsStyle="link">
            <Icon type="fa" name="th" />
          </Button>
          <Button title="Table View" bsStyle="link">
            <Icon type="fa" name="table" />
          </Button>
        </Toolbar.ViewSelector>
      </Toolbar.RightContent>
      <Toolbar.Results>
        <h5>40 Results</h5>
        <Filter.ActiveLabel title="Active Filters:" />
        <Filter.List>
          <Filter.Item label="Name: John" />
          <Filter.Item label="Address: Westford" />
        </Filter.List>
      </Toolbar.Results>
    </Toolbar>
  );

  expect(component.render()).toMatchSnapshot();
});
