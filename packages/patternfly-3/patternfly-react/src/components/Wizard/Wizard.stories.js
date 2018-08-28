import { storiesOf } from '@storybook/react';
import { loadingWizardExampleWithInfo, wizardExampleWithInfo, wizardPatternExampleAddWithInfo } from './Stories';

import { name } from '../../../package.json';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

/**
 * Wizard Component stories
 */
const componentStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Wizard/Components`,
  module
);
loadingWizardExampleWithInfo(componentStories);
wizardExampleWithInfo(componentStories);

/**
 * Wizard Pattern stories
 */
const patternStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Wizard/Patterns`,
  module
);
wizardPatternExampleAddWithInfo(patternStories);
