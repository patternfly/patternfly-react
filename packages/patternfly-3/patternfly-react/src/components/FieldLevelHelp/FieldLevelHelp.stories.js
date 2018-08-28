import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { FieldLevelHelp } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Help On Forms`,
  module
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'FieldLevelHelp',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}inline-notifications/`
  })
);

stories.add(
  'FieldLevelHelp',
  withInfo()(() => {
    const rootClose = boolean('Root Close', true);
    const content = text(
      'content',
      'Enter the hostname in a valid format <br>  <a target="_blank" href="http://www.test.example.com">Click here for examples of valid hostnames</a>'
    );
    const placement = select('Placement', ['top', 'bottom', 'left', 'right'], 'top');
    const fieldLabel = text('Field Label', 'Hostname');

    const htmlContent = (
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    );

    return (
      <div style={{ textAlign: 'center' }}>
        {fieldLabel}
        <FieldLevelHelp content={htmlContent} rootClose={rootClose} placement={placement} />
      </div>
    );
  })
);
