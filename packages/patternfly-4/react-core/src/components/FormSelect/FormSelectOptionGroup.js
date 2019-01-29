import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Select Option Group */
  children: PropTypes.node,
  /** additional classes added to the Select Option */
  className: PropTypes.string,
  /** the label for the option */
  label: PropTypes.string.isRequired,
  /** flag indicating if the Option Group is disabled */
  isDisabled: PropTypes.bool,
  /** Additional props are spread to the container <optgroup> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isDisabled: false
};

const FormSelectOptionGroup = ({ children, className, label, isDisabled, ...props }) => (
  <optgroup {...props} disabled={!!isDisabled} className={className} label={label}>
    {children}
  </optgroup>
);

FormSelectOptionGroup.propTypes = propTypes;
FormSelectOptionGroup.defaultProps = defaultProps;

export default FormSelectOptionGroup;
