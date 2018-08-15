import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import {
  bootstrapTable,
  clientSortableTable,
  clientPaginationTable,
  patternflyTable,
  serverPaginationTable,
  inlineEditRowTable,
  inlineEditRowInModalTable,
  inlineEditColumnTable,
  inlineEditCellTable
} from './Stories';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CONTENT_VIEWS}/Table View`, module);
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
inlineEditRowInModalTable(stories);
inlineEditColumnTable(stories);
inlineEditCellTable(stories);
