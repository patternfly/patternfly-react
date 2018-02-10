import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';

const FilterTypeSelector = ({
  className,
  id,
  filterTypes,
  currentFilterType,
  placeholder,
  onFilterTypeSelected,
  ...rest
}) => {
  const classes = cx('input-group-btn', className);
  if (placeholder || (filterTypes && filterTypes.length > 1)) {
    let title;
    if (currentFilterType) {
      title = currentFilterType.title || currentFilterType;
    } else {
      title = placeholder || filterTypes[0].title || filterTypes[0];
    }

    let menuId = 'filterFieldTypeMenu';
    menuId += id ? `_${id}` : '';

    return (
      <div className={classes} {...rest}>
        <DropdownButton title={title} id={menuId}>
          {placeholder && (
            <MenuItem
              title={placeholder}
              key="Placeholder"
              onSelect={() => onFilterTypeSelected && onFilterTypeSelected()}
            >
              {placeholder}
            </MenuItem>
          )}
          {filterTypes.map((item, index) => {
            const menuItemClasses = {
              selected: item === currentFilterType
            };
            return (
              <MenuItem
                className={menuItemClasses}
                key={item.id || index}
                onSelect={() =>
                  onFilterTypeSelected && onFilterTypeSelected(item)
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

FilterTypeSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: PropTypes.array.isRequired,
  /** Current selected filter type */
  currentFilterType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no filter type is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a filter type is selected */
  onFilterTypeSelected: PropTypes.func
};

export default FilterTypeSelector;
