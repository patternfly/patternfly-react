import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from '../Form';
import { noop } from '../../common/helpers';

/**
 * TableCheckbox component for Patternfly React
 */
const TableCheckbox = ({ id, label, checked, onChange, ...props }) => (
  <React.Fragment>
    <ControlLabel srOnly htmlFor={id}>
      {label}
    </ControlLabel>
    <input type="checkbox" id={id} checked={checked} onChange={onChange} {...props} />
  </React.Fragment>
);
TableCheckbox.propTypes = {
  /** checkbox id */
  id: PropTypes.string,
  /** checkbox label */
  label: PropTypes.string,
  /** checkbox is checked */
  checked: PropTypes.bool,
  /** onChange callback */
  onChange: PropTypes.func
};
TableCheckbox.defaultProps = {
  id: '',
  label: '',
  checked: false,
  onChange: noop
};
export default TableCheckbox;
