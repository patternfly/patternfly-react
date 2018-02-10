import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';

const FilterValueSelector = ({
  className,
  id,
  filterValues,
  currentValue,
  placeholder,
  onFilterValueSelected,
  ...rest
}) => {
  const classes = cx('filter-pf-select', className);

  if (placeholder || (filterValues && filterValues.length > 1)) {
    let title;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';

    return (
      <div className={classes} {...rest}>
        <DropdownButton
          title={title}
          id={menuId}
          className="filter-pf-select-dropdown"
        >
          {placeholder && (
            <MenuItem
              title={placeholder}
              key="Placeholder"
              onSelect={() => onFilterValueSelected && onFilterValueSelected()}
            >
              {placeholder}
            </MenuItem>
          )}
          {filterValues &&
            filterValues.map((item, index) => {
              const menuItemClasses = {
                selected: item === currentValue
              };
              return (
                <MenuItem
                  className={menuItemClasses}
                  key={item.id || index}
                  onSelect={() =>
                    onFilterValueSelected && onFilterValueSelected(item)
                  }
                >
                  {item.title || item}
                </MenuItem>
              );
            })}
        </DropdownButton>
      </div>
    );
  }
  return null;
};

FilterValueSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: PropTypes.array.isRequired,
  /** Currently selected value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no value is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a value is selected */
  onFilterValueSelected: PropTypes.func
};

export default FilterValueSelector;
