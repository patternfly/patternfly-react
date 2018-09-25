import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'patternfly-react';

/**
 * TableGridCol Component for PatternFly
 */

const TableGridCol = ({ children, selected, ...props }) => {
  const classes = classNames('table-grid-pf-col', { active: selected });
  return (
    <Grid.Col {...props}>
      <span className={classes}>{children}</span>
    </Grid.Col>
  );
};

TableGridCol.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Flag if the cell is selected */
  selected: PropTypes.bool
};

TableGridCol.defaultProps = {
  children: null,
  selected: false
};

export default TableGridCol;
