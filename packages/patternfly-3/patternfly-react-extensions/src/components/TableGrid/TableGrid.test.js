import React from 'react';
import { mount } from 'enzyme';
import { Grid, Icon, helpers } from 'patternfly-react';

import { TableGrid } from './index';

test('TableGrid renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid">
      <TableGrid.Head>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop}>
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

test('Bordered TableGrid renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid" bordered>
      <TableGrid.Head>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop}>
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

test('TableGrid with Row select renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid" selectType="row">
      <TableGrid.Head>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop}>
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
        <TableGrid.Row id="test-grid-row-2-selected" selected>
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
        <TableGrid.Row id="test-grid-row-3" selected={false}>
          <Grid.Col id="test-row-3-col-1">item 3 column 1</Grid.Col>
          <Grid.Col id="two-children" className="test-col3">
            <span>item 3</span>
            <span>column 2</span>
          </Grid.Col>
          <Grid.Col id="icon-name" className="test-col3">
            <Icon type="pf" name="error-circle-o" />
            Danger
          </Grid.Col>
          <Grid.Col id="test-col-4" className="test-col4">
            item 3 column 4
          </Grid.Col>
        </TableGrid.Row>
      </TableGrid.Body>
    </TableGrid>
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Cell select renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid" selectType="cell">
      <TableGrid.Head>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop}>
          <div>
            <span>test 1</span>
            <span>and two</span>
          </div>
        </TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Body id="test-grid-body" className="test-grid-body">
        <TableGrid.Row id="test-grid-row" className="test-grid-row">
          <TableGrid.Col id="test-col-1" className="test-col1">
            item 1 column 1
          </TableGrid.Col>
          <TableGrid.Col id="test-col-2" className="test-col2" selected>
            item 1 column 2
          </TableGrid.Col>
          <TableGrid.Col id="test-col-3" className="test-col3" selected={false}>
            item 1 column 3
          </TableGrid.Col>
          <TableGrid.Col id="test-col-4" className="test-col4">
            item 1 column 4
          </TableGrid.Col>
        </TableGrid.Row>
        <TableGrid.Row id="test-grid-row-2-selected">
          <TableGrid.Col id="test-row-2-col-1">item 2 column 1</TableGrid.Col>
          <TableGrid.Col id="two-children" className="test-col2">
            <span>item 1</span>
            <span>column 2</span>
          </TableGrid.Col>
          <TableGrid.Col id="icon-name" className="test-col3">
            <Icon type="pf" name="error-circle-o" />
            Danger
          </TableGrid.Col>
          <TableGrid.Col id="test-col-4" className="test-col4">
            item 2 column 4
          </TableGrid.Col>
        </TableGrid.Row>
      </TableGrid.Body>
    </TableGrid>
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Checkbox select renders properly', () => {
  const component = mount(
    <TableGrid id="table-grid" selectType="checkbox">
      <TableGrid.Head showCheckbox allSelected>
        <TableGrid.ColumnHeader id="title" sortable isSorted isAscending className="test-class">
          Column 1
        </TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Column 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop} />
        <TableGrid.ColumnHeader sortable={false} isSorted={false} isAscending={false} onSortToggle={helpers.noop}>
          <div>
            <span>test 1</span>
            <span>and two</span>
          </div>
        </TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Body id="test-grid-body" className="test-grid-body">
        <TableGrid.Row id="test-grid-row" className="test-grid-row" checkboxAriaLabel="test arial label">
          <TableGrid.Col id="test-col-1" className="test-col1">
            item 1 column 1
          </TableGrid.Col>
          <TableGrid.Col id="test-col-2" className="test-col2" selected>
            item 1 column 2
          </TableGrid.Col>
          <TableGrid.Col id="test-col-3" className="test-col3" selected={false}>
            item 1 column 3
          </TableGrid.Col>
          <TableGrid.Col id="test-col-4" className="test-col4">
            item 1 column 4
          </TableGrid.Col>
        </TableGrid.Row>
        <TableGrid.Row id="test-grid-row-2-selected">
          <TableGrid.Col id="test-row-2-col-1">item 2 column 1</TableGrid.Col>
          <TableGrid.Col id="two-children" className="test-col2">
            <span>item 1</span>
            <span>column 2</span>
          </TableGrid.Col>
          <TableGrid.Col id="icon-name" className="test-col3">
            <Icon type="pf" name="error-circle-o" />
            Danger
          </TableGrid.Col>
          <TableGrid.Col id="test-col-4" className="test-col4">
            item 2 column 4
          </TableGrid.Col>
        </TableGrid.Row>
      </TableGrid.Body>
    </TableGrid>
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGridHead renders options properly', () => {
  const component = mount(
    <TableGrid id="table-grid" selectType="checkbox">
      <TableGrid.Head id="all-selected-no-checkbox" showCheckbox={false}>
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head id="none-selected" showCheckbox>
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head id="all-selected" showCheckbox allSelected>
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head id="partial-selected" showCheckbox partialSelected>
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head id="custom-tip" showCheckbox allSelected toggleTip="Test Custom Tip">
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head id="none-selected-custom-sr-text" showCheckbox noneSelectedAriaLabel="Test No Selected SR Text">
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head
        id="all-selected-custom-sr-text"
        showCheckbox
        allSelected
        allSelectedAriaLabel="Test All Selected SR Text"
      >
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
      <TableGrid.Head
        id="partial-selected-custom-sr-text"
        showCheckbox
        partialSelected
        partialSelectedAriaLabel="Test Partial Selected SR Text"
      >
        <TableGrid.ColumnHeader>Col 1</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 2</TableGrid.ColumnHeader>
        <TableGrid.ColumnHeader>Col 3</TableGrid.ColumnHeader>
      </TableGrid.Head>
    </TableGrid>
  );
  expect(component.render()).toMatchSnapshot();
});
