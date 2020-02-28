import React from 'react';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storiesOf } from '@storybook/react';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { name } from '../../../package.json';
import { DateTimePicker } from './index';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Date Time Picker`,
  module
);
stories.addDecorator(withKnobs);
stories.add('DateTimePicker', () => {
  const story = (
    <div style={{ paddingTop: 60, paddingBottom: 60 }}>
      <label>Date Time picker</label>
      <div className="row">
        <div className="col-md-5">
          <DateTimePicker
            weekStartsOn={number('Week Start Date Time', 1)}
            placement={select('Placement Date Time', ['top', 'bottom'], 'top')}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <label>Date picker</label>
      <div className="row">
        <div className="col-md-3">
          <DatePicker
            weekStartsOn={number('Week Start Date ', 1)}
            placement={select('Placement Date', ['top', 'bottom'], 'top')}
          />
        </div>
      </div>
      <label>Time picker</label>
      <div className="row">
        <div className="col-md-3">
          <TimePicker placement={select('Placement Time', ['top', 'bottom'], 'top')} />
        </div>
      </div>
    </div>
  );
  return inlineTemplate({
    title: 'DateTimePicker',
    documentationLink: `${DOCUMENTATION_URL.FORMS_AND_CONTROLS}#date-time-picker`,
    reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}date-time-picker/`,
    description: '',
    story
  });
});
