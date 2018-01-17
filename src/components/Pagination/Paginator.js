import React from 'react';
import PropTypes from 'prop-types';
import PaginationRow from './PaginationRow';
import { PAGINATION_VIEW_TYPES } from './constants';

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.initPagination(props);

    this.state = {
      pagination: props.pagination
    };
  }

  componentWillReceiveProps(nextProps) {
    const { pagination } = nextProps;
    if (
      this.props.pagination.page !== pagination.page ||
      this.props.pagination.perPage !== pagination.perPage
    ) {
      this.setState({ pagination: pagination });
    }

    this.initPagination(nextProps);
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

  setPageRelative(diff) {
    const { pagination } = this.props;
    const page = Number(pagination.page) + diff;
    if (page > 0 && page <= this.totalPages()) {
      this.setPage(page);
    }
  }

  setPage(page) {
    if (page !== '') {
      this.props.onPageSet(Number(page));
    } else {
      console.error("Page can't be blank");
    }
  }

  handlePageChange(e) {
    const value = Number(e.target.value);
    if (value === parseInt(value, 10)) {
      const newPagination = Object.assign({}, this.state.pagination);
      newPagination.page = value;
      this.setState({ pagination: newPagination });
      if (value <= this.totalPages() && value > 0) {
        this.setPage(value);
      }
    }
  }

  handleFormSubmit(e) {
    this.setPage(this.state.pagination.page);
  }

  render() {
    const { pagination } = this.state;

    const {
      className,
      viewType,
      itemCount,
      messages,
      dropdownButtonId,
      onPerPageSelect
    } = this.props;

    const itemsStart = (this.currentPage - 1) * this.perPage + 1;
    const itemsEnd = Math.min(itemsStart + this.perPage - 1, this.itemCount);
    const totalPages = this.totalPages();

    return (
      <PaginationRow
        className={className}
        onSubmit={this.handleFormSubmit}
        viewType={viewType}
        pagination={pagination}
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
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES),
  /** user pagination settings */
  pagination: PropTypes.shape({
    /** the current page */
    page: PropTypes.number.isRequired,
    /** the current per page setting */
    perPage: PropTypes.number.isRequired,
    /** per page options */
    perPageOptions: PropTypes.array
  }),
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

export default Paginator;
