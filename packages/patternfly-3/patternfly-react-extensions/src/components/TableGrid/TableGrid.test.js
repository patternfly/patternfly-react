import React from 'react';
import { mount } from 'enzyme';
import { Grid, Icon, noop } from 'patternfly-react';

import { TableGrid } from './index';

test('TableGrid renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid">
      <TableGrid.Head>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={noop}>
          <div>
            <span>test 1</span>
            <span>and two</span>
          </div>
        </TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Body id="test-grid-body" className="test-grid-body">
        <TableGrid.Row id="test-grid-row" className="test-grid-row">
          <Grid.Col id="test-col-1" className="test-col1">
            item 1 column 1
          </Grid.Col>
          <Grid.Col id="test-col-2" className="test-col2">
            item 1 column 2
          </Grid.Col>
          <Grid.Col id="test-col-3" className="test-col3">
            item 1 column 3
          </Grid.Col>
          <Grid.Col id="test-col-4" className="test-col4">
            item 1 column 4
          </Grid.Col>
        </TableGrid.Row>
        <TableGrid.Row id="test-grid-row-2">
          <Grid.Col id="test-row-2-col-1">item 2 column 1</Grid.Col>
          <Grid.Col id="two-children" className="test-col2">
            <span>item 1</span>
            <span>column 2</span>
          </Grid.Col>
          <Grid.Col id="icon-name" className="test-col3">
            <Icon type="pf" name="error-circle-o" />
            Danger
          </Grid.Col>
          <Grid.Col id="test-col-4" className="test-col4">
            item 2 column 4
          </Grid.Col>
        </TableGrid.Row>
      </TableGrid.Body>
    </TableGrid>
  );
  expect(component.render()).toMatchSnapshot();
});
