import React from 'react';
import { Pagination, PaginationVariant, Stack, StackItem, Title } from '@patternfly/react-core';

interface OptionsMenuDemoState {
  topPage: number;
  bottomPage: number;
  perPage: number;
}

export class PaginationDemo extends React.Component<React.HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {
  state = {
    topPage: 1,
    bottomPage: 1,
    perPage: 20
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

  renderPagination() {
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Pagination</Title>
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
          <Pagination
            itemCount={523}
            widgetId="pagination-options-menu-bottom"
            perPage={this.state.perPage}
            page={this.state.bottomPage}
            variant={PaginationVariant.bottom}
            onSetPage={this.onSetBottomPage}
            onPerPageSelect={this.onPerPageSelect}
            isCompact
          />
        </React.Fragment>
      </StackItem>
    );
  }

  renderDisabled() {
    return (
      <StackItem isFilled={false}>
        <Title size="2xl">Disabled state</Title>
        <React.Fragment>
          <Pagination
            itemCount={523}
            perPage={this.state.perPage}
            page={this.state.topPage}
            onSetPage={this.onSetTopPage}
            widgetId="pagination-options-menu-disabled"
            onPerPageSelect={this.onPerPageSelect}
            isDisabled
          />
        </React.Fragment>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack gutter="md">
        {this.renderPagination()}
        {this.renderDisabled()}
      </Stack>
    );
  }
}

export default PaginationDemo;
