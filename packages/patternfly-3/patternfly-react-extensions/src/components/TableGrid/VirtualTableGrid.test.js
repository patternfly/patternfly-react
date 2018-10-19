import React from 'react';
import { mount } from 'enzyme';

import { VirtualTableGrid } from './index';
import { mockVirtualItems } from './_mocks_/mockVirtualItems';

const titleColSizes = {
  md: 2,
  sm: 4,
  xs: 6
};
const descrColSizes = {
  md: 6,
  sm: 4,
  xs: 6
};
const countColSizes = {
  md: 2,
  sm: 2,
  xsHidden: true
};

const ItemHeader = tableData => {
  const { selectType, selectedItems, sortField, isAscending, numItems } = tableData;
  return (
    <VirtualTableGrid.Head
      showCheckbox={selectType === 'checkbox'}
      allSelected={selectType === 'checkbox' && selectedItems.length === numItems}
      partialSelected={selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < numItems}
    >
      <VirtualTableGrid.ColumnHeader
        id="title"
        sortable
        isSorted={sortField === 'title'}
        isAscending={isAscending}
        {...titleColSizes}
      >
        Title
      </VirtualTableGrid.ColumnHeader>
      <VirtualTableGrid.ColumnHeader
        id="description"
        isSorted={sortField === 'description'}
        isAscending={isAscending}
        {...descrColSizes}
      >
        Description
      </VirtualTableGrid.ColumnHeader>
      <VirtualTableGrid.ColumnHeader
        id="hosts"
        sortable
        isSorted={sortField === 'hosts'}
        isAscending={isAscending}
        {...countColSizes}
      >
        Hosts
      </VirtualTableGrid.ColumnHeader>
      <VirtualTableGrid.ColumnHeader
        id="clusters"
        sortable
        isSorted={sortField === 'clusters'}
        isAscending={isAscending}
        onSortToggle={() => this.onSortToggle('clusters')}
        {...countColSizes}
      >
        Clusters
      </VirtualTableGrid.ColumnHeader>
    </VirtualTableGrid.Head>
  );
};

const ItemRow = rowProps => {
  const { obj, tableData, index } = rowProps;
  const { selectType, selectedItem, selectedField, selectedItems } = tableData;
  const selected = selectType === 'checkbox' ? selectedItems.indexOf(obj) >= 0 : selectedItem === obj;
  return (
    <VirtualTableGrid.Row key={index} selected={(selectType === 'row' || selectType === 'checkbox') && selected}>
      <VirtualTableGrid.Col
        {...titleColSizes}
        selected={selectType === 'cell' && selected && selectedField === 'title'}
      >
        {obj.title}
      </VirtualTableGrid.Col>
      <VirtualTableGrid.Col
        {...descrColSizes}
        selected={selectType === 'cell' && selected && selectedField === 'description'}
      >
        {obj.description}
      </VirtualTableGrid.Col>
      <VirtualTableGrid.Col
        {...countColSizes}
        selected={selectType === 'cell' && selected && selectedField === 'hosts'}
      >
        {obj.hosts}
      </VirtualTableGrid.Col>
      <VirtualTableGrid.Col
        {...countColSizes}
        selected={selectType === 'cell' && selected && selectedField === 'clusters'}
      >
        {obj.clusters}
      </VirtualTableGrid.Col>
    </VirtualTableGrid.Row>
  );
};

test('VirtualTableGrid renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('Bordered TableGrid renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Row select renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    selectType: 'row',
    selectedItem: mockVirtualItems[0],
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Cell select renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    selectType: 'cell',
    selectedItem: mockVirtualItems[0],
    selectedField: 'hosts',
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Checkbox select and no selections renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    selectType: 'checkbox',
    selectedItems: [],
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Checkbox select and partial selections renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    selectType: 'checkbox',
    selectedItems: [mockVirtualItems[0]],
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('TableGrid with Checkbox select and everything selected renders properly', () => {
  const tableData = {
    sortField: 'title',
    isAscending: true,
    selectType: 'checkbox',
    selectedItems: [...mockVirtualItems],
    numItems: mockVirtualItems.length
  };

  const component = mount(
    <VirtualTableGrid
      id="virtual-table-grid"
      bordered
      header={ItemHeader}
      row={ItemRow}
      data={mockVirtualItems}
      tableData={tableData}
    />
  );
  expect(component.render()).toMatchSnapshot();
});
