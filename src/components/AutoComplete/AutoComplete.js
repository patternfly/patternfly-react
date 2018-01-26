import React, { Component } from 'react';
import Downshift from 'downshift';
import { InputGroup, Button } from '../../index';
import PropTypes from 'prop-types';

import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteItems from './AutoCompleteItems';

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
          selectedItem,
          selectItem
        }) => (
          <div>
            {labelText && <label {...getLabelProps()}>{labelText}</label>}
            <InputGroup>
              <AutoCompleteInput
                onKeyPress={e => {
                  const TAB_KEY = 9;
                  const ENTER_KEY = 13;

                  switch (e.keyCode) {
                    case TAB_KEY:
                      if (isOpen && activeItems[highlightedIndex]) {
                        selectItem(activeItems[highlightedIndex]);
                        e.preventDefault();
                      }

                      break;

                    case ENTER_KEY:
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
