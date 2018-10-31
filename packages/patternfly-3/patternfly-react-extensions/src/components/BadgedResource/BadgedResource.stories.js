import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';

import { BadgedResource, resourceTypes, getResourceBadgeColor } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Badged Resource`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Badged Resource',
    description: (
      <div>
        The badge colors should be chosen from <b>ResourceBadge.COLORS</b>.<br />A list of supported resource types can
        be found in <b>resourceTypes</b> as well as a utility function
        <b> getResourceBadgeColor</b> to get the expected badge color based on resource type.
      </div>
    )
  })
);

const onClick = () => {
  alert('click');
};

const storySource = `
  import {(BadgedResource, resourceTypes, getResourceBadgeColor)} from 'patternfly-react-extensions';

  <BadgedResource
    kindAbbr="CRB"
    kindStr="Cluster Role Binding"
    resourceName="Clickable Item"
    badgeColor={getResourceBadgeColor(resourceTypes.CLUSTER_ROLE_BINDING)}
    onClick={onClick}
  />
  <BadgedResource
    kindAbbr="P"
    kindStr="Policy"
    resourceName="No Tooltip Item"
    tipDelay={-1}
    badgeColor={getResourceBadgeColor(resourceTypes.POLICY)}
  />
  <BadgedResource
    kindAbbr="APIS"
    kindStr="API Service"
    resourceName="Fast Tooltip"
    tipDelay={0}
    badgeColor={getResourceBadgeColor('apiservice')}
  />
  <BadgedResource
    kindAbbr="RC"
    kindStr="Replication Controller"
    resourceName="Long Tooltip"
    tipDelay={1500}
    badgeColor={getResourceBadgeColor(resourceTypes.REPLICATION_CONTROLLER)}
  />
  <BadgedResource
    kindAbbr="PR"
    kindStr="Project"
    resourceName="Large Item"
    large
    badgeColor={getResourceBadgeColor(resourceTypes.PROJECT)}
  />
  <BadgedResource
    kindAbbr="SM"
    kindStr="Service Account"
    resourceName="Large Clickable Item"
    large
    badgeColor={getResourceBadgeColor(resourceTypes.SERVICE_ACCOUNT)}
    onClick={onClick}
  />
`;

stories.add(
  'BadgedResource',
  withInfo({
    propTables: [BadgedResource],
    source: false,
    text: (
      <div>
        <h1>BadgedResource Examples</h1>
        <pre>{storySource}</pre>
      </div>
    )
  })(() => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="DC"
          kindStr="Deployment Config"
          resourceName="Standard Item"
          badgeColor={getResourceBadgeColor(resourceTypes.DEPLOYMENT_CONFIG)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="CRB"
          kindStr="Cluster Role Binding"
          resourceName="Clickable Item"
          badgeColor={getResourceBadgeColor(resourceTypes.CLUSTER_ROLE_BINDING)}
          onClick={onClick}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="P"
          kindStr="Policy"
          resourceName="No Tooltip Item"
          tipDelay={-1}
          badgeColor={getResourceBadgeColor(resourceTypes.POLICY)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="APIS"
          kindStr="API Service"
          resourceName="Fast Tooltip"
          tipDelay={0}
          badgeColor={getResourceBadgeColor('apiservice')}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="RC"
          kindStr="Replication Controller"
          resourceName="Long Tooltip"
          tipDelay={1500}
          badgeColor={getResourceBadgeColor(resourceTypes.REPLICATION_CONTROLLER)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="PR"
          kindStr="Project"
          resourceName="Large Item"
          large
          badgeColor={getResourceBadgeColor(resourceTypes.PROJECT)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="SM"
          kindStr="Service Account"
          resourceName="Large Clickable Item"
          large
          badgeColor={getResourceBadgeColor(resourceTypes.SERVICE_ACCOUNT)}
          onClick={onClick}
        />
      </div>
    </div>
  ))
);
