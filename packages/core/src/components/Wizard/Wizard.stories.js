import { storiesOf } from '@storybook/react';
import {
  loadingWizardExampleWithInfo,
  wizardExampleWithInfo,
  wizardPatternExampleAddWithInfo
} from './Stories';

/**
 * Wizard Component stories
 */
const componentStories = storiesOf('Wizard/Components', module);
loadingWizardExampleWithInfo(componentStories);
wizardExampleWithInfo(componentStories);

/**
 * Wizard Pattern stories
 */
const patternStories = storiesOf('Wizard/Patterns', module);
wizardPatternExampleAddWithInfo(patternStories);
