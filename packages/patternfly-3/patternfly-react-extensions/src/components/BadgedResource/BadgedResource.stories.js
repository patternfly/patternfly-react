import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';

import { BadgedResource } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Badged Resource`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Badged Resource'
  })
);

const onClick = () => {
  alert('click');
};

stories.add(
  'BadgedResource',
  withInfo({
    source: true,
    propTables: [BadgedResource]
  })(() => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="DC"
          kindStr="Deployment Config"
          resourceName="Standard Item"
          badgeColor={BadgedResource.COLORS.blue600}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="RB"
          kindStr="Role Binding"
          resourceName="Clickable Item"
          badgeColor={BadgedResource.COLORS.cyan500}
          onClick={onClick}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="HPA"
          kindStr="Horizontal Pod Autoscaler"
          resourceName="No Tooltip Item"
          tipDelay={-1}
          badgeColor={BadgedResource.COLORS.lightBlue400}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="APIS"
          kindStr="API Service"
          resourceName="Fast Tooltip"
          tipDelay={0}
          badgeColor={BadgedResource.COLORS.orange600}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="DC"
          kindStr="Deployment Config"
          resourceName="Long Tooltip"
          tipDelay={1500}
          badgeColor={BadgedResource.COLORS.lightGreen500}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="PR"
          kindStr="Project"
          resourceName="Large Item"
          large
          badgeColor={BadgedResource.COLORS.green500}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="SM"
          kindStr="Service Model"
          resourceName="Large Clickable Item"
          large
          badgeColor={BadgedResource.COLORS.purple600}
          onClick={onClick}
        />
      </div>
    </div>
  ))
);
