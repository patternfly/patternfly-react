import React, { Component } from 'react';
import TreeGridTable from './TreeGridTable';
import { defaultRowValues, setVisibleChildren } from './TreeGridTableHelpers';
import PropTypes from 'prop-types';

class CollapsibleTreeGridTable extends Component {
  static getDerivedStateFromProps(props, { rows, columns, changed }) {
    if (!changed) {
      return {
        rows: defaultRowValues(props.rows).map(oneRow => ({
          ...oneRow,
          visible: rows[oneRow._index].visible,
          collapsed: rows[oneRow._index].collapsed
        }))
      };
    }
    return { changed: false };
  }

  static calculateState(rows, columns) {
    return {
      rows: defaultRowValues(rows),
      columns: columns.map(oneColumn => {
        oneColumn.property = oneColumn.key;
        return oneColumn;
      })
    };
  }

  constructor(props) {
    super(props);
    this.state = CollapsibleTreeGridTable.calculateState(
      this.props.rows,
      this.props.columns
    );
    this.toggleShowingChildren = this.toggleShowingChildren.bind(this);
  }

  toggleShowingChildren(rowIndex) {
    const rows = [...this.state.rows];
    rows[rowIndex].collapsed = !rows[rowIndex].collapsed;
    setVisibleChildren(rowIndex, rows);
    this.setState({ rows, changed: true });
  }

  render() {
    return (
      <TreeGridTable
        rows={this.state.rows}
        columns={this.state.columns}
        onCellClick={this.toggleShowingChildren}
        config={{ showIcon: false, changed: this.state.changed }}
      />
    );
  }
}

CollapsibleTreeGridTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      iconClass: PropTypes.string
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.shape({
        label: PropTypes.string.isRequired
      }).isRequired,
      visible: PropTypes.bool
    })
  )
};

CollapsibleTreeGridTable.defaultProps = {
  rows: [],
  columns: []
};

export default CollapsibleTreeGridTable;
