import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../Button';
import { DropdownKebab } from '../DropdownKebab';

/**
 * TableDropdownKebab component for Patternfly React
 */
const TableDropdownKebab = ({ children, ...props }) => {
  const CustomButtonGroup = buttonProps => <ButtonGroup {...buttonProps} bsClass=" " />;

  return (
    <DropdownKebab componentClass={CustomButtonGroup} toggleStyle="default" {...props}>
      {children}
    </DropdownKebab>
  );
};
TableDropdownKebab.propTypes = {
  /** children nodes */
  children: PropTypes.node
};
TableDropdownKebab.defaultProps = {
  children: null
};

export default TableDropdownKebab;
