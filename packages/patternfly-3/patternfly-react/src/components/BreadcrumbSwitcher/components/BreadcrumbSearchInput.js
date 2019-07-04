import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { Icon } from '../../../index';
import { noop } from '../../../common/helpers';

class BreadcrumbSearchInput extends React.Component {
  componentDidMount() {
    if (this.props.focus) {
      this.gainFocus();
    }
  }
  gainFocus() {
    this.nameInput.focus();
  }

  render() {
    const { onSearchChange, searchValue, timeout, onClear, placeHolder } = this.props;

    return (
      <div className="input-search">
        <Icon type="fa" name="search" />
        <DebounceInput
          className="form-control"
          inputRef={input => {
            this.nameInput = input;
          }}
          autoComplete="off"
          id="breadcrumbs-search"
          placeholder={placeHolder}
          value={searchValue}
          minLength={0}
          debounceTimeout={timeout}
          onChange={onSearchChange}
        />
        <Icon type="fa" name="close" onClick={() => onClear()} />
      </div>
    );
  }
}

BreadcrumbSearchInput.propTypes = {
  focus: PropTypes.bool,
  searchValue: PropTypes.string,
  timeout: PropTypes.number,
  onSearchChange: PropTypes.func,
  onClear: PropTypes.func,
  placeHolder: PropTypes.string
};

BreadcrumbSearchInput.defaultProps = {
  focus: false,
  searchValue: '',
  timeout: 300,
  onSearchChange: noop,
  onClear: noop,
  placeHolder: 'Filter...'
};

export default BreadcrumbSearchInput;
