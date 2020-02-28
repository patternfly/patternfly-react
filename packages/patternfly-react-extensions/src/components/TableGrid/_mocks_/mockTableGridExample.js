import React from 'react';
import PropTypes from 'prop-types';
import TableGrid from '../TableGrid';
import { OverlayTrigger, Tooltip } from 'patternfly-react';
import { mockItems } from './mockItems';

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

class MockTableGridExample extends React.Component {
  state = {
    sortField: 'title',
    isAscending: true,
    items: mockItems,
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

  renderItemRow = (item, index) => {
    const { selectType } = this.props;
    const { selectedItem, selectedField, selectedItems } = this.state;
    const selected = selectType === 'checkbox' ? selectedItems.indexOf(item) >= 0 : selectedItem === item;
    return (
      <TableGrid.Row
        key={index}
        onClick={() => selectType === 'row' && this.onSelect(item)}
        selected={(selectType === 'row' || selectType === 'checkbox') && selected}
        onToggleSelection={() => this.toggleSelection(item)}
      >
        <TableGrid.Col
          {...titleColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'title')}
          selected={selectType === 'cell' && selected && selectedField === 'title'}
        >
          {item.title}
        </TableGrid.Col>
        <TableGrid.Col
          {...descrColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'description')}
          selected={selectType === 'cell' && selected && selectedField === 'description'}
        >
          {item.description}
        </TableGrid.Col>
        <TableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'hosts')}
          selected={selectType === 'cell' && selected && selectedField === 'hosts'}
        >
          {item.hosts}
        </TableGrid.Col>
        <TableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'clusters')}
          selected={selectType === 'cell' && selected && selectedField === 'clusters'}
        >
          {item.clusters}
        </TableGrid.Col>
      </TableGrid.Row>
    );
  };

  render() {
    const { items, selectedItems, sortField, isAscending } = this.state;
    const { bordered, selectType } = this.props;
    return (
      <TableGrid id="table-grid" bordered={bordered} selectType={selectType}>
        <TableGrid.Head
          showCheckbox={selectType === 'checkbox'}
          allSelected={selectType === 'checkbox' && selectedItems.length === items.length}
          partialSelected={selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < items.length}
          onToggleSelection={this.toggleAllSelections}
        >
          <TableGrid.ColumnHeader
            id="title"
            sortable
            isSorted={sortField === 'title'}
            isAscending={isAscending}
            onSortToggle={() => this.onSortToggle('title')}
            {...titleColSizes}
          >
            Title
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
            id="description"
            isSorted={sortField === 'description'}
            isAscending={isAscending}
            onSortToggle={() => this.onSortToggle('description')}
            {...descrColSizes}
          >
            Description
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
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
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
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
          </TableGrid.ColumnHeader>
        </TableGrid.Head>
        <TableGrid.Body>{items.map((item, index) => this.renderItemRow(item, index))}</TableGrid.Body>
      </TableGrid>
    );
  }
}

MockTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockTableGridExample };

export const MockTableGridExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import TableGrid from '../TableGrid';
import { OverlayTrigger, Tooltip } from 'patternfly-react';
import { mockItems } from './mockItems';

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

class MockTableGridExample extends React.Component {
  state = {
    sortField: 'title',
    isAscending: true,
    items: mockItems,
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

  renderItemRow = (item, index) => {
    const { selectType } = this.props;
    const { selectedItem, selectedField, selectedItems } = this.state;
    const selected = selectType === 'checkbox' ? selectedItems.indexOf(item) >= 0 : selectedItem === item;
    return (
      <TableGrid.Row
        key={index}
        onClick={() => selectType === 'row' && this.onSelect(item)}
        selected={(selectType === 'row' || selectType === 'checkbox') && selected}
        onToggleSelection={() => this.toggleSelection(item)}
      >
        <TableGrid.Col
          {...titleColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'title')}
          selected={selectType === 'cell' && selected && selectedField === 'title'}
        >
          {item.title}
        </TableGrid.Col>
        <TableGrid.Col
          {...descrColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'description')}
          selected={selectType === 'cell' && selected && selectedField === 'description'}
        >
          {item.description}
        </TableGrid.Col>
        <TableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'hosts')}
          selected={selectType === 'cell' && selected && selectedField === 'hosts'}
        >
          {item.hosts}
        </TableGrid.Col>
        <TableGrid.Col
          {...countColSizes}
          onClick={() => selectType === 'cell' && this.onSelect(item, 'clusters')}
          selected={selectType === 'cell' && selected && selectedField === 'clusters'}
        >
          {item.clusters}
        </TableGrid.Col>
      </TableGrid.Row>
    );
  };

  render() {
    const { items, selectedItems, sortField, isAscending } = this.state;
    const { bordered, selectType } = this.props;
    return (
      <TableGrid id="table-grid" bordered={bordered} selectType={selectType}>
        <TableGrid.Head
          showCheckbox={selectType === 'checkbox'}
          allSelected={selectType === 'checkbox' && selectedItems.length === items.length}
          partialSelected={selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < items.length}
          onToggleSelection={this.toggleAllSelections}
        >
          <TableGrid.ColumnHeader
            id="title"
            sortable
            isSorted={sortField === 'title'}
            isAscending={isAscending}
            onSortToggle={() => this.onSortToggle('title')}
            {...titleColSizes}
          >
            Title
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
            id="description"
            isSorted={sortField === 'description'}
            isAscending={isAscending}
            onSortToggle={() => this.onSortToggle('description')}
            {...descrColSizes}
          >
            Description
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
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
          </TableGrid.ColumnHeader>
          <TableGrid.ColumnHeader
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
          </TableGrid.ColumnHeader>
        </TableGrid.Head>
        <TableGrid.Body>{items.map((item, index) => this.renderItemRow(item, index))}</TableGrid.Body>
      </TableGrid>
    );
  }
}

MockTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockTableGridExample };
`;
