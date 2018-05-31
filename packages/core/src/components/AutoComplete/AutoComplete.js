import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

const AutoComplete = props => <Typeahead {...props} />;
AutoComplete.propTypes = {
  align: PropTypes.string,
  allowNew: PropTypes.bool,
  bsSize: PropTypes.string,
  caseSensitive: PropTypes.bool,
  clearButton: PropTypes.bool,
  defaultSelected: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  highlightOnlyResult: PropTypes.bool,
  filterBy: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  labelKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  maxHeight: PropTypes.string,
  maxResults: PropTypes.number,
  minLength: PropTypes.number,
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  selectHintOnEnter: PropTypes.bool
};

AutoComplete.defaultProps = {
  align: 'justify',
  allowNew: false,
  bsSize: null,
  caseSensitive: false,
  defaultSelected: [],
  clearButton: false,
  disabled: false,
  dropup: false,
  filterBy: [],
  highlightOnlyResult: false,
  labelKey: 'label',
  maxHeight: '300px',
  maxResults: 100,
  minLength: 0,
  multiple: false,
  placeholder: null,
  selectHintOnEnter: false
};
export default AutoComplete;
