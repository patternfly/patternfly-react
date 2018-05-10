import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  basicNotificationDrawerStory,
  WrapperNotificationDrawerStory,
  StatefulNotificationDrawerStory
} from './Stories/index';
import { name } from '../../../package.json';

const stories = storiesOf(`${name}/NotificationDrawer`, module);
stories.addDecorator(withKnobs);

basicNotificationDrawerStory(stories);
WrapperNotificationDrawerStory(stories);
StatefulNotificationDrawerStory(stories);
