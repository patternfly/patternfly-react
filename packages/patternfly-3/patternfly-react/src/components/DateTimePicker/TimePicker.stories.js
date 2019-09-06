import React from 'react';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storiesOf } from '@storybook/react';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { select, withKnobs } from '@storybook/addon-knobs';
import { name } from '../../../package.json';
import { TimePicker } from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Date Time Picker`,
  module
);
stories.addDecorator(withKnobs);
stories.addWithInfo('TimePicker', '', () => {
  const story = (
    <div style={{ paddingTop: 60, paddingBottom: 60 }}>
      <label>Time picker</label>
      <div className="row">
        <div className="col-md-3">
          <TimePicker placement={select('Placement Time', ['top', 'bottom'], 'top')} />
        </div>
      </div>
    </div>
  );
  return inlineTemplate({
    title: 'TimePicker',
    documentationLink: `${DOCUMENTATION_URL.FORMS_AND_CONTROLS}#date-time-picker`,
    reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}date-time-picker/`,
    description: '',
    story
  });
});
