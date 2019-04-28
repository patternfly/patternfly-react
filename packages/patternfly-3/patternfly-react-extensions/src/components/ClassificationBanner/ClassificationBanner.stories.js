import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
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
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/ClassificationBanner`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'ClassificationBanner',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
    }classification-banner/`
  })
);

stories.addDecorator(withKnobs);

stories.add(
  'ClassificationBanner',
  withInfo({
    source: true,
    propTables: [ClassificationBanner]
  })(() => {
    const bottomBanner= boolean('Show Bottom Banner',true);
    const closeButton= boolean('Show Close Button',false);
    const classificationLevel = select('Classification Level', { '0': 'Unclassified', '1': 'Classified', '2': 'Proprietary Level 1', '3':'Proprietary Level 2' , '999':'None'}, '0');

    return(
    <ClassificationBanner bottomBanner={bottomBanner} classificationLevel={classificationLevel} closeButton={closeButton}>
    <br/>
      <p>
      This is the main body of a web page.</p>
      <p>
      Scroll down to see the bottom banner.</p>
    </ClassificationBanner>
  )})
);
