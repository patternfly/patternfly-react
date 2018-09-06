import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'patternfly-react';

/**
 * TableGridHead Component for PatternFly
 */

const TableGridHead = ({ children, className, ...props }) => {
  const classes = classNames('table-grid-pf-head', className);
  return (
    <Grid.Row className={classes} {...props}>
      {children}
    </Grid.Row>
  );
};

TableGridHead.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
TableGridHead.defaultProps = {
  children: null,
  className: ''
};

export default TableGridHead;
