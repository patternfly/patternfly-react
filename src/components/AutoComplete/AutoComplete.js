import React, { Component } from 'react';
import Downshift from 'downshift';
import {
  Dropdown,
  MenuItem,
  InputGroup,
  FormControl,
  Button
} from '../../index';
import PropTypes from 'prop-types';

export const renderItems = ({
  items,
  activeItems,
  getItemProps,
  highlightedIndex,
  selectedItem
}) => (
  <Dropdown.Menu
    style={{
      display: 'block',
      position: 'absolute',
      left: 'inherit',
      marginTop: 0,
      top: 'auto'
    }}
  >
    {items.map(({ text, type, disabled = false }, index, items) => {
      if (type === 'header') {
        return (
          <MenuItem key={text} header>
            {text}
          </MenuItem>
        );
      }

      if (type === 'divider') {
        return <MenuItem key={index} divider />;
      }

      if (disabled) {
        return (
          <MenuItem key={text} disabled>
            {text}
          </MenuItem>
        );
      }

      return (
        <MenuItem
          {...getItemProps({
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
          })}
          key={text}
        >
          {text}
        </MenuItem>
      );
    })}
  </Dropdown.Menu>
);

renderItems.propTypes = {
  items: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  selectedItem: PropTypes.number.isRequired,
  getItemProps: PropTypes.func.isRequired
};

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  render() {
    const {
      onSearch,
      labelText,
      onInputUpdate,
      items,
      actionText,
      ...rest
    } = this.props;

    const activeItems = items
      .filter(
        ({ disabled, type }) =>
          !disabled && !['header', 'divider'].includes(type)
      )
      .map(({ text }) => text);

    return (
      <Downshift
        onStateChange={({ inputValue, ...rest }) => {
          if (typeof inputValue === 'string') {
            onInputUpdate(inputValue);
            this.setState({ inputValue });
          }
        }}
        defaultHighlightedIndex={0}
        selectedItem={this.state.inputValue}
        {...rest}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          getRootProps,
          selectedItem
        }) => (
          <div>
            {labelText && <label {...getLabelProps()}>{labelText}</label>}
            <InputGroup>
              <FormControl type="text" {...getInputProps()} />
              <InputGroup.Button>
                <Button onClick={() => onSearch(inputValue)}>
                  {actionText}
                </Button>
              </InputGroup.Button>
            </InputGroup>

            {isOpen && items.length
              ? renderItems({
                  items,
                  highlightedIndex,
                  selectedItem,
                  getItemProps,
                  activeItems
                })
              : null}
          </div>
        )}
      </Downshift>
    );
  }
}

AutoComplete.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputUpdate: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  actionText: PropTypes.string
};

AutoComplete.defaultProps = {
  labelText: '',
  actionText: 'Search'
};

export default AutoComplete;
