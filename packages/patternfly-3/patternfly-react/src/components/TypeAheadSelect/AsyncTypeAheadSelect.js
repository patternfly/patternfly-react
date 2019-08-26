import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class AsyncTypeAheadSelect extends React.Component {
  state = {
    options: this.props.options,
    isLoading: this.props.isLoading
  };

  onSearchStart = () => this.setState({ isLoading: true });

  onSearchEnd = options => this.setState({ options, isLoading: false });

  // query is the text string entered by the user.
  handleSearch = query => {
    this.onSearchStart();
    Promise.resolve(this.props.onSearch(query)).then(options => this.onSearchEnd(options));
  };

  render() {
    const { innerRef, ...props } = this.props;
    return (
      <AsyncTypeahead
        {...props}
        ref={innerRef}
        onSearch={this.handleSearch}
        options={this.state.options}
        isLoading={this.state.isLoading}
      />
    );
  }
}

AsyncTypeAheadSelect.propTypes = {
  /** Callback function for search */
  onSearch: PropTypes.func.isRequired,
  /** Array of selectable options */
  options: PropTypes.array,
  /** Flag to indicate if typeahead is loading */
  isLoading: PropTypes.bool,
  /** Internal property to access the react bootstrap typeahead component via outer ref property */
  innerRef: PropTypes.any
};

AsyncTypeAheadSelect.defaultProps = {
  options: [],
  isLoading: false,
  innerRef: null
};

export default React.forwardRef((props, ref) => <AsyncTypeAheadSelect {...props} innerRef={ref} />);
