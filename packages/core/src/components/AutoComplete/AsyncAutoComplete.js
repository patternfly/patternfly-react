import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class AsyncAutoComplete extends React.Component {
  state = {
    options: this.props.options,
    isLoading: this.props.isLoading
  };

  onSearchStart = () => this.setState({ isLoading: true });

  onSearchEnd = options => this.setState({ options, isLoading: false });

  // query is the text string entered by the user.
  handleSearch = query => {
    this.onSearchStart();
    Promise.resolve(this.props.onSearch(query)).then(options =>
      this.onSearchEnd(options)
    );
  };

  render = () => (
    <AsyncTypeahead
      {...this.props}
      onSearch={this.handleSearch}
      options={this.state.options}
      isLoading={this.state.isLoading}
    />
  );
}

AsyncAutoComplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
  isLoading: PropTypes.bool,
  delay: PropTypes.number,
  promptText: PropTypes.object,
  searchText: PropTypes.object,
  useCache: PropTypes.bool
};

AsyncAutoComplete.defaultProps = {
  options: [],
  isLoading: false,
  delay: 200,
  promptText: <span>Type to search...</span>,
  searchText: <span>Searching...</span>,
  useCache: true
};

export default AsyncAutoComplete;
