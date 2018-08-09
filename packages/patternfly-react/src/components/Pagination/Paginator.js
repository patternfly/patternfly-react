import React from 'react';
import PropTypes from 'prop-types';
import PaginationRow from './PaginationRow';
import { noop } from '../../common/helpers';
import { PAGINATION_VIEW_TYPES } from './PaginationConstants';

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.initPagination(props);

    this.state = {
      pageChangeValue: props.pagination.page
    };
  }

  componentWillReceiveProps(nextProps) {
    const { pagination } = nextProps;
    if (this.state.pageChangeValue !== pagination.page) {
      this.setState({
        pageChangeValue: Number(pagination.page)
      });
    }

    this.initPagination(nextProps);
  }

  setPage(value) {
    const page = Number(value);
    if (!Number.isNaN(value) && value !== '' && page > 0 && page <= this.totalPages()) {
      this.props.onPageSet(page);
    }
  }

  setPageRelative(diff) {
    const { pagination } = this.props;
    const page = Number(pagination.page) + diff;
    this.setPage(page);
  }

  handleFormSubmit = e => {
    this.setPage(this.state.pageChangeValue);
  };

  handlePageChange(e) {
    this.setState({ pageChangeValue: e.target.value });
  }

  initPagination(props) {
    const { pagination } = props;
    this.perPage = Number(pagination.perPage);
    this.currentPage = Number(pagination.page);
    this.itemCount = Number(props.itemCount);
  }

  totalPages() {
    return Math.ceil(this.props.itemCount / this.perPage);
  }

  render() {
    const { pageChangeValue } = this.state;

    const { className, viewType, itemCount, messages, dropdownButtonId, onPerPageSelect, pagination } = this.props;

    const itemsStart = (this.currentPage - 1) * this.perPage + 1;
    const itemsEnd = Math.min(itemsStart + this.perPage - 1, this.itemCount);
    const totalPages = this.totalPages();

    return (
      <PaginationRow
        className={className}
        onSubmit={this.handleFormSubmit}
        viewType={viewType}
        pagination={pagination}
        pageInputValue={pageChangeValue}
        amountOfPages={this.totalPages()}
        itemCount={itemCount}
        itemsStart={itemsStart}
        itemsEnd={itemsEnd}
        messages={messages}
        dropdownButtonId={dropdownButtonId}
        onPerPageSelect={onPerPageSelect}
        onFirstPage={() => this.setPage(1)}
        onPreviousPage={() => this.setPageRelative(-1)}
        onPageInput={e => this.handlePageChange(e)}
        onNextPage={() => this.setPageRelative(1)}
        onLastPage={() => this.setPage(totalPages)}
      />
    );
  }
}

Paginator.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** pagination row view type */
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES).isRequired,
  /** user pagination settings */
  pagination: PropTypes.shape({
    /** the current page */
    page: PropTypes.number.isRequired,
    /** the current per page setting */
    perPage: PropTypes.number.isRequired,
    /** per page options */
    perPageOptions: PropTypes.array
  }).isRequired,
  /** calculated number of rows */
  itemCount: PropTypes.number.isRequired,
  /** message text inputs for i18n */
  messages: PropTypes.shape({
    firstPage: PropTypes.string,
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
    lastPage: PropTypes.string,
    perPage: PropTypes.string,
    of: PropTypes.string
  }),
  /** dropdown button id */
  dropdownButtonId: PropTypes.string,
  /** A callback triggered when a page is switched */
  onPageSet: PropTypes.func,
  /** per page selection callback */
  onPerPageSelect: PropTypes.func
};
Paginator.defaultProps = {
  className: '',
  messages: {
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    currentPage: 'Current Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    perPage: 'per page',
    of: 'of'
  },
  dropdownButtonId: 'pagination-row-dropdown',
  onPerPageSelect: noop,
  onPageSet: noop
};

export default Paginator;
