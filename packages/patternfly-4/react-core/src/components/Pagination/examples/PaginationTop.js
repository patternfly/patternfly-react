import React, { Component } from 'react';
import { Pagination } from '@patternfly/react-core';

class PaginationTop extends Component {
  state = {
    page: 1,
    perPage: 20
  }

  onSetPage = (_event, pageNumber) => {
    this.setState({
      page: pageNumber
    })
  }

  onPerPageSelect = (_event, perPage) => {
    this.setState({
      perPage
    })
  }

  render() {
    return (
      <Pagination
        itemCount={523}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
    )
  }
}

export default PaginationTop;
