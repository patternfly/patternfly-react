import { storiesOf } from '@storybook/react';
import {
  loadingWizardExampleWithInfo,
  wizardExampleWithInfo,
  wizardPatternExampleAddWithInfo
} from './Stories';

import { name } from '../../../package.json';

/**
 * Wizard Component stories
 */
const componentStories = storiesOf(`${name}/Wizard/Components`, module);
loadingWizardExampleWithInfo(componentStories);
wizardExampleWithInfo(componentStories);

/**
 * Wizard Pattern stories
 */
const patternStories = storiesOf(`${name}/Wizard/Patterns`, module);
wizardPatternExampleAddWithInfo(patternStories);
