import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  bootstrapTable,
  clientSortableTable,
  clientPaginationTable,
  patternflyTable,
  serverPaginationTable
} from './Stories';

const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);

/**
 * Table stories
 */

bootstrapTable(stories);
patternflyTable(stories);
clientSortableTable(stories);
clientPaginationTable(stories);
serverPaginationTable(stories);
