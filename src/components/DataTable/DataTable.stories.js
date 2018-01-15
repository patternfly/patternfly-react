import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  clientSortableTableAddWithInfo,
  clientPaginationTableAddWithInfo,
  serverPaginationTableAddWithInfo
} from './Stories';

const stories = storiesOf('DataTable', module);

stories.addDecorator(withKnobs);

/**
 * DataTable stories
 */

clientSortableTableAddWithInfo(stories);
clientPaginationTableAddWithInfo(stories);
serverPaginationTableAddWithInfo(stories);
