import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  baseCardAddWithInfo,
  baseCardHeightMatchingStory,
  aggregateCardAddWithInfo,
  trendCardAddWithInfo,
  utilizationCardAddWithInfo
} from './Stories/index';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

baseCardAddWithInfo(stories);
baseCardHeightMatchingStory(stories);
aggregateCardAddWithInfo(stories);
trendCardAddWithInfo(stories);
utilizationCardAddWithInfo(stories);
