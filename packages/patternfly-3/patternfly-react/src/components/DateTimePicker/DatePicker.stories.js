import React from 'react';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storiesOf } from '@storybook/react';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { name } from '../../../package.json';
import { DatePicker } from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Date Time Picker`,
  module
);
stories.addDecorator(withKnobs);
stories.addWithInfo('DatePicker', '', () => {
  const story = (
    <div style={{ paddingTop: 60, paddingBottom: 60 }}>
      <label>Date picker</label>
      <div className="row">
        <div className="col-md-3">
          <DatePicker
            weekStartsOn={number('Week Start Date ', 1)}
            placement={select('Placement Date', ['top', 'bottom', 'left', 'right'], 'top')}
          />
        </div>
      </div>
    </div>
  );
  return inlineTemplate({
    title: 'DatePicker',
    documentationLink: `${DOCUMENTATION_URL.FORMS_AND_CONTROLS}#date-time-picker`,
    reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}date-time-picker/`,
    description: '',
    story
  });
});
