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
  isDisabled: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  isDisabled: false
};

const SelectOptionGroup = ({ children, className, label, isDisabled, ...props }) => (
  <optgroup {...props} disabled={!!isDisabled} className={className} label={label}>
    {children}
  </optgroup>
);

SelectOptionGroup.propTypes = propTypes;
SelectOptionGroup.defaultProps = defaultProps;

export default SelectOptionGroup;
