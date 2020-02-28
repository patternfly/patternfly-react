import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterCategorySelector = ({
  children,
  className,
  id,
  filterCategories,
  currentCategory,
  placeholder,
  onFilterCategorySelected,
  ...props
}) => {
  const classes = classNames('filter-pf-category-select', className);

  if (placeholder || (filterCategories && filterCategories.length > 1)) {
    let title;
    if (currentCategory) {
      title = currentCategory.title || currentCategory;
    } else {
      title = placeholder || filterCategories[0].title || filterCategories[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';

    const dropdownClasses = classNames('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });

    return (
      <div className={classes} {...props}>
        <div className="filter-pf-select">
          <DropdownButton title={title} id={menuId} className={dropdownClasses}>
            {filterCategories &&
              filterCategories.map((item, index) => {
                const menuItemClasses = {
                  selected: item === currentCategory
                };
                return (
                  <MenuItem
                    className={menuItemClasses}
                    key={item.id || index}
                    onSelect={() => onFilterCategorySelected(item)}
                  >
                    {item.title || item}
                  </MenuItem>
                );
              })}
          </DropdownButton>
        </div>
        {children}
      </div>
    );
  }
  return null;
};

FilterCategorySelector.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,
  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: PropTypes.array.isRequired,
  /** Current selected category */
  currentCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Placeholder text when no category is selected */
  placeholder: PropTypes.string,
  /** function(field, value) - Callback to call when a category is added */
  onFilterCategorySelected: PropTypes.func
};

FilterCategorySelector.defaultProps = {
  children: null,
  className: '',
  id: '',
  currentCategory: '',
  placeholder: '',
  onFilterCategorySelected: noop
};

export default FilterCategorySelector;
