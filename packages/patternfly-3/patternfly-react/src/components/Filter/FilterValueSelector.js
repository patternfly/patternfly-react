import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterValueSelector = ({
  className,
  id,
  filterValues,
  currentValue,
  placeholder,
  onFilterValueSelected,
  ...props
}) => {
  const classes = classNames('filter-pf-select', className);

  if (placeholder || (filterValues && filterValues.length > 1)) {
    let title;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';

    const dropdownClasses = classNames('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return (
      <div className={classes} {...props}>
        <DropdownButton title={title} id={menuId} className={dropdownClasses}>
          {filterValues &&
            filterValues.map((item, index) => {
              const menuItemClasses = {
                selected: item === currentValue
              };
              return (
                <MenuItem
                  className={menuItemClasses}
                  key={item.id || index}
                  onSelect={() => onFilterValueSelected(item)}
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

FilterValueSelector.defaultProps = {
  className: '',
  id: '',
  currentValue: '',
  placeholder: '',
  onFilterValueSelected: noop
};

export default FilterValueSelector;
