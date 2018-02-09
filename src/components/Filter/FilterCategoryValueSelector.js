import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';

const FilterCategoryValueSelector = ({
  className,
  id,
  categoryValues,
  currentValue,
  placeholder,
  onCategoryValueSelected,
  ...rest
}) => {
  const classes = cx('filter-pf-select', className);

  if (placeholder || (categoryValues && categoryValues.length > 1)) {
    let title;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';

    return (
      <div className={classes} {...rest}>
        <DropdownButton
          className="filter-pf-category-select-value filter-pf-select-dropdown"
          title={title}
          id={menuId}
        >
          {placeholder && (
            <MenuItem
              title={placeholder}
              key="Placeholder"
              onSelect={() =>
                onCategoryValueSelected && onCategoryValueSelected()
              }
            >
              {placeholder}
            </MenuItem>
          )}
          {categoryValues &&
            categoryValues.map((item, index) => {
              const menuClasses = {
                selected: item === currentValue
              };
              return (
                <MenuItem
                  className={menuClasses}
                  key={item.id || index}
                  onSelect={() =>
                    onCategoryValueSelected && onCategoryValueSelected(item)
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

FilterCategoryValueSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: PropTypes.array,
  /** Currently selected category value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no category value is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a category value is selected */
  onCategoryValueSelected: PropTypes.func
};

export default FilterCategoryValueSelector;
