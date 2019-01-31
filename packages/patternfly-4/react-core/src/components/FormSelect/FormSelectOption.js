import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** additional classes added to the Select Option */
  className: PropTypes.string,
  /** the value for the option */
  value: PropTypes.any,
  /** the label for the option */
  label: PropTypes.string.isRequired,
  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,
  /** Additional props are spread to the container <option> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  value: '',
  isDisabled: false
};

const FormSelectOption = ({ className, value, label, isDisabled, ...props }) => (
  <option {...props} className={className} value={value} disabled={isDisabled}>
    {label}
  </option>
);

FormSelectOption.propTypes = propTypes;
FormSelectOption.defaultProps = defaultProps;

export default FormSelectOption;
