import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

const DualListMainCheckbox = ({ isChecked, side, onChange }) => (
  <input
    className="dual-list-pf-main-checkbox"
    type="checkbox"
    data-side={side}
    onChange={onChange}
    checked={isChecked}
  />
);

DualListMainCheckbox.propTypes = {
  /** controlls the checkbox */
  isChecked: PropTypes.bool,
  /** the side of the selectors, passed in the onChange function. */
  side: PropTypes.string,
  /** The function which is being called on checked state toggled. */
  onChange: PropTypes.func
};

DualListMainCheckbox.defaultProps = {
  isChecked: false,
  side: null,
  onChange: noop
};

export default DualListMainCheckbox;
