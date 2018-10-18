import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import pfBrand from 'patternfly/dist/img/logo-alt.svg';
import ngnix from './__images__/nginx.png';
import { name } from '../../../package.json';

import { CatalogItemHeader } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/Catalog Components/Catalog Item Header`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Catalog Item Header',
    description: 'This is a header component used as the header for catalog item details.'
  })
);

stories.add(
  'Catalog Item Header',
  withInfo()(() => (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <CatalogItemHeader
          className="long-description-test"
          iconImg={pfBrand}
          title="Patternfly-React"
          vendor={
            <span>
              provided by <a href="redhat.com">Red Hat</a>
            </span>
          }
        />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <CatalogItemHeader
          iconImg={pfBrand}
          title="PatternFly"
          vendor={
            <span>
              provided by <a href="redhat.com">Red Hat</a>
            </span>
          }
        />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <CatalogItemHeader iconImg={ngnix} title="Nginx" />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <CatalogItemHeader iconClass="fa fa-codepen" title="CodePen" vendor="provided by CodePen" />
      </div>
    </div>
  ))
);
