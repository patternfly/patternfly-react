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
    title: 'Badged Resource',
    description: (
      <div>
        The resourceKind should be chosen from <b>BadgedResource.KINDS</b>.<br />A list of supported resource types can
        be found in <b>resourceTypes</b>.<br />
        Setting this field gives appropriate values for the badge background color, kindAbbr, and kindStr (any of which
        can be overridden).
      </div>
    )
  })
);

const onClick = () => {
  alert('click');
};

const storySource = `
  import { BadgedResource } from 'patternfly-react-extensions';

  <BadgedResource
    resourceName="Clickable Item"
    resourceKind={BadgedResource.KINDS.CLUSTER_ROLE_BINDING}
    onClick={onClick}
  />

  <BadgedResource resourceName="No Tooltip Item" resourceKind={BadgedResource.KINDS.POLICY} tipDelay={-1} />

  <BadgedResource kindAbbr="APIS" kindStr="API Service" resourceName="Fast Tooltip" tipDelay={0} />

  <BadgedResource
    resourceName="Long Tooltip"
    tipDelay={1500}
    resourceKind={BadgedResource.KINDS.REPLICATION_CONTROLLER}
  />

  <BadgedResource
    kindAbbr="DEV"
    kindStr="Developer"
    resourceName="Overridden Item"
    tipDelay={1500}
    badgeColor={BadgedResource.COLORS.red400}
  />

  <BadgedResource resourceName="Large Item" large resourceKind={BadgedResource.KINDS.PROJECT} />

  <BadgedResource
    resourceName="Large Clickable Item"
    large
    resourceKind={BadgedResource.KINDS.SERVICE_ACCOUNT}
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
        <BadgedResource resourceName="Standard Item" resourceKind={BadgedResource.KINDS.DEPLOYMENT_CONFIG} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          resourceName="Clickable Item"
          resourceKind={BadgedResource.KINDS.CLUSTER_ROLE_BINDING}
          onClick={onClick}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource resourceName="No Tooltip Item" resourceKind={BadgedResource.KINDS.POLICY} tipDelay={-1} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource kindAbbr="APIS" kindStr="API Service" resourceName="Fast Tooltip" tipDelay={0} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          resourceName="Long Tooltip"
          tipDelay={1500}
          resourceKind={BadgedResource.KINDS.REPLICATION_CONTROLLER}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          kindAbbr="DEV"
          kindStr="Developer"
          resourceName="Overridden Item"
          tipDelay={1500}
          badgeColor={BadgedResource.COLORS.red400}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource resourceName="Large Item" large resourceKind={BadgedResource.KINDS.PROJECT} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BadgedResource
          resourceName="Large Clickable Item"
          large
          resourceKind={BadgedResource.KINDS.SERVICE_ACCOUNT}
          onClick={onClick}
        />
      </div>
    </div>
  ))
);
