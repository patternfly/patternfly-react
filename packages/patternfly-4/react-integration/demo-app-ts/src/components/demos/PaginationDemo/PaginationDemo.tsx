import React from 'react';
import {
  Pagination,
  PaginationVariant
} from '@patternfly/react-core';

type OptionsMenuDemoState = {
  topPage: number,
  bottomPage: number,
  perPage: number,
}

export class PaginationDemo extends React.Component<React.HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {
  state = {
    topPage: 1,
    bottomPage: 1,
    perPage: 20,
  };

  onSetTopPage = (_event, pageNumber) => {
    this.setState({
      topPage: pageNumber
    });
  };

  onSetBottomPage = (_event, pageNumber) => {
    this.setState({
      bottomPage: pageNumber
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
          page={this.state.topPage}
          onSetPage={this.onSetTopPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.onPerPageSelect}
        />
        <Pagination
          itemCount={523}
          widgetId="pagination-options-menu-bottom"
          perPage={this.state.perPage}
          page={this.state.bottomPage}
          variant={PaginationVariant.bottom}
          onSetPage={this.onSetBottomPage}
          onPerPageSelect={this.onPerPageSelect}
        />
      </React.Fragment>
    );
  }
}

export default PaginationDemo;
