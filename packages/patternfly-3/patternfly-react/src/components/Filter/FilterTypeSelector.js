import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterTypeSelector = ({
  className,
  id,
  filterTypes,
  currentFilterType,
  placeholder,
  onFilterTypeSelected,
  ...props
}) => {
  const classes = classNames('input-group-btn', className);
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
      <div className={classes} {...props}>
        <DropdownButton title={title} id={menuId}>
          {placeholder && (
            <MenuItem title={placeholder} key="Placeholder" onSelect={onFilterTypeSelected}>
              {placeholder}
            </MenuItem>
          )}
          {filterTypes.map((item, index) => {
            const menuItemClasses = {
              selected: item === currentFilterType
            };
            return (
              <MenuItem className={menuItemClasses} key={item.id || index} onSelect={() => onFilterTypeSelected(item)}>
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

FilterTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentFilterType: '',
  placeholder: '',
  onFilterTypeSelected: noop
};

export default FilterTypeSelector;
