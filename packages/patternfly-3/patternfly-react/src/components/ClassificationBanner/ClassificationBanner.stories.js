import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
  storybookPackageName,
  DOCUMENTATION_URL,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { ClassificationBanner } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.SOME_CATEGORY}/ClassificationBanner`,
  module
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'ClassificationBanner',
    documentationLink: `${
      DOCUMENTATION_URL.SOME_PATTERNFLY_ORG_CATEGORY
    }some-valid-component-url-here/`
  })
);

stories.add(
  'ClassificationBanner story',
  withInfo(`This is the ClassificationBanner component.`)(() => (
    <ClassificationBanner>
      <span>
        {text(
          'Label',
          'Well done! You generated a PatternFly React component.'
        )}
      </span>
    </ClassificationBanner>
  ))
);
