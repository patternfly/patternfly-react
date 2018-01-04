import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ className, label, onRemove, filterData, ...rest }) => {
  const classes = cx(className);

  return (
    <li className={classes} {...rest}>
      <span className="label label-info">
        {label}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            onRemove && onRemove(filterData);
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
  /** additional filter item classes */
  className: PropTypes.string,
  /** Label to show for the filter item */
  label: PropTypes.string.isRequired,
  /** callback when filter is removed  */
  onRemove: PropTypes.func,
  /** Data to pass to onRemove function */
  filterData: PropTypes.object
};

export default FilterItem;
