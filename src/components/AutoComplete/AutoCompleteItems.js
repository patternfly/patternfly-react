import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, MenuItem } from '../../index';

const AutoCompleteItems = ({
  items,
  activeItems,
  getItemProps,
  highlightedIndex,
  selectedItem
}) => (
  <Dropdown.Menu className="autocomplete-dropdown">
    {items.map(({ text, type, disabled = false }, index, items) => {
      if (type === 'header') {
        return (
          <MenuItem key={text} header>
            {text}
          </MenuItem>
        );
      }

      if (type === 'divider') {
        return <MenuItem key={`divider-${index}`} divider />;
      }

      if (disabled) {
        return (
          <MenuItem key={text} disabled>
            {text}
          </MenuItem>
        );
      }

      const itemProps = getItemProps({
        index: activeItems.indexOf(text),
        item: text,
        active: activeItems[highlightedIndex] === text,
        onClick: e => {
          // At this point the event.defaultPrevented
          // is already set to true by react-bootstrap
          // MenuItem. We need to set it back to false
          // So downshift will execute it's own handler
          e.defaultPrevented = false;
        }
      });

      return (
        <MenuItem {...itemProps} key={text}>
          {text}
        </MenuItem>
      );
    })}
  </Dropdown.Menu>
);

AutoCompleteItems.propTypes = {
  items: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  selectedItem: PropTypes.string.isRequired,
  getItemProps: PropTypes.func.isRequired
};

export default AutoCompleteItems;
