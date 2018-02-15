import React from 'react';
import PropTypes from 'prop-types';
import { bindMethods } from '../../../common/helpers';
import { PaginationRow, PAGINATION_VIEW_TYPES } from '../index';

export class MockPaginationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15, 25, 50]
      }
    };
    bindMethods(this, ['onPageInput', 'onPerPageSelect']);
  }
  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.setState({ pagination: newPaginationState });
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    this.setState({ pagination: newPaginationState });
  }
  render() {
    const {
      viewType,
      amountOfPages,
      pageSizeDropUp,
      itemCount,
      itemsStart,
      itemsEnd,
      onFirstPage,
      onPreviousPage,
      onNextPage,
      onLastPage
    } = this.props;

    return (
      <PaginationRow
        viewType={viewType}
        pagination={this.state.pagination}
        amountOfPages={amountOfPages}
        pageSizeDropUp={pageSizeDropUp}
        itemCount={itemCount}
        itemsStart={itemsStart}
        itemsEnd={itemsEnd}
        onPerPageSelect={this.onPerPageSelect}
        onFirstPage={onFirstPage}
        onPreviousPage={onPreviousPage}
        onPageInput={this.onPageInput}
        onNextPage={onNextPage}
        onLastPage={onLastPage}
      />
    );
  }
}
MockPaginationRow.propTypes = {
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES),
  amountOfPages: PropTypes.number,
  pageSizeDropUp: PropTypes.bool,
  itemCount: PropTypes.number,
  itemsStart: PropTypes.number,
  itemsEnd: PropTypes.number,
  onFirstPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onLastPage: PropTypes.func
};

export const mockPaginationSource = `
import React from 'react';
import PropTypes from 'prop-types';
import { bindMethods } from '../../../common/helpers';
import { PaginationRow, PAGINATION_VIEW_TYPES } from '../index';

export class MockPaginationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15, 25, 50]
      }
    };
    bindMethods(this, ['onPageInput', 'onPerPageSelect']);
  }
  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.setState({ pagination: newPaginationState });
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    this.setState({ pagination: newPaginationState });
  }
  render() {
    const {
      viewType,
      amountOfPages,
      itemCount,
      itemsStart,
      itemsEnd,
      onFirstPage,
      onPreviousPage,
      onNextPage,
      onLastPage
    } = this.props;

    return (
      <PaginationRow
        viewType={viewType}
        pagination={this.state.pagination}
        amountOfPages={amountOfPages}
        itemCount={itemCount}
        itemsStart={itemsStart}
        itemsEnd={itemsEnd}
        onPerPageSelect={this.onPerPageSelect}
        onFirstPage={onFirstPage}
        onPreviousPage={onPreviousPage}
        onPageInput={this.onPageInput}
        onNextPage={onNextPage}
        onLastPage={onLastPage}
      />
    );
  }
}
MockPaginationRow.propTypes = {
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES),
  amountOfPages: PropTypes.number,
  itemCount: PropTypes.number,
  itemsStart: PropTypes.number,
  itemsEnd: PropTypes.number,
  onFirstPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onLastPage: PropTypes.func
};
`;
