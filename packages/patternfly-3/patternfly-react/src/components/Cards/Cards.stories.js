import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import {
  baseCardAddWithInfo,
  baseCardHeightMatchingStory,
  aggregateCardAddWithInfo,
  trendCardAddWithInfo,
  utilizationCardAddWithInfo,
  utilizationBarCardStory
} from './Stories/index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CARDS}`, module);
stories.addDecorator(withKnobs);

baseCardAddWithInfo(stories);
baseCardHeightMatchingStory(stories);
aggregateCardAddWithInfo(stories);
trendCardAddWithInfo(stories);
utilizationBarCardStory(stories);
utilizationCardAddWithInfo(stories);
