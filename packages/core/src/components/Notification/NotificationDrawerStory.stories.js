import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  basicNotificationDrawerStory,
  WrapperNotificationDrawerStory,
  StatefulNotificationDrawerStory
} from './Stories/index';

const stories = storiesOf('NotificationDrawer', module);
stories.addDecorator(withKnobs);

basicNotificationDrawerStory(stories);
WrapperNotificationDrawerStory(stories);
StatefulNotificationDrawerStory(stories);
