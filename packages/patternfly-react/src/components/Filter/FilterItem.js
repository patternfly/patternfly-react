import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import { DisposableLabel } from '../Label';

const FilterItem = ({ children, className, onRemove, filterData, ...props }) => {
  const classes = classNames(className);

  return (
    <li className={classes} {...props}>
      <DisposableLabel type="info" onRemoveClick={() => onRemove(filterData)}>
        {children}
      </DisposableLabel>
    </li>
  );
};

FilterItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** additional filter item classes */
  className: PropTypes.string,
  /** callback when filter is removed  */
  onRemove: PropTypes.func,
  /** Data to pass to onRemove function */
  filterData: PropTypes.object
};

FilterItem.defaultProps = {
  children: null,
  className: '',
  onRemove: noop,
  filterData: {}
};
export default FilterItem;
