import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { Icon } from 'patternfly-react';

import { PropertiesSidePanel, PropertyItem } from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Properties Side Panel`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'Properties Side Panel',
    description:
      'This is a sidebar component used to show the properties of an item. ' +
      'Note: the 15px padding and border styling are not part of the PropertiesSidePanel.'
  })
);

stories.add(
  'PropertiesSidePanel',
  withInfo()(() => (
    <div style={{ display: 'inline-block', padding: '15px', border: '1px solid grey' }}>
      <PropertiesSidePanel>
        <PropertyItem label="Operator Version" value="0.9.8 (latest)" />
        <PropertyItem
          label="Certified Level"
          value={
            <span>
              <Icon type="pf" name="ok" /> Certified
            </span>
          }
        />
        <PropertyItem label="Provider" value="Red Hat, Inc" />
        <PropertyItem label="Health Index" value="A" />
        <PropertyItem
          label="Repository"
          value={
            <a href="https://quay.io/repository/redhat/prometheus-operator">
              https://quay.io/repository/redhat/prometheus-operator
            </a>
          }
        />
        <PropertyItem
          label="Container Image"
          value={
            <a href="#">
              0.22.2 <Icon type="fa" name="external-link" />
            </a>
          }
        />
        <PropertyItem
          label="Created At"
          value={
            <span>
              <Icon type="fa" name="globe" /> Aug 23, 1:58pm
            </span>
          }
        />
        <PropertyItem label="Support" value={<a href="#">Red Hat</a>} />
      </PropertiesSidePanel>
    </div>
  ))
);
