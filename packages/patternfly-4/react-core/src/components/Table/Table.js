import React from 'react';
import styles from '@patternfly/patternfly-next/components/Table/table.css';
import { Provider } from 'reactabular-table';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SortByDirection } from './SortColumn';

export const TableGridBreakpoint = {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg'
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.array,
  gridBreakPoint: PropTypes.oneOf(Object.values(TableGridBreakpoint)),
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  onSelect: PropTypes.func,
  onSort: PropTypes.func,
  header: props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      return new Error('Header is required if no aria-label or caption is supplied!');
    }
    return null;
  },
  caption: props => {
    if (!props['aria-label'] && !props.caption) {
      return new Error('Caption is required if no aria-label or header is supplied!');
    }
    return null;
  },
  'aria-label': props => {
    if (!props['aria-label'] && !props.caption) {
      return new Error('aria-label is required if no caption or header is supplied!');
    }
    return null;
  }
};

const defaultProps = {
  children: null,
  className: '',
  gridBreakPoint: TableGridBreakpoint.gridMd
};

export const TableContext = React.createContext();

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: []
    }
  }
  render() {
    const { headerData } = this.state;
    const {
      caption,
      header,
      className,
      gridBreakPoint,
      onSort,
      onSelect,
      sortBy,
      children,
      ...props
    } = this.props;

    return (
      <TableContext.Provider value={{
        headerData,
        sortBy,
        onSort,
        onSelect,
        updateHeaderData: (headerData) => this.setState({ headerData })
      }}>
        <Provider {...props} columns={headerData} role="grid" className={css(styles.table, getModifier(styles, gridBreakPoint, styles.modifiers.grid), className)}>
          {caption && <caption>{caption}</caption>}
          {header}
          {children}
        </Provider>
      </TableContext.Provider >
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
