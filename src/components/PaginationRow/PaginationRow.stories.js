import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { PaginationRow } from './index';

const stories = storiesOf('PaginationRow', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Pagination Row',
    documentationLink:
      'http://www.patternfly.org/pattern-library/navigation/pagination/'
  })
);
stories.addDecorator(withKnobs);
stories.addWithInfo('Basic example', '', () => {
  const page = select('Page', [1, 3, 8], 1);
  const totalCount = select('Total items', [75, 80, 81], 75);

  return (
    <PaginationRow
      totalCount={Number(totalCount)}
      perPage={10}
      currentPage={Number(page)}
      perPageOptions={[5, 10, 15]}
      onPageSet={action('page set')}
      onPerPageSet={action('per page value set')}
    />
  );
});

stories.addWithInfo('With translations', '', () => {
  var messages = {};
  for (var key in PaginationRow.defaultMessages) {
    messages[key] = text(key, PaginationRow.defaultMessages[key]);
  }

  return (
    <PaginationRow
      totalCount={75}
      perPage={10}
      currentPage={1}
      perPageOptions={[5, 10, 15]}
      onPageSet={action('page set')}
      onPerPageSet={action('per page value set')}
      messages={messages}
    />
  );
});
