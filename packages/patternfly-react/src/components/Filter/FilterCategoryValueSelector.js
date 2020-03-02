import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterCategoryValueSelector = ({
  className,
  id,
  categoryValues,
  currentValue,
  placeholder,
  onCategoryValueSelected,
  ...props
}) => {
  const classes = classNames('filter-pf-select', className);

  if (placeholder || (categoryValues && categoryValues.length > 1)) {
    let title;
    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';

    const dropdownClasses = classNames('filter-pf-category-select-value', 'filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return (
      <div className={classes} {...props}>
        <DropdownButton className={dropdownClasses} title={title} id={menuId}>
          {categoryValues &&
            categoryValues.map((item, index) => {
              const menuItemClasses = {
                selected: item === currentValue
              };
              return (
                <MenuItem
                  className={menuItemClasses}
                  key={item.id || index}
                  onSelect={() => onCategoryValueSelected(item)}
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

FilterCategoryValueSelector.defaultProps = {
  className: '',
  id: '',
  categoryValues: null,
  currentValue: '',
  placeholder: '',
  onCategoryValueSelected: noop
};

export default FilterCategoryValueSelector;
