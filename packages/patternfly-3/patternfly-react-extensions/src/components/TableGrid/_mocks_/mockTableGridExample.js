import React from 'react';
import PropTypes from 'prop-types';
import TableGrid from '../TableGrid';
import { Grid, OverlayTrigger, Tooltip } from 'patternfly-react';
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
    items: mockItems
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

  renderItemRow = (item, index) => (
    <TableGrid.Row key={index}>
      <Grid.Col {...titleColSizes}>{item.title}</Grid.Col>
      <Grid.Col {...descrColSizes}>{item.description}</Grid.Col>
      <Grid.Col {...countColSizes}>{item.hosts}</Grid.Col>
      <Grid.Col {...countColSizes}>{item.clusters}</Grid.Col>
    </TableGrid.Row>
  );

  render() {
    const { items, sortField, isAscending } = this.state;
    const { bordered } = this.props;
    return (
      <TableGrid id="table-grid" bordered={bordered}>
        <TableGrid.Head>
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
  bordered: PropTypes.bool
};

MockTableGridExample.defaultProps = {
  bordered: false
};

export { MockTableGridExample };

export const MockTableGridExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import TableGrid from '../TableGrid';
import { Grid, OverlayTrigger, Tooltip } from 'patternfly-react';
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
    items: mockItems
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

  renderItemRow = (item, index) => (
    <TableGrid.Row key={index}>
      <Grid.Col {...titleColSizes}>{item.title}</Grid.Col>
      <Grid.Col {...descrColSizes}>{item.description}</Grid.Col>
      <Grid.Col {...countColSizes}>{item.hosts}</Grid.Col>
      <Grid.Col {...countColSizes}>{item.clusters}</Grid.Col>
    </TableGrid.Row>
  );

  render() {
    const { items, sortField, isAscending } = this.state;
    const { bordered } = this.props;
    return (
      <TableGrid id="table-grid" bordered={bordered}>
        <TableGrid.Head>
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
  bordered: PropTypes.bool
};

MockTableGridExample.defaultProps = {
  bordered: false
};

export { MockTableGridExample };
`;
