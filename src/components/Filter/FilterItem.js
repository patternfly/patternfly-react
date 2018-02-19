import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

const FilterItem = ({ children, className, onRemove, filterData, ...rest }) => {
  const classes = cx(className);

  return (
    <li className={classes} {...rest}>
      <span className="label label-info">
        {children}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            onRemove(filterData);
          }}
        >
          <span className="pficon pficon-close" aria-hidden="true" />
          <span className="sr-only">Remove</span>
        </a>
      </span>
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
