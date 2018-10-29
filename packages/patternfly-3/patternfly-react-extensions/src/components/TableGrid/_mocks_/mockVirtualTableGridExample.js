import React from 'react';
import PropTypes from 'prop-types';
import VirtualTableGrid from '../VirtualTableGrid';
import { OverlayTrigger, Tooltip } from 'patternfly-react';
import { mockVirtualItems } from './mockVirtualItems';

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

class MockVirtualTableGridExample extends React.Component {
  state = {
    sortField: 'title',
    isAscending: true,
    items: mockVirtualItems,
    selectedItem: null,
    selectedField: null,
    selectedItems: []
  };

  onSortToggle = id => {
    const { items, sortField, isAscending } = this.state;
    let updateAscending = true;

    if (id === sortField) {
      updateAscending = !isAscending;
    }

    items.sort((a, b) => {
      let compVal = 0;
      if (id === 'title') {
        compVal = a.title.localeCompare(b.title);
      } else if (id === 'hosts') {
        compVal = a.hosts - b.hosts;
      } else if (id === 'clusters') {
        compVal = a.clusters - b.clusters;
      }

      if (!updateAscending) {
        compVal *= -1;
      }

      return compVal;
    });

    this.setState({ items, sortField: id, isAscending: updateAscending });
  };

  onSelect = (item, field) => {
    this.setState({ selectedItem: item, selectedField: field });
  };

  toggleSelection = item => {
    const { selectedItems } = this.state;
    let newSelections;
    const index = selectedItems.indexOf(item);

    if (index >= 0) {
      newSelections = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];
    } else {
      newSelections = [...selectedItems, item];
    }
    this.setState({ selectedItems: newSelections });
  };

  toggleAllSelections = () => {
    const { items, selectedItems } = this.state;
    this.setState({ selectedItems: selectedItems.length > 0 ? [] : [...items] });
  };

  ItemHeader = tableData => {
    const { numItems, selectType, selectedItems, sortField, isAscending } = tableData;
    return (
      <VirtualTableGrid.Head
        showCheckbox={selectType === 'checkbox'}
        allSelected={selectType === 'checkbox' && selectedItems.length === numItems}
        partialSelected={selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < numItems}
        onToggleSelection={this.toggleAllSelections}
      >
        <VirtualTableGrid.ColumnHeader
          id="title"
          sortable
          isSorted={sortField === 'title'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('title')}
          {...titleColSizes}
        >
          Title
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="description"
          isSorted={sortField === 'description'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('description')}
          {...descrColSizes}
        >
          Description
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="hosts"
          sortable
          isSorted={sortField === 'hosts'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('hosts')}
          {...countColSizes}
        >
          <OverlayTrigger overlay={<Tooltip id="hosts-tip">Hosts</Tooltip>} placement="top">
            <span>Hosts</span>
          </OverlayTrigger>
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="clusters"
          sortable
          isSorted={sortField === 'clusters'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('clusters')}
          {...countColSizes}
        >
          <OverlayTrigger overlay={<Tooltip id="clusters-tip">Clusters</Tooltip>} placement="top">
            <span>Clusters</span>
          </OverlayTrigger>
        </VirtualTableGrid.ColumnHeader>
      </VirtualTableGrid.Head>
    );
  };

  ItemRow = rowProps => {
    const { obj, tableData, index } = rowProps;
    const { selectType, selectedItem, selectedField, selectedItems } = tableData;
    const selected = selectType === 'checkbox' ? selectedItems.indexOf(obj) >= 0 : selectedItem === obj;
    return (
      <VirtualTableGrid.Row
        key={index}
        onClick={() => selectType === 'row' && this.onSelect(obj)}
        selected={(selectType === 'row' || selectType === 'checkbox') && selected}
        onToggleSelection={() => this.toggleSelection(obj)}
      >
        <VirtualTableGrid.Col
          {...titleColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'title')}
          selected={selectType === 'cell' && selected && selectedField === 'title'}
        >
          {obj.title}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...descrColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'description')}
          selected={selectType === 'cell' && selected && selectedField === 'description'}
        >
          {obj.description}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'hosts')}
          selected={selectType === 'cell' && selected && selectedField === 'hosts'}
        >
          {obj.hosts}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'clusters')}
          selected={selectType === 'cell' && selected && selectedField === 'clusters'}
        >
          {obj.clusters}
        </VirtualTableGrid.Col>
      </VirtualTableGrid.Row>
    );
  };

  render() {
    const { items, selectedItem, selectedItems, selectedField, sortField, isAscending } = this.state;
    const { bordered, selectType } = this.props;
    const tableData = {
      selectedItem,
      selectedItems,
      selectedField,
      sortField,
      isAscending,
      selectType
    };
    return (
      <VirtualTableGrid
        id="virtual-table-grid"
        bordered={bordered}
        selectType={selectType}
        header={this.ItemHeader}
        row={this.ItemRow}
        data={items}
        tableData={tableData}
      />
    );
  }
}

MockVirtualTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockVirtualTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockVirtualTableGridExample };

