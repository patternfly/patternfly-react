import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Grid, Icon, helpers } from 'patternfly-react';

/**
 * TableGridColumnHeader Component for PatternFly
 */

const TableGridColumnHeader = ({ children, className, sortable, isSorted, isAscending, onSortToggle, ...props }) => {
  const classes = classNames(
    'table-grid-pf-column-header text-nowrap',
    { 'active-sort': isSorted, descending: !isAscending },
    className
  );

  return (
    <Grid.Col className={classes} {...props}>
      {sortable && (
        <Button bsStyle="link" onClick={onSortToggle}>
          {children}
          {isSorted && (
            <Icon
              className="table-grid-pf-header-sort-arrow"
              type="pf"
              name={isAscending ? 'sort-common-asc' : 'sort-common-desc'}
            />
          )}
        </Button>
      )}
      {!sortable && children}
    </Grid.Col>
  );
};

TableGridColumnHeader.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if this column is sortable */
  sortable: PropTypes.bool,
  /** Flag if this is the current sort column */
  isSorted: PropTypes.bool,
  /** Flag if the sort is ascending */
  isAscending: PropTypes.bool,
  /** Callback function when the user click on this column header */
  onSortToggle: PropTypes.func,
  ...Grid.Col.propTypes
};

TableGridColumnHeader.defaultProps = {
  children: null,
  className: '',
  sortable: false,
  isSorted: false,
  isAscending: true,
  onSortToggle: helpers.noop,
  ...Grid.Col.defaultProps
};

export default TableGridColumnHeader;
