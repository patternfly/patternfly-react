import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, number, select, boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { Pager, PaginationRow, Paginator, PAGINATION_VIEW_TYPES } from './index';
import { MockPaginationRow, mockPaginationSource } from './__mocks__/mockPaginationRow';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Pagination`, module);
stories.addDecorator(withKnobs);

stories.add(
  'Pager',
  withInfo()(() => {
    const story = (
      <div>
        <h2>Default size</h2>
        <Pager
          onNextPage={action('onNextPage')}
          onPreviousPage={action('onPreviousPage')}
          disableNext={boolean('Next button disabled', true)}
          disablePrevious={boolean('Previous button disabled', false)}
        />
        <hr />
        <h2>Mini size</h2>
        <Pager
          className="pager-sm"
          messages={{
            nextPage: 'The Next Page',
            previousPage: 'The Previous Page'
          }}
          onNextPage={action('onNextPage')}
          onPreviousPage={action('onPreviousPage')}
          disableNext={boolean('Next button disabled', true)}
          disablePrevious={boolean('Previous button disabled', false)}
        />
      </div>
    );
    return inlineTemplate({
      title: 'Pager',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#pagination`,
      story,
      description: (
        <div>
          Pager is a stateless functional component which previous and next links. See Action Logger for details.
        </div>
      )
    });
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
  })(() => {
    const story = (
      <MockPaginationRow
        viewType={select('View Type:', PAGINATION_VIEW_TYPES, PAGINATION_VIEW_TYPES[0])}
        pageInputValue={number('Page', 1)}
        amountOfPages={number('Number of Pages', 5)}
        pageSizeDropUp={boolean('Page Size Drop Up', true)}
        itemCount={number('Item Count:', 75)}
        itemsStart={number('Items Start:', 1)}
        itemsEnd={number('Items End', 15)}
        onFirstPage={action('onFirstPage')}
        onPreviousPage={action('onPreviousPage')}
        onNextPage={action('onNextPage')}
        onLastPage={action('onLastPage')}
      />
    );
    return inlineTemplate({
      title: 'Pagination Row',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}pagination/`,
      story,
      description: (
        <div>
          Pagination Row is a stateless functional component which exposes all pagination callbacks (i.e.:{' '}
          <i>onFirstPage, onPreviousPage, onNextPage, onLastPage</i>
          ). See Action Logger for details.
        </div>
      )
    });
  })
);

stories.add(
  'Pagination row w/ state manager',
  withInfo()(() => {
    const page = select('Page', ['1', '3', '8'], '1');
    const totalCount = select('Total items', ['75', '80', '81'], '75');
    const messages = {};
    for (const key of Object.keys(PaginationRow.defaultProps.messages)) {
      messages[key] = text(key, PaginationRow.defaultProps.messages[key]);
    }
    const story = (
      <Paginator
        viewType={select('View Type:', PAGINATION_VIEW_TYPES, PAGINATION_VIEW_TYPES[0])}
        pagination={{
          page: Number(page),
          perPage: 10,
          perPageOptions: [5, 10, 15]
        }}
        itemCount={Number(totalCount)}
        onPageSet={action('page set')}
        onPerPageSelect={action('per page value set')}
        messages={messages}
      />
    );

    return inlineTemplate({
      title: 'Pagination Row with State Manager, a.k.a. Paginator',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}pagination/`,
      story,
      description: (
        <div>
          Paginator is a stateful component which manages pagination state for you and exposes a single <i>onPageSet</i>{' '}
          callback. See Action Logger for details.
        </div>
      )
    });
  })
);
