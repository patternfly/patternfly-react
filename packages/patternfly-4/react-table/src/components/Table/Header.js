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
  onCollapse: PropTypes.func,
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
  selectLabeledBy: PropTypes.string,
  actions: PropTypes.array
};

const defaultProps = {
  onCollapse: null,
  className: '',
  sortBy: {},
  onSort: null,
  onSelect: null
};

class ContextHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { sortBy: nextSortBy, actions: nextAction } = nextProps;
    const { sortBy, actions, onCollapse, headerRows } = this.props;
    const updateCheckers = [
      () => nextProps.onCollapse && onCollapse && !isEqual(nextProps.onCollapse, onCollapse),
      () => nextSortBy && sortBy && (nextSortBy.index !== sortBy.index || nextSortBy.direction !== sortBy.direction),
      () => nextAction && actions && !isEqual(nextAction, actions),
      () => !isEqual(nextProps.headerRows, headerRows)
    ];
    return updateCheckers.some(checker => checker());
  }

  headerColumns() {
    const { headerRows, sortBy, onSort, onSelect, actions, onCollapse, selectLabeledBy } = this.props;
    return calculateColumns(headerRows, { sortBy, onSort, onSelect, actions, onCollapse, selectLabeledBy });
  }

  componentDidUpdate() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.headerColumns());
  }

  componentDidMount() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.headerColumns());
  }

  render() {
    const {
      className,
      headerRows,
      sortBy,
      updateHeaderData,
      onSort,
      onSelect,
      actions,
      onCollapse,
      selectLabeledBy,
      ...props
    } = this.props;
    return (
      <Header headerRows={[this.headerColumns()]} {...props} className={className} />
    );
  }
}

const TableHeader = ({ headerData, ...props }) => {
  return (
    <TableContext.Consumer>
      {({ updateHeaderData, onSort, sortBy, onSelect, actions, onCollapse, selectLabeledBy }) => (
        <ContextHeader
          {...props}
          updateHeaderData={updateHeaderData}
          onSort={onSort}
          sortBy={sortBy}
          actions={actions}
          onSelect={onSelect}
          onCollapse={onCollapse}
          selectLabeledBy={selectLabeledBy}
        />
      )}
    </TableContext.Consumer>
  )
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
