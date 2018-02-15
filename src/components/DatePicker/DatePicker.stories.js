import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL as DOC_URL } from '../../../storybook/constants';
import { DatePicker } from './index';

// Setup the default localization to English (en)
import Moment from 'moment';
Moment.locale('en');

const stories = storiesOf('DatePicker', module);

stories.addWithInfo('DatePicker', '', () => {
  let story = (
    <div>
      <DatePicker onChange={action('onChange')} />
    </div>
  );
  return inlineTemplate({
    title: 'DatePicker',
    documentationLink: `${DOC_URL.PATTERNFLY_ORG_WIDGETS}#bootstrap-datepicker`,
    description: '',
    story
  });
});
