import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'patternfly-react';

/**
 * TableGridRow Component for PatternFly
 */

const TableGridRow = ({ children, className, selected, ...props }) => {
  const classes = classNames('table-grid-pf-row', { active: selected }, className);
  return (
    <Grid.Row className={classes} {...props}>
      {children}
    </Grid.Row>
  );
};

TableGridRow.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if the row is selected */
  selected: PropTypes.bool
};

TableGridRow.defaultProps = {
  children: null,
  className: '',
  selected: false
};

export default TableGridRow;
