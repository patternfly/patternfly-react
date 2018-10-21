import React from 'react';
import { Header } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import isEqual from 'lodash/isEqual';
import { mapHeader } from './utils';
import { SortByDirection } from './SortColumn';

const propTypes = {
  className: PropTypes.string,
  headerRows: PropTypes.array.isRequired,
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  onSort: PropTypes.func,
  onSelect: PropTypes.func
};

const defaultProps = {
  className: '',
  sortBy: {},
  onSort: null,
  onSelect: null
};

class ContextHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { sortBy: nextSortBy } = nextProps;
    const { sortBy } = this.props;
    if (nextSortBy && sortBy) {
      return nextSortBy.index !== sortBy.index || nextSortBy.direction !== sortBy.direction;
    }
    return !isEqual(nextProps.headerRows, this.props.headerRows);
  }

  calculateColumns() {
    const { headerRows, sortBy, onSort } = this.props;
    return headerRows && headerRows.map(oneCol => ({
      ...mapHeader(oneCol, { sortBy, onSort }),
      ...typeof oneCol !== 'string' && oneCol
    })
    );
  }

  componentDidUpdate() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.calculateColumns());
  }

  componentDidMount() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.calculateColumns());
  }

  render() {
    const { className, headerRows, sortBy, updateHeaderData, onSort, ...props } = this.props;

    return (
      <Header headerRows={[this.calculateColumns()]} {...props} className={className} />
    );
  }
}

const TableHeader = ({ headerData, ...props }) => (
  <TableContext.Consumer>
    {({ updateHeaderData, onSort, sortBy, onSelect }) => (
      <ContextHeader
        {...props}
        updateHeaderData={updateHeaderData}
        onSort={onSort}
        sortBy={sortBy}
        onSelect={onSelect}
      />
    )}
  </TableContext.Consumer>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
