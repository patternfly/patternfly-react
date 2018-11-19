import React from 'react';
import styles from '@patternfly/patternfly-next/components/Table/table.css';
import { Provider } from 'reactabular-table';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SortByDirection } from './SortColumn';
import BodyCell from './BodyCell';
import HeaderCell from './HeaderCell';
import RowWrapper from './RowWrapper';

export const TableGridBreakpoint = {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg'
};

export const TableVariant = {
  'compact': 'compact'
}

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onCollapse: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(TableVariant)),
  gridBreakPoint: PropTypes.oneOf(Object.values(TableGridBreakpoint)),
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  onSelect: PropTypes.func,
  onSort: PropTypes.func,
  actions: PropTypes.array,
  header: props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      return new Error('Header is required if no aria-label or caption is supplied!');
    }
    return null;
  },
  caption: props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      return new Error('Caption is required if no aria-label or header is supplied!');
    }
    return null;
  },
  'aria-label': props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      return new Error('aria-label is required if no caption or header is supplied!');
    }
    return null;
  }
};

const defaultProps = {
  children: null,
  onCollapse: null,
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
      actions,
      onCollapse,
      variant,
      ...props
    } = this.props;

    return (
      <TableContext.Provider value={{
        headerData,
        sortBy,
        onSort,
        onSelect,
        actions,
        onCollapse,
        updateHeaderData: (headerData) => this.setState({ headerData })
      }}>
        {header}
        <Provider {...props} renderers={{
          body: {
            row: RowWrapper,
            cell: BodyCell
          },
          header: {
            cell: HeaderCell
          }
        }}
          columns={headerData}
          role="grid"
          className={css(
            styles.table,
            getModifier(styles, gridBreakPoint, styles.modifiers.grid),
            getModifier(styles, variant),
            className
          )}
        >
          {caption && <caption>{caption}</caption>}
          {children}
        </Provider>
      </TableContext.Provider >
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
