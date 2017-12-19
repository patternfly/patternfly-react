import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  bootstrapTableAddWithInfo,
  patternflyTableAddWithInfo
} from './Stories';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Table',
    documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '#tables'
  })
);

/**
 * Table stories
 */

bootstrapTableAddWithInfo(stories);
patternflyTableAddWithInfo(stories);
