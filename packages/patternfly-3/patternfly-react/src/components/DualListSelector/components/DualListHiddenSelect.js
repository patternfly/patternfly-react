import React from 'react';
import PropTypes from 'prop-types';
import { getSelectedItems } from '../helpers';

const DualListHiddenSelect = ({ items, ...props }) => {
  const selectedItems = getSelectedItems(items);
  const selectedValues = [];
  const options = (
    <React.Fragment>
      {selectedItems ? (
        selectedItems.map(({ value, children, label }, index) => {
          if (children) {
            return children.map(({ value: childValue, label: childLabel }, childIndex) => {
              selectedValues.push(childValue);
              return (
                <option key={`${index}-${childIndex}`} value={childValue} selected>
                  {childLabel}
                </option>
              );
            });
          }
          selectedValues.push(value);
          return (
            <option key={index} value={value} selected>
              {label}
            </option>
          );
        })
      ) : (
        <option />
      )}
    </React.Fragment>
  );

  return (
    <select {...props} multiple hidden defaultValue={selectedValues}>
      {options}
    </select>
  );
};

DualListHiddenSelect.propTypes = {
  /** An array of items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        })
      )
    })
  )
};

DualListHiddenSelect.defaultProps = {
  items: []
};

export default DualListHiddenSelect;
