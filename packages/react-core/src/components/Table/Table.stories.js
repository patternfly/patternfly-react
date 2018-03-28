import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  bootstrapTableAddWithInfo,
  clientSortableTableAddWithInfo,
  clientPaginationTableAddWithInfo,
  patternflyTableAddWithInfo,
  serverPaginationTableAddWithInfo
} from './Stories';

const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);

/**
 * Table stories
 */

bootstrapTableAddWithInfo(stories);
patternflyTableAddWithInfo(stories);
clientSortableTableAddWithInfo(stories);
clientPaginationTableAddWithInfo(stories);
serverPaginationTableAddWithInfo(stories);
