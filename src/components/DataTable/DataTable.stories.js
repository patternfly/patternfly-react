import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  sortableTableAddWithInfo,
  paginationTableAddWithInfo
} from './Stories';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

const stories = storiesOf('DataTable', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Data Table',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS + 'table-view/'
  })
);

/**
 * DataTable stories
 */

sortableTableAddWithInfo(stories);
paginationTableAddWithInfo(stories);
