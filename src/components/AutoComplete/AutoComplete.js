import React, { Component } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';

import { InputGroup, Button } from '../../index';
import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteItems from './AutoCompleteItems';
import { KEY_CODES } from '../../common/helpers';

export const getActiveItems = items =>
  items
    .filter(
      ({ disabled, type }) => !disabled && !['header', 'divider'].includes(type)
    )
    .map(({ text }) => text);

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

    const activeItems = getActiveItems(items);

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
          selectedItem,
          selectItem
        }) => (
          <div>
            {labelText && <label {...getLabelProps()}>{labelText}</label>}
            <InputGroup>
              <AutoCompleteInput
                onKeyPress={e => {
                  switch (e.keyCode) {
                    case KEY_CODES.TAB_KEY:
                      if (isOpen && activeItems[highlightedIndex]) {
                        selectItem(activeItems[highlightedIndex]);
                        e.preventDefault();
                      }

                      break;

                    case KEY_CODES.ENTER_KEY:
                      if (!isOpen || !activeItems[highlightedIndex]) {
                        onSearch(this.state.inputValue);
                        e.preventDefault();
                      }

                      break;

                    default:
                      break;
                  }
                }}
                passedProps={getInputProps()}
              />
              <InputGroup.Button>
                <Button onClick={() => onSearch(inputValue)}>
                  {actionText}
                </Button>
              </InputGroup.Button>
            </InputGroup>

            {isOpen && items.length ? (
              <AutoCompleteItems
                {...{
                  items,
                  highlightedIndex,
                  selectedItem,
                  getItemProps,
                  activeItems
                }}
              />
            ) : null}
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
