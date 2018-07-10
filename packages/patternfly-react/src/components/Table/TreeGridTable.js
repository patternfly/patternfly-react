import React, { Component } from 'react';
import { Table } from './Table';
import { toggleChildren } from 'treetabular';
import PropTypes from 'prop-types';
import addIcon from './Formatters/iconToCell';
import { noop } from '../../common/helpers';
import { getShowingChildren, filterVisible } from './TreeGridTableHelpers';

class TreeGridTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.columnsFromProps()
    };
  }

  columnsFromProps() {
    const { columns } = this.props;
    const treePositions = this.props.config.treePositions || [0];
    treePositions.forEach(oneTree => {
      columns[oneTree] = this.applyFormatters(columns[oneTree]);
    });
    return [...columns];
  }

  additionalProps() {
    return {
      className: !this.props.config.showIcon && 'no-icon'
    };
  }

  applyFormatters(oneCol) {
    oneCol.cell = oneCol.cell || {};
    oneCol.cell.formatters = oneCol.cell.formatters || [];
    oneCol.cell.formatters.push(
      addIcon,
      toggleChildren({
        getRows: () => this.props.rows,
        getShowingChildren: extra => this.props.getShowingChildren(extra),
        toggleShowingChildren: rowIndex =>
          this.props.onCellClick && this.props.onCellClick(rowIndex),
        props: {
          ...this.additionalProps(),
          ...this.props.config.additionalProps
        },
        toggleEvent: this.props.config.toggleEvent || 'Toggle'
      })
    );
    return oneCol;
  }

  render() {
    const { columns } = this.state;
    const rows = filterVisible(this.props.rows);
    return (
      <div>
        <Table.Provider
          className="pure-table pure-table-striped tree-grid-table"
          columns={columns}
        >
          <Table.Header />

          <Table.Body rows={rows} rowKey="id" />
        </Table.Provider>
      </div>
    );
  }
}

TreeGridTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      header: PropTypes.shape({
        label: PropTypes.string.isRequired
      }).isRequired,
      visible: PropTypes.bool
    })
  ),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      visible: PropTypes.bool,
      parent: PropTypes.number,
      collapsed: PropTypes.bool
    })
  ),
  config: PropTypes.shape({
    showIcon: PropTypes.bool,
    treePositions: PropTypes.arrayOf(PropTypes.number),
    toggleEvent: PropTypes.string,
    additionalProps: PropTypes.any
  }),
  onCellClick: PropTypes.func,
  getShowingChildren: PropTypes.func
};

TreeGridTable.defaultProps = {
  columns: [
    {
      visible: false
    }
  ],
  rows: [
    {
      visible: true,
      parent: null,
      collapsed: false
    }
  ],
  config: {
    showIcon: false,
    toggleEvent: 'Click',
    treePositions: [0]
  },
  onCellClick: noop,
  getShowingChildren
};

export default TreeGridTable;
