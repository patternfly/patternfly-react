import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ImportFileStory } from './Stories/index';

const stories = storiesOf('ImportFile', module);
stories.addDecorator(withKnobs);

ImportFileStory(stories);
