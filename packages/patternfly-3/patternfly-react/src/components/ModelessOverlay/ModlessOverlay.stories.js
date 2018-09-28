import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { select, withKnobs } from '@storybook/addon-knobs';

import { MockModelessManager, basicExampleSource } from './__mocks__/mockModelessManager';
import { name } from '../../../package.json';

import ModelessOverlay from './ModelessOverlay';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Modeless Overlay`,
  module
);

stories.addDecorator(withKnobs);

stories.add(
  'Modeless Overlay',
  withInfo({
    source: false,
    propTables: [ModelessOverlay],
    propTablesExclude: [MockModelessManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{basicExampleSource}</pre>
      </div>
    )
  })(() => {
    const size = select('Size', { default: 'Default', sm: 'Small', lg: 'Large' }, 'default');
    const story = <MockModelessManager size={size} />;
    return inlineTemplate({
      title: 'Modeless Overlay',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}modeless-overlay/`,
      description:
        'Built off the Bootstrap Modal classes, the modeless overlay is a non-modal version of the Bootstrap Modal',
      story
    });
  })
);
