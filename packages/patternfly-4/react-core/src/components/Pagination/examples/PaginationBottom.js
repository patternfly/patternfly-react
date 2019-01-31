import React, { Component } from 'react';
import { Pagination, PaginationVariant } from '@patternfly/react-core';

class PaginationBottom extends Component {
  state = {
    page: 1
  }

  onSetPage = (_event, pageNumber) => {
    console.log('huh');
    this.setState({
      page: pageNumber
    })
  }

  render() {
    return (
      <Pagination itemCount={20} widgetId="pagination-options-menu-bottom" page={this.state.page} variant={PaginationVariant.bottom} onSetPage={this.onSetPage}/>
    )
  }
}

export default PaginationBottom;
