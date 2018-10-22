import React from 'react';
import { Header } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import isEqual from 'lodash/isEqual';
import { SortByDirection } from './SortColumn';
import { calculateColumns } from './utils/headerUtils';

const propTypes = {
  className: PropTypes.string,
  headerRows: PropTypes.array.isRequired,
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
  actions: PropTypes.array
};

const defaultProps = {
  className: '',
  sortBy: {},
  onSort: null,
  onSelect: null
};

class ContextHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { sortBy: nextSortBy, actions: nextAction } = nextProps;
    const { sortBy, actions } = this.props;
    if (nextSortBy && sortBy) {
      return nextSortBy.index !== sortBy.index || nextSortBy.direction !== sortBy.direction;
    }
    if (nextAction && actions) {
      return !isEqual(nextAction, actions);
    }
    return !isEqual(nextProps.headerRows, this.props.headerRows);
  }

  headerColumns() {
    const { headerRows, sortBy, onSort, onSelect, actions } = this.props;
    return calculateColumns(headerRows, { sortBy, onSort, onSelect, actions });
  }

  componentDidUpdate() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.headerColumns());
  }

  componentDidMount() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.headerColumns());
  }

  render() {
    const { className, headerRows, sortBy, updateHeaderData, onSort, onSelect, actions, ...props } = this.props;
    return (
      <Header headerRows={[this.headerColumns()]} {...props} className={className} />
    );
  }
}

const TableHeader = ({ headerData, ...props }) => (
  <TableContext.Consumer>
    {({ updateHeaderData, onSort, sortBy, onSelect, actions }) => (
      <ContextHeader
        {...props}
        updateHeaderData={updateHeaderData}
        onSort={onSort}
        sortBy={sortBy}
        actions={actions}
        onSelect={onSelect}
      />
    )}
  </TableContext.Consumer>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
