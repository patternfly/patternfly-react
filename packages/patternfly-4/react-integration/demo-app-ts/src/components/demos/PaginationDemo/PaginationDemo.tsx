import React from 'react';
import {
  Pagination,
  PaginationVariant
} from '@patternfly/react-core';

type OptionsMenuDemoState = {
  page: number,
  perPage: number,
}

export class PaginationDemo extends React.Component<React.HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {
  state = {
    page: 1,
    perPage: 20,
  };

  onSetPage = (_event, pageNumber) => {
    this.setState({
      page: pageNumber
    });
  };

  onPerPageSelect = (_event, perPage) => {
    this.setState({
      perPage
    });
  };


  render() {
    return (
      <React.Fragment>
        <Pagination
          itemCount={523}
          perPage={this.state.perPage}
          page={this.state.page}
          onSetPage={this.onSetPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.onPerPageSelect}
        />
        <Pagination
          itemCount={523}
          widgetId="pagination-options-menu-bottom"
          perPage={this.state.perPage}
          page={this.state.page}
          variant={PaginationVariant.bottom}
          onSetPage={this.onSetPage}
          onPerPageSelect={this.onPerPageSelect}
        />
      </React.Fragment>
    );
  }
}

export default PaginationDemo;
