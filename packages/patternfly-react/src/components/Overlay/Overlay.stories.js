import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { MockOverlayManager, basicExampleSource } from './__mocks__/mockOverlayManager';
import { Overlay } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Overlay`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Overlay',
    reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}overlays`
  })
);

stories.add(
  'Overlay',
  withInfo({
    source: false,
    propTables: [Overlay],
    propTablesExclude: [MockOverlayManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{basicExampleSource}</pre>
      </div>
    )
  })(() => (
    <MockOverlayManager
      placement={select('Placement', { top: 'Top', bottom: 'Bottom', right: 'Right', left: 'Left' }, 'top')}
    />
  ))
);
