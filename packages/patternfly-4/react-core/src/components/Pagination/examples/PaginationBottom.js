import React, { Component } from 'react';
import { Pagination, PaginationVariant } from '@patternfly/react-core';

class PaginationBottom extends Component {
  state = {
    page: 1
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
      <Pagination itemCount={333}
        widgetId="pagination-options-menu-bottom"
        perPage={this.state.perPage}
        page={this.state.page}
        variant={PaginationVariant.bottom}
        onSetPage={this.onSetPage}
        onPerPageSelect={this.onPerPageSelect}
      />
    )
  }
}

export default PaginationBottom;
