import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const SortTypeSelector = ({ className, id, sortTypes, currentSortType, onSortTypeSelected, ...props }) => {
  let menuId = 'sortTypeMenu';
  menuId += id ? `_${id}` : '';
  if (sortTypes && sortTypes.length > 1) {
    let title;
    if (currentSortType) {
      title = currentSortType.title || currentSortType;
    } else {
      title = sortTypes[0].title || sortTypes[0];
    }

    return (
      <DropdownButton className={className} title={title} id={menuId} {...props}>
        {sortTypes.map((item, index) => {
          const classes = {
            selected: item === currentSortType
          };
          return (
            <MenuItem
              className={classes}
              key={item.id || index}
              onSelect={() => onSortTypeSelected && onSortTypeSelected(item)}
            >
              {item.title || item}
            </MenuItem>
          );
        })}
      </DropdownButton>
    );
  }
  return null;
};

SortTypeSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** ID for the sort component, necessary for accessibility if there are sort filters on a page */
  id: PropTypes.string,
  /** Array of sort types, can be a string or an object with a 'title' field */
  sortTypes: PropTypes.array.isRequired,
  /** Current selected sort type */
  currentSortType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** function(field, value) - Callback to call when a sort type is selected */
  onSortTypeSelected: PropTypes.func
};

SortTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentSortType: null,
  onSortTypeSelected: noop
};

export default SortTypeSelector;
