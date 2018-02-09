import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonGroup } from '../Button';

const PaginationRowButtonGroup = ({ className, ...props }) => (
  <ButtonGroup {...props} className={cx(className, 'pagination-pf-pagesize')} />
);
PaginationRowButtonGroup.propTypes = {
  /** additional classes */
  className: PropTypes.string
};

export default PaginationRowButtonGroup;
