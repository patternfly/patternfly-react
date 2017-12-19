import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { bindMethods } from '../../common/helpers';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Paginator } from './index';

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Pagination',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION + 'pagination/'
  })
);

class PaginationStoryWrapper extends React.Component {
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
    return (
      <Paginator
        className="content-view-pf-pagination clearfix"
        pagination={this.state.pagination}
        amountOfPages={number('Number of Pages', 5)}
        itemCount={number('Item Count:', 75)}
        itemsStart={number('Items Start:', 1)}
        itemsEnd={number('Items End', 15)}
        onPerPageSelect={this.onPerPageSelect}
        onFirstPage={action('onFirstPage')}
        onPreviousPage={action('onPreviousPage')}
        onPageInput={this.onPageInput}
        onNextPage={action('onNextPage')}
        onLastPage={action('onLastPage')}
      />
    );
  }
}

stories.addWithInfo(
  'Pagination row',
  `Pagination row for card, list, and table views`,
  () => <PaginationStoryWrapper />
);
