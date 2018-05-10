import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  bootstrapTable,
  clientSortableTable,
  clientPaginationTable,
  patternflyTable,
  serverPaginationTable,
  inlineEditRowTable,
  inlineEditColumnTable,
  inlineEditCellTable
} from './Stories';
import { name } from '../../../package.json';

const stories = storiesOf(`${name}/Table`, module);
stories.addDecorator(withKnobs);

/**
 * Table stories
 */

bootstrapTable(stories);
patternflyTable(stories);
clientSortableTable(stories);
clientPaginationTable(stories);
serverPaginationTable(stories);
inlineEditRowTable(stories);
inlineEditColumnTable(stories);
inlineEditCellTable(stories);
