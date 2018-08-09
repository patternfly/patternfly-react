import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import {
  basicNotificationDrawerStory,
  WrapperNotificationDrawerStory,
  StatefulNotificationDrawerStory
} from './Stories/index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Notification Drawer`,
  module
);
stories.addDecorator(withKnobs);

basicNotificationDrawerStory(stories);
WrapperNotificationDrawerStory(stories);
StatefulNotificationDrawerStory(stories);
