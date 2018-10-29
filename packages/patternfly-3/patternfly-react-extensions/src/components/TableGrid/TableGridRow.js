import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, helpers } from 'patternfly-react';

/**
 * TableGridRow Component for PatternFly
 */

const TableGridRow = ({ children, className, selected, onToggleSelection, checkboxAriaLabel, ...props }) => {
  const classes = classNames('table-grid-pf-row', { active: selected }, className);
  return (
    <Grid.Row className={classes} {...props}>
      <div className="table-grid-pf-checkbox">
        <input type="checkbox" checked={selected} onChange={onToggleSelection} aria-label={checkboxAriaLabel} />
      </div>
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
  selected: PropTypes.bool,
  /** Callback function for checkbox toggle  (checkbox selection only) */
  onToggleSelection: PropTypes.func,
  /** Aria label for the checkbox (checkbox selection only) */
  checkboxAriaLabel: PropTypes.string
};

TableGridRow.defaultProps = {
  children: null,
  className: '',
  selected: false,
  onToggleSelection: helpers.noop,
  checkboxAriaLabel: 'Select'
};

export default TableGridRow;
