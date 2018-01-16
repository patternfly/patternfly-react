import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { PaginationRow, PAGINATION_VIEW_TYPES } from './index';
import {
  MockPaginationRow,
  mockPaginationSource
} from './__mocks__/mockPaginationRow';

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Pagination',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION + 'pagination/'
  })
);

stories.add(
  'Pagination row',
  withInfo({
    source: false,
    propTables: [
      PaginationRow,
      PaginationRow.AmountOfPages,
      PaginationRow.Back,
      PaginationRow.ButtonGroup,
      PaginationRow.Forward,
      PaginationRow.Items
    ],
    propTablesExclude: [MockPaginationRow],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockPaginationSource}</pre>
      </div>
    )
  })(() => (
    <MockPaginationRow
      contentView={boolean('Content View:', true)}
      viewType={select(
        'View Type:',
        PAGINATION_VIEW_TYPES,
        PAGINATION_VIEW_TYPES[0]
      )}
      amountOfPages={number('Number of Pages', 5)}
      itemCount={number('Item Count:', 75)}
      itemsStart={number('Items Start:', 1)}
      itemsEnd={number('Items End', 15)}
      onFirstPage={action('onFirstPage')}
      onPreviousPage={action('onPreviousPage')}
      onNextPage={action('onNextPage')}
      onLastPage={action('onLastPage')}
    />
  ))
);
