import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import basicTreeView from './stories/basicTreeView';
import treeViewManagerStory from './stories/treeViewManagerStory';

const stories = storiesOf('TreeView', module);
stories.addDecorator(withKnobs);

basicTreeView(stories);
treeViewManagerStory(stories);
