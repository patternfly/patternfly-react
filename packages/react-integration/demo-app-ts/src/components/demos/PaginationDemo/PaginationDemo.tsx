import {
  Component,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type HTMLProps
} from 'react';
import { Pagination, PaginationVariant, Stack, StackItem, Title } from '@patternfly/react-core';

interface OptionsMenuDemoState {
  topPage: number;
  bottomPage: number;
  defaultFullPage: number;
  perPage: number;
}

export class PaginationDemo extends Component<HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {
  static displayName = 'PaginationDemo';

  state = {
    topPage: 1,
    bottomPage: 1,
    defaultFullPage: 1,
    perPage: 20
  };

  onSetTopPage = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, pageNumber: number) => {
    this.setState({
      topPage: pageNumber
    });
  };

  onSetBottomPage = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, pageNumber: number) => {
    this.setState({
      bottomPage: pageNumber
    });
  };

  onSetDefaultPage = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, pageNumber: number) => {
    this.setState({
      defaultFullPage: pageNumber
    });
  };

  onPerPageSelect = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, perPage: number) => {
    this.setState({
      perPage
    });
  };

  onDefaultToFullPerPageSelect = (
    _event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent,
    perPage: number,
    pageNumber: number
  ) => {
    this.setState({
      perPage,
      defaultFullPage: pageNumber
    });
  };

  renderPagination() {
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Pagination
        </Title>
        <>
          <Pagination
            itemCount={523}
            perPage={this.state.perPage}
            page={this.state.topPage}
            onSetPage={this.onSetTopPage}
            widgetId="pagination-options-menu-top"
            className="pagination-options-menu-top"
            onPerPageSelect={this.onPerPageSelect}
          />
          <Pagination
            itemCount={523}
            widgetId="pagination-options-menu-bottom"
            className="pagination-options-menu-bottom"
            perPage={this.state.perPage}
            page={this.state.bottomPage}
            variant={PaginationVariant.bottom}
            onSetPage={this.onSetBottomPage}
            onPerPageSelect={this.onPerPageSelect}
          />
          <Pagination
            itemCount={523}
            widgetId="pagination-options-menu-default-fullpage"
            className="pagination-options-menu-default-fullpage"
            perPage={this.state.perPage}
            page={this.state.defaultFullPage}
            variant={PaginationVariant.bottom}
            onSetPage={this.onSetDefaultPage}
            onPerPageSelect={this.onDefaultToFullPerPageSelect}
            isLastFullPageShown
          />
        </>
      </StackItem>
    );
  }

  renderDisabled() {
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Disabled state
        </Title>
        <>
          <Pagination
            itemCount={523}
            perPage={this.state.perPage}
            page={this.state.topPage}
            onSetPage={this.onSetTopPage}
            widgetId="pagination-options-menu-disabled"
            className="pagination-options-menu-disabled"
            onPerPageSelect={this.onPerPageSelect}
            isDisabled
          />
        </>
      </StackItem>
    );
  }

  renderSticky() {
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Sticky state
        </Title>
        <>
          <Pagination
            isSticky
            itemCount={523}
            perPage={this.state.perPage}
            page={this.state.topPage}
            onSetPage={this.onSetTopPage}
            widgetId="pagination-options-menu-sticky"
            className="pagination-options-menu-sticky"
            onPerPageSelect={this.onPerPageSelect}
          />
        </>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack hasGutter>
        {this.renderPagination()}
        {this.renderDisabled()}
        {this.renderSticky()}
      </Stack>
    );
  }
}

export default PaginationDemo;