export const MockVirtualTableGridExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import VirtualTableGrid from '../VirtualTableGrid';
import { OverlayTrigger, Tooltip } from 'patternfly-react';
import { mockVirtualItems } from './mockVirtualItems';

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

class MockVirtualTableGridExample extends React.Component {
  state = {
    sortField: 'title',
    isAscending: true,
    items: mockVirtualItems,
    selectedItem: null,
    selectedField: null,
    selectedItems: []
  };

  onSortToggle = id => {
    const { items, sortField, isAscending } = this.state;
    let updateAscending = true;

    if (id === sortField) {
      updateAscending = !isAscending;
    }

    items.sort((a, b) => {
      let compVal = 0;
      if (id === 'title') {
        compVal = a.title.localeCompare(b.title);
      } else if (id === 'hosts') {
        compVal = a.hosts - b.hosts;
      } else if (id === 'clusters') {
        compVal = a.clusters - b.clusters;
      }

      if (!updateAscending) {
        compVal *= -1;
      }

      return compVal;
    });

    this.setState({ items, sortField: id, isAscending: updateAscending });
  };

  onSelect = (item, field) => {
    this.setState({ selectedItem: item, selectedField: field });
  };

  toggleSelection = item => {
    const { selectedItems } = this.state;
    let newSelections;
    const index = selectedItems.indexOf(item);

    if (index >= 0) {
      newSelections = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];
    } else {
      newSelections = [...selectedItems, item];
    }
    this.setState({ selectedItems: newSelections });
  };

  toggleAllSelections = () => {
    const { items, selectedItems } = this.state;
    this.setState({ selectedItems: selectedItems.length > 0 ? [] : [...items] });
  };

  ItemHeader = tableData => {
    const { numItems, selectType, selectedItems, sortField, isAscending } = tableData;
    return (
      <VirtualTableGrid.Head
        showCheckbox={selectType === 'checkbox'}
        allSelected={selectType === 'checkbox' && selectedItems.length === numItems}
        partialSelected={selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < numItems}
        onToggleSelection={this.toggleAllSelections}
      >
        <VirtualTableGrid.ColumnHeader
          id="title"
          sortable
          isSorted={sortField === 'title'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('title')}
          {...titleColSizes}
        >
          Title
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="description"
          isSorted={sortField === 'description'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('description')}
          {...descrColSizes}
        >
          Description
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="hosts"
          sortable
          isSorted={sortField === 'hosts'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('hosts')}
          {...countColSizes}
        >
          <OverlayTrigger overlay={<Tooltip id="hosts-tip">Hosts</Tooltip>} placement="top">
            <span>Hosts</span>
          </OverlayTrigger>
        </VirtualTableGrid.ColumnHeader>
        <VirtualTableGrid.ColumnHeader
          id="clusters"
          sortable
          isSorted={sortField === 'clusters'}
          isAscending={isAscending}
          onSortToggle={() => this.onSortToggle('clusters')}
          {...countColSizes}
        >
          <OverlayTrigger overlay={<Tooltip id="clusters-tip">Clusters</Tooltip>} placement="top">
            <span>Clusters</span>
          </OverlayTrigger>
        </VirtualTableGrid.ColumnHeader>
      </VirtualTableGrid.Head>
    );
  };

  ItemRow = rowProps => {
    const { obj, tableData, index } = rowProps;
    const { selectType, selectedItem, selectedField, selectedItems } = tableData;
    const selected = selectType === 'checkbox' ? selectedItems.indexOf(obj) >= 0 : selectedItem === obj;
    return (
      <VirtualTableGrid.Row
        key={index}
        onClick={() => selectType === 'row' && this.onSelect(obj)}
        selected={(selectType === 'row' || selectType === 'checkbox') && selected}
        onToggleSelection={() => this.toggleSelection(obj)}
      >
        <VirtualTableGrid.Col
          {...titleColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'title')}
          selected={selectType === 'cell' && selected && selectedField === 'title'}
        >
          {obj.title}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...descrColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'description')}
          selected={selectType === 'cell' && selected && selectedField === 'description'}
        >
          {obj.description}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'hosts')}
          selected={selectType === 'cell' && selected && selectedField === 'hosts'}
        >
          {obj.hosts}
        </VirtualTableGrid.Col>
        <VirtualTableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(obj, 'clusters')}
          selected={selectType === 'cell' && selected && selectedField === 'clusters'}
        >
          {obj.clusters}
        </VirtualTableGrid.Col>
      </VirtualTableGrid.Row>
    );
  };

  render() {
    const { items, selectedItem, selectedItems, selectedField, sortField, isAscending } = this.state;
    const { bordered, selectType } = this.props;
    const tableData = {
      selectedItem,
      selectedItems,
      selectedField,
      sortField,
      isAscending,
      selectType
    };
    return (
      <VirtualTableGrid
        id="virtual-table-grid"
        bordered={bordered}
        selectType={selectType}
        header={this.ItemHeader}
        row={this.ItemRow}
        data={items}
        tableData={tableData}
      />
    );
  }
}

MockVirtualTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockVirtualTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockVirtualTableGridExample };
`;
