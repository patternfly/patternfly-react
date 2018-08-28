import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonGroup } from '../Button';

const PaginationRowButtonGroup = ({ className, ...props }) => (
  <ButtonGroup {...props} className={classNames(className, 'pagination-pf-pagesize')} />
);
PaginationRowButtonGroup.propTypes = {
  /** additional classes */
  className: PropTypes.string
};
PaginationRowButtonGroup.defaultProps = {
  className: ''
};

export default PaginationRowButtonGroup;
