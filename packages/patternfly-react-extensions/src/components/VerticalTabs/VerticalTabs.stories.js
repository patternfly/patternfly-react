import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { VerticalTabs, VerticalTabsTab } from './index';
import { MockVerticalTabsExample, MockVerticalTabsExampleSource } from './_mocks_/mockVerticalTabsExample';

import { name } from '../../../package.json';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Vertical Tabs`, module);

const description = (
  <div>
    Vertical tabs can be used in a restricted mode by setting the <b>restrictTabs</b> flag on the <i>VerticalTabs</i>{' '}
    component. This is useful when trying to restrict the vertical space used by the <i>VerticalTabs</i> component.
    <br />
    <br />
    When not in restricted mode, all tabs are shown. In restricted mode, only the active tab along with the path
    (parents) siblings of the active tab, and first level of children for the active tab are shown.
    <br />
    <br />
    The application is responsible for setting the <b>activeTab</b> property (meaning a direct child is active) on the
    <i>VerticalTab</i> as well as the <b>active</b> (this tab is active) and <b>hasActiveDescendant</b> (a child of this
    tab is active) properties on the <i>VerticalTab.Tab</i>. Setting the <b>shown</b> property on a
    <i>VerticalTab.Tab</i> will always show the tab if its parent tab is shown.
    <br />
    <br />
    Note: the width and border styling is not part of the VerticalTabs component.
  </div>
);
stories.addDecorator(withKnobs);
stories.add(
  'Vertical Tabs',
  withInfo({
    source: false,
    propTables: [VerticalTabs, VerticalTabsTab],
    propTablesExclude: [MockVerticalTabsExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockVerticalTabsExampleSource}</pre>
      </div>
    )
  })(() => {
    const restrictTabs = boolean('Restrict Tabs', false);
    const wrapStyle = select('Wrap Style', { wrap: 'Word - Default', truncate: 'Truncate', nowrap: 'No Wrap' }, 'wrap');
    const story = (
      <div style={{ width: '195px', border: '1px solid grey' }}>
        <MockVerticalTabsExample restrictTabs={restrictTabs} wrapStyle={wrapStyle} />
      </div>
    );
    return inlineTemplate({
      title: 'Vertical Tabs',
      description,
      story
    });
  })
);
