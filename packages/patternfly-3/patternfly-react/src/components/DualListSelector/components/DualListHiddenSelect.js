import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

const DualListHiddenSelect = ({ items, ...props }) => {
  const selectedValues = [];
  const options = (
    <React.Fragment>
      {items ? (
        items.map(({ value, children, label }, index) => {
          if (children) {
            return children.map(({ value: childValue, label: childLabel }, childIndex) => {
              selectedValues.push(childValue);
              return (
                <option key={`${index}-${childIndex}`} value={childValue}>
                  {childLabel}
                </option>
              );
            });
          }
          selectedValues.push(value);
          return (
            <option key={index} value={value}>
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
    // Added 'onChange' after the browser threw a warning of using the value attribute without it.
    <select {...props} multiple hidden value={selectedValues} onChange={noop}>
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
