import { storiesOf } from '@storybook/react';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { name } from '../../../package.json';
import { modalExampleWithInfo, modalPatternExampleAddWithInfo } from './Stories';

/**
 * Modal Component stories
 */
const componentStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Modal Overlay/Components`,
  module
);
modalExampleWithInfo(componentStories);

/**
 * Modal Pattern stories
 */
const patternStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Modal Overlay/Patterns`,
  module
);
modalPatternExampleAddWithInfo(patternStories);
